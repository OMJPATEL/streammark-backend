import { prisma } from "../../../prisma/client";

export const likedService = {
  getAll: () => prisma.likedItem.findMany(),

  getMyLiked: async (clerkId: string) => {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) return [];

    return prisma.likedItem.findMany({
      where: { userId: user.id },
    });
  },

  create: async (data: any, clerkId: string) => {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) throw new Error("User not found");

    return prisma.likedItem.create({
      data: {
        ...data,
        userId: user.id,
      },
    });
  },

  delete: async (id: string, clerkId: string) => {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) throw new Error("User not found");

    return prisma.likedItem.deleteMany({
      where: {
        id,
        userId: user.id, 
      },
    });
  },
};