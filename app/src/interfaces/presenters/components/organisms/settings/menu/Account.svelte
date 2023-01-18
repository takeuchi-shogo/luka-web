
<script lang="ts">

	import { onMount } from 'svelte'
	import SettingDetailItem from 'interfaces/presenters/components/molecules/SettingDetailItem.svelte'

	let content: string = 'アカウントについての情報を確認したり、データのアーカイブをダウンロードしたり、アカウント停止オプションの詳細を確認したりできます'

	let accountLinks = [
		{
			to: '/settings/account_edit',
			icon: 'fa-solid fa-user',
			title: 'アカウント情報を変更する',
			description: '電話番号やメールアドレスなどのアカウント情報を確認できます',
		},
		{
			to: '/settings/password',
			icon: 'fa-solid fa-key',
			title: 'パスワードを変更する',
			description: 'パスワードはいつでも変更できます',
		},
		{
			to: '/settings/deactivate',
			icon: 'fa-solid fa-heart-crack',
			title: 'アカウント削除',
			description: 'アカウントを削除する方法について説明します',
		},
	]

	
	onMount(() => {
		
	})

</script>


<div>
	<div>
		<h1 class="font-bold p-3">
			アカウント情報ページ
		</h1>
	</div>
	<div>
		<div class="font-normal text-base py-3 px-4">
			{ content }
		</div>
		<nav>
			<ul>
				{ #each accountLinks as link }
					<li>
						<SettingDetailItem
							link={ link.to }
							icon={ link.icon }
							title={ link.title }
							description={ link.description }
						/>
					</li>
				{ /each }
			</ul>
		</nav>
	</div>
</div>
