
<script lang="ts">

	import { Route } from 'svelte-routing'

	import ArticleIndex from './pages/articles/Index.svelte'
	import ArticleSingle from './pages/articles/Single.svelte'
	import UserSingle from './pages/users/Single.svelte'
	import CommentSingle from './pages/comment/Single.svelte'
	import CommingSoon from './CommingSoon.svelte'
	import OtherIndex from './pages/settings/Index.svelte'
	import ProfileIndex from './pages/profile/Index.svelte'
	import TopIndex from './pages/top/Index.svelte'
	import SigninIndex from './pages/signin/Index.svelte'
	import SignupIndex from './pages/signup/Index.svelte'


	export let me = null

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

		<Route path="/articles">
			<ArticleIndex bind:me={ me } />
		</Route>

		<Route path="/articles/:id" let:params>
			<ArticleSingle id={ params.id } />
		</Route>

		<!-- <Route path="/:screenName">
			<UserSingle bind:me={ me }/>
		</Route> -->

		<Route path="/:screenName/*">
			<UserSingle bind:me={ me }/>
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

		<Route path="/settings">
			<OtherIndex bind:me={ me }/>
		</Route>

		<Route path="/settings/:category" let:params>
			<OtherIndex category={ params.category } bind:me={ me }/>
		</Route>

		<Route path="/profile">
			<ProfileIndex bind:me />
		</Route>

		<Route path="/search">
			<CommingSoon />
		</Route>

	{ /if }
</main>
