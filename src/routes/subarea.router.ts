/* eslint-disable */
import express from "express";
import SubareaController from "../controllers/subarea.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new SubareaController();
  const response = await controller.getSubareas();
  log.silly(response);
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new SubareaController();
  const response = await controller.createSubarea(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new SubareaController();
  const response = await controller.getSubarea(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Subarea found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
