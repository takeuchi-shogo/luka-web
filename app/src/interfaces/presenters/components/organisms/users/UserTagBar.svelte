<script lang="ts">
	import { onMount } from 'svelte'

	import { Link } from 'svelte-routing'

	export let param: string = ''

	let tagLinks = [
		{
			to: '/' + param + '',
			text: '投稿',
		},
		{
			to: '/' + param + '/threads_and_comments',
			text: '投稿＆コメント',
		},
		{
			to: '/' + param + '/favorites',
			text: 'いいね',
		},
	]

	let path: string = ''

	function init() {
		path = location.pathname
		console.log(path)
	}

	onMount(() => {
		init()
	})

</script>

<div>
	<div class="">
		<div class="flex justify-between">
			{ #each tagLinks as link }
				<div class="px-4">
					<Link to={ link.to }>
						<div class="py-4">
							<span class="text-sm font-semibold">
								{ link.text }
							</span>
						</div>
						{ #if path == link.to }
							<div class="bg-blue-700 h-1 rounded-md px-2"></div>
						{ /if }
					</Link>
				</div>
			{ /each }
		</div>
	</div>
</div>
