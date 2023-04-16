
<script lang="ts">

	import { createEventDispatcher, onMount } from 'svelte'

	const _dispatch = createEventDispatcher()

	export let type = 'primary'

	let primary = "text-white bg-indigo-500 hover:bg-indigo-600"
	let secondary = "text-white bg-gray-500 hover:bg-gray-600"
	let success = "text-white bg-green-500 hover:bg-green-600"
	let danger = "text-white bg-red-500 hover:bg-red-600"
	let warning = "text-white bg-yellow-300 hover:bg-yellow-400"
	let info = "text-white bg-cyan-300 hover:bg-cyan-400"
	let light = "text-black-900 bg-gray-50 hover:bg-gray-200"

	let color = ''
	
	function init() {
		switch (type) {
			case 'primary':
				color = primary
				break
			case 'secondary':
				color = secondary
				break
			case 'success':
				color = success
				break
			case 'danger':
				color = danger
				break
			case 'warning':
				color = warning
				break
			case 'info':
				color = info
				break
			case 'light':
				color = light
			// case '':
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
	class="{ color } flex border-0 py-2 px-6 focus:outline-none rounded text-sm uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
	on:click|preventDefault={ click }
>
	<slot></slot>
</button>
