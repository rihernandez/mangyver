/* eslint-disable */
import express from "express";
import HelpController from "../controllers/help.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new HelpController();
  const response = await controller.getAllHelps();
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
    result.filter = result.id;
  });
  log.silly(results);
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new HelpController();
  const response = await controller.createHelp(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new HelpController();
  const response = await controller.getHelp(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Help found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
