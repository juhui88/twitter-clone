-- CreateTable
CREATE TABLE "Fav" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "twittId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Fav_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Fav_twittId_fkey" FOREIGN KEY ("twittId") REFERENCES "Twitt" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Fav_userId_idx" ON "Fav"("userId");

-- CreateIndex
CREATE INDEX "Fav_twittId_idx" ON "Fav"("twittId");
