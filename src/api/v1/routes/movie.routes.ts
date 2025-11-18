import { Router } from "express";
import { movieController } from "../controllers/movie.controller";

const router = Router();

router.get("/", movieController.getAll);
router.get("/:id", movieController.getOne);
router.post("/", movieController.create);

export default router;
