/* eslint-disable */
import express from "express";
import ConsecutiveController from "../controllers/consecutive.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ConsecutiveController();
  const response = await controller.getConsecutives();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ConsecutiveController();
  const response = await controller.createConsecutive(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ConsecutiveController();
  const response = await controller.getConsecutive(req.params.id);
  if (!response) res.status(404).send({ message: "No Consecutive found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
