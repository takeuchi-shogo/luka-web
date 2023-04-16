<script lang="ts">
	import { onMount } from 'svelte'

	// import Tab, { Label } from '@smui/tab'
	// import TabBar from '@smui/tab-bar'

	// import { Link } from 'svelte-routing'
	import { forEach } from 'lodash'
	import Tabs from 'components/atoms/tabs/Tabs.svelte'
	import Tab from 'components/atoms/tabs/Tab.svelte'

	export let param: string = ''

	let tabLinks = [
		{
			to: '/' + param + '',
			text: '投稿',
		},
		{
			to: '/' + param + '/threads_and_comments',
			text: '投稿＆コメント',
		},
		{
			to: '/' + param + '/favorites',
			text: 'いいね',
		},
	]
	let active = tabLinks[0]

	let path: string = ''
	let initalized: boolean = false

	$: {
		path = window.location.pathname
	}


	function init() {
		forEach(tabLinks, (link, key) => {
			if (path == link.to) {
				active = tabLinks[key]
			}
		})
		initalized = true
	}

	onMount(() => {
		init()
	})

</script>

{ #if initalized }
	<div class="">
		<div class="flex justify-between">
			<Tabs>
				<Tab tabs={ tabLinks } bind:path={ path }/>
			</Tabs>
		</div>
	</div>
{ /if }
