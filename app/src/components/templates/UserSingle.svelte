<script lang="ts">

	import MainContent from './MainContent.svelte'
	import UserSingle from 'features/users/UserSingle.svelte'

	export let me = null

</script>


<MainContent>
	<div class="text-xl font-bold py-4">
		<h1 class="font-bold">User Single Page</h1>
	</div>
	<div class="py-4">
		<UserSingle bind:me={ me }/>
	</div>
</MainContent>
