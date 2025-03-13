<script lang="ts">
	import { enhance } from '$app/forms';
	type Props = {
		id: number;
	};

	const { id }: Props = $props();
	let modalRef = $state<HTMLDialogElement | null>(null);

	const openModal = () => {
		modalRef?.showModal();
	};
</script>

<button type="button" class="bg-red-500 text-white px-4 py-2 rounded-lg" onclick={openModal}>
	削除
</button>

<dialog
	bind:this={modalRef}
	class="p-4 w-96 backdrop:backdrop-blur-sm backdrop:bg-black/40 bg-white rounded-lg"
	aria-labelledby="modal-title"
>
	<form use:enhance>
		<h2 id="modal-title" class="text-xl font-bold">記事の削除</h2>
		<p>本当に削除しますか？</p>
		<div class="mt-4 flex justify-end">
			<button class="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg" formmethod="dialog">
				キャンセル
			</button>
			<button
				class="bg-red-500 text-white px-4 py-2 rounded-lg ml-2"
				formmethod="post"
				formaction="/articles/{id}/delete"
			>
				OK
			</button>
		</div>
	</form>
</dialog>
