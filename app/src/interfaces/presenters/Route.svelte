
<script lang="ts">

	import { Route } from 'svelte-routing'

	import UserSingle from 'interfaces/presenters/pages/users/Single.svelte'
	import CommentSingle from 'interfaces/presenters/pages/comment/Single.svelte'
	import CommingSoon from 'interfaces/presenters/CommingSoon.svelte'
	import OtherIndex from 'interfaces/presenters/pages/other/Index.svelte'
	import ProfileIndex from 'interfaces/presenters/pages/profile/Index.svelte'
	import TopIndex from 'interfaces/presenters/pages/top/Index.svelte'
	import SigninIndex from 'interfaces/presenters/pages/signin/Index.svelte'
	import SignupIndex from 'interfaces/presenters/pages/signup/Index.svelte'
	import ThreadIndex from 'interfaces/presenters/pages/thread/Index.svelte'
	import ThreadSingle from 'interfaces/presenters/pages/thread/Single.svelte'

	// const _me = new MeRepository

	export let me = null

	// function init() {
	// 	_me.get((error, message, data) => {
	// 		if(error) {

	// 		}
	// 	})
	// }

</script>


<main class="flex flex-col flex-1">
	<!-- before signin -->
	{ #if !me }

		<Route path="" component={ TopIndex } />

		<Route path="/service">
			<CommingSoon />
		</Route>

		<Route path="/about_luka">
			<CommingSoon />
		</Route>

		<Route path="/safty">
			<CommingSoon />
		</Route>

		<Route path="/support">
			<CommingSoon />
		</Route>

		<!--  -->
		<Route path="/signin">
			<SigninIndex />
		</Route>

		<Route path="/signup">
			<SignupIndex />
		</Route>

	{ :else }

		<Route path="/:screenName">
			<UserSingle bind:me={ me }/>
		</Route>

		<Route path="/:screenName/:category" let:params>
			<UserSingle bind:me={ me } category={ params.category } />
		</Route>

		<!-- after signin -->
		<Route path="/comments/:id" let:params>
			<CommentSingle id={ params.id } />
		</Route>
		
		<Route path="/communities">
			<CommingSoon />
		</Route>

		<Route path="/messages">
			<CommingSoon />
		</Route>

		<Route path="/others">
			<OtherIndex />
		</Route>

		<Route path="/others/:category" let:params>
			<OtherIndex category={ params.category } />
		</Route>

		<Route path="/profile">
			<ProfileIndex bind:me />
		</Route>

		<Route path="/search">
			<CommingSoon />
		</Route>
		
		<Route path="/threads">
			<ThreadIndex bind:me={ me } />
		</Route>

		<Route path="/threads/:id" let:params>
			<ThreadSingle id={ params.id } />
		</Route>

	{ /if }
</main>
