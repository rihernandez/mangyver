/* eslint-disable */
import express from "express";
import RoleController from "../controllers/role.controller";
import { log } from "../config/logger";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new RoleController();
  const response = await controller.getRoles();
  log.silly(response);
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new RoleController();
  const response = await controller.createRole(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new RoleController();
  const response = await controller.getRole(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Role found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
