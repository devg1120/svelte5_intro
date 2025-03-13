<script lang="ts">
	import { enhance } from '$app/forms';
	const { form } = $props();

	let content = $state(form?.fields.content ?? '');
	const count = $derived.by(() => {
		const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
		return [...segmenter.segment(content)].length;
	});
	const maxCount = 1000;
</script>

<svelte:head>
	<title>新規記事投稿</title>
</svelte:head>

<form method="POST" use:enhance>
	<div class="grid gap-6 mt-6">
		<div>
			<label for="title" class="block mb-2 text-sm font-medium text-gray-900">タイトル</label>
			<input
				id="title"
				name="title"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				required
				value={form?.fields.title ?? ''}
				aria-invalid={form?.errors.fieldErrors?.title ? 'true' : undefined}
				aria-describedby={form?.errors.fieldErrors?.title ? 'title-error' : undefined}
			/>
			{#if form?.errors.fieldErrors?.title}
				<p id="title-error" class="text-red-600 text-sm mt-1">{form.errors.fieldErrors.title}</p>
			{/if}
		</div>
		<div>
			<label for="content" class="block mb-2 text-sm font-medium text-gray-900">本文</label>
			<textarea
				id="content"
				name="content"
				rows="10"
				class="border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				required
				bind:value={content}
				aria-invalid={form?.errors.fieldErrors?.content ? 'true' : undefined}
				aria-describedby={form?.errors.fieldErrors?.content ? 'content-error' : undefined}
			></textarea>

			<p class="text-sm text-gray-500 mt-1" class:text-red-600={count > maxCount}>
				{count}/{maxCount}
			</p>

			{#if form?.errors.fieldErrors?.content}
				<p id="content-error" class="text-red-600 text-sm mt-1">
					{form.errors.fieldErrors.content}
				</p>
			{/if}
		</div>
		<div>
			<button
				type="submit"
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300"
			>
				投稿する
			</button>
		</div>
	</div>
</form>

<style>
	/* field-sizing は TailwindCSS でサポートしていないスタイルなので、ここで定義している　*/
	textarea {
		min-height: 4lh;
		field-sizing: content;
	}
</style>
