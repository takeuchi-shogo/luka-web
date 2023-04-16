
<script lang="ts">

	import { Link } from 'svelte-routing'

	export let link: string = ''
	export let title: string = ''
	export let icon: string = ''

</script>

<div class="p-3">
	<Link to="{ link }" class="flex">
		<div class="p-3">
			<i class="{ icon }"></i>
		</div>
		<div class="self-center hidden lg:block">
			{ title }
		</div>
	</Link>
</div>