/*
  Warnings:

  - You are about to drop the column `level` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "level",
ADD COLUMN     "category" TEXT;
