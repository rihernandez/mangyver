/* eslint-disable */
import express from "express";
import BusController from "../controllers/bus.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new BusController();
  const response = await controller.getAllBus();
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
    result.filter = result.id;
  });
  log.silly(results);
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new BusController();
  const response = await controller.createBus(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new BusController();
  const response = await controller.getBus(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Bus found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
