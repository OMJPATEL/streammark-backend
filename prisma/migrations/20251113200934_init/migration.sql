-- CreateTable
CREATE TABLE "LikedItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT,
    "thumbnail" TEXT,
    "channel" TEXT,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikedItem_pkey" PRIMARY KEY ("id")
);
