<script lang="ts">

	import { Link } from 'svelte-routing'

	import Logo from 'interfaces/presenters/components/atoms/Logo.svelte'

	export let id = 100

</script>


<header class="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
	<nav class="md:flex navbar max-w-screen-lx flex justify-between px-4 mx-6">
		<ul class="md:flex text-gray-500 font-bold py-4 text-base">
			<li>
				<Logo/>
			</li>
		</ul>
		<ul class="md:flex text-gray-500 semibold py-4 text-base">
			<li>
				<Link class="mr-5 hover:opacity-75" to="/">トップ</Link>
			</li>
			<li>
				<Link class="mr-5 hover:opacity-75" to="/service">サービス</Link>
			</li>
			<li>
				<Link class="mr-5 hover:opacity-75" to="/about_luka">Lukaについて</Link>
			</li>
			<li>
				<Link class="mr-5 hover:opacity-75" to="/safty">安全</Link>
			</li>
			<li>
				<Link class="hover:opacity-75" to="/support">サポート</Link>
			</li>
		</ul>
		<ul class="md:flex text-gray-500 text-xl font-semibold py-4 text-base">
			<li>
				<Link class="mr-4 hover:opacity-75" to="/signup">sign up</Link>
			</li>
			<li>
				<Link class="hover:opacity-75" to="/signin">sign in</Link>
			</li>
		</ul>
	</nav>
</header>