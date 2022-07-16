<script lang="ts">

	import UserRepository from '../../../database/user_repository'

	import Siginin from "../../templates/Siginin.svelte"

	const _user = new UserRepository

	let params = {
		id : '',
		password : '',
	}

	let errorMessage: string = ''


	// function signin() {
	// 	_user.signin(params, (error, message, data) => {
	// 		if (error) {
	// 			errorMessage = message
	// 			return
	// 		}
	// 		window.location.href = '/home'
	// 	})
	// }

</script>


<Siginin  />