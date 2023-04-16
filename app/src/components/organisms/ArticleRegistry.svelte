<script lang="ts">

	import { fade } from 'svelte/transition'

	import ArticleRepository from 'database/article_repository'

	import { Button, Form, Modal, Input } from 'spaper'
	import FormInput from 'components/molecules/FormInput.svelte'
	import type User from 'models/users'
	import ErrorMessage from '../atoms/ErrorMessage.svelte'
	import ModalContainer from '../atoms/modals/ModalContainer.svelte';
	import ModalCard from '../atoms/modals/ModalCard.svelte';
	import ModalHeader from '../atoms/modals/ModalHeader.svelte';
	import ModalContent from '../atoms/modals/ModalContent.svelte';
	import ModalFooter from '../atoms/modals/ModalFooter.svelte';

	const _article = new ArticleRepository

	export const didCreate = (article) => {}

	export let me: User = null

	let params = {
		userId: 0,
		title: '',
		description: '',
	}

	let isModalOpen: boolean = false

	let errorMessage: string = ''


	function isOpen() {
		isModalOpen = !isModalOpen
	}


	function post() {
		params.userId = me.id
		_article.post(params, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			didCreate(data)
			isModalOpen = false
		})
	}

</script>


<div class="flex justify-between">
	<!-- User Icon -->
	<div class="">User Icon</div>
	<!-- Modal Open Button -->
	<div>
		<Button on:click={ isOpen }>
			投稿する
		</Button>
	</div>
</div>

<!-- Modal -->
{ #if isModalOpen }
	<Modal bind:active={ isModalOpen }
	title="投稿" class="w-2/3">
		<ModalContent>
			<ErrorMessage bind:message={ errorMessage } />
			<Form>
				<Input class="w-full px-3 py-3" placeholder="input title" label="title" bind:value={ params.title } />
			</Form>
			<Form>
				<Input class="w-full h-56 px-3 py-3" type="textarea" placeholder="content" bind:value={ params.description } label="content" />
			</Form>
			<!-- <div class="">
				<FormInput type={ 'text' } label={ 'タイトル' } placeholder={ 'タイトルを入力してください' } bind:value={ params.title }/>
			</div>
			<label
				class="block uppercase text-gray-600 text-xs font-bold mb-1"
				for="discription"
			>
				内容
			</label>
			<textarea class="w-full h-56 px-3 py-3 placeholder-gray-400 text-gray-500 rounded text-sm shadow" bind:value={ params.description } placeholder="投稿内容を入力してください"></textarea> -->
		</ModalContent>
		<ModalFooter>
			<Button type={"primary"} on:click={ post }>
				Post
			</Button>
			<Button type="secondary" on:click={ isOpen }>
				Cancel
			</Button>
		</ModalFooter>
	</Modal>	
{ /if }
