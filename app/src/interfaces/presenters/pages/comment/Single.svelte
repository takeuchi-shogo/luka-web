
<script lang="ts">
	import { onMount } from "svelte";
	import { init } from "svelte/internal";

	export let id: string = ''


	function init() {
		console.log('comment')
	}


	onMount(() => {
		init()
	})

</script>


<div>Comment Single</div>
<div>id: { id }</div>