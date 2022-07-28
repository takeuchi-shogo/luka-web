
<script lang="ts">

	import { Route } from 'svelte-routing'

	import CommentSingle from 'interfaces/presenters/pages/comment/Single.svelte'
	import TopIndex from 'interfaces/presenters/pages/top/Index.svelte'
	import SigninIndex from 'interfaces/presenters/pages/signin/Index.svelte'
	import SignupIndex from 'interfaces/presenters/pages/signup/Index.svelte'
	import ThreadIndex from 'interfaces/presenters/pages/thread/Index.svelte'
	import ThreadSingle from 'interfaces/presenters/pages/thread/Single.svelte'

	// const _me = new MeRepository

	// let me = null

	// function init() {
	// 	_me.get((error, message, data) => {
	// 		if(error) {

	// 		}
	// 	})
	// }

</script>


<main class="mx-auto">
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
</main>