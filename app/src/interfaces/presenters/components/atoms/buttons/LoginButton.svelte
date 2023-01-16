
<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	const _dispatch = createEventDispatcher()
	
	export let text = ''

	function click() {
		_dispatch('click', {})
	}

</script>

<button 
	class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
	on:click|preventDefault={ click }
>
	{ text }
</button>
