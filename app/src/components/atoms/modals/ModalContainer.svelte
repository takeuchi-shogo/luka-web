<script lang="ts">

	import { createEventDispatcher } from 'svelte'
	import { fade } from 'svelte/transition'

	const _dispatch = createEventDispatcher()
	const click = () => _dispatch('click', {})

	export let zindex: number = 50

</script>


<style>

</style>


<div class="flex items-center justify-center fixed top-0 right-0 left-0 z-{ zindex } w-full md:inset-0 h-full bg-gray-600 bg-opacity-75"
	transition:fade={{ duration: 150 }}
	on:click={ click }
>
	<slot></slot>
</div>
