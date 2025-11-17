import { Request, Response } from "express";
import { educationalService } from "../services/educational.service";

export const educationalController = {
  getAll: async (req: Request, res: Response) => {
    const items = await educationalService.getAll();
    res.json(items);
  },

  getOne: async (req: Request, res: Response) => {
    const item = await educationalService.getOne(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  },

  create: async (req: Request, res: Response) => {
    const created = await educationalService.create(req.body);
    res.status(201).json(created);
  },
};
