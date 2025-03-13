import prisma from './prisma';
import type { Article } from '@prisma/client';
import { z } from 'zod';

export const articleSchema = z.object({
	title: z.string().min(1).max(20),
	content: z.string().min(1).max(1000)
});

// db クライアントを隠蔽するために re-export する
export type { Article };

export async function getArticles(): Promise<{ articles: readonly Article[] }> {
	const articles = await prisma.article.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	});
	return { articles };
}

export async function getArticleById(id: number): Promise<Article | null> {
	const article = await prisma.article.findUnique({
		where: {
			id
		}
	});
	return article;
}

export async function createArticle(data: Pick<Article, 'title' | 'content'>): Promise<Article> {
	const article = await prisma.article.create({
		data
	});
	return article;
}

export async function deleteArticle(id: number): Promise<void> {
	await prisma.article.delete({
		where: {
			id
		}
	});
}
