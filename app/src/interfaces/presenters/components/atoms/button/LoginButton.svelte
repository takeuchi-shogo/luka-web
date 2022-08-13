
<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	const _dispatch = createEventDispatcher()
	
	export let text = ''

	function onClick() {
		_dispatch('onClick', {})
	}

</script>

<button 
	class="text-sm font-semibold text-white outline-none bg-indigo-500 border rounded hover:opacity-75 py-4 w-full"
	on:click={ onClick }
>
	{ text }
</button>