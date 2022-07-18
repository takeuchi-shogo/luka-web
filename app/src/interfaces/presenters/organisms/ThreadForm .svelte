<script lang="ts">

	import ThreadRepository from 'interfaces/database/thread_repository'

	const _thread = new ThreadRepository

	let params: Object = {
		title: '',
		description: '',
	}

	let thread: Object = {}

	let errorMessage: string = ''


	function create() {
		_thread.post(params, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			thread = data
		})
	}

</script>


