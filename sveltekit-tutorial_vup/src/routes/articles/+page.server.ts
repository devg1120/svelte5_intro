import { getArticles } from '$lib/server/articles';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { articles } = await getArticles();
	return { articles };
};
