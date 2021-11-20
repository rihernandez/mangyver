/* eslint-disable */
import express from "express";
import LineMachineController from "../controllers/line-machine.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new LineMachineController();
  const response = await controller.getLineMachines(<string>_req.query.lineId);
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
  });
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new LineMachineController();
  const response = await controller.createLineMachine(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new LineMachineController();
  const response = await controller.getLineMachine(req.params.id);
  if (!response) res.status(404).send({ message: "No machine found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
