
<script lang="ts">
	import { onMount } from 'svelte'

	import { Router, Route } from 'svelte-routing'

	import type User from 'models/users'

	import CommentListItem from '../CommentListItem.svelte'
	import ProfileEditModal from './ui/ProfileEditModal.svelte'
	import ThreadItem from '../thread/ThreadItem.svelte'
	import ThreadList from '../thread/ThreadList.svelte'
	import UserProfile from './UserProfile.svelte'
	import UserTagBar from './UserTagBar.svelte'

	export let me = null
	export let isOpen:boolean = false

	let user:User = null


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


<style>

</style>


{ #if isOpen }
	<ProfileEditModal me={ me } bind:isOpenModal={ isOpen } />
{ /if }
{ #if initialized }
	<div class="flex flex-col">
		<div class="border-b-1">
			<UserProfile
				bind:user={ user }
				bind:isIdentification={ isIdentification }
				bind:isOpen={ isOpen }
			/>
		</div>
		<div class="border-b-1">
			<UserTagBar bind:param={ user.screenName }/>
		</div>
		<div>
			<Router>
				<Route path="/">
					<ThreadList userId={ user.id }/>
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
