/*
  Warnings:

  - The primary key for the `chapter` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_chapter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chapter" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "book_id" INTEGER NOT NULL
);
INSERT INTO "new_chapter" ("book_id", "chapter", "content", "id") SELECT "book_id", "chapter", "content", "id" FROM "chapter";
DROP TABLE "chapter";
ALTER TABLE "new_chapter" RENAME TO "chapter";
CREATE UNIQUE INDEX "chapter_id_key" ON "chapter"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
