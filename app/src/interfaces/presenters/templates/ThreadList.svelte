<script lang="ts">

	import ThreadListItem from "src/interfaces/presenters/organisms/ThreadListItem.svelte"

	export let threads = []

</script>

{ #each threads as thread }
	<ThreadListItem bind:thread />
{/each}