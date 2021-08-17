import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";


import { User } from "../models";
import secret from "../config/jwt.secret";
import { ILoginPayload } from "src/repositories/login.repository";


@Route("auth")
@Tags("Auth")
class AuthController {


  public static async login (req: Request, res: Response) {
    //Check if username and password are set
    
  
    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send({msg:"Formato de solicitud incorrecta"});
    }
    //Get user from database
    const userRepository = getRepository(User);
    let user = new User();

    // user = await userRepository.findOneOrFail({ where: { username } });
    try {
      user = await userRepository.findOneOrFail({ where: { username } });
    } catch (error) {
      res.status(401).send({msg: "Usuario o Contraseña incorrectos" });
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return "Password is incorrect";
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      secret.jwtSecret,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    res.send(token);
    // return token;
  };

  // @Post("/")
  // public static login = async (req: Request, res: Response) => {
  //   //Check if username and password are set
  //   let { login, password } = req.body;
  //   if (!(login && password)) {
  //     res.status(400).send();
  //   }

  //   //Get user from database
  //   const userRepository = getRepository(User);
  //   let user: User;

  //   user = await userRepository.findOneOrFail({ where: { login } });

  //   // try {
  //   //   user = await userRepository.findOneOrFail({ where: { username } });
  //   // } catch (error) {
  //   //   res.status(401).send();
  //   // }

  //   //Check if encrypted password match
  //   if (!user.checkIfUnencryptedPasswordIsValid(password)) {
  //     res.status(401).send();
  //     return;
  //   }

  //   //Sing JWT, valid for 1 hour
  //   const token = jwt.sign(
  //     { userId: user.id, username: user.user },
  //     secret.jwtSecret,
  //     { expiresIn: "1h" }
  //   );

  //   //Send the jwt in the response
  //   res.send(token);
  // };

  // static changePassword = async (req: Request, res: Response) => {
  //   //Get ID from JWT
  //   const id = res.locals.jwtPayload.userId;

  //   //Get parameters from the body
  //   const { oldPassword, newPassword } = req.body;
  //   if (!(oldPassword && newPassword)) {
  //     res.status(400).send();
  //   }

  //   //Get user from the database
  //   const userRepository = getRepository(User);
  //   let user: User;

  //   user = await userRepository.findOneOrFail(id);
  //   // try {
  //   //   user = await userRepository.findOneOrFail(id);
  //   // } catch (id) {
  //   //   res.status(401).send();
  //   // }

  //   //Check if old password matchs
  //   if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
  //     res.status(401).send();
  //     return;
  //   }

  //   //Validate de model (password lenght)
  //   // user.password = newPassword;
  //   // const errors = await validate(user);
  //   // if (errors.length > 0) {
  //   //   res.status(400).send(errors);
  //   //   return;
  //   // }
  //   //Hash the new password and save
  //   user.hashPassword();
  //   userRepository.save(user);

  //   res.status(204).send();
  // };
}
export default AuthController;