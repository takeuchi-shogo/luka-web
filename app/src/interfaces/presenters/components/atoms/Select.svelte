
<script lang="ts">

	export let value
	export let options = []

	let answer = ''
</script>


<select
	bind:value={ value }
	on:change="{ () => answer = '' }"
	class="border-0 px-3 py-3 placeholder-gray-400 text-gray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
	style="transition: all 0.15s ease 0s;"
	>
	{ #each options as opt }
		<option value={ opt } >
			{ opt.text }
		</option>
	{ /each }
</select>