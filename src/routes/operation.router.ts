import express from "express";
import OperationController from "../controllers/operation.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new OperationController();
  const response = await controller.getOperations();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new OperationController();
  const response = await controller.createOperation(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new OperationController();
  const response = await controller.getOperation(req.params.id);
  if (!response) res.status(404).send({message: "No Operation found"})
  return res.send(response);
});

export default router