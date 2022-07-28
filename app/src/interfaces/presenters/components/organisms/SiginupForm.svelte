<script lang="ts">
	
	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'
	import Button from 'interfaces/presenters/components/atoms/Button.svelte'


	let types = {
		text: 'text',
		email: 'email',
		password: 'password',
	}

	let labels = {
		screenName: 'ログインID',
		displayName: 'アカウント名',
		password: 'パスワード',
		email: 'メールアドレス',
		age: '年齢',
		gender: '性別',
		prefecture: 'お住まい(県名)',
	}

	let placeholders = {
		screenName: '',
	}

	let params = {
		screenName: '',
		displayName: '',
		password: '',
		email: '',
		age: '',
		gender: '',
		prefecture: '',
	}

	
	function signup() {
		console.log('新規作成', params)
	}

</script>


<form class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
	<div class="mb-10">
		<FormInput type={ types.text } bind:label={ labels.screenName } bind:placeholder={ placeholders.screenName } bind:value={ params.screenName } />
		<FormInput type={ types.text } bind:label={ labels.displayName } bind:value={ params.displayName } />
		<FormInput type={ types.password } bind:label={ labels.password } bind:value={ params.password } />
		<FormInput type={ types.email } bind:label={ labels.email } bind:value={ params.email } />
		<FormInput type={ types.text } bind:label={ labels.age } bind:value={ params.age } />
		<FormInput type={ types.text } bind:label={ labels.gender } bind:value={ params.gender } />
		<FormInput type={ types.text } bind:label={ labels.prefecture } bind:value={ params.prefecture } />
	</div>
	<Button text={ '新規作成' } on:onClick={ signup } />
</form>