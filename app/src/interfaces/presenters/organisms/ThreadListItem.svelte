<script lang="ts">

	import { onMount } from 'svelte'

	import ThreadRepository from 'src/interfaces/database/thread_repository'

	import ThreadHeader from 'src/interfaces/presenters/molecules/ThreadHeader.svelte'
	import ThreadContent from 'src/interfaces/presenters/molecules/ThreadContent.svelte'
	import ThreadFooter from 'src/interfaces/presenters/molecules/ThreadFooter.svelte'


	const _thread = new ThreadRepository

	// let thread: Object = {}

	let lists = []

	let errorMessage: string = ''


	function init() {
		_thread.getList(null, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			lists = data.lists
		})
	}


	onMount(() => {
		init()
	})

</script>


<div>
	{ #if errorMessage }
		{ errorMessage }
	{ /if }
	{ #each lists as list }
		<div>
			<ThreadHeader bind:title={ list.title }/>
		</div>
		<div>
			<ThreadContent bind:thread={ list }/>
		</div>
		<div>
			<ThreadFooter/>
		</div>
	{ /each }
</div>