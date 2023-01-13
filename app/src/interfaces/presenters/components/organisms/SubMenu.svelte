
<script lang="ts">

	import SubMenuItem from 'interfaces/presenters/components/molecules/SubMenuItem.svelte'

	let links = [
		{ link: '/others/accounts', title: 'アカウント' },
		{ link: '/others/security', title: 'セキュリティ' },
		{ link: '/others/privacy', title: 'プライバシー' },
		{ link: '/others/notifications', title: '通知設定' },
		{ link: '/others/informations', title: 'お知らせ' },
		{ link: '/others/columus', title: 'Lukaコラム' },
		{ link: '/others/settings', title: 'その他の設定' },
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
