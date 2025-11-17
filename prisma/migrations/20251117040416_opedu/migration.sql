-- AlterTable
ALTER TABLE "LikedItem" ADD COLUMN     "eduId" TEXT;

-- CreateTable
CREATE TABLE "EducationalItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "thumbnail" TEXT,
    "channel" TEXT,
    "topic" TEXT NOT NULL,

    CONSTRAINT "EducationalItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LikedItem" ADD CONSTRAINT "LikedItem_eduId_fkey" FOREIGN KEY ("eduId") REFERENCES "EducationalItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
