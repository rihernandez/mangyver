/* eslint-disable */
import express from "express";
import { decode } from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import { getUser } from "../repositories/user.repository";
import { Logger } from "tslog";

const router = express.Router();
const log: Logger = new Logger({ name: "myLogger" });

// Documentation here: https://tslog.js.org/#/
// log.silly("I am a silly log.");
// log.trace("I am a trace log with a stack trace.");
// log.debug("I am a debug log.");
// log.info("I am an info log.");
// log.warn("I am a warn log with a json object:", { foo: "bar" });
// log.error("I am an error log.");
//log.fatal(new Error("I am a pretty Error with a stacktrace."));

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

    return res.send(response);
  } catch (error) {
    res.send({ msg: "not token have been provided!" });
  }
});

export default router;
/* eslint-disable */
