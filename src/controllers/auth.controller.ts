import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";


import { User, Session } from "../models";
import secret from "../config/jwt.secret";
import { ILoginPayload } from "src/repositories/login.repository";
import { createSession, ISessionPayload } from "../repositories/session.repository"




@Route("auth")
@Tags("Auth")
class AuthController {


  public static async login (req: Request, res: Response) {
  
    //Check if username and password are set
    
  
    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send({message:"Formato de solicitud incorrecta"});
    }
    //Get user from database
    const userRepository = getRepository(User);
    let user = new User();

    // user = await userRepository.findOneOrFail({ where: { username } });
    try {
      user = await userRepository.findOneOrFail({ where: { username } });
    } catch (error) {
      res.status(401).send({message: "Usuario o Contraseña incorrectos" });
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
      { expiresIn: "24h" }
    );

    const payload = {
      token: token,
      session: <string>req.body.username,
      ip: <string>req.headers["ip"],
      mac: <string>req.headers["mac"],
      os:<string>req.headers["os"],
      device:<string>req.headers["device"],
      navigator: <string>req.headers["navigator"],
      appVersion: <string>req.headers["appVersion"],
      isActive:true
    }
    
    createSession(payload)
    //Send the jwt in the response
    res.send(token);
    // return token;
  };

  public static async logout(req: Request, res: Response){

    const repository = getRepository(Session);
    const session = await repository.findOne({ token: <string>req.headers["auth"] });
    if (!session) return null;
    session.isActive = false;
    await repository.save(session);
    res.send({msg:"token inactived!"});

  }

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

function payload(payload: any) {
  throw new Error("Function not implemented.");
}
