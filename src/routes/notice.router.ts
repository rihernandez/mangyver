import { getUser } from '../repositories/user.repository'
import express from "express";
import NoticeController from "../controllers/notice.controller";
import jwt_decode from "jwt-decode";
import { Any } from 'typeorm';

const router = express.Router();

router.get("/", async (_req, res) => {
  const headers = _req.headers;
  const token = headers.auth;
  const decoded : object = jwt_decode(JSON.stringify(token));
  const objectValues = Object.values(decoded);
  const profileId: any = await getUser((objectValues[0]));

  const controller = new NoticeController();
  const response = await controller.getNotices( profileId.id, _req.query.top, _req.query.from, _req.query.dateFrom, _req.query.dateEnd, _req.query.sapForm);
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