<script lang="ts">

	export let value = undefined
	export let group = undefined

</script>


<style>

</style>


<input
	type="radio"
	value={ value }
	bind:group={ group }
	class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
>
