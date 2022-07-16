<script lang="ts">

	import { Router, Link, Route } from 'svelte-routing'

	import TopIndex from './interfaces/presenters/pages/top/Index.svelte'
	import SigininIndex from './interfaces/presenters/pages/signin/Index.svelte'
	import TailwindCss from './lib/TailwindCSS.svelte'


</script>


<TailwindCss />

<Router>
	<nav class="navbar w-full bg-white">
		<Link to="/">top</Link>
		<Link to="/siginin">siginin</Link>
		<!-- <Link to="/"></Link>  -->
	</nav>
	<main>
		<Route path="" component={ TopIndex } />

		<Route path="/siginin">
			<SigininIndex />
		</Route>
	</main>
</Router>
