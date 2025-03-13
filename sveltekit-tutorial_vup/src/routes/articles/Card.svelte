<script lang="ts">
	import DeleteModal from './DeleteModal.svelte';

	type Props = {
		id: number;
		title: string;
		createdAt: Date;
	};
	const { id, title, createdAt }: Props = $props();
</script>

<div
	class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out flex justify-between"
>
	<div>
		<a href="/articles/{id}" class="hover:underline">
			<h2 class="text-lg font-bold">{title}</h2>
		</a>
		<time class="text-sm text-gray-500" datetime={createdAt.toISOString()}>
			{createdAt.toLocaleDateString()}
		</time>
	</div>
	<div>
		<DeleteModal {id} />
	</div>
</div>
