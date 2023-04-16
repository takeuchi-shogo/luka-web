
<script lang="ts">

	import RadioButton from 'components/atoms/inputs/RadioButton.svelte'

	export let value
	export let group
	export let text: string = ''

</script>


<style>

</style>


<div class="flex items-center mb-4">
	<RadioButton value={ value } group={ group } />
	<label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
		{ text }
	</label>
</div>
