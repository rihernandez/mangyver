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
import ProfileRouter from "./profile.router";
import CardRouter from "./card.router"
import ComponentRouter from "./component.router"
import ConsecutiveRouter from "./consecutive.router"
import LineRouter from "./line.router"
import LineMachineRouter from "./line-machine.router"
import PriorityRouter from "./priority.router"
import ProcessTypeRouter from "./process-type.router"
import TypeFailRouter from "./type-fail.router"
import ProcessRouter from "./process.router"
import AffectRouter from "./affect.router"
import BreakdownRouter  from "./breakdown.router";
import DeviationRouter  from "./deviation.router";
import OperatioNumberRouter from './operation-number.router'

const router = express.Router();

const initRoute = router.get("/", async (req, res) => {
  return res.redirect(`${process.env.API_VERSION}/docs`);
});

const metadata = router.get(`/metadata/forms/notices`, async (req, res) => {
  res.send(data.sections);
});

router.use("/auth", AuthRouter);
router.use("/users",[checkJwt],UserRouter);
router.use("/profiles", ProfileRouter);
router.use("/buses", [checkJwt], BusRouter);
router.use("/zones",[checkJwt], ZoneRouter);
router.use("/areas", [checkJwt], AreaRouter);
router.use("/subareas", [checkJwt], SubareaRouter);
router.use("/equipments", [checkJwt], EquipmentRouter);
router.use("/notices", [checkJwt], NoticeRouter);
router.use("/operations", [checkJwt], OperationRouter);
router.use("/ubications", [checkJwt], UbicationRouter);
router.use("/fields", [checkJwt], FieldRouter)
router.use("/sections", [checkJwt], SectionRouter)
router.use("/cards", [checkJwt], CardRouter)
router.use("/components", [checkJwt], ComponentRouter)
router.use("/consecutives", [checkJwt], ConsecutiveRouter)
router.use("/lines", [checkJwt], LineRouter)
router.use("/machines", [checkJwt], LineMachineRouter)
router.use("/priorities", [checkJwt], PriorityRouter)
router.use("/process-types", [checkJwt], ProcessTypeRouter)
router.use("/type-fails", [checkJwt], TypeFailRouter)
router.use("/processes", [checkJwt], ProcessRouter)
router.use("/affects", [checkJwt], AffectRouter)
router.use("/breakdowns", [checkJwt], BreakdownRouter)
router.use("/deviations", [checkJwt], DeviationRouter)
router.use("/operation-numbers", [checkJwt], OperatioNumberRouter)

export default router;
export { initRoute, metadata };
