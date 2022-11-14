
<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	const _dispatch = createEventDispatcher()
	
	export let text = ''

	function onClick() {
		_dispatch('onClick', {})
	}

</script>

<button
	class="text-sm text-gray-500 bg-pink-300 hover:opacity-75 font-medium px-4 py-2 text-center rounded"
	on:click|preventDefault={ onClick }
>
	{ text }
</button>
