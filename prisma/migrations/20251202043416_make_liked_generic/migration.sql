/*
  Warnings:

  - You are about to drop the column `eduId` on the `LikedItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "LikedItem" DROP CONSTRAINT "LikedItem_eduId_fkey";

-- AlterTable
ALTER TABLE "LikedItem" DROP COLUMN "eduId";
