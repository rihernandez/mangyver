/* eslint-disable */
import express from "express";
import FormController from "../controllers/notice-form.controller";
import jwt_decode from "jwt-decode";
import { getUser } from "../repositories/user.repository";
const router = express.Router();

router.get("/", async (_req, res) => {
  const headers = _req.headers;
  const token = headers.auth;
  const decoded: object = jwt_decode(JSON.stringify(token));
  const objectValues = Object.values(decoded);
  const profile = await getUser(objectValues[0]);

  const controller = new FormController();
  const response = await controller.getForm(profile?.id);

  return res.json(JSON.parse(response[0].form));
});

export default router;
