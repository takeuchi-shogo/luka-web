<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	import { Link } from 'svelte-routing'

	import ArticleListItem from 'components/organisms/ArticleListItem.svelte'
	import ArticleRegistry from 'components/organisms/ArticleRegistry.svelte'

	const _dispatch = createEventDispatcher()

	export let me = null
	export let articles = []


	function addList(article) {
		articles.push(article)
	}


	function post(e) {
		_dispatch('post', e.detail.params)
	}

</script>


<div class="flex flex-col flex-grow sm-mx-8 px-4">
	<div class="py-4">
		<h1 class="text-xl font-bold">
			Article List Page
		</h1>
	</div>
	<div class="py-4">
		<ArticleRegistry bind:me={ me } on:post={ post } didCreate={ addList } />
	</div>
	{ #each articles as article }
		<Link to="/articles/{ article.id }">
			<ArticleListItem bind:article />
		</Link>
	{ :else }
		<div>何もないよ</div>
	{/each}
</div>
