import express from "express";
import EquipmentController from "../controllers/equipment.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new EquipmentController();
  const response = await controller.getEquipments();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new EquipmentController();
  const response = await controller.createEquipment(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new EquipmentController();
  const response = await controller.getEquipment(req.params.id);
  if (!response) res.status(404).send({message: "No Equipment found"})
  return res.send(response);
});

export default router