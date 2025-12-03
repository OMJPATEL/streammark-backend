
import { Router } from "express";
import { likedController } from "../controllers/liked.controller";
import { validate } from "../middleware/validate";
import { likedSchema } from "../validations/liked.schema";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const router = Router();

router.get("/", likedController.getAll);
router.get("/my-liked", ClerkExpressRequireAuth(), likedController.getMyLiked);
router.post("/", ClerkExpressRequireAuth(), validate(likedSchema), likedController.create);
router.delete("/:id", ClerkExpressRequireAuth(), likedController.remove);

export default router;
