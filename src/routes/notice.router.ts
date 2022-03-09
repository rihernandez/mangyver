/* eslint-disable */
import { getUser } from "../repositories/user.repository";
import express, { Request, Response } from "express";
import NoticeController from "../controllers/notice.controller";
// import jwt_decode from "jwt-decode";
import UserInfo from "../middlewares/getUserFromToken";
import axios from "axios";
import moment from "moment";
import { body, validationResult, check } from "express-validator";
import { getRepository } from "typeorm";
import jwt_decode from "jwt-decode";

// import xss from "xss"
// // import * as pp from "express-sanitizer"
// // import { xxx } from "express-xss-sanitizer"
// import { xss } from 'express-xss-sanitizer';

import {
  getAllSapLog,
  getSapLog,
  createSapLog,
  ISapLogPayload,
} from "../repositories/saplog.repository";
import { Notice } from "../models";
import { log } from "../config/logger";

const router = express.Router();

// const sapuri =
//   "http://azuspo20q.modelo.gmodelo.com.mx:50000/RESTAdapter/CreaAvisosMantenimiento";

router.get("/", async (_req, res) => {
  const userInfo = new UserInfo();
  const user = await userInfo.getUserFromToken(_req);
  const controller = new NoticeController();
  const response = await controller.getNotices(
    user.id,
    _req.query.top,
    _req.query.from,
    _req.query.dateFrom,
    _req.query.dateEnd,
    _req.query.sapForm,
    _req.query.isWeb
  );
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
  });
  log.silly(results);
  return res.send(results);
});

// router.post("/old_notice", async (req: Request, res: Response) => {
//   const userInfo = new UserInfo();
//   const user = await userInfo.getUserFromToken(req);
//   req.body.user = user.id;
//   const controller = new NoticeController();
//   const response = await controller.createNotice(req.body);
//   return res.send(response);
// });

router.post("/", async (req: any, res) => {
  const headers = req.headers;
  const token = headers.auth;
  const decoded: object = jwt_decode(JSON.stringify(token));
  const objectValues = Object.values(decoded);
  const profile = await getUser(objectValues[0]);
  req.body.operation = profile?.operation.id;

  const userInfo = new UserInfo();
  const user = await userInfo.getUserFromToken(req);
  req.body.user = user.id;
  const controller = new NoticeController();
  const response = await controller.createNoticeNewFormat(req.body);

  // let body = {
  //   IV_AVISOS: {
  //     "ERNAM": "",
  //     "QMART": "M2",
  //     "ERDAT": moment(Date.now())
  //       .format("YYYY/MM/DD")
  //       .toString()
  //       .replace(/[/]/g, "-"),
  //     "BTPLN": "CE-CEN-G-TDA-020-030",
  //     "EQUNR": "10209513",
  //     "AUSWK": "3",
  //     "INGRP": "CE4",
  //     "IWERK": "PC29",
  //     "AUSZT": "0",
  //     "INDTX": response.cardTitle,
  //     "QMTXT": response.cardDescription,
  //     "URCOD": "1000",
  //     "URGRP": "VALVULA",
  //     "QMNAM": "32168600",
  //     "ESTATUS": "",
  //     "ARTPR": "",
  //     "PRIOK": "1",
  //     "MNCOD": "1000",
  //     "MNGRP": "VALVULA",
  //     "MATXT": "ICM2-TIEMPO",
  //     "PSTER": moment(Date.now())
  //       .format("YYYY/MM/DD")
  //       .toString()
  //       .replace(/[/]/g, "-"),
  //     "QMGRP ": "TRANSPOR",
  //     "QMCOD ": "0030",
  //     "ARBPL": "TRANSPOR",
  //     "OTEIL": "1000",
  //     "OTGRP": "VALVULA",
  //     "INSPK": "",
  //     "FEGRP": "",
  //     "FETXT": "TEXT",
  //     "URSTX ": "",
  //   },
  // };
  let sapResponse: any = "";
  let payload: any = "";

  try {
    const repository = await getRepository(Notice).query(
      "SP_noticeSAPRequest @id='" + response.id + "'"
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

    // log.info(new Date(moment(Date.now(), "YYYY/MM/DD").format()));

    // log.info("response from server ", sapResponse);

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
  const controller = new NoticeController();
  const response = await controller.getNotice(req.params.id);
  if (!response) {
    log.warn(response);
    return res.status(404).send({ message: "No Notice found" });
  }
  log.silly(response);
  return res.send(response);
});

export default router;
