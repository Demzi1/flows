/*
  Warnings:

  - The `actions` column on the `flows` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "flows" DROP COLUMN "actions",
ADD COLUMN     "actions" JSONB[];
