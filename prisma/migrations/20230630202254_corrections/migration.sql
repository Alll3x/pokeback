/*
  Warnings:

  - Added the required column `pokemons` to the `teams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamName` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `teams` ADD COLUMN `pokemons` VARCHAR(191) NOT NULL,
    ADD COLUMN `teamName` VARCHAR(191) NOT NULL;
