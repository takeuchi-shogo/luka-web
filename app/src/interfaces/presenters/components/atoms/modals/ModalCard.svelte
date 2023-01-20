
<script lang="ts">

	import { onMount } from 'svelte'


	export let modalSize: string = 'xl'

	let sm: string = 'max-w-sm'
	let md: string = 'max-w-md'
	let lg: string = 'max-w-lg'
	let xl: string = 'max-w-2xl'

	let width: string = ''


	function setSizing() {
		switch (modalSize) {
			case 'sm':
				width = sm
				break
			case 'md':
				width = md
				break
			case 'lg':
				width = lg
				break
			case 'xl':
				width = xl
				break
		}
	}

	onMount(() => {
		setSizing()
	})

</script>

<style>

</style>


<div class="relative p-4 w-full { width }">
	<div class="relative bg-white rounded-lg shadow self-center">
		<slot><!-- optional fallback --></slot>
	</div>	
</div>

