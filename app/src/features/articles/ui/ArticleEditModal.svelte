
<script lang="ts">

	import { onMount } from 'svelte'

	import ArticleRepository from 'database/article_repository'

	import Button from 'components/atoms/buttons/Button.svelte'
	import FormInput from 'components/molecules/FormInput.svelte'
	import ModalCard from 'components/atoms/modals/ModalCard.svelte'
	import ModalContainer from 'components/atoms/modals/ModalContainer.svelte'
	import ModalContent from 'components/atoms/modals/ModalContent.svelte'
	import ModalFooter from 'components/atoms/modals/ModalFooter.svelte'
	import ModalHeader from 'components/atoms/modals/ModalHeader.svelte'
	
	import type Article from 'models/articles'
	import ErrorMessage from 'components/atoms/ErrorMessage.svelte'


	const _article = new ArticleRepository

	export let didSave = (article) => {}
	export let article:Article = null
	export let isOpenModal: boolean = false

	let params = {
		title: '',
		description: '',
	}
	let errorMessage: string = ''


	function init() {
		params = article
	}


	function save() {
		_article.save(article.id, params, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			didSave(article)
			isOpenModal = false
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
			<ErrorMessage bind:message={ errorMessage } />
			<div class="">
				<FormInput type={ 'text' } label={ 'タイトル' } placeholder={ 'タイトルを入力してください' } bind:value={ params.title }/>
			</div>
			<div>
				<label
					class="block uppercase text-gray-600 text-xs font-bold mb-2"
					for="discription"
				>
					内容
				</label>
				<textarea class="border p-3 border-gray-400 h-56 placeholder-gray-400 text-gray-600 bg-white rounded text-sm focus:border-violet-600 w-full" bind:value={ params.description } placeholder="投稿内容を入力してください"></textarea>
			</div>
		</ModalContent>
		<ModalFooter>
			<div>
				<Button on:click={ save }>
					Save
				</Button>
			</div>
			<div>
				<Button on:click={ isOpen } type={ 'secondary' }>
					Cancel
				</Button>
			</div>
		</ModalFooter>
	</ModalCard>
</ModalContainer>
