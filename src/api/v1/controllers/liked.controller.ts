import { Request, Response } from "express";
import { likedService } from "../services/liked.service";

export const likedController = {
  getAll: async (req: Request, res: Response) => {
    const items = await likedService.getAll();
    res.json(items);
  },

  create: async (req: Request, res: Response) => {
    const item = await likedService.create(req.body);
    res.status(201).json(item);
  },

  remove: async (req: Request, res: Response) => {
    const { id } = req.params;
    await likedService.delete(id); 
    res.json({ message: "Deleted successfully" });
  }
};
