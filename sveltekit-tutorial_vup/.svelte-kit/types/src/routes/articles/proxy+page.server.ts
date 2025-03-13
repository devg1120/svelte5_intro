// @ts-nocheck
import { getArticles } from '$lib/server/articles';
import type { PageServerLoad } from './$types';

export const load = async () => {
	const { articles } = await getArticles();
	return { articles };
};
;null as any as PageServerLoad;