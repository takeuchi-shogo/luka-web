
<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	import SigninForm from "interfaces/presenters/components/organisms/SigninForm.svelte"

	const _dispatch = createEventDispatcher()

	function signin(event) {
		_dispatch('signin', event.detail)
	}

</script>


<div class="flex flex-col items-center justify-center">
	<SigninForm on:signin={ signin }/>
</div>