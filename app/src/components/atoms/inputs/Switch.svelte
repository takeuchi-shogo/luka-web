
<script lang="ts">

	import { createEventDispatcher } from 'svelte'

	
	const _dispatch = createEventDispatcher()
	const click = () => _dispatch('click', {})

	export let label: string = ''
	export let fontSize: number = 14
	export let checked: boolean = false

</script>


<style>

	.s--slider {
		display: flex;
		align-items: center;
	}

	.s--slider button {
		width: 3em;
		height: 1.6em;
		position: relative;
		margin: 0 0 0 0.5em;
		background: var(--gray);
		border: none;
	}

	.s--slider button::before {
		content: '';
		position: absolute;
		width: 1.3em;
		height: 1.3em;
		background: #fff;
		top: 0.13em;
		right: 1.5em;
		transition: transform 0.3s;
	}

	.s--slider button[aria-checked='true']{
		background-color: var(--accent-color)
	}

	.s--slider button[aria-checked='true']::before{
		transform: translateX(1.3em);
		transition: transform 0.3s;
	}

	.s--slider button:focus {
		box-shadow: 0 0px 0px 1px var(--accent-color);
	}

</style>


<div class="s--slider" style="fond-size:{ fontSize }px:">
	<button
		role="switch"
		aria-checked={ checked }
		aria-labelledby={ 'switch-label' }
		on:click={ click }
	>
	</button>
	<span id="switch-label">{ label }</span>
</div>
