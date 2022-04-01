/* eslint-disable */
import express from "express";
import ObjectParts from "../controllers/object.controller";
import { log } from "../config/logger";
import jwt_decode from "jwt-decode";
import { getUser } from "../repositories/user.repository";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ObjectParts();
  const response = await controller.getObjectParts(
    <string>_req.query.groupCode
  );
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
    result.filter = result.id;
  });
  log.silly(results);
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new ObjectParts();
  const response = await controller.createObjectParts(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ObjectParts();
  const response = await controller.getObjectPart(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Type fail found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
