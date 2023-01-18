
<script lang="ts">

	import SubMenu from 'interfaces/presenters/components/organisms/settings/SubMenu.svelte'
	import OtherItem from 'interfaces/presenters/components/organisms/SettingItem.svelte'
	
	export let me = null
	export let category = ''

</script>


<div class="flex">
	<SubMenu />
	<OtherItem me={ me } category={ category } />
</div>
