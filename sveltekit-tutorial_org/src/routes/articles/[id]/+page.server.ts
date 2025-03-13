import { getArticleById } from '$lib/server/articles';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const article = await getArticleById(Number(params.id));

	if (article === null) {
		error(404, {
			message: `Article with id ${params.id} not found`
		});
	}

	return { article };
};
