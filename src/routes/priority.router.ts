/* eslint-disable */
import express from "express";
import Priority from "../controllers/priority.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new Priority();
  const response = await controller.getPriorities();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new Priority();
  const response = await controller.createPriority(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new Priority();
  const response = await controller.getPriority(req.params.id);
  if (!response) res.status(404).send({ message: "No Priority found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
