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
<!-- <main class="mx-auto">
	<Route path="" component={ TopIndex } />

	<Route path="/signin">
		<SigninIndex />
	</Route>

	<Route path="/signup">
		<SignupIndex />
	</Route>

	<Route path="/comments/:id" let:params>
		<CommentSingle id={ params.id } />
	</Route>
	
	<Route path="/comments">
	</Route>
	
	<Route path="/threads">
		<ThreadIndex />
	</Route>

	<Route path="/threads/:id" let:params>
		<ThreadSingle id={ params.id } />
	</Route>
</main> -->