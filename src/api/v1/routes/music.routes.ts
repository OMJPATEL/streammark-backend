import { Router } from "express";
import { musicController } from "../controllers/music.controller";
import { validate } from "../middleware/validate";
import { musicSchema } from "../validations/music.schema";

const router = Router();

router.get("/", musicController.getAll);
router.post("/", validate(musicSchema), musicController.create);

export default router;
