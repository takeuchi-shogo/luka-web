<script lang="ts">

	import Title from 'src/interfaces/presenters/atoms/Title.svelte'

	export let title: string

</script>


<div>
	<Title bind:title />
</div>