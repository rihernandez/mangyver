import express from "express";
import AffectController from "../controllers/affect.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new AffectController();
  const response = await controller.getAffects();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new AffectController();
  const response = await controller.createAffect(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new AffectController();
  const response = await controller.getAffect(req.params.id);
  if (!response) res.status(404).send({message: "No affect found"})
  return res.send(response);
});

export default router