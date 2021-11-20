/* eslint-disable */
import express from "express";
import OperationController from "../controllers/operation.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new OperationController();
  const response = await controller.getOperations();
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
  });
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new OperationController();
  const response = await controller.createOperation(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new OperationController();
  const response = await controller.getOperation(req.params.id);
  if (!response) res.status(404).send({ message: "No Operation found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
