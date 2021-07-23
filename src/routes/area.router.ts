import express from "express";
import AreaController from "../controllers/area.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new AreaController();
  const response = await controller.getAreas();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new AreaController();
  const response = await controller.createArea(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new AreaController();
  const response = await controller.getArea(req.params.id);
  if (!response) res.status(404).send({message: "No Area found"})
  return res.send(response);
});

export default router