<script lang="ts">

	import Profile from 'interfaces/presenters/components/organisms/Profile.svelte'

	export let me = null

</script>


<div class="flex flex-col flex-grow mx-8 px-4">
	<div class="py-4">
		<h1 class="text-xl font-bold">
			Profile Page
		</h1>
	</div>
	<Profile bind:me />
</div>
