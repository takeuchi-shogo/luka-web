<script lang="ts">

	import Logo from 'interfaces/presenters/components/atoms/Logo.svelte'
	import SideMenuItem from '../molecules/SideMenuItem.svelte'

	export let me = null


	let links = [
		{ link: '/articles', icon: 'fa-solid fa-paper-plane', title: '投稿' },
		// { link: '/search', icon: 'fa-solid fa-magnifying-glass', title: '検索' },
		// { link: '/communities', icon: 'fa-solid fa-users', title: 'コミュニティ' },
		// { link: '/messages', icon: 'fa-solid fa-comment-dots', title: 'メッセージ' },
		{ link: '/' + me.screenName, icon: 'fa-regular fa-user', title: 'プロフィール' },
		{ link: '/settings/accounts', icon: 'fa-solid fa-gear', title: 'その他' },
	]

</script>


<div class="hidden md:inline-block border-r">
	<div class="flex flex-col w-16 lg:w-64 py-4">
		<nav class="">
			<div class="px-3 pb-3 font-bold">
				<Logo />
			</div>
			<div class="font-semibold">
				{ #each links as li }
					<SideMenuItem link={ li.link } icon={ li.icon } title={ li.title } />
				{ /each }
			</div>
		</nav>
	</div>
</div>
