/* eslint-disable */
import express from "express";
import BreakdownController from "../controllers/breakdown.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new BreakdownController();
  const response = await controller.getBreakdowns();
  log.silly(response);
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new BreakdownController();
  const response = await controller.createBreakdown(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new BreakdownController();
  const response = await controller.getBreakdown(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No BreackDown found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
