-- CreateTable
CREATE TABLE "CompletedEducation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "educationalId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompletedEducation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CompletedEducation_userId_idx" ON "CompletedEducation"("userId");
