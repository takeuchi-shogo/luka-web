
<script lang="ts">
import Select from "../atoms/Select.svelte"


	export let type: string = ''
	export let label: string = ''
	export let value: string = ''
	export let options = []

	function typeAction(node) {
		node.type = type
	}

</script>

<div class="relative w-full">
	<label
		class="block uppercase text-gray-600 text-xs font-bold mb-2"
		for="grid-password"
	>
		{ label }
	</label>
	<Select value={ value } options={ options } />
</div>
