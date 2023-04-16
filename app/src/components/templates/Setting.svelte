
<script lang="ts">

	import SubMenu from 'features/settings/SubMenu.svelte'
	import OtherItem from 'components/organisms/SettingItem.svelte'
	
	export let me = null
	export let category = ''

</script>


<div class="flex">
	<SubMenu />
	<OtherItem me={ me } category={ category } />
</div>
