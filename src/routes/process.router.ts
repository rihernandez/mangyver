/* eslint-disable */
import express from "express";
import Process from "../controllers/process.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new Process();
  const response = await controller.getProceses();
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
  });
  log.silly(results);
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new Process();
  const response = await controller.createProcess(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new Process();
  const response = await controller.getProcess(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Process found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
