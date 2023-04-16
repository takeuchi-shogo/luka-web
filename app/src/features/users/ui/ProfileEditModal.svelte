
<script lang="ts">

	import { onMount } from 'svelte'
	import { forEach } from 'lodash'

	import Me from 'database/me_repository'

	import Button from 'components/atoms/buttons/Button.svelte'
	import FormInput from 'components/molecules/FormInput.svelte'
	import FormSelect from 'components/molecules/FormSelect.svelte'
	import ModalCard from 'components/atoms/modals/ModalCard.svelte'
	import ModalContainer from 'components/atoms/modals/ModalContainer.svelte'
	import ModalContent from 'components/atoms/modals/ModalContent.svelte'
	import ModalFooter from 'components/atoms/modals/ModalFooter.svelte'
	import ModalHeader from 'components/atoms/modals/ModalHeader.svelte'


	const _me = new Me

	export let me = null
	export let isOpenModal:boolean = false

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
		{ value: 1, text: '男性' },
		{ value: 2, text: '女性' },
		{ value: 3, text: 'その他' },
	]

	let prefectures = [
		{ value: 1, text: '北海道' },
		{ value: 47, text: '沖縄県' },
	]

	let errorMessage:string = ''

	let initialize:boolean = false


	function init() {
		if (me) {
			forEach(me, (_value, key) => {
				if (params.hasOwnProperty(key)) {
					params[key] = me[key]
				}
			})
			initialize = true
		}
	}


	function save() {
		_me.save(params, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			forEach(data, (_value, key) => {
				if (params.hasOwnProperty(key)) {
					params[key] = data[key]
				}
			})
			isOpen()
		})
	}


	function isOpen() {
		isOpenModal = !isOpenModal
	}


	onMount(() => {
		init()
	})

</script>


<style>

</style>


<ModalContainer>
	<ModalCard>
		<ModalHeader>
			<h3 class="text-xl font-semibold text-gray-500">
				投稿
			</h3>
			<button
				type="button"
				class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
				on:click={ isOpen }
			>
				<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
				<span class="sr-only">Close modal</span>
			</button>
		</ModalHeader>
		<ModalContent>
			<form>
				<!-- DisplayName -->
				<div class="px-4 py-3">
					<FormInput type={ types.text } bind:label={ labels.displayName } bind:placeholder={ placeholders.displayName } bind:value={ params.displayName } />
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
					<FormSelect bind:label={ labels.gender } bind:value={ params.gender } options={ genders }/>
				</div>
				<!-- <FormInput type={ types.text } bind:label={ labels.gender } bind:placeholder={ placeholders.gender } bind:value={ params.gender } /> -->
				<!-- Prefecture -->
				<div class="px-4 py-3">
					<FormSelect bind:label={ labels.prefecture } bind:value={ params.prefecture } options={ prefectures } />
				</div>
			</form>
		</ModalContent>
		<ModalFooter>
			<Button on:click={ save }>
				保存する
			</Button>
		</ModalFooter>
	</ModalCard>
</ModalContainer>
