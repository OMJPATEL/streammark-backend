import { z } from "zod";

export const movieSchema = z.object({
  title: z.string(),
  year: z.number(),
  poster: z.string(),
  description: z.string(),
});
