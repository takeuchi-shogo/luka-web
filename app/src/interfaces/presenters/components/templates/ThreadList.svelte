<script lang="ts">

	import ThreadListItem from "interfaces/presenters/components/organisms/ThreadListItem.svelte"

	export let threads = []

</script>


<div class="sm:container px-4">
	<h1>Thread List Page</h1>
	<!-- { #each threads as thread } -->
		<ThreadListItem />
	<!-- {/each} -->
</div>