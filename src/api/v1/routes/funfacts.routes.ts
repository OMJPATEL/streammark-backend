import { Router } from "express";
import { funFactsController } from "../controllers/funfacts.controller";

const router = Router();

router.get("/", funFactsController.getAll);
router.get("/:id", funFactsController.getOne);
router.post("/", funFactsController.create);

export default router;
