import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { getSession } from "../repositories/session.repository";
import secret from "../config/jwt.secret";

export const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers["auth"];
  let jwtPayload;
 
  const existingToken = await getSession(token);
  if (existingToken?.isActive==false){
    return res.status(401).send({msg:"expired token!"});
  }
  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, secret.jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).send();
    return;
  }
  
  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { userId, username } = jwtPayload;
  const newToken = jwt.sign({ userId, username }, secret.jwtSecret, { expiresIn: '24h' });
    
  res.setHeader("token", newToken);

  //Call the next middleware or controller
  next();
};