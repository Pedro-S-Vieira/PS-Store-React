/*
  Warnings:

  - You are about to drop the column `ImageUrl` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `Slug` on the `Category` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "ImageUrl",
DROP COLUMN "Slug",
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;
