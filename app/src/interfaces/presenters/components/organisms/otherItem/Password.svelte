<script lang="ts">

	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'

	
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

</script>


<div class="w-full">
	password Page
	<FormInput type={ types.password } label={ labels.oldPassword } bind:value={ params.oldPassword }/>
	<FormInput type={ types.password } label={ labels.newPassword } bind:value={ params.newPassword }/>
	<FormInput type={ types.password } label={ labels.checkPassword } bind:value={ params.checkPassword }/>
	<div>
		<button
			class="text-sm text-gray-500 bg-pink-300 hover:opacity-75 font-medium px-4 py-2 text-center rounded"
		>
			保存する
		</button>
	</div>
</div>