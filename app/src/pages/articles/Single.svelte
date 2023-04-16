
<script lang="ts">

	import { onMount } from 'svelte'

	import ArticleRepository from 'database/article_repository'
	import ArticleSingle from 'components/templates/ArticleSingle.svelte'
	import type Article from 'models/articles'

	const _article = new ArticleRepository

	export let id: string = ''

	let article:Article

	let errorMessage: string = ''


	function init() {
		_article.get(id, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			article = data
		})
	}


	onMount(() => {
		init()
	})

</script>


<ArticleSingle bind:article />
