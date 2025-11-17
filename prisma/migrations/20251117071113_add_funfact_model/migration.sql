-- CreateTable
CREATE TABLE "FunFact" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "FunFact_pkey" PRIMARY KEY ("id")
);
