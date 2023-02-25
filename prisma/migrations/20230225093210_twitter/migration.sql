/*
  Warnings:

  - You are about to drop the column `image` on the `Twitt` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Twitt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "Twitt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Twitt" ("content", "createdAt", "id", "updatedAt", "userId") SELECT "content", "createdAt", "id", "updatedAt", "userId" FROM "Twitt";
DROP TABLE "Twitt";
ALTER TABLE "new_Twitt" RENAME TO "Twitt";
CREATE INDEX "Twitt_userId_idx" ON "Twitt"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
