/* eslint-disable */
import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

//Login route
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

//Change my password
// router.post("/change-password", [checkJwt], AuthController.changePassword);
export default router;
