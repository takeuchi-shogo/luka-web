<script lang="ts">

	import ThreadListItem from 'interfaces/presenters/components/organisms/ThreadListItem.svelte'
	import ThreadForm from 'interfaces/presenters/components/organisms/ThreadForm.svelte'

	export let threads = []

</script>


<div class="flex flex-col flex-grow">
	<div class="p-4">
		<h1 class="text-xl font-bold">
			Thread List Page
		</h1>
	</div>
	<div class="p-4">
		<ThreadForm />
	</div>
	<div class="p-4">
		<!-- { #each threads as thread } -->
		<ThreadListItem />
		<!-- {/each} -->
	</div>
</div>