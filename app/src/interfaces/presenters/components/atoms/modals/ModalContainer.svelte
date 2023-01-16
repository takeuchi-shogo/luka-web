<script lang="ts">

	import { fade } from 'svelte/transition'

</script>


<style>

</style>


<div class="flex items-center justify-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full bg-gray-200 bg-opacity-75" transition:fade={{ duration: 150 }}>
	<div class="relative p-4 w-full max-w-2xl h-full">
		<slot></slot>
	</div>
</div>
