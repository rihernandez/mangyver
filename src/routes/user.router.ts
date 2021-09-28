import express from "express";
import UserController from "../controllers/user.controller";
import  passwordValidator  from "password-validator"

const router = express.Router();

const schema = new passwordValidator();
schema
.is().symbols()
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

const malformedPassword = {
  password : [
    "Must have minimum length 8",
    "Must have maximum length 100",
    "Must have uppercase letters",
    "Must have lowercase letters",
    "Must have at least 2 digits",
    "Should not have spaces",
  ]
}

router.get("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();
  const results = JSON.parse(JSON.stringify(response));
  results.map( (result :any) => {
    result.label = result.name;
  })
  return res.send(results);
});

router.post("/", async (req, res) => {
  const controller = new UserController();
  if (schema.validate(req.body.password)==true){
  const response = await controller.createUser(req.body);
  return res.send(response);
  }else{
    return res.status(400).send({msg:malformedPassword});
  }
});

router.get("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUser(req.params.id);
  if (!response) res.status(404).send({message: "No user found"})
  return res.send(response);
});


router.put("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.updateUserStatus(req.params.id);
  if (!response) res.status(404).send({message: "No user found"})
  return res.send(response);
});

export default router