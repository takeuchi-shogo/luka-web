<script lang="ts">
	import { onMount } from 'svelte'

	// import Tab, { Label } from '@smui/tab'
	// import TabBar from '@smui/tab-bar'

	// import { Link } from 'svelte-routing'
	import { forEach } from 'lodash'
    import Tabs from '../../atoms/tabs/Tabs.svelte'
    import Tab from '../../atoms/tabs/Tab.svelte'

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

	$: {console.log(location.pathname)}


	function init() {
		path = location.pathname
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
	<div>
		<div class="">
			<div class="flex justify-between">
				<Tabs>
					<Tab tabs={ tabLinks } bind:path={ path }/>
				</Tabs>
			</div>
		</div>
	</div>
{ /if }
