/* eslint-disable */
import express from "express";
import NotificationController from "../controllers/notification.controller";
import { log } from "../config/logger";
import UserInfo from "../middlewares/getUserFromToken";
const router = express.Router();

router.get("/", async (_req, res) => {
  const userInfo = new UserInfo();
  const user = await userInfo.getUserFromToken(_req);
  const controller = new NotificationController();
  const response = await controller.getNotifications(
    user.id,
    _req.query.top,
    _req.query.from,
    _req.query.dateFrom,
    _req.query.dateEnd,
    _req.query.sapForm
  );
  log.silly(response);
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new NotificationController();
  const response = await controller.createNotification(req.body);
  log.silly(response);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new NotificationController();
  const response = await controller.getNotification(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Notification found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
