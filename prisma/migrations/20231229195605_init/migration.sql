/*
  Warnings:

  - You are about to drop the `vdc_book_name` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vdc_chapter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "vdc_book_name";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "vdc_chapter";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "book_name" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "book_id" INTEGER NOT NULL,
    CONSTRAINT "book_name_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chapter" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "book_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "book_name_name_key" ON "book_name"("name");

-- CreateIndex
CREATE UNIQUE INDEX "book_name_book_id_key" ON "book_name"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_id_key" ON "chapter"("id");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_book_id_key" ON "chapter"("book_id");
