import fastify from "fastify";
import sensible from "@fastify/sensible";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import dotenv from "dotenv";

dotenv.config();

const app = fastify();
app.register(sensible);
app.register(cors, {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
});
const prisma = new PrismaClient();

app.get("/posts", async (req, res) => {
  return await commitDB(
    prisma.post.findMany({
      select: {
        id: true,
        title: true,
      },
    })
  );
});

app.get("/posts/:id", async (req, res) => {
  return await commitDB(
    prisma.post.findUnique({
      where: { id: req.params.id },
      select: {
        title: true,
        body: true,
        comments: {
          orderBy: {
            createdAt: "desc",
          },
          select: {
            id: true,
            message: true,
            parentId: true,
            createdAt: true,
            user: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    })
  );
});

async function commitDB(promise) {
  const [error, data] = await app.to(promise);
  if (error) {
    return app.httpErrors.internalServerError(error.message);
  }
  return data;
}

app.listen({
  port: process.env.PORT || 3001,
});
