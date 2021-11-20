/* eslint-disable */
import express from "express";
import ZoneController from "../controllers/zone.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ZoneController();
  const response = await controller.getZones();
  log.silly(response);
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ZoneController();
  const response = await controller.createZone(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ZoneController();
  const response = await controller.getZone(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Zone found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
