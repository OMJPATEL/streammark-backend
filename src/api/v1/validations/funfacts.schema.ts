import { z } from "zod";

export const funFactSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  description: z.string(),
  category: z.string()
});
