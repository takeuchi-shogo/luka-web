<script lang="ts">

	import ThreadListItem from "interfaces/presenters/components/organisms/ThreadListItem.svelte"

	export let threads = []

</script>


<div class="flex flex-col flex-grow">
	<div class="py-4">
		<h1 class="text-xl font-bold">
			Thread List Page
		</h1>
	</div>
	<!-- { #each threads as thread } -->
		<ThreadListItem />
	<!-- {/each} -->
</div>