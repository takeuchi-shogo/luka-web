
<script lang="ts">

	import SubMenu from 'interfaces/presenters/components/organisms/SubMenu.svelte'
	import OtherItem from 'interfaces/presenters/components/organisms/OtherItem.svelte'
	
	export let category = ''

</script>


<div class="flex">
	<SubMenu />
	<OtherItem category={ category } />
</div>