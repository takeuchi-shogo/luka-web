<script lang="ts">

	import { createEventDispatcher } from 'svelte'
	
	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'
	import Button from 'interfaces/presenters/components/atoms/button/Button.svelte'

	const _dispatch = createEventDispatcher()

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
		screenName: 'ログインIDを入力',
		displayName: 'アカウント名を入力',
		password: '6 〜 12文字',
		email: 'xxxxxxx@xxxx.xx',
		age: '年齢',
		gender: '性別',
		prefecture: '県名',
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
		_dispatch('signup', params)
	}

</script>


<form class="bg-white shadow rounded p-10">
	<div class="">
		<FormInput type={ types.text } bind:label={ labels.screenName } bind:placeholder={ placeholders.screenName } bind:value={ params.screenName } />
		<FormInput type={ types.text } bind:label={ labels.displayName } bind:placeholder={ placeholders.displayName } bind:value={ params.displayName } />
		<FormInput type={ types.password } bind:label={ labels.password } bind:placeholder={ placeholders.password } bind:value={ params.password } />
		<FormInput type={ types.email } bind:label={ labels.email } bind:placeholder={ placeholders.email } bind:value={ params.email } />
		<FormInput type={ types.text } bind:label={ labels.age } bind:placeholder={ placeholders.age } bind:value={ params.age } />
		<FormInput type={ types.text } bind:label={ labels.gender } bind:placeholder={ placeholders.gender } bind:value={ params.gender } />
		<FormInput type={ types.text } bind:label={ labels.prefecture } bind:placeholder={ placeholders.prefecture } bind:value={ params.prefecture } />
	</div>
	<Button text={ '新規作成' } on:onClick={ signup } />
</form>