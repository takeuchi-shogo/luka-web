
<script lang="ts">

	// import Button, { Label } from '@smui/button'
	import ArticleRepository from 'database/article_repository'

	import type Article from 'models/articles'

	import Button from '../atoms/buttons/Button.svelte'
	import ArticleMenuModal from '../../features/articles/ui/ArticleMenuModal.svelte'
	import ArticleEditModal from '../../features/articles/ui/ArticleEditModal.svelte'


	export let article: Article = null

	const _article = new ArticleRepository

	let errorMessage :string = ''

	let isOpenModal: boolean = false
	let isOpenNestedModal: boolean = false


	function isOpen() {
		isOpenModal = !isOpenModal
	}


	function update(updatedArticle) {
		article = updatedArticle
	}


	function remove() {
		_article.delete(article.id, (error, message) => {
			if (error) {
				console.log(message)
				errorMessage = message
				return
			}
			window.location.href = '/articles'
		})
	}
	
</script>


{ #if isOpenModal }
	<ArticleMenuModal
		bind:isOpenModal
		bind:isOpenNestedModal
		bind:articleId={ article.id }
	/>
{ /if }
{ #if isOpenNestedModal }
	<ArticleEditModal
		bind:isOpenModal={ isOpenNestedModal }
		bind:article
		didSave={ update }
	/>
{ /if }
<div class="pt-4 sm:flex group">
	<div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
		<!-- <img class="w-full rounded-md h-32 lg:w-32 object-cover" src="/public/img/BotIcon.jpeg" alt="sample icon"> -->
	</div>
	<div class="w-full">
		<div class="flex justify-between">
			<div class="text-sm">
				{ article.user.displayName }  <span class="text-gray-500">{ article.formatCreatedAt }</span>
			</div>
			<div>
				<Button type={ 'light' } on:click={ isOpen }>
					<span class="text-sm">
						<i class="fa-solid fa-ellipsis-vertical"></i>
					</span>
				</Button>
			</div>
		</div>
		<h2 class="mt-3 font-medium leading-6">{ article.title }</h2>
		<p class="mt-2 text-base font-normal text-gray-500">{ article.description }</p>
		<div class="pt-4">
			<div class="flex items-center justify-between text-slate-500">
				<div class="flex space-x-4 md:space-x-8">
					<div class="flex cursor-pointer items-center transition hover:text-slate-600">
						<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
						</svg>
						<span>{ article.commentCnt }</span>
					</div>
					<div class="flex cursor-pointer items-center transition hover:text-slate-600">
						<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
						</svg>
						<span>{ article.favoriteCnt }</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
