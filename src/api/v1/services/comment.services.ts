import { prisma } from "../../../prisma/client";

async function getOrCreateUser(clerkId: string) {
  return prisma.user.upsert({
    where: { clerkId },
    update: {},
    create: { clerkId },
  });
}

export const commentService = {
  getComments(videoId: string) {
  return prisma.comment.findMany({
    where: { videoId },
    include: {
      user: {
        select: { clerkId: true } 
      }
    },
    orderBy: { createdAt: "desc" },
  });
},

  async addComment(videoId: string, text: string, clerkId: string) {
    const user = await getOrCreateUser(clerkId);

    return prisma.comment.create({
      data: {
        videoId,
        text,
        userId: user.id,
      },
    });
  },
};