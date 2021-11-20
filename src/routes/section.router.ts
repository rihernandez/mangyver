/* eslint-disable */
import express from "express";
import SectionController from "../controllers/section.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new SectionController();
  const response = await controller.getSections();
  log.silly(response);
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new SectionController();
  const response = await controller.createSection(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new SectionController();
  const response = await controller.getSection(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Section found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
