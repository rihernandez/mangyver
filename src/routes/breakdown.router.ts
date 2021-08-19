import express from "express";
import BreakdownController from "../controllers/breakdown.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new BreakdownController();
  const response = await controller.getBreakdowns();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new BreakdownController();
  const response = await controller.createBreakdown(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new BreakdownController();
  const response = await controller.getBreakdown(req.params.id);
  if (!response) res.status(404).send({message: "No BreackDown found"})
  return res.send(response);
});

export default router