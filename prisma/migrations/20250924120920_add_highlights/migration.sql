/*
  Warnings:

  - Made the column `category` on table `projects` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."projects" ADD COLUMN     "highlights" TEXT[],
ALTER COLUMN "category" SET NOT NULL;
