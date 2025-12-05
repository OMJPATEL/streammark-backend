import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";

export const educationProgressController = {
  // GET completed educational IDs for logged-in user
  getCompleted: async (req: any, res: Response) => {
    try {
      const userId = req.auth.userId;

      const completed = await prisma.completedEducation.findMany({
        where: { userId },
        select: { educationalId: true }
      });

      res.json(completed);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  // POST mark completed
  markCompleted: async (req: any, res: Response) => {
    try {
      const userId = req.auth.userId;
      const { educationalId } = req.body;

      const exists = await prisma.completedEducation.findFirst({
        where: { userId, educationalId }
      });

      if (exists) return res.json(exists);

      const created = await prisma.completedEducation.create({
        data: { userId, educationalId }
      });

      res.json(created);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  // DELETE remove completed record
  removeCompleted: async (req: any, res: Response) => {
    try {
      const userId = req.auth.userId;
      const { eduId } = req.params;

      await prisma.completedEducation.deleteMany({
        where: { userId, educationalId: eduId }
      });

      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
};
