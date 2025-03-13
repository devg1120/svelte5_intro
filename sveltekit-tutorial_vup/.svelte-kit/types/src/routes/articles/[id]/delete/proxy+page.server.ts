// @ts-nocheck
import { deleteArticle } from '$lib/server/articles';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ params }: import('./$types').RequestEvent) => {
		const id = params.id;

		await deleteArticle(Number(id));

		return redirect(303, '/articles');
	}
};
;null as any as Actions;