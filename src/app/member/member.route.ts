import { Router } from "express";
import * as memberController from "./member.controler";
const router = Router();
router.get("/members", memberController.getAllMembers);
router.get("/members/:id", memberController.getMemberById);
router.post("/members", memberController.createMember);
router.put("/members/:id", memberController.updateMember);
router.delete("/members/:id", memberController.deleteMember);

export default router;
