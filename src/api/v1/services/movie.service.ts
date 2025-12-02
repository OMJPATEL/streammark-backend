import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const movieService = {
  getAll: () =>
    prisma.movie.findMany(),

  getOne: (id: string) =>
    prisma.movie.findUnique({
      where: { id },
    }),

  create: (data: any) =>
    prisma.movie.create({
      data,
    }),
};
