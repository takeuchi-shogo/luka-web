
<script lang="ts">

	import { onMount } from 'svelte'

	import Article from '../../../../database/article_repository'
	import ArticleItem from './ArticleItem.svelte'

	const _article = new Article

	export let userId:number = 0

	let articles = []

	let initialized:boolean = false

	function init() {
		_article.getList({ userId: userId }, (error, message, data) => {
			if (error) {
				return
			}
			articles = data.lists
			initialized = true
		})
	}

	onMount(() => {
		init()
	})

</script>

<style>

</style>


{ #if initialized }
	<div>
		{ #each articles as article }
			<ArticleItem bind:article />
		{ :else }
			<div>まだ記事を作成していません</div>
		{ /each }
	</div>
{ /if }
