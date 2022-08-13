
<script lang="ts">

	import { Link } from 'svelte-routing'


	import Button from 'interfaces/presenters/components/atoms/button/Button.svelte'
	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'

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


	function save() {
		console.log(me)
	}


	function signout() {
		console.log('ログアウトしました')
	}

</script>


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
					<FormInput type={ types.text } label={ labels.screenName } placeholder={ placeholders.screenName } value={ params.screenName } />
				</div>
				<div class="px-4 py-3">
					<Button text={ '保存' }/>
				</div>
			</form>
		</div>
		<div>
			<div class="w-full text-center">
				<span class="text-red-600" on:click={ signout }>ログアウト</span>
			</div>
		</div>
	</div>
</div>