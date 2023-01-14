
<script lang="ts">

	import { Link } from 'svelte-routing'

	export let link:string = ''
	export let icon:string = ''
	export let title:string = ''
	export let description:string = ''

</script>

<div class="p-3 hover:bg-slate-100">
	<Link to="{ link }" class="flex justify-between">
		<div class="flex">
			<div class="self-center pr-4">
				<i class="{ icon }"></i>
			</div>
			<div>
				{ title }
				<p class="font-medium text-sm text-gray-500">{ description }</p>
			</div>
		</div>
		<div class="self-center pl-3">
			<i class="fa-solid fa-angle-right"></i>
		</div>
	</Link>
</div>
