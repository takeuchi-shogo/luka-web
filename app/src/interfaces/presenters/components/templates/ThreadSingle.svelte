
<script lang="ts">

	import ThreadItem from 'interfaces/presenters/components/organisms/ThreadItem.svelte'
	import CommentListItem from 'interfaces/presenters/components/organisms/CommentListItem.svelte'

	// export let thread = {}
	let title:string = ''
	let description:string = ''

</script>


<div class="mx-8 px-4">
	<div class="text-xl font-bold py-4">
		<h1 class="font-bold">Thread Single Page</h1>
	</div>
	<div class="py-4">
		<ThreadItem />
	</div>
	<div class="p-4">
		<!-- { #each comments as comment } -->
		<CommentListItem />
		<!-- { /each } -->
	</div>
</div>
