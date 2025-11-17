
import { Router } from "express";
import { likedController } from "../controllers/liked.controller";
import { validate } from "../middleware/validate";
import { likedSchema } from "../validations/liked.schema";

const router = Router();

router.get("/", likedController.getAll);
router.post("/", validate(likedSchema), likedController.create);
router.delete("/:id", likedController.remove);

export default router;
