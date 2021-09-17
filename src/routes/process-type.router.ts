import express from "express";
import ProcessType from "../controllers/process-type.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ProcessType();
  const response = await controller.getProcessTypes();
  const results = JSON.parse(JSON.stringify(response));
  results.map( (result :any) => {
    result.label = result.name;
  })
  return res.send(results);
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