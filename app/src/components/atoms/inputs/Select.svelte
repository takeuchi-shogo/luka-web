
<script lang="ts">

	export let value = 's'
	export let options = []

</script>


<select
	bind:value
	class="border border-gray-400 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm focus:border-violet-600 w-full"
	style="transition: all 0.15s ease 0s;"
	>
	{ #each options as opt }
		<option value={ opt.value } >
			{ opt.text }
		</option>
	{ /each }
</select>
