
<script lang="ts">
	import { onMount } from 'svelte'

	import CommentListItem from '../CommentListItem.svelte'
	import ThreadItem from '../ThreadItem.svelte'
	import UserProfile from './UserProfile.svelte'
	import UserTagBar from './UserTagBar.svelte'

	export let me = null
	export let userId = ''
	export let category = ''

	let user = null

	let initialized = false

	function init() {
		if (me) {
			user = me
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
			<UserProfile bind:user={ user } />
		</div>
		<div class="border-b-1">
			<UserTagBar bind:param={ user.screenName }/>
		</div>
		<div>
			{ #if category == '' }
				Thread List
				<!-- <ThreadList/> -->
			{ :else if category == 'threads_and_comments'}
				<CommentListItem/>
			{ :else if category == 'favorites' }
				<!-- <ThreadItem/> -->
				Thread List
			{ /if }
		</div>
	</div>
{ /if }
