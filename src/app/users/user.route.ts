import { Router } from "express";
import * as userController from "./user.controler";
import auth from "../middleware/authMiddleware";

const router = Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", auth("admin"), userController.createUser);
router.put("/users/:id", auth("admin"), userController.updateUser);
router.delete("/users/:id", auth("admin"), userController.deleteUser);

export default router;
