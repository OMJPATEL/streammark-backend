import { Request, Response } from "express";
import { likedService } from "../services/liked.service";

export const likedController = {
  getAll: async (req: Request, res: Response) => {
    const items = await likedService.getAll();
    res.json(items);
  },

  getMyLiked: async (req: any, res: Response) => {
    const clerkId = req.auth.userId;
    const items = await likedService.getMyLiked(clerkId);
    res.json(items);
  },

  create: async (req: Request, res: Response) => {
    const clerkId = req.auth!.userId;
    const item = await likedService.create(req.body, clerkId);
    res.status(201).json(item);
  },

  remove: async (req: Request, res: Response) => {
    const clerkId = req.auth!.userId;
    const { id } = req.params;
    await likedService.delete(req.params.id, clerkId);
    res.json({ message: "Deleted successfully" });
  }
};
