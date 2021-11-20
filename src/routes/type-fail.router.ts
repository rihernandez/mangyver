/* eslint-disable */
import express from "express";
import TypeFail from "../controllers/type-fail.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new TypeFail();
  const response = await controller.getTypeFails();
  const results = JSON.parse(JSON.stringify(response));
  results.map((result: any) => {
    result.label = result.name;
  });
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new TypeFail();
  const response = await controller.createTypeFail(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new TypeFail();
  const response = await controller.getTypeFail(req.params.id);
  if (!response) res.status(404).send({ message: "No type fail found" });
  return res.send(response);
});

export default router;
/* eslint-disable */
