import { prisma } from "../../../prisma/client";

export const musicService = {
  getAll: () => prisma.music.findMany(),

  create: (data: any) =>
    prisma.music.create({
      data,
    }),
};
