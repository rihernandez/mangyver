import express from "express";
import DeviationController from "../controllers/deviation.controller";
import UserInfo from "../middlewares/getUserFromToken";

const router = express.Router();

router.get("/", async (_req, res) => {
    const controller = new DeviationController();

    const userInfo = new UserInfo()
    const user = await userInfo.getUserFromToken(_req);

    const response = await controller.getDeviations(<string>user.operation.id);
    return res.send(response);
});
  
router.post("/", async (req, res) => {
    const controller = new DeviationController();
    const response = await controller.createDeviation(req.body);
    return res.send(response);
});
  
router.get("/:id", async (req, res) => {
    const controller = new DeviationController();
    const response = await controller.getDeviation(req.params.id);
    if (!response) res.status(404).send({message: "No deviation found"})
    return res.send(response);
});
  
export default router