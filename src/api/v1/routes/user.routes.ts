import { Router } from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { prisma } from "../../../prisma/client";

const router = Router();

router.post("/sync", ClerkExpressRequireAuth(), async (req: any, res) => {
  const clerkId = req.auth.userId;

  let user = await prisma.user.findUnique({
    where: { clerkId },
  });

  if (!user) {
    user = await prisma.user.create({
      data: { clerkId },
    });
  }

  res.json(user);
});

export default router;
