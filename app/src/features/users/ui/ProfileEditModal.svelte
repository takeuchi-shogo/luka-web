
<script lang="ts">

	import { onMount } from 'svelte'
	import { forEach } from 'lodash'

	import Me from 'database/me_repository'

	import { Button, Form, Modal, Input, Select } from 'spaper'
	// import FormInput from 'components/molecules/FormInput.svelte'
	// import FormSelect from 'components/molecules/FormSelect.svelte'
	// import ModalCard from 'components/atoms/modals/ModalCard.svelte'
	// import ModalContainer from 'components/atoms/modals/ModalContainer.svelte'
	import ModalContent from 'components/atoms/modals/ModalContent.svelte'
	import ModalFooter from 'components/atoms/modals/ModalFooter.svelte'
	// import ModalHeader from 'components/atoms/modals/ModalHeader.svelte'
	// import Select from 'components/atoms/inputs/Select.svelte';


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


<Modal bind:active={ isOpenModal } title="Edit Profile" class="w-3/4">
	
	<ModalContent>
		<form>
			<!-- DisplayName -->
			<Form>
				<Input label={ 'Account Name' } bind:placeholder={ placeholders.displayName } bind:value={ params.displayName }/>
			</Form>
			<!-- self introduction -->
			<!-- <FormInput /> -->
			<!-- Email -->
			<Form>
				<Input label={ 'Email Address' } bind:placeholder={ placeholders.email } bind:value={ params.email }/>
			</Form>
			<!-- Tel -->
			<!-- <FormInput /> -->
			<!-- Age -->
			<Form>
				<Input type={ 'number' } label={ 'Age' } bind:placeholder={ placeholders.age } bind:value={ params.age }/>
			</Form>
			<!-- Gender -->
			<Form>
				<Select label={ 'Gender' } bind:value={ params.gender }>
					{ #each genders as gender }
						<option value={ gender.value }>{ gender.text }</option>
					{ /each }
				</Select>
			</Form>
			<!-- Prefecture -->
			<Form>
				<Select label={ 'Prefecture' } bind:value={ params.prefecture }>
					{ #each prefectures as prefecture }
						<option value={ prefecture.value }>{ prefecture.text }</option>
					{ /each }
				</Select>
			</Form>
		</form>
	</ModalContent>
	<ModalFooter>
		<Button type="primary" on:click={ save }>
			保存する
		</Button>
	</ModalFooter>
</Modal>
