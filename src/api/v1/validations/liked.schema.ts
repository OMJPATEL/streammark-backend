
import { z } from "zod";

export const likedSchema = z.object({
  title: z.string().min(1),
  url: z.string().url().optional(),
  thumbnail: z.string().optional(),
  channel: z.string().optional(),
  category: z.string().min(1)
});
