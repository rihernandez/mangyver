/* eslint-disable */
import express from "express";
import NotificationController from "../controllers/notification.controller";
import { log } from "../config/logger";
import UserInfo from "../middlewares/getUserFromToken";
import { Notice } from "../models";
import { getRepository } from "typeorm";
import { createSapLog } from "../repositories/saplognotification.repository";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { getUser } from "../repositories/user.repository";

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
  const headers = req.headers;
  const token = headers.auth;
  const decoded: object = jwt_decode(JSON.stringify(token));
  const objectValues = Object.values(decoded);
  const profile = await getUser(objectValues[0]);
  req.body.operation = profile?.operation.id;
  const controller = new NotificationController();
  const response = await controller.createNotification(req.body);

  let sapResponse: any = "";
  let payload: any = "";

  try {
    const repository = await getRepository(Notice).query(
      "SP_notificationSAPRequest @id='" + response.id + "'"
    );
    sapResponse = await axios.post(
      repository[0].SAPURLRequest,
      repository[0].SAPRequest,
      {
        auth: {
          username: <string>process.env.SAP_USER,
          password: <string>process.env.SAP_KEY,
        },
      }
    );

    payload = {
      notice: response.id,
      SAPnoticeId: sapResponse.data.MT_CreaAvisosMtto_ManRes.EV_QMNUM, // pending to keep this on the new server call structure
      statusResult: "200",
      errorCode: "",
      username: String(response.user),
      created: new Date(Date.now()),
    };
  } catch (error) {
    payload = {
      notice: response.id,
      SAPnoticeId: "", // pending to keep this on the new server call structure
      statusResult: "500",
      errorCode: String(error),
      username: String(response.user),
      created: new Date(Date.now()),
    };
  }

  // log.silly(response);
  createSapLog(payload);
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
