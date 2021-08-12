import express from "express";
import { readFileSync } from 'fs';
import * as data from "../../public/mex.json"
import UserRouter from "./user.router";
import AuthRouter from "./auth.router";
import BusRouter from "./bus.router";
import ZoneRouter from "./zone.router";
import AreaRouter from "./area.router";
import EquipmentRouter from "./equipment.router";
import NoticeRouter from "./notice.router";
import OperationRouter from "./operation.router";
import SubareaRouter from "./subarea.router";
import UbicationRouter from "./ubication.router";
import FieldRouter from "./field.router";
import SectionRouter from "./section.router";
import { checkJwt } from "../middlewares/checkJwt";

const router = express.Router();

const initRoute = router.get("/", async (req, res) => {
  return res.redirect(`${process.env.API_VERSION}/docs`);
});

const metadata = router.get(`/metadata/forms/notices`, async (req, res) => {
  res.send(data);
});

router.use("/auth", [checkJwt], AuthRouter);
router.use("/users",[checkJwt],UserRouter);
router.use("/bus", [checkJwt], BusRouter);
router.use("/zones",[checkJwt], ZoneRouter);
router.use("/areas", [checkJwt], AreaRouter);
router.use("/subareas", [checkJwt], SubareaRouter);
router.use("/equipments", [checkJwt], EquipmentRouter);
router.use("/notices", [checkJwt], NoticeRouter);
router.use("/operations", [checkJwt], OperationRouter);
router.use("/ubications", [checkJwt], UbicationRouter);
router.use("/fields", [checkJwt], FieldRouter)
router.use("/sections", [checkJwt], SectionRouter)



export default router;
export { initRoute, metadata };
