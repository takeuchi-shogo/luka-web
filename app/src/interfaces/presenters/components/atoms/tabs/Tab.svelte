
<script lang="ts">

	import { Link } from 'svelte-routing'

	export let tabs = []
	export let path:string = ''

</script>


<style>

</style>


{ #each tabs as tab }
	<li class="flex-1">
		{ #if path == tab.to }
			<Link
				to={ tab.to }
				class="relative flex items-center justify-center gap-2 px-1 py-3 text-blue-700 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-700 hover:text-blue-700"
			>
				{ tab.text }
			</Link>
		{ :else }
			<Link
				to={ tab.to }
				class="relative flex items-center justify-center gap-2 px-1 py-3 text-gray-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-700 hover:text-gray-700"
				on:click={ () => path = tab.to }
			>
				{ tab.text }
			</Link>
		{ /if }
	</li>
{ /each }
