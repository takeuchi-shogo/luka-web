
<script lang="ts">

	import { Link } from 'svelte-routing'

	export let link: string = ''
	export let linkTitle: string = ''

</script>


<div class="py-3 px-4 hover:bg-slate-100">
	<Link to="{ link }">
		<div class="flex justify-between">
			<div>
				{ linkTitle }
			</div>
			<div class="self-center pl-3">
				<i class="fa-solid fa-angle-right"></i>
			</div>
		</div>
	</Link>
</div>
