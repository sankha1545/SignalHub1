-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "countryCode" TEXT,
ADD COLUMN     "countryGeonameId" INTEGER,
ADD COLUMN     "countryName" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "stateGeonameId" INTEGER,
ADD COLUMN     "stateName" TEXT,
ADD COLUMN     "timezone" TEXT;
