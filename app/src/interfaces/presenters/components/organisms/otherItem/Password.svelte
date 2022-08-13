<script lang="ts">

	import { Link } from 'svelte-routing'

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

	let sessionsCnt: number = 4


	function save() {
		console.log(params)
	}

</script>


<div class="w-full">
	<div class="h-14 flex items-center px-4">
		<div class="w-12 items-center">
			<div>
				<Link to="/others/accounts">
					<i class="fa-solid fa-arrow-left"></i>
				</Link>
			</div>
		</div>
		<div>
			<h1 class="font-bold">Password Page</h1>
		</div>
	</div>
	<div>
		<div class="px-4 py-3">
			<FormInput type={ types.password } label={ labels.oldPassword } bind:value={ params.oldPassword }/>
			<div class="font-light text-sm text-gray-500 hover:opacity-75 pb-4 border-b-2 border-gray-100">
				<Link to="/others/password/reset">パスワードをお忘れですか？</Link>
			</div>
		</div>
		<div class="px-4 py-3">
			<FormInput type={ types.password } label={ labels.newPassword } bind:value={ params.newPassword }/>
		</div>
		<div class="px-4 py-3">
			<FormInput type={ types.password } label={ labels.checkPassword } bind:value={ params.checkPassword }/>
		</div>
	</div>
	<div class="px-4 py-3">
		<p class="text-gray-500 font-light">
			パスワードを変更すると、現在使っているセッションを除く、アクティブなLukaセッション全てからログアウトされます。
			アカウントにアクセスしている<Link to="/others/sessions">{ sessionsCnt }件のアプリケーション</Link>に影響はありません
		</p>
	</div>
	<div class="px-4 py-3">
		<button
			class="text-sm text-gray-500 bg-pink-300 hover:opacity-75 font-medium px-4 py-2 text-center rounded"
			on:click|preventDefault={ save }
		>
			保存する
		</button>
	</div>
</div>