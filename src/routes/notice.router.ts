import { getUser } from '../repositories/user.repository'
import express from "express";
import NoticeController from "../controllers/notice.controller";
import jwt_decode from "jwt-decode";
import UserInfo from "../middlewares/getUserFromToken"

const router = express.Router();


router.get("/", async (_req, res) => {   
  const userInfo = new UserInfo()
  const user = await userInfo.getUserFromToken(_req);
  const controller = new NoticeController();
  const response = await controller.getNotices( user.id, _req.query.top, _req.query.from, _req.query.dateFrom, _req.query.dateEnd, _req.query.sapForm);
  const results = JSON.parse(JSON.stringify(response));
  results.map( (result :any) => {
    result.label = result.name;
  })
  return res.send(results);
});

router.post("/old_notice", async (req, res) => {
  const userInfo = new UserInfo()
  const user = await userInfo.getUserFromToken(req);
  req.body.user = user.id;
  const controller = new NoticeController();
  const response = await controller.createNotice(req.body);
  return res.send(response);
});

router.post("/", async (req, res) => {
  const userInfo = new UserInfo()
  const user = await userInfo.getUserFromToken(req);
  req.body.user = user.id;
  const controller = new NoticeController();
  const response = await controller.createNoticeNewFormat(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new NoticeController();
  const response = await controller.getNotice(req.params.id);
  if (!response) res.status(404).send({message: "No Notice found"})
  return res.send(response);
});

export default router