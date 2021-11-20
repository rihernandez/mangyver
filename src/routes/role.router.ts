/* eslint-disable */
import express from "express";
import RoleController from "../controllers/role.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new RoleController();
  const response = await controller.getRoles();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new RoleController();
  const response = await controller.createRole(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new RoleController();
  const response = await controller.getRole(req.params.id);
  if (!response) res.status(404).send({ message: "No Section found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
