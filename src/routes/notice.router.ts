import express from "express";
import NoticeController from "../controllers/notice.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new NoticeController();
  const response = await controller.getNotices();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new NoticeController();
  const response = await controller.createNotice(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new NoticeController();
  const response = await controller.getNotice(req.params.id);
  if (!response) res.status(404).send({message: "No Notice found"})
  return res.send(response);
});

export default router