
<script lang="ts">

	import { onMount } from 'svelte'

	import Thread from './../../../../database/thread_repository'
	import ThreadItem from './ThreadItem.svelte'

	const _thread = new Thread

	export let userId:number = 0

	let threads = []

	let initialized:boolean = false

	function init() {
		_thread.getList({ userId: userId }, (error, message, data) => {
			if (error) {
				return
			}
			threads = data.lists
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
		{ #each threads as thread }
			<ThreadItem bind:thread />
		{ :else }
			<div>まだ記事を作成していません</div>
		{ /each }
	</div>
{ /if }
