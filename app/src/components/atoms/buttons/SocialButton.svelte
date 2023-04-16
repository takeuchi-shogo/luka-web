<script lang="ts">

	import { createEventDispatcher, onMount } from 'svelte'

	const _dispatch = createEventDispatcher()

	export let text: string = ''
	export let type: string = ''

	let google = ""
	let facebook = "text-white"
	let github = "text-white"
	let twitter = "text-white"
	let instagram = "text-white"
	let style = ''

	let color:string = ''

	function setColor() {
		switch (type) {
			case 'google':
				color = google
				style = '#ea4335'
				break
			case 'facebook':
				color = facebook
				style = '#1877f2'
				break
			case 'github':
				color = github
				style = '#333'
				break
			case 'twitter':
				color = twitter
				style = '#1da1f2'
				break
			case 'instagram':
				color = instagram
				style = '#c13584'
				break
		}
	}

	function signin() {
		_dispatch('socialSiginin', {})
	}

	onMount(() => {
		setColor()
	})

</script>

<button
	class="{ type } outline-none py-3.5 px-4 border rounded-lg flex justify-center items-center w-full mt-4 transition duration-150 ease-in-out"
	on:click|preventDefault={ signin }
	style="color: { style };"
	>
	<slot></slot>
	<p class="text-base font-medium ml-4" style="color: { style };">{ text }</p>
</button>
