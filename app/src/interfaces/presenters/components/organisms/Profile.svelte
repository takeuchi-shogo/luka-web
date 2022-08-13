<script lang="ts">

	import { onMount } from 'svelte'
	import { forEach } from 'lodash'

	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'
import FormSelect from '../molecules/FormSelect.svelte';

	export let me = null

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

	let ages = [
		{ id: 1, text: '男性' },
		{ id: 2, text: '女性' },
		{ id: 3, text: '設定なし' },
	]


	function init() {
		if (me) {
			forEach(me, (_value, key) => {
				if (params.hasOwnProperty(key)) {
					params[key] = me[key]
				}
			})
		}
	}

	onMount(() => {
		init()
	})

</script>


<article class="md:max-w-md">
	<div class="flex px-4 py-3">
		<div class="md:w-32 md:h-32">User Icon</div>
		<div>
			<div>User Name</div>
			<div>プロフィール写真を選択</div>
		</div>
	</div>
	<form>
		<!-- DisplayName -->
		<div class="px-4 py-3">
			<FormInput  type={ types.text } bind:label={ labels.displayName } bind:placeholder={ placeholders.displayName } bind:value={ params.displayName } />
		</div>
		<!-- self introduction -->
		<!-- <FormInput /> -->
		<!-- Email -->
		<div class="px-4 py-3">
			<FormInput type={ types.email } bind:label={ labels.email } bind:placeholder={ placeholders.email } bind:value={ params.email } />
		</div>
		<!-- Tel -->
		<!-- <FormInput /> -->
		<!-- Age -->
		<div class="px-4 py-3">
			<FormInput type={ types.text } bind:label={ labels.age } bind:placeholder={ placeholders.age } bind:value={ params.age } />
		</div>
		<!-- Gender -->
		<div class="px-4 py-3">
			<FormSelect bind:label={ labels.gender } bind:value={ params.age } options={ ages }/>
		</div>
		<!-- <FormInput type={ types.text } bind:label={ labels.gender } bind:placeholder={ placeholders.gender } bind:value={ params.gender } /> -->
		<!-- Prefecture -->
		<div class="px-4 py-3">
			<FormInput type={ types.text } bind:label={ labels.prefecture } bind:placeholder={ placeholders.prefecture } bind:value={ params.prefecture } />
		</div>
		<div class="px-4 py-3">
			<button
				class="text-sm text-gray-500 bg-pink-300 hover:opacity-75 font-medium px-4 py-2 text-center rounded"
			>
				保存する
			</button>
		</div>
	</form>
</article>