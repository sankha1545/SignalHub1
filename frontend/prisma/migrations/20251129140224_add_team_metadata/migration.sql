-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "completion" INTEGER DEFAULT 0,
ADD COLUMN     "featured" BOOLEAN DEFAULT false,
ADD COLUMN     "gradient" TEXT,
ADD COLUMN     "projects" INTEGER DEFAULT 0;
