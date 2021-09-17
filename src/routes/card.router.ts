import express from "express";
import CardController from "../controllers/card.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new CardController();
  const response = await controller.getCards(<string>_req.query.process);
  const results = JSON.parse(JSON.stringify(response));
  results.map( (result :any) => {
    result.label = result.name;
  })
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new CardController();
  const response = await controller.createCard(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new CardController();
  const response = await controller.getCard(req.params.id);
  if (!response) res.status(404).send({message: "No Card found"})
  return res.send(response);
});

export default router