<!-- 
<script lang="ts">
	import Index from 'interfaces/presenters/index/Index.svelte';
	import Dashboard from 'interfaces/presenters/dashboard/Index.svelte'

	const _me = new MeRepository

	let me = null

	function init() {
		_me.get((error, message, data) => {
			if(error) {

			}
		})
	}


</script>


{ #if !me }
	<Index />
{ :else }
	<Dashboard />
{ /if } -->