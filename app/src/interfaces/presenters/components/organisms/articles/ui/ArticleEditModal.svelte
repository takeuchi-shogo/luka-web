
<script lang="ts">

	import { onMount } from 'svelte'

	import ArticleRepository from 'interfaces/database/article_repository'

	import Button from 'interfaces/presenters/components/atoms/buttons/Button.svelte'
	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'
	import ModalCard from 'interfaces/presenters/components/atoms/modals/ModalCard.svelte'
	import ModalContainer from 'interfaces/presenters/components/atoms/modals/ModalContainer.svelte'
	import ModalContent from 'interfaces/presenters/components/atoms/modals/ModalContent.svelte'
	import ModalFooter from 'interfaces/presenters/components/atoms/modals/ModalFooter.svelte'
	import ModalHeader from 'interfaces/presenters/components/atoms/modals/ModalHeader.svelte'
	
	import type Article from 'models/articles'


	const _article = new ArticleRepository

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
			<div class="flex">
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
			</div>
		</ModalFooter>
	</ModalCard>
</ModalContainer>
