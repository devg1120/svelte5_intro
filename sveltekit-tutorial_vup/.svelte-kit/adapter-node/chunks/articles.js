import { PrismaClient } from "@prisma/client";
import { z } from "zod";
let prisma;
{
  prisma = new PrismaClient();
}
const prisma$1 = prisma;
const articleSchema = z.object({
  title: z.string().min(1).max(20),
  content: z.string().min(1).max(1e3)
});
async function getArticles() {
  const articles = await prisma$1.article.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  return { articles };
}
async function getArticleById(id) {
  const article = await prisma$1.article.findUnique({
    where: {
      id
    }
  });
  return article;
}
async function createArticle(data) {
  const article = await prisma$1.article.create({
    data
  });
  return article;
}
async function deleteArticle(id) {
  await prisma$1.article.delete({
    where: {
      id
    }
  });
}
export {
  getArticleById as a,
  articleSchema as b,
  createArticle as c,
  deleteArticle as d,
  getArticles as g
};
