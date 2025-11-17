import { prisma } from "../../../prisma/client";

export const funFactsService = {
  getAll: () =>
    prisma.funFact.findMany(),

  getById: (id: string) =>
    prisma.funFact.findUnique({
      where: { id }
    }),

  create: (data: any) =>
    prisma.funFact.create({
      data
    })
};
