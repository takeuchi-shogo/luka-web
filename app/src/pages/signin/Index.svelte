<script lang="ts">

	// import { onMount } from 'svelte'

	import MeRepository from 'database/me_repository'

	import Siginin from "components/templates/Siginin.svelte"

	const _me = new MeRepository

	// let params = {
	// 	screenName : '',
	// 	password : '',
	// }

	// let errorMessage: string = ''


	// function signin(event) {
		// _me.signin(event.detail.params, (error, message, data) => {
		// 	if (error) {
		// 		errorMessage = message
		// 		return
		// 	}
		// 	window.location.href = '/threads'
		// })
	// }

	// function init() {
	// 	console.log('signin')
	// }


	// onMount(() => {
	// 	init()
	// })

</script>

<!-- { errorMessage } -->
<Siginin/>
