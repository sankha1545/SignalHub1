-- CreateTable
CREATE TABLE "ChatLastRead" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lastReadAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatLastRead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ChatLastRead_userId_idx" ON "ChatLastRead"("userId");

-- CreateIndex
CREATE INDEX "ChatLastRead_chatId_idx" ON "ChatLastRead"("chatId");

-- CreateIndex
CREATE UNIQUE INDEX "ChatLastRead_chatId_userId_key" ON "ChatLastRead"("chatId", "userId");

-- AddForeignKey
ALTER TABLE "ChatLastRead" ADD CONSTRAINT "ChatLastRead_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatLastRead" ADD CONSTRAINT "ChatLastRead_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
