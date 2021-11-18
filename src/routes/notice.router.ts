import { getUser } from '../repositories/user.repository'
import express from "express";
import NoticeController from "../controllers/notice.controller";
import jwt_decode from "jwt-decode";
import UserInfo from "../middlewares/getUserFromToken"
import axios from "axios";
import { getAllSapLog, getSapLog, createSapLog, ISapLogPayload} from "../repositories/saplog.repository"
import { Notice } from 'src/models';


const router = express.Router();

const sapuri = "http://azuspo20q.modelo.gmodelo.com.mx:50000/RESTAdapter/CreaAvisosMantenimiento";
const body = {
  "IV_AVISOS": {
      "ERNAM":"",
      "QMART":"M2",
      "ERDAT":"2021-10-08",
      "BTPLN":"CE-CEN-G-TDA-020-030",
      "EQUNR":"10209513",
      "AUSWK":"3",
      "INGRP":"CE4",
      "IWERK":"PC29",
      "AUSZT":"0",
      "INDTX":"PRUEBA",
      "QMTXT":"PRUEBA",
      "URCOD":"1000",
      "URGRP":"VALVULA",
      "QMNAM":"32168600",
      "ESTATUS":"",
      "ARTPR":"",
      "PRIOK":"1",
      "MNCOD":"1000",
      "MNGRP":"VALVULA",
      "MATXT":"ICM2-TIEMPO",
      "PSTER":"2021-10-08",
      "QMGRP ":"TRANSPOR",
      "QMCOD ":"0030",
      "ARBPL":"TRANSPOR",
      "OTEIL":"1000",
      "OTGRP":"VALVULA",
      "INSPK":"",
      "FEGRP":"",
      "FETXT":"TEXT",
      "URSTX ":""
  }
}


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
  try {
    const sapResponse = await axios.post(<string>process.env.SAP_URI || sapuri, body, {
      auth: {
        username: <string>process.env.SAP_USER || "MX003967" ,
        password: <string>process.env.SAP_KEY || "B@bySh2021!"
      }
    });
    
    console.log("response this is body ",body);
    console.log("response from server ",sapResponse);
  
    const payload = {
      notice: response.id,
      SAPnoticeId: sapResponse.data.MT_CreaAvisosMtto_ManRes.EV_QMNUM,
      statusResult: "200",
      errorCode:"",
      username: String(response.user),
      created: new Date(Date.now())
    }
    createSapLog(payload);

  } catch (error) {
    
    console.log("error with external service ", error);
  }
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new NoticeController();
  const response = await controller.getNotice(req.params.id);
  if (!response) res.status(404).send({message: "No Notice found"})
  return res.send(response);
});

export default router