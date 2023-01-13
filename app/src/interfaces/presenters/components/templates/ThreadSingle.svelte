
<script lang="ts">

	import ThreadItem from 'interfaces/presenters/components/organisms/ThreadItem.svelte'
	import CommentListItem from 'interfaces/presenters/components/organisms/CommentListItem.svelte'
	import type Thread from 'domain/threads'

	export let thread:Thread = null

</script>


{ #if thread }
<div class="mx-8 px-4">
	<div class="text-xl font-bold py-4">
		<h1 class="font-bold">Thread Single Page</h1>
	</div>
	<div class="py-4">
		<ThreadItem bind:thread />
	</div>
	<div class="p-4">
		<!-- { #each comments as comment } -->
		<CommentListItem bind:comments={ thread.comments } />
		<!-- { /each } -->
	</div>
</div>
{ /if }
