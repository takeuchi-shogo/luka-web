<script lang="ts">

	import { Link } from 'svelte-routing'

	import ThreadListItem from 'interfaces/presenters/components/organisms/ThreadListItem.svelte'
	import ThreadForm from 'interfaces/presenters/components/organisms/ThreadForm.svelte'

	export let threads = []

	let threadId: number = 10

	function init() {
		console.log(threads)
	}

</script>


<div class="flex flex-col flex-grow mx-8 px-4">
	<div class="py-4">
		<h1 class="text-xl font-bold">
			Thread List Page
		</h1>
	</div>
	<div class="py-4">
		<ThreadForm />
	</div>
	<div class="py-4 hover:bg-gray-100 border-b">
		<!-- { #each threads as thread } -->
		<Link to="/threads/{ threadId }">
			<ThreadListItem />
		</Link>
		<!-- {/each} -->
	</div>
</div>