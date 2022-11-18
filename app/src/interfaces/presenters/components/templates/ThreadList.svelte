<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	import { Link } from 'svelte-routing'

	import ThreadListItem from 'interfaces/presenters/components/organisms/ThreadListItem.svelte'
	import ThreadForm from 'interfaces/presenters/components/organisms/ThreadForm.svelte'

	const _dispatch = createEventDispatcher()

	export let me = null
	export let threads = []

	let threadId: number = 10

	$:{ console.log(threads)}


	function post(e) {
		_dispatch('post', e.detail.params)
	}

</script>


<div class="flex flex-col flex-grow mx-8 px-4">
	<div class="py-4">
		<h1 class="text-xl font-bold">
			Thread List Page
		</h1>
	</div>
	<div class="py-4">
		<ThreadForm bind:me={ me } on:post={ post } />
	</div>
	<div class="py-4 hover:bg-gray-100 border-b">
		{ #each threads as thread }
			<Link to="/threads/{ threadId }">
				<ThreadListItem bind:thread />
			</Link>
		{/each}
	</div>
</div>
