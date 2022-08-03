<script lang="ts">

	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'

	export const me = null
	
	let types = {
		password: 'password',
	}

	let labels = {
		oldPassword: '現在のパスワード',
		newPassword: '新しいパスワード',
		checkPassword: 'パスワードを確認',
	}

	// let placeholders = {
	// 	oldPassword: '現在のパスワード',
	// 	newPassword: '新しいパスワード',
	// 	checkPassword: 'パスワードを確認',
	// }

	let params = {
		oldPassword: '',
		newPassword: '',
		checkPassword: '',
	}


	function save() {
		console.log(params)
	}

</script>


<div class="w-full">
	<h1 class="font-bold">Password Page</h1>
	<FormInput type={ types.password } label={ labels.oldPassword } bind:value={ params.oldPassword }/>
	<FormInput type={ types.password } label={ labels.newPassword } bind:value={ params.newPassword }/>
	<FormInput type={ types.password } label={ labels.checkPassword } bind:value={ params.checkPassword }/>
	<div>
		<button
			class="text-sm text-gray-500 bg-pink-300 hover:opacity-75 font-medium px-4 py-2 text-center rounded"
			on:click|preventDefault={ save }
		>
			保存する
		</button>
	</div>
</div>