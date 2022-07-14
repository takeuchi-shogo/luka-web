<script lang="ts">
	import type Thread from "src/domain/threads";


	export let thread:Thread

</script>


<div>
	{ thread.userId }
	{ thread.description }
</div>