import { z } from "zod";

export const musicSchema = z.object({
  title: z.string(),
  artist: z.string(),
  duration: z.string(),
  videoId: z.string(),
});
