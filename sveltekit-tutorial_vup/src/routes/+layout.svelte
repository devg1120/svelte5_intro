<script lang="ts">
	const { children } = $props();
	import '../app.css';
</script>

<div class="bg-gray-200 min-h-screen flex flex-col">
	<header class="sticky top-0 z-50 bg-white shadow-md h-16">
		<nav class="container mx-auto flex justify-between items-center py-4">
			<a href="/" class="text-xl font-bold">Svelte Diary</a>
			<ul class="flex gap-4">
				<li>
					<a href="/articles" class="text-gray-800">記事の一覧</a>
				</li>
				<li>
					<a href="/articles/new" class="text-gray-800">記事の投稿</a>
				</li>
			</ul>
		</nav>
	</header>
	<main class="container mx-auto mt-4 flex-grow">
		{@render children()}
	</main>
	<footer class="bg-gray-800 text-white text-center py-4 h-16">
		<p>&copy; 2024 Svelte Diary</p>
	</footer>
</div>
