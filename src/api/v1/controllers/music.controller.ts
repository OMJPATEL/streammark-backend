import { Request, Response } from "express";
import { musicService } from "../services/music.service";

export const musicController = {
  getAll: async (_req: Request, res: Response) => {
    const items = await musicService.getAll();
    res.json(items);
  },

  create: async (req: Request, res: Response) => {
    const created = await musicService.create(req.body);
    res.status(201).json(created);
  },
};
