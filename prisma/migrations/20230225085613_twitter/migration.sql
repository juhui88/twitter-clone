/*
  Warnings:

  - You are about to drop the `Tweet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tweet";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Twitt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "Twitt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Twitt_userId_idx" ON "Twitt"("userId");
