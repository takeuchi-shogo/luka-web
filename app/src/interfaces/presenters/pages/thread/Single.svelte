
<script lang="ts">

	import { onMount } from 'svelte'

	import ThreadRepository from 'interfaces/database/thread_repository'
	import ThreadSingle from 'interfaces/presenters/components/templates/ThreadSingle.svelte'

	const _thread = new ThreadRepository

	export let id: string = ''

	let thread = {}

	let errorMessage: string = ''


	function init() {
		_thread.get(id, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			thread = data
		})
	}


	onMount(() => {
		// init()
	})

</script>


<ThreadSingle />