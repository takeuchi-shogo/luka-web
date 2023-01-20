
<script lang="ts">

	import Article from 'interfaces/database/article_repository'

	import ModalCard from 'interfaces/presenters/components/atoms/modals/ModalCard.svelte'
	import ModalContainer from 'interfaces/presenters/components/atoms/modals/ModalContainer.svelte'
	import ModalContent from 'interfaces/presenters/components/atoms/modals/ModalContent.svelte'


	const _article = new Article

	export let isOpenModal:boolean = false
	export let articleId:number = 0

	let errorMessage:string = ''

	export let isOpenNestedModal:boolean = false


	function remove() {
		_article.delete(articleId, (error, message) => {
			if (error) {
				errorMessage = message
				return
			}
			isOpenModal = false
			window.location.href = '/articles'
		})
	}


	function isOpen() {
		isOpenModal = !isOpenModal
	}


	function isOpenNested() {
		isOpenNestedModal = !isOpenNestedModal
	}


	function copy() {

	}


</script>


<style>

</style>


<ModalContainer on:click={ isOpen }>
	<ModalCard modalSize={ 'md' }>
		<ModalContent>
			<!-- remove -->
			<div
				class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
				on:click={ remove }
			>
				remove
			</div>
			<!-- edit -->
			<div
				class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
				on:click={ isOpenNested }
			>
				edit
			</div>
			<!-- mute -->
			<div class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
				mute
			</div>
			<!-- comment off -->
			<div class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
				comment off
			</div>
			<!-- share -->
			<div class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
				share
			</div>
			<!-- copy -->
			<div
				class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
				on:click={ copy }
			>
				link copy
			</div>
			<!-- cancel -->
			<div 
				class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
				on:click={ isOpen }
			>
				cancel
			</div>
		</ModalContent>
	</ModalCard>
</ModalContainer>
