<script lang="ts">

	import { onMount } from 'svelte'
	import { forEach } from 'lodash'

	import CommentRepository from 'interfaces/database/comment_repository'
	import ThreadRepository from 'interfaces/database/thread_repository'
	
	import ThreadList from 'interfaces/presenters/components/templates/ThreadList.svelte'

	const _thread = new ThreadRepository
	const _comment = new CommentRepository

	let threads = []
	let comments = []

	let errorMessage = ''


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

{ errorMessage }
<ThreadList bind:threads/>