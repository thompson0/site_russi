import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

prisma.$connect().catch((e) => {
  console.error("Failed to connect to database:", e);
});
