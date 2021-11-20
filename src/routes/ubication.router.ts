/* eslint-disable */
import express from "express";
import UbicationController from "../controllers/ubication.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new UbicationController();
  const response = await controller.getUbications();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new UbicationController();
  const response = await controller.createUbication(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new UbicationController();
  const response = await controller.getUbication(req.params.id);
  if (!response) res.status(404).send({ message: "No Ubication found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
