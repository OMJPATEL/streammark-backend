/*
  Warnings:

  - Made the column `userId` on table `LikedItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "LikedItem" DROP CONSTRAINT "LikedItem_userId_fkey";

-- AlterTable
ALTER TABLE "LikedItem" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "LikedItem" ADD CONSTRAINT "LikedItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
