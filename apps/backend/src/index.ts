import { Hono } from "hono";
import { PrismaClient, enhance } from "@repo/db";

const prisma = new PrismaClient();
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/users", async (c) => {
  const users = await prisma.user.findMany();
  return c.json(users);
});

export default app;
