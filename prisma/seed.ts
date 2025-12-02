import { PrismaClient } from "@prisma/client";

const funfactsJson = require("../src/data/funfacts.json");
const educationalJson = require("../src/data/educational.json");
const moviesJson = require("../src/data/movies.json");

const prisma = new PrismaClient();

// Fun Fact Types
type FunFactItem = {
  title: string;
  url: string;
  description: string;
};

type FunFactJson = Record<string, FunFactItem[]>;
const funfacts = funfactsJson as FunFactJson;

async function main() {
  // Seed Fun Facts
  console.log("Seeding fun facts...");

  for (const [category, items] of Object.entries(funfacts)) {
    for (const fact of items) {
      await prisma.funFact.create({
        data: {
          title: fact.title,
          url: fact.url,
          description: fact.description,
          category,
        },
      });
    }
  }

  console.log("Fun facts seeding completed.");

  // Seed Educational Items
  console.log("Seeding educational items...");

  for (const itemObj of educationalJson) {
    const parsed = JSON.parse(itemObj.item);

    await prisma.educationalItem.create({
      data: {
        id: crypto.randomUUID(),
        title: parsed.title,
        url: parsed.url,
        channel: parsed.channel,
        topic: parsed.topic,
      },
    });
  }

  console.log("Educational items seeding completed.");

  // Seed Movies
  console.log("Seeding movies...");

  for (const movie of moviesJson) {
    await prisma.movie.create({
      data: {
        title: movie.title,
        year: movie.year,
        poster: movie.poster,
        description: movie.description,
      },
    });
  }

  console.log("Movies seeding completed.");
}

main()
  .catch(console.error)
  .finally(async () => prisma.$disconnect());
