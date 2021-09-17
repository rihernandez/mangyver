import express from "express";
import UserInfo from "../middlewares/getUserFromToken";
import AreaController from "../controllers/area.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new AreaController();

  const userInfo = new UserInfo()
  const user = await userInfo.getUserFromToken(_req);

  // console.log("debuging", user.operation.id);

  const response = await controller.getAreas(<string>user.operation.id);
  const results = JSON.parse(JSON.stringify(response));
  results.map( (result :any) => {
    result.label = result.name;
  })
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new AreaController();
  const response = await controller.createArea(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new AreaController();
  const response = await controller.getArea(req.params.id);
  if (!response) res.status(404).send({message: "No Area found"})
  return res.send(response);
});

export default router