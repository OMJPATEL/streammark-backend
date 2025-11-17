import { Request, Response } from "express";
import { funFactsService } from "../services/funfacts.service";

export const funFactsController = {
  getAll: async (req: Request, res: Response) => {
    const items = await funFactsService.getAll();
    res.json(items);
  },

  getOne: async (req: Request, res: Response) => {
    const item = await funFactsService.getById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  },

  create: async (req: Request, res: Response) => {
    const created = await funFactsService.create(req.body);
    res.status(201).json(created);
  },
};
