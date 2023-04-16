
<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	const _dispatch = createEventDispatcher()
	const click = () => _dispatch('click', {})

</script>


<style>

</style>


<button
	class="hover:bg-gray-300 flex mx-auto border-0 py-2 px-6 focus:outline-none rounded-full text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
	on:click={ click }
>
	<slot><!-- optional fallback --></slot>
</button>
