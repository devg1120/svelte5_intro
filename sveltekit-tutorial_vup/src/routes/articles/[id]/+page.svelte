<script lang="ts">
	const { data } = $props();
</script>

<svelte:head>
	<title>{data.article.title}</title>
	<meta name="description" content={data.article.content} />
</svelte:head>

<div class="mx-auto my-5 max-w-5xl">
	<a href="/articles" class="flex items-center text-opacity-80 hover:underline">
		← 記事一覧に戻る
	</a>
</div>

<article class="p-4 mx-auto max-w-3xl">
	<div class="text-center">
		<h1 class="mt-4 text-2xl font-bold md:text-4xl">
			{data.article.title}
		</h1>
		<time class="text-sm text-gray-500 block mt-2" datetime={data.article.createdAt.toISOString()}>
			{data.article.createdAt.toLocaleDateString()}
		</time>
	</div>
	<div class="bg-white py-4 px-8 mt-8 shadow-md rounded-lg">
		{data.article.content}
	</div>
</article>
