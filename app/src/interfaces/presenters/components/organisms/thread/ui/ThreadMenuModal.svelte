
<script lang="ts">

	import ModalCard from 'interfaces/presenters/components/atoms/modals/ModalCard.svelte'
	import ModalContainer from 'interfaces/presenters/components/atoms/modals/ModalContainer.svelte'
	import ModalContent from 'interfaces/presenters/components/atoms/modals/ModalContent.svelte'


	export let isOpenModal:boolean = false

	function isOpen() {
		isOpenModal = !isOpenModal
	}

</script>


<style>

</style>


<ModalContainer on:click={ isOpen }>
	<ModalCard>
		<ModalContent>
			<!-- remove -->
			<div class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
				remove
			</div>
			<!-- edit -->
			<div class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
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
			<div class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
				link copy
			</div>
			<!-- cancel -->
			<div class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
				cancel
			</div>
		</ModalContent>
	</ModalCard>
</ModalContainer>
