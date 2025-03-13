import { deleteArticle } from '$lib/server/articles';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ params }) => {
		const id = params.id;

		await deleteArticle(Number(id));

		return redirect(303, '/articles');
	}
};
