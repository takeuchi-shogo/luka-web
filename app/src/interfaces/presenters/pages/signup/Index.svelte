<script lang="ts">
import User from 'domain/users';


	import MeRepository from 'interfaces/database/me_repository'
	import Signup from 'interfaces/presenters/components/templates/Signup.svelte'

	const _me = new MeRepository

	let me = {}

	let errorMessage: string = ''


	function signup(e) {
		_me.create(e.detail.params, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			me = data
		})
	}

</script>


<Signup on:signup={ signup } />