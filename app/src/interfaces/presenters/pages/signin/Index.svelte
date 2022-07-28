<script lang="ts">

	import { onMount } from 'svelte'

	import UserRepository from 'interfaces/database/user_repository'

	import Siginin from "interfaces/presenters/components/templates/Siginin.svelte"

	const _user = new UserRepository

	let params = {
		id : '',
		password : '',
	}

	let errorMessage: string = ''


	function signin(event) {
		console.log('サインインします', event.detail.params)
		// _user.signin(params, (error, message, data) => {
		// 	if (error) {
		// 		errorMessage = message
		// 		return
		// 	}
		// 	window.location.href = '/home'
		// })
	}

	function init() {
		console.log('signin')
	}


	onMount(() => {
		init()
	})

</script>

{ errorMessage }
<Siginin on:signin={ signin }/>