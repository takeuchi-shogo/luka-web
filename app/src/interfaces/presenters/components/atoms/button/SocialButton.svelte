<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	const _dispatch = createEventDispatcher()

	export let text: string = ''

	function signin() {
		_dispatch('socialSiginin', {})
	}

</script>

<button
	aria-label="Continue with github"
	type="button" 
	class="outline-none ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
	on:click|preventDefault={ signin }
	>
	<slot></slot>
	<p class="text-base font-medium ml-4 text-gray-700">{ text }</p>
</button>