import express from "express";
import BusController from "../controllers/bus.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new BusController();
  const response = await controller.getAllBus();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new BusController();
  const response = await controller.createBus(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new BusController();
  const response = await controller.getBus(req.params.id);
  if (!response) res.status(404).send({message: "No user found"})
  return res.send(response);
});

export default router