<script lang="ts">

	import MainContent from './MainContent.svelte'
	import UserSingle from '../organisms/users/UserSingle.svelte'

	export let me = null
	export let category = ''

</script>


<MainContent>
	<div class="text-xl font-bold py-4">
		<h1 class="font-bold">User Single Page</h1>
	</div>
	<div class="py-4">
		<UserSingle bind:me={ me } category={ category }/>
	</div>
</MainContent>
