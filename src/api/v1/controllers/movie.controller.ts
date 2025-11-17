import { Request, Response } from "express";
import { movieService } from "../services/movie.service";

export const movieController = {
  getAll: async (req: Request, res: Response) => {
    const items = await movieService.getAll();
    res.json(items);
  },

  getOne: async (req: Request, res: Response) => {
    const item = await movieService.getOne(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  },

  create: async (req: Request, res: Response) => {
    const created = await movieService.create(req.body);
    res.status(201).json(created);
  },
};
