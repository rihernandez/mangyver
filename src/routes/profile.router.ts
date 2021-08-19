import express from "express";
import { decode } from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import { getUser } from '../repositories/user.repository'


const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const headers = _req.headers;
    const token = headers.auth;
    const decoded : object = jwt_decode(JSON.stringify(token));
    const objectValues = Object.values(decoded);
    const profile = await getUser((objectValues[0]));
    const response = {
      ...headers ,
       profile
    }
  return res.send(response);
    
  } catch (error) {
    res.send({msg : "not token have been provided!"});
  }
});

export default router;