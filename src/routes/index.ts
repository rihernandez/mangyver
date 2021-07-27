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

const router = express.Router();

const initRoute = router.get("/", async (req, res) => {
  return res.redirect(`${process.env.API_VERSION}/docs`);
});

const metadata = router.get(`/metadata/forms/notices`, async (req, res) => {
  res.send(data);
});

router.use("/auth", AuthRouter);
router.use("/users", UserRouter);
router.use("/bus", BusRouter);
router.use("/zones", ZoneRouter);
router.use("/areas", AreaRouter);
router.use("/subareas", SubareaRouter);
router.use("/equipments", EquipmentRouter);
router.use("/notices", NoticeRouter);
router.use("/operations", OperationRouter);
router.use("/ubications", UbicationRouter);
router.use("/fields", FieldRouter)
router.use("/sections", SectionRouter)



export default router;
export { initRoute, metadata };
