<script lang="ts">

	import Sidebar from 'interfaces/presenters/components/organisms/Sidebar.svelte'
	import Route from 'interfaces/presenters/Route.svelte'

</script>


<div class="flex w-screen justify-center h-screen px-4">
	<div class="flex w-full max-w-screen-lg">
		<Sidebar />
		<Route />
	</div>
</div>