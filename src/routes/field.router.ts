/* eslint-disable */
import express from "express";
import FieldController from "../controllers/field.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new FieldController();
  const response = await controller.getFields();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new FieldController();
  const response = await controller.createField(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new FieldController();
  const response = await controller.getField(req.params.id);
  if (!response) res.status(404).send({ message: "No field found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
