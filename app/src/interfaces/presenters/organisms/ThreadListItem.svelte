<script lang="ts">

	import { onMount } from 'svelte'
	import { forEach } from 'lodash'

	import CommentRepository from 'src/interfaces/database/comment_repository'
	import ThreadRepository from 'src/interfaces/database/thread_repository'

	import ThreadHeader from 'src/interfaces/presenters/molecules/ThreadHeader.svelte'
	import ThreadContent from 'src/interfaces/presenters/molecules/ThreadContent.svelte'
	import ThreadFooter from 'src/interfaces/presenters/molecules/ThreadFooter.svelte'


	const _thread = new ThreadRepository
	const _comment = new CommentRepository

	let threads = []
	let comments = []

	let errorMessage: string = ''


	function init() {
		_thread.getList(null, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			threads = data.lists
			forEach(threads, (thread) => {
				_comment.getList({ threadId: thread.id }, (error, _message, data) => {
					if (error) {
						return
					}
					forEach(data.lists, (list) => {
						comments.push(new Comment(list))
					})
				})
			})
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
	{ #each threads as thread }
		<div>
			<ThreadHeader bind:title={ thread.title }/>
		</div>
		<div>
			<ThreadContent bind:thread={ thread }/>
		</div>
		<div>
			<ThreadFooter/>
		</div>
	{ /each }
</div>