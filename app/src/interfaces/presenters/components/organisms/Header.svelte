<script lang="ts">

	import { Link } from 'svelte-routing'

	import Logo from 'interfaces/presenters/components/atoms/Logo.svelte'

	export let id = 100

</script>


<header class="bg-indigo-500">
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