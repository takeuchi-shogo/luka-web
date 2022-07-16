<script lang="ts">

	import ThreadHeader from 'src/interfaces/presenters/molecules/ThreadHeader.svelte'
	import ThreadContent from 'src/interfaces/presenters/molecules/ThreadContent.svelte'
	import ThreadFooter from 'src/interfaces/presenters/molecules/ThreadFooter.svelte'

	export let thread

</script>


<ThreadHeader bind:title={ thread.title }/>
<ThreadContent bind:thread={ thread }/>
<ThreadFooter/>