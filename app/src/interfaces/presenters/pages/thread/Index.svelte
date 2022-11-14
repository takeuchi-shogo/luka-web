<script lang="ts">

	import { onMount } from 'svelte'

	import ThreadRepository from 'interfaces/database/thread_repository'
	
	import ThreadList from 'interfaces/presenters/components/templates/ThreadList.svelte'

	const _thread = new ThreadRepository

	export let me = null

	let threads = []

	let errorMessage = ''


	function init() {
		_thread.getList(null, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			threads = data.lists
		})
	}


	function post(e) {
		console.log('post data', e.detail)
		// _thread.post(e.detail, (error, message, _data) => {
		// 	if (error) {
		// 		errorMessage = message
		// 		return
		// 	}
		// 	init()
		// })
	}


	onMount(() => {
		init()
	})

</script>

{ errorMessage }
<ThreadList bind:threads bind:me={ me } on:post={ post } />
