
<script lang="ts">

	import { onMount } from 'svelte'
	import { Link } from 'svelte-routing'

	import Me from 'interfaces/database/me_repository'

	import Button from 'interfaces/presenters/components/atoms/buttons/Button.svelte'
	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'
	import ErrorMessage from 'interfaces/presenters/components/atoms/ErrorMessage.svelte'

	const _me = new Me

	export let me = null

	let types = {
		text: 'text'
	}

	let labels = {
		screenName: 'ユーザー名'
	}

	let placeholders = {
		screenName: ''
	}

	let params = {
		screenName: ''
	}

	let initialized:boolean = false

	let errorMessage:string = ''


	function save() {
		_me.save(params, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			params = data
		})
	}


	function signout() {
		_me.signout((error, _message) => {
			if (error) {
				return
			}
			location.href = '/'
		})
	}


	function init() {
		if (me) {
			params.screenName = me.screenName
			initialized = true
		}
	}

	onMount(() => {
		init()
	})

</script>


{ #if initialized}
<div>
	<div class="h-14 flex items-center px-4">
		<div class="w-12 items-center">
			<div>
				<Link to="/others/accounts">
					<i class="fa-solid fa-arrow-left"></i>
				</Link>
			</div>
		</div>
		<div>
			<h1 class="font-bold">AccountEdit Page</h1>
		</div>
	</div>
	<div>
		<div>
			<form>
				<div class="px-4 py-3">
					<FormInput type={ types.text } label={ labels.screenName } placeholder={ placeholders.screenName } bind:value={ params.screenName } />
					<ErrorMessage message={ errorMessage } />
				</div>
				<div class="px-4 py-3">
					<Button on:click={ save }>
						保存
					</Button>
				</div>
			</form>
		</div>
		<div>
			<div class="w-full text-center hover:bg-rose-100 focus:outline-none focus:ring-0 transition ease-in-out duration-150">
				<div class="py-3">
					<span class="text-red-600 text-sm" on:click={ signout }>ログアウト</span>
				</div>
			</div>
		</div>
	</div>
</div>
{ /if }
