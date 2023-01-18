
<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	const _dispatch = createEventDispatcher()
	
	function click() {
		_dispatch('click', {})
	}

</script>

<button 
	class="flex justify-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full text-center"
	on:click|preventDefault={ click }
>	
	<slot><!-- optional fallback --></slot>
</button>
