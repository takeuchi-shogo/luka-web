<script lang="ts">

	import ThreadListItem from "interfaces/presenters/components/organisms/ThreadListItem.svelte"

	export let threads = []

</script>

<div>Thread List Page</div>
{ #each threads as thread }
	<ThreadListItem />
{/each}