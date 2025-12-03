import { prisma } from "../../../prisma/client";

async function getOrCreateUser(clerkId: string) {
  return prisma.user.upsert({
    where: { clerkId },
    update: {},
    create: { clerkId },
  });
}

export const likedService = {
  getAll: () => prisma.likedItem.findMany(),

  getMyLiked: async (clerkId: string) => {
    const user = await getOrCreateUser(clerkId);

    return prisma.likedItem.findMany({
      where: { userId: user.id },
    });
  },

  create: async (data: any, clerkId: string) => {
    const user = await getOrCreateUser(clerkId);

    return prisma.likedItem.create({
      data: {
        ...data,
        userId: user.id,
      },
    });
  },

  delete: async (id: string, clerkId: string) => {
    const user = await getOrCreateUser(clerkId);

    return prisma.likedItem.deleteMany({
      where: {
        id,
        userId: user.id,
      },
    });
  },
};