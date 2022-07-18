
<script lang="ts">

	import ThreadItem from 'interfaces/presenters/organisms/ThreadItem.svelte'

	export let thread = {}
	let title:string = ''
	let description:string = ''

</script>


<ThreadItem bind:title bind:description />