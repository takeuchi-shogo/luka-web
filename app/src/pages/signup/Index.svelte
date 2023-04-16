<script lang="ts">

	import MeRepository from '../../database/me_repository'
	import Signup from 'components/templates/Signup.svelte'

	const _me = new MeRepository

	let me = {}

	let errorMessage: string = ''

	let siginParams = {
		screenName: '',
		password: '',
	}


	function signup(e) {
		// _me.create(e.detail, (error, message, _data) => {
		// 	if (error) {
		// 		errorMessage = message
		// 		return
		// 	}
		// 	_me.signin({ screenName: e.detail.screenName, password: e.detail.password}, (error, message, data) => {
		// 		if (error) {
		// 			errorMessage = message
		// 			return
		// 		}
		// 		window.location.href = '/threads'
		// 	})
		// })
	}

</script>

{ errorMessage }
<Signup on:signup={ signup } />
