<script lang="ts">

	import MeRepository from 'interfaces/database/me_repository'
	import Signup from 'interfaces/presenters/components/templates/Signup.svelte'

	const _me = new MeRepository

	let me = {}

	let errorMessage: string = ''


	function signup(e) {
		console.log(e.detail)
		_me.create(e.detail, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			me = data
		})
	}

</script>

{ errorMessage }
<Signup on:signup={ signup } />