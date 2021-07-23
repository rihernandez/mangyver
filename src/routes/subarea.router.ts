import express from "express";
import SubareaController from "../controllers/subarea.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new SubareaController();
  const response = await controller.getSubareas();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new SubareaController();
  const response = await controller.createSubarea(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new SubareaController();
  const response = await controller.getSubarea(req.params.id);
  if (!response) res.status(404).send({message: "No Subarea found"})
  return res.send(response);
});

export default router