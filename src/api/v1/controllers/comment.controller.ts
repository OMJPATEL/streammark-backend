import { Request, Response } from "express";
import { commentService } from "../services/comment.services";

export const commentController = {
  getComments: async (req: Request, res: Response) => {
    const encodedId = req.params.videoId;
    const videoId = decodeURIComponent(encodedId);

    const comments = await commentService.getComments(videoId);
    res.json(comments);
  },

  addComment: async (req: any, res: Response) => {
    const clerkId = req.auth.userId;
    const encodedId = req.params.videoId;
    const videoId = decodeURIComponent(encodedId);

    const { text } = req.body;

    const comment = await commentService.addComment(videoId, text, clerkId);
    res.status(201).json(comment);
  },
};
