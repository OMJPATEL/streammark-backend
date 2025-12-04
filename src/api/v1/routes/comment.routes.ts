import { Router } from "express";
import { commentController } from "../controllers/comment.controller";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const router = Router();

router.get("/:videoId", commentController.getComments);
router.post("/:videoId", ClerkExpressRequireAuth(), commentController.addComment);

export default router;