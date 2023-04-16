
<script lang="ts">

	import ArticleItem from 'components/organisms/ArticleItem.svelte'
	import CommentListItem from 'components/organisms/CommentListItem.svelte'
	import type Article from 'models/articles'

	export let article:Article = null

</script>


{ #if article }
<div class="mx-8 px-4">
	<div class="text-xl font-bold py-4">
		<h1 class="font-bold">Article Single Page</h1>
	</div>
	<div class="py-4">
		<ArticleItem bind:article />
	</div>
	<div class="p-4">
		<!-- { #each comments as comment } -->
		<CommentListItem bind:comments={ article.comments } />
		<!-- { /each } -->
	</div>
</div>
{ /if }
