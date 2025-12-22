-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "discountPrice" REAL,
    "sale" REAL,
    "category" TEXT NOT NULL,
    "isNew" BOOLEAN,
    "onSale" BOOLEAN,
    "thumbnailSrc" TEXT,
    "altThumbanilSrc" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
