
<script lang="ts">

	import SubMenuItem from 'components/molecules/SubMenuItem.svelte'

	let links = [
		{ link: '/settings/accounts', title: 'アカウント' },
		{ link: '/settings/security', title: 'セキュリティ' },
		{ link: '/settings/privacy', title: 'プライバシー' },
		{ link: '/settings/notifications', title: '通知設定' },
		{ link: '/settings/informations', title: 'お知らせ' },
		{ link: '/settings/columus', title: 'Lukaコラム' },
		{ link: '/settings/settings', title: 'その他の設定' },
	]

</script>


<div class="hidden md:block">
	<div class="flex flex-col md:w-64 lg:w-80 h-screen py-4 border-r">
		<nav>
			<div>
				<h1 class="py-3 px-4 font-bold">設定</h1>
			</div>
			{ #each links as li }
				<SubMenuItem link={ li.link } linkTitle={ li.title } />
			{ /each }
		</nav>
	</div>
</div>
