<script lang="ts">

	import UserSingle from 'components/templates/UserSingle.svelte'

	export let me =null
	export let category = ''
	
</script>


<UserSingle bind:me={ me } category={ category }/>
