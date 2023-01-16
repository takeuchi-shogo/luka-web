
<script lang="ts">
	import { onMount } from 'svelte'

	import { Router, Route } from 'svelte-routing'

	import type User from 'domain/users'

	import CommentListItem from '../CommentListItem.svelte'
	import ThreadItem from '../ThreadItem.svelte'
	import UserProfile from './UserProfile.svelte'
	import UserTagBar from './UserTagBar.svelte'

	export let me = null

	let user:User = null

	let value

	let initialized = false
	let isIdentification: boolean = false

	function init() {
		if (me) {
			user = me
			if (me.id == user.id) {
				isIdentification = true
			}
			initialized = true
		} else {
			
		}
	}

	onMount(() => {
		init()
	})

</script>

{ #if initialized }
	<div class="flex flex-col">
		<div class="border-b-1">
			<UserProfile bind:user={ user } bind:isIdentification={ isIdentification }/>
		</div>
		<div class="border-b-1">
			<UserTagBar bind:param={ user.screenName }/>
		</div>
		<div>
			<Router>
				<Route path="/">
					Thread List
				</Route>
				<Route path="threads_and_comments">
					<CommentListItem/>
				</Route>
				<Route path="favorites">
					Favorite List
				</Route>
			</Router>
		</div>
	</div>
{ /if }
