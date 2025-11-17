import { prisma } from "../../../prisma/client";

export const educationalService = {
  getAll: () => prisma.educationalItem.findMany(),

  getOne: (id: string) =>
    prisma.educationalItem.findUnique({
      where: { id },
    }),

  create: (data: any) =>
    prisma.educationalItem.create({
      data,
    }),
};
