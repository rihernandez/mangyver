import express from "express";
import NotificationController from "../controllers/notification.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new NotificationController();
  const response = await controller.getNotifications();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new NotificationController();
  const response = await controller.createNotification(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new NotificationController();
  const response = await controller.getNotification(req.params.id);
  if (!response) res.status(404).send({message: "No Notification found"})
  return res.send(response);
});

export default router