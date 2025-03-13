<script lang="ts">
	import Card from './Card.svelte';

	const { data } = $props();
</script>

<h1 class="text-3xl font-bold mt-4">記事一覧</h1>

<ul class="mt-4 grid grid-cols-1 gap-4">
	{#each data.articles as article (article.id)}
		<Card id={article.id} title={article.title} createdAt={article.createdAt} />
	{/each}
</ul>
