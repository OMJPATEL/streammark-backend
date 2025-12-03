-- AlterTable
ALTER TABLE "LikedItem" ADD COLUMN     "eduId" TEXT;

-- AddForeignKey
ALTER TABLE "LikedItem" ADD CONSTRAINT "LikedItem_eduId_fkey" FOREIGN KEY ("eduId") REFERENCES "EducationalItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
