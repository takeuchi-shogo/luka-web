
<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	const _dispatch = createEventDispatcher()
	
	export let text = ''

	function onClick() {
		_dispatch('onClick', {})
	}

</script>

<button 
	type="button"
	class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
	on:click={ onClick }
>
	{ text }
</button>