
<script lang="ts">

	import { onMount } from 'svelte'

	import ThreadRepository from 'interfaces/database/thread_repository'

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
		init()
	})

</script>


<div>Thread Single</div>
<div>ID: { id }</div>