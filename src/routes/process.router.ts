/* eslint-disable */
import express from "express";
import Process from "../controllers/process.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new Process();
  const response = await controller.getProceses();
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
  });
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new Process();
  const response = await controller.createProcess(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new Process();
  const response = await controller.getProcess(req.params.id);
  if (!response) res.status(404).send({ message: "No Process found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
