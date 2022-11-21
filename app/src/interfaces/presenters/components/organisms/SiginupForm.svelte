<script lang="ts">

	import { createEventDispatcher } from 'svelte'
	
	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'
	import Button from 'interfaces/presenters/components/atoms/button/LoginButton.svelte'
    import FormSelect from '../molecules/FormSelect.svelte';

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

	let genders = [
		{ value: 'men', text: '男性' },
		{ value: 'women', text: '女性' },
		{ value: 'other', text: 'その他' },
	]

	let prefectures = [
		{ value: '1', text: '北海道' },
		{ value: '47', text: '沖縄県' },
	]

	
	function signup() {
		_dispatch('signup', {params: params})
	}

</script>


<form class="bg-white shadow rounded p-10">
	<div class="">
		<div class="px-4 py-3">
			<FormInput type={ types.text } bind:label={ labels.screenName } bind:placeholder={ placeholders.screenName } bind:value={ params.screenName } />
		</div>
		<div class="px-4 py-3">
			<FormInput type={ types.text } bind:label={ labels.displayName } bind:placeholder={ placeholders.displayName } bind:value={ params.displayName } />
		</div>
		<div class="px-4 py-3">
			<FormInput type={ types.password } bind:label={ labels.password } bind:placeholder={ placeholders.password } bind:value={ params.password } />
		</div>
		<div class="px-4 py-3">
			<FormInput type={ types.email } bind:label={ labels.email } bind:placeholder={ placeholders.email } bind:value={ params.email } />
		</div>
		<div class="px-4 py-3">
			<FormInput type={ types.text } bind:label={ labels.age } bind:placeholder={ placeholders.age } bind:value={ params.age } />			
		</div>
		<div class="px-4 py-3">
			<FormSelect bind:label={ labels.gender } bind:value={ placeholders.gender } bind:options={ genders } />
		</div>
		<div class="px-4 py-3">
			<FormSelect bind:label={ labels.prefecture } bind:value={ params.prefecture } options={ prefectures } />
		</div>
	</div>
	<div class="px-4 py-3">
		<Button text={ '新規作成' } on:onClick={ signup } />
	</div>
</form>
