
<script lang="ts">

	import Thread from 'interfaces/database/thread_repository'

	import ModalCard from 'interfaces/presenters/components/atoms/modals/ModalCard.svelte'
	import ModalContainer from 'interfaces/presenters/components/atoms/modals/ModalContainer.svelte'
	import ModalContent from 'interfaces/presenters/components/atoms/modals/ModalContent.svelte'


	const _thread = new Thread

	export let isOpenModal:boolean = false
	export let threadId:number = 0

	let errorMessage:string = ''

	let isOpenNestedModal:boolean = false


	function remove() {
		_thread.delete(threadId, (error, message) => {
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
