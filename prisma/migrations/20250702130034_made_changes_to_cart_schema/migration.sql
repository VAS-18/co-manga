/*
  Warnings:

  - You are about to drop the column `itmesPrice` on the `Cart` table. All the data in the column will be lost.
  - Added the required column `itemsPrice` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemsTotal` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "itmesPrice",
ADD COLUMN     "itemsPrice" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "itemsTotal" DECIMAL(12,2) NOT NULL;
