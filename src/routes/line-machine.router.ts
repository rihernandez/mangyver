/* eslint-disable */
import express from "express";
import LineMachineController from "../controllers/line-machine.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new LineMachineController();
  const response = await controller.getLineMachines(
    <string>_req.query.lineId,
    Number(_req.query.from),
    Number(_req.query.top)
  );
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
    result.filter = result.groupCode;
  });
  log.silly(results);
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new LineMachineController();
  const response = await controller.createLineMachine(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new LineMachineController();
  const response = await controller.getLineMachine(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Machine found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
