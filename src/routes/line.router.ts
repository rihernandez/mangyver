/* eslint-disable */
import express from "express";
import LineController from "../controllers/line.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new LineController();
  const response = await controller.getLines(<string>_req.query.areaId);

  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
  });
  log.silly(response);
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new LineController();
  const response = await controller.createLine(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new LineController();
  const response = await controller.getLine(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Line found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
