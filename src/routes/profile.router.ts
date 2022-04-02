/* eslint-disable */
import express from "express";
import { decode } from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import { getUser } from "../repositories/user.repository";
import { log } from "../config/logger";
import copec from "../middlewares/copec-service";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const headers = _req.headers;
    const token = headers.auth;
    const decoded: object = jwt_decode(JSON.stringify(token));
    const objectValues = Object.values(decoded);
    const profile = await getUser(objectValues[0]);
    const response = {
      ...headers,
      profile,
    };
    const results = JSON.parse(JSON.stringify(response));
    // // log.info(response);
    // const cc = new copec();
    // const resultcc = await cc.createNotice("hello","hello","47ffa8fb-aa8d-ec11-a507-2818780ec867")

    // console.log(resultcc[0].SAPRequest+ "body")
    // console.log(resultcc[0].SAPURLRequest+ "uri")
    return res.send(results);
  } catch (error) {
    log.error(error);
    res.send({ msg: "not token have been provided!" });
  }
});

export default router;
