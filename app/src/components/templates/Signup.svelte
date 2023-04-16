<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	import SiginupForm from 'features/signup/SiginupForm.svelte'

	const _dispatch = createEventDispatcher()

	
	function signup(e) {
		_dispatch('signup', e.detail.params)
	}

</script>


<div class="flex flex-col items-center justify-center">
	<div class="py-4 my-6">
		<h1 class="font-bold">アカウント新規作成</h1>
	</div>
	<div class="mb-6 sm:w-600 w-full">
		<SiginupForm on:signup={ signup } />
	</div>
</div>
