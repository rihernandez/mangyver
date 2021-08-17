import express from "express";
import ComponentController from "../controllers/component.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ComponentController();
  const response = await controller.getComponents();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ComponentController();
  const response = await controller.createComponent(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ComponentController();
  const response = await controller.getComponent(req.params.id);
  if (!response) res.status(404).send({message: "No Component found"})
  return res.send(response);
});

export default router