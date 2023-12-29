-- CreateTable
CREATE TABLE "book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "chapter_count" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "book_name" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "book_id" INTEGER NOT NULL,
    CONSTRAINT "book_name_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chapter" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "book_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "book_order_key" ON "book"("order");

-- CreateIndex
CREATE UNIQUE INDEX "book_code_key" ON "book"("code");

-- CreateIndex
CREATE UNIQUE INDEX "book_name_name_key" ON "book_name"("name");

-- CreateIndex
CREATE UNIQUE INDEX "book_name_book_id_key" ON "book_name"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_id_key" ON "chapter"("id");
