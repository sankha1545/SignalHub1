-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "phoneVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "phoneVerifiedAt" TIMESTAMP(3);
