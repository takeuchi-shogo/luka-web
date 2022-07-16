<script lang="ts">
	import Content from "../molecules/Content.svelte";


	export let comments = []
</script>


{ #each comments as comment }
	<Content bind:content={ comment.content } />
{/each}