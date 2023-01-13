
<script lang="ts">

	import { onMount } from 'svelte'

	import ThreadRepository from 'interfaces/database/thread_repository'
	import ThreadSingle from 'interfaces/presenters/components/templates/ThreadSingle.svelte'
	import type Thread from 'domain/threads'

	const _thread = new ThreadRepository

	export let id: string = ''

	let thread:Thread

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
		init()
	})

</script>


<ThreadSingle bind:thread />
