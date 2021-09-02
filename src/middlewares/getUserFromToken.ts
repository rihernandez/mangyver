import jwt_decode from "jwt-decode";
import { getUser } from "../repositories/user.repository";

export default class userFromToken {
  async getUserFromToken(_req: any): Promise<any> {
    const headers = _req.headers;
    const token = headers.auth;
    const decoded: object = jwt_decode(JSON.stringify(token));
    const objectValues = Object.values(decoded);
    return await getUser(objectValues[0]);
    
  }
}
