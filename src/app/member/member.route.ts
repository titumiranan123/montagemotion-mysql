import { Router } from "express";
import * as memberController from "./member.controler";
import auth from "../middleware/authMiddleware";
const router = Router();
router.get("/members", memberController.getAllMembers);
router.get("/members/:id", memberController.getMemberById);
router.post("/members", auth("admin"), memberController.createMember);
router.put("/members/:id", auth("admin"), memberController.updateMember);
router.delete("/members/:id", auth("admin"), memberController.deleteMember);

export default router;
