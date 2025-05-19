/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `blogs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[degree]` on the table `educations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `content` on the `blogs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "content",
ADD COLUMN     "content" JSONB NOT NULL,
ALTER COLUMN "author" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "blogs_title_key" ON "blogs"("title");

-- CreateIndex
CREATE UNIQUE INDEX "educations_degree_key" ON "educations"("degree");

-- CreateIndex
CREATE UNIQUE INDEX "projects_title_key" ON "projects"("title");
