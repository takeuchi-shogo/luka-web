<script lang="ts">

	import { Router, Link, Route } from 'svelte-routing'

	import CommentSingle from './interfaces/presenters/pages/comment/Single.svelte'
	import TopIndex from './interfaces/presenters/pages/top/Index.svelte'
	import SigininIndex from './interfaces/presenters/pages/signin/Index.svelte'
	import ThreadIndex from './interfaces/presenters/pages/thread/Index.svelte'
	import ThreadSingle from './interfaces/presenters/pages/thread/Single.svelte'

	import './lib/Tailwind.css'

	export let id = 120
</script>


<!-- <TailwindCss /> -->

<Router>
	<nav class="navbar w-full bg-white">
		<Link class="mr-5 hover:text-gray-900" to="/">top</Link>
		<Link class="mr-5 hover:text-gray-900" to="/siginin">siginin</Link>
		<Link class="mr-5 hover:text-gray-900" to="/comments/{ id }">comment</Link>
		<!-- <Link to="/comments"></Link>  -->
		<Link class="mr-5 hover:text-gray-900" to="/threads">Thread</Link>
		<Link class="mr-5 hover:text-gray-900" to="/threads/{ id }">Thread Single</Link>
	</nav>
	<main>
		<Route path="" component={ TopIndex } />

		<Route path="/siginin">
			<SigininIndex />
		</Route>
		<Route path="/comments/:id" let:params>
			<CommentSingle id={ params.id } />
		</Route>
		<Route path="/comments">
		</Route>
		<Route path="/threads">
			<ThreadIndex />
		</Route>
		<Route path="/threads/:id" let:params>
			<ThreadSingle id={ params.id } />
		</Route>
	</main>
</Router>
