import { Router } from "express";
import { educationalController } from "../controllers/educational.controller";

const router = Router();

router.get("/", educationalController.getAll);
router.get("/:id", educationalController.getOne);
router.post("/", educationalController.create);

export default router;
