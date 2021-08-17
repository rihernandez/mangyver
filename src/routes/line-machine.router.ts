import express from "express";
import LineMachineController from "../controllers/line-machine.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new LineMachineController();
  const response = await controller.getLineMachines();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new LineMachineController();
  const response = await controller.createLineMachine(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new LineMachineController();
  const response = await controller.getLineMachine(req.params.id);
  if (!response) res.status(404).send({message: "No machine found"})
  return res.send(response);
});

export default router