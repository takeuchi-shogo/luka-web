<script lang="ts">

	import { onMount } from 'svelte'
	import { forEach } from 'lodash'

	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'

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


<article class="">
	<div class="flex">
		<div class="md:w-32 md:h-32">User Icon</div>
		<div>
			<div>User Name</div>
			<div>プロフィール写真を選択</div>
		</div>
	</div>
	<form>
		<!-- DisplayName -->
		<FormInput  type={ types.text } bind:label={ labels.displayName } bind:placeholder={ placeholders.displayName } bind:value={ params.displayName } />
		<!-- self introduction -->
		<!-- <FormInput /> -->
		<!-- Email -->
		<FormInput type={ types.email } bind:label={ labels.email } bind:placeholder={ placeholders.email } bind:value={ params.email } />
		<!-- Tel -->
		<!-- <FormInput /> -->
		<!-- Age -->
		<FormInput type={ types.text } bind:label={ labels.age } bind:placeholder={ placeholders.age } bind:value={ params.age } />
		<!-- Gender -->
		<FormInput type={ types.text } bind:label={ labels.gender } bind:placeholder={ placeholders.gender } bind:value={ params.gender } />
		<!-- Prefecture -->
		<FormInput type={ types.text } bind:label={ labels.prefecture } bind:placeholder={ placeholders.prefecture } bind:value={ params.prefecture } />
		<div>
			<button
				class="text-sm text-gray-500 bg-pink-300 hover:opacity-75 font-medium px-4 py-2 text-center rounded"
			>
				保存する
			</button>
		</div>
	</form>
</article>