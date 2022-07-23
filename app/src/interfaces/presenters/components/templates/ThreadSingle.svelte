
<script lang="ts">

	import ThreadItem from 'interfaces/presenters/components/organisms/ThreadItem.svelte'

	export let thread = {}
	let title:string = ''
	let description:string = ''

</script>


<div>{ thread }</div>
<ThreadItem bind:title bind:description />