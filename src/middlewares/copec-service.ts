import axios from "axios";
import { getRepository } from "typeorm";
import { Notice } from "../models";
import { log } from "./config/logger";

export default class Copec {
  createNotice = async (body: string, uri: string, id: string) => {
    const repository = await getRepository(Notice).query(
      "SP_noticeSAPRequest @id='" + id + "'"
    );
    //  console.log(repository);
    try {
      await axios.post(uri, body, {
        auth: {
          username: <string>process.env.SAP_USER,
          password: <string>process.env.SAP_KEY,
        },
      });
    } catch (error) {
      log.error("error with external service: ", error);
    }
    return repository;
  };
}
