import { prisma } from "../../../prisma/client";

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
