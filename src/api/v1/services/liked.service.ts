import { prisma } from "../../../prisma/client";

export const likedService = {
  getAll: () => prisma.likedItem.findMany(),

  create: (data: any) =>
    prisma.likedItem.create({
      data,
    }),

  delete: (id: string) =>
    prisma.likedItem.delete({
      where: { id },
    }),
};
