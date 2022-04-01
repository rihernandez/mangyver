/* eslint-disable */
import express from "express";
import DeviationController from "../controllers/deviation.controller";
import UserInfo from "../middlewares/getUserFromToken";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new DeviationController();

  const userInfo = new UserInfo();
  const user = await userInfo.getUserFromToken(_req);
  const response = await controller.getDeviations(<string>user.operation.id);
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
    result.filter = result.id;
  });
  log.silly(results);
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new DeviationController();
  const response = await controller.createDeviation(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new DeviationController();
  const response = await controller.getDeviation(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Deviation found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
