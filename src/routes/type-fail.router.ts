/* eslint-disable */
import express from "express";
import TypeFail from "../controllers/type-fail.controller";
import { log } from "../config/logger";
import jwt_decode from "jwt-decode";
import { getUser } from "../repositories/user.repository";

const router = express.Router();

router.get("/", async (_req, res) => {
  const headers = _req.headers;
  const token = headers.auth;
  const decoded: object = jwt_decode(JSON.stringify(token));
  const objectValues = Object.values(decoded);
  const profile = await getUser(objectValues[0]);
  const controller = new TypeFail();
  const response = await controller.getTypeFails(profile?.operation.id);
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
  });
  log.silly(results);
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new TypeFail();
  const response = await controller.createTypeFail(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new TypeFail();
  const response = await controller.getTypeFail(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Type fail found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
