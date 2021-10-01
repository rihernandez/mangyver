import express from "express";
import OperationNumberController from "../controllers/operation-number.controller";
import UserInfo from "../middlewares/getUserFromToken";

const router = express.Router();

router.get("/", async (_req, res) => {
    const controller = new OperationNumberController();

    const userInfo = new UserInfo()
    const user = await userInfo.getUserFromToken(_req);

    const response = await controller.getOperationNumbers(<string>user.operation.id);
    return res.send(response);
});
  
router.post("/", async (req, res) => {
    const controller = new OperationNumberController();
    const response = await controller.createOperationNumber(req.body);
    return res.send(response);
});
  
router.get("/:id", async (req, res) => {
    const controller = new OperationNumberController();
    const response = await controller.getOperationNumber(req.params.id);
    if (!response) res.status(404).send({message: "No operation-number found"})
    return res.send(response);
});
  
export default router