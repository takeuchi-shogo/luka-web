<script lang="ts">

	import { Router, Link, Route } from 'svelte-routing'

	import Logo from 'interfaces/presenters/components/atoms/Logo.svelte'
	import CommentSingle from './interfaces/presenters/pages/comment/Single.svelte'
	import TopIndex from './interfaces/presenters/pages/top/Index.svelte'
	import SigninIndex from './interfaces/presenters/pages/signin/Index.svelte'
	import SignupIndex from './interfaces/presenters/pages/signup/Index.svelte'
	import ThreadIndex from './interfaces/presenters/pages/thread/Index.svelte'
	import ThreadSingle from './interfaces/presenters/pages/thread/Single.svelte'

	import Index from './interfaces/presenters/index/Index.svelte'
	import Dashboard from './interfaces/presenters/dashboard/Index.svelte'

	import './lib/Tailwind.css'

	export let id = 120

	let me = false
</script>


<!-- <TailwindCss /> -->

<Router>
	<!-- Header.svelte -->
	<!-- <header class="bg-indigo-500">
		<nav class="md:flex navbar w-full flex justify-between px-4">
			<ul class="md:flex text-lime-100 font-light py-4 text-base">
				<li>
					<Logo/>
				</li>
			</ul>
			<ul class="md:flex text-lime-100 font-light py-4 text-base">
				<li>
					<Link class="mr-5 hover:text-gray-400" to="/">top</Link>
				</li>
				<li>
					<Link class="mr-5 hover:text-gray-400" to="/comments/{ id }">comment</Link>
				</li>
				<li>
					<Link class="mr-5 hover:text-gray-400" to="/threads">Thread</Link>
				</li>
				<li>
					<Link class="mr-5 hover:text-gray-400" to="/threads/{ id }">Thread Single</Link>
				</li>
			</ul>
			<ul class="md:flex text-lime-100 text-xl font-light py-4 text-base">
				<li>
					<Link class="mr-5 hover:text-gray-400" to="/signup">sign up</Link>
				</li>
				<li>
					<Link class="mr-5 hover:text-gray-400" to="/signin">sign in</Link>
				</li>
			</ul>
		</nav>
	</header>

	<main class="mx-auto">
		<Route path="" component={ TopIndex } />

		<Route path="/signin">
			<SigninIndex />
		</Route>

		<Route path="/signup">
			<SignupIndex />
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
		</Route> -->
		{ #if me }
			<Index />
		{ :else }
			<Dashboard />
		{ /if }
	<!-- </main> -->
</Router>
