<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	import { Link } from 'svelte-routing'

	import ArticleListItem from 'interfaces/presenters/components/organisms/ArticleListItem.svelte'
	import ArticleForm from 'interfaces/presenters/components/organisms/ArticleRegistry.svelte'

	const _dispatch = createEventDispatcher()

	export let me = null
	export let articles = []

	let articleId: number = 10


	function post(e) {
		_dispatch('post', e.detail.params)
	}

</script>


<div class="flex flex-col flex-grow mx-8 px-4">
	<div class="py-4">
		<h1 class="text-xl font-bold">
			Article List Page
		</h1>
	</div>
	<div class="py-4">
		<ArticleForm bind:me={ me } on:post={ post } />
	</div>
	{ #each articles as article }
		<Link to="/articles/{ article.id }">
			<ArticleListItem bind:article />
		</Link>
	{/each}
</div>
