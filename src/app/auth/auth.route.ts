import { Router } from "express";
import * as authController from "./auth.controler";
import auth from "../middleware/authMiddleware";

const router = Router();

router.post("/register", auth("admin"), authController.registerUser);
router.post("/login", authController.loginUser);

export default router;
