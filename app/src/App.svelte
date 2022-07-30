<script lang="ts">

	import { Router } from 'svelte-routing'

	import Index from './interfaces/presenters/index/Index.svelte'
	import Dashboard from './interfaces/presenters/dashboard/Index.svelte'

	import './lib/Tailwind.css'

	let me = false

</script>


<!-- <TailwindCss /> -->

<Router>
	{ #if me }
		<Index />
	{ :else }
		<Dashboard />
	{ /if }
</Router>
