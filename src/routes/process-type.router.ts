import express from "express";
import ProcessType from "../controllers/process-type.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ProcessType();
  const response = await controller.getProcessTypes();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ProcessType();
  const response = await controller.createProcessType(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ProcessType();
  const response = await controller.getProcessType(req.params.id);
  if (!response) res.status(404).send({message: "No process type found"})
  return res.send(response);
});

export default router