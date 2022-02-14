/* eslint-disable */
import express from "express";
import CardController from "../controllers/card.controller";
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

  const controller = new CardController();
  const response = await controller.getCards(
    <string>_req.query.process,
    profile?.operation.id
  );
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
  });
  log.silly(response);
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new CardController();
  const response = await controller.createCard(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new CardController();
  const response = await controller.getCard(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Card found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
