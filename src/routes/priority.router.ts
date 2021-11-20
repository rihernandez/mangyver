/* eslint-disable */
import express from "express";
import Priority from "../controllers/priority.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new Priority();
  const response = await controller.getPriorities();
  log.silly(response);
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new Priority();
  const response = await controller.createPriority(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new Priority();
  const response = await controller.getPriority(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Priority found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
