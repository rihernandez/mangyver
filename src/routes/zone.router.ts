/* eslint-disable */

import express from "express";
import ZoneController from "../controllers/zone.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ZoneController();
  const response = await controller.getZones();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ZoneController();
  const response = await controller.createZone(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ZoneController();
  const response = await controller.getZone(req.params.id);
  if (!response) res.status(404).send({ message: "No user found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
