import express from "express";
import SectionController from "../controllers/section.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new SectionController();
  const response = await controller.getSections();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new SectionController();
  const response = await controller.createSection(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new SectionController();
  const response = await controller.getSection(req.params.id);
  if (!response) res.status(404).send({message: "No Section found"})
  return res.send(response);
});

export default router