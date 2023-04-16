
<script lang="ts">

	export let type: string = ''
	export let label: string = ''
	export let placeholder: string = ''
	export let value: string = ''

	function typeAction(node) {
		node.type = type
	}

</script>

<div class="relative w-full">
	<label
		class="block uppercase text-gray-800 text-xs font-bold mb-2"
		for="grid-password"
	>
		{ label }
	</label>
	<input
		use:typeAction
		class="border border-gray-400 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm focus:border-violet-600 w-full"
		placeholder={ placeholder }
		style="transition: all 0.15s ease 0s;"
		bind:value={ value }
	/>
</div>
