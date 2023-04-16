
<script lang="ts">

	import CheckBox from 'components/atoms/inputs/CheckBox.svelte'


	export let checked: boolean = false
	export let text: string = ''

</script>


<style>

</style>


<div class="flex items-center mb-4">
	<CheckBox bind:checked={ checked } />
	<label for="checkbox-1" class="text-sm ml-3 font-medium text-gray-900">{ text }</label>
</div>
