/*
  Warnings:

  - Made the column `eduId` on table `LikedItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "LikedItem" DROP CONSTRAINT "LikedItem_eduId_fkey";

-- AlterTable
ALTER TABLE "LikedItem" ALTER COLUMN "eduId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "LikedItem" ADD CONSTRAINT "LikedItem_eduId_fkey" FOREIGN KEY ("eduId") REFERENCES "EducationalItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
