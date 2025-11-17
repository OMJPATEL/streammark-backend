
import { z } from "zod";
export const educationalSchema=z.object({
  id:z.string(),
  title:z.string(),
  url:z.string(),
  thumbnail:z.string().optional(),
  channel:z.string().optional(),
  topic:z.string()
});
