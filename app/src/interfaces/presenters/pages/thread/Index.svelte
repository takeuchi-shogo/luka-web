<script lang="ts">

	import { onMount } from 'svelte'

	import ThreadRepository from 'interfaces/database/thread_repository'
	
	import ThreadList from 'interfaces/presenters/components/templates/ThreadList.svelte'

	const _thread = new ThreadRepository

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


	onMount(() => {
		init()
	})

</script>

{ errorMessage }
<ThreadList bind:threads/>