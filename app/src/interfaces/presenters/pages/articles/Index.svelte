<script lang="ts">

	import { onMount } from 'svelte'

	import ArticleRepository from 'interfaces/database/article_repository'
	
	import ArticleList from 'interfaces/presenters/components/templates/ArticleList.svelte'

	const _article = new ArticleRepository

	export let me = null

	let articles = []

	let errorMessage = ''


	function init() {
		_article.getList(null, (error, message, data) => {
			if (error) {
				errorMessage = message
				return
			}
			articles = data.lists
		})
	}


	function post(e) {
		// console.log('post data', e.detail)
		_article.post(e.detail, (error, message, _data) => {
			if (error) {
				errorMessage = message
				console.log(errorMessage)
				return
			}
			init()
		})
	}


	onMount(() => {
		init()
	})

</script>

{ errorMessage }
<ArticleList bind:articles bind:me={ me } on:post={ post } />
