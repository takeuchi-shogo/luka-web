
<script lang="ts">

	import ModalCard from '../atoms/modals/ModalCard.svelte'
	import ModalContainer from '../atoms/modals/ModalContainer.svelte'

	export let zindex: number = 0
	export let modalSize: string = 'xl'
</script>


<style>

</style>


<ModalContainer zindex={ zindex }>
	<ModalCard modalSize={ modalSize }>
		<slot></slot>
	</ModalCard>
</ModalContainer>
