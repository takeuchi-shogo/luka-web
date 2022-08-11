<script lang="ts">

import { onMount } from 'svelte'
	import { Router } from 'svelte-routing'

	import MeRepository from 'interfaces/database/me_repository'

	import Index from './interfaces/presenters/index/Index.svelte'
	import Dashboard from './interfaces/presenters/dashboard/Index.svelte'

	import './lib/Tailwind.css'

	const _me = new MeRepository

	let me = null

	let initialized = false


	function initialize() {
		_me.get((error, message, data) => {
			if (error) {
				// initialized = false
				window.location.href = '/signin'
				return
			}
			me = data
			initialized = true
		})
	}

	onMount(() => {
		initialize()
	})

</script>


<!-- <TailwindCss /> -->

<Router>
	{ #if !initialized }
		<Index />
	{ :else }
		<Dashboard me={ me }/>
	{ /if }
</Router>
