import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding educational items...");

  await prisma.educationalItem.createMany({
    data: [
      {
        id: "edu-001",
        title: "Basics of Algebra",
        url: "https://www.youtube.com/watch?v=NybKbhcSEQBI",
        thumbnail: "https://img.youtube.com/vi/NybKbhcSEQBI/hqdefault.jpg",
        channel: "Khan Academy",
        topic: "Math",
      },
    ],
  });

  console.log("Seed completed.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
