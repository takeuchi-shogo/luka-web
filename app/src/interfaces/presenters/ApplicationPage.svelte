<script lang="ts">

	import Sidebar from 'interfaces/presenters/components/organisms/Sidebar.svelte'
	import Route from 'interfaces/presenters/Route.svelte'

	export let me = null

</script>


<div class="flex w-screen justify-center h-screen sm:px-4">
	<div class="flex md:flex-col-2 w-full max-w-screen-xl">
		<Sidebar me={ me } />
		<Route bind:me={ me } />
	</div>
</div>
