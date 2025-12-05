import express from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();


router.post("/", ClerkExpressRequireAuth(), async (req: any, res) => {
  const userId = req.auth.userId;
  const { educationalId } = req.body;

  const item = await prisma.completedEducation.create({
    data: { userId, educationalId }
  });

  res.json(item);
});


router.get("/", ClerkExpressRequireAuth(), async (req: any, res) => {
  const userId = req.auth.userId;

  const items = await prisma.completedEducation.findMany({
    where: { userId },
    select: { educationalId: true }
  });

  res.json(items);
});

router.delete("/:eduId", ClerkExpressRequireAuth(), async (req: any, res) => {
  const userId = req.auth.userId;
  const { eduId } = req.params;

  await prisma.completedEducation.deleteMany({
    where: {
      userId,
      educationalId: eduId
    }
  });

  res.json({ success: true });
});

export default router;
