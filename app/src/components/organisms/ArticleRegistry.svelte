<script lang="ts">

	import { fade } from 'svelte/transition'

	import ArticleRepository from 'database/article_repository'

	import Button from '../atoms/buttons/Button.svelte'
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
				<ErrorMessage bind:message={ errorMessage } />
				<div class="">
					<FormInput type={ 'text' } label={ 'タイトル' } placeholder={ 'タイトルを入力してください' } bind:value={ params.title }/>
				</div>
				<label
					class="block uppercase text-gray-600 text-xs font-bold mb-1"
					for="discription"
				>
					内容
				</label>
				<textarea class="w-full h-56 px-3 py-3 placeholder-gray-400 text-gray-500 rounded text-sm shadow" bind:value={ params.description } placeholder="投稿内容を入力してください"></textarea>
			</ModalContent>
			<ModalFooter>
				<Button on:click={ post }>
					投稿する
				</Button>
				<Button on:click={ isOpen }>
						Cancel
				</Button>
				</ModalFooter>
		</ModalCard>
	</ModalContainer>
	<!-- <div class="flex items-center justify-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full bg-gray-200 bg-opacity-75" transition:fade={{ duration: 150 }}>
		<div class="relative p-4 w-full max-w-2xl h-full">
			<div class="relative bg-white rounded-lg shadow">
				<div class="flex justify-between items-start px-6 py-4 rounded-t border-b">
					
				</div>
				<div>
					<ErrorMessage bind:message={ errorMessage } />
				</div>
				<div class="p-6 space-y-6">
					 <Textfield
						type="text"
						bind:value={ params.title }
						label={ 'タイトル' }
						class="w-full"
					>
						<HelperText slot="helper"></HelperText>
					</Textfield>
					<div class="">
						<FormInput type={ 'text' } label={ 'タイトル' } placeholder={ 'タイトルを入力してください' } bind:value={ params.title }/>
					</div>
					<label
						class="block uppercase text-gray-600 text-xs font-bold mb-1"
						for="discription"
					>
						内容
					</label>
					<textarea class="w-full h-56 px-3 py-3 placeholder-gray-400 text-gray-500 rounded text-sm shadow" bind:value={ params.description } placeholder="投稿内容を入力してください"></textarea>
				</div>
				<div class="p-6 flex justify-between">
					<Button on:click={ post }>
							投稿する
					</Button>
					<Button on:click={ isOpen }>
							Cancel
					</Button>
				</div>
			</div>
		</div>
	</div> -->
{ /if }
