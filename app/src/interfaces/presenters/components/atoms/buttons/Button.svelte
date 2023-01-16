
<script lang="ts">

	import { createEventDispatcher, onMount } from 'svelte'

	const _dispatch = createEventDispatcher()

	export let type = ''

	let primary = "text-white bg-indigo-500 hover:bg-indigo-600"
	let secondary = "text-white bg-gray-500 hover:bg-gray-600"
	let success = "text-white bg-green-500 hover:bg-green-600"
	let danger = "text-white bg-red-500 hover:bg-red-600"
	let warning = "text-white bg-yellow-300 hover:bg-yellow-400"
	let info = "text-white bg-cyan-300 hover:bg-cyan-400"

	let color = ''
	
	function init() {
		switch (type) {
			case 'primary':
				color = primary
			case 'secondary':
				color = secondary
			case 'success':
				color = success
			case 'danger':
				color = danger
			case 'warning':
				color = warning
			case 'info':
				color = info
			// case '':
		}
	}

	function click() {
		_dispatch('click', {})
	}

	onMount(() => {
		init()
	})

</script>

<button
	class="{ color } flex mx-auto mt-20 border-0 py-2 px-8 focus:outline-none rounded text-lg transition duration-150 ease-in-out"
	on:click|preventDefault={ click }
>
	<slot></slot>
</button>
