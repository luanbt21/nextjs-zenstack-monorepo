import { PrismaClient, enhance } from "@repo/db";

export const prisma = new PrismaClient({ log: ["query", "error", "warn"] });
export const db = enhance(prisma);
