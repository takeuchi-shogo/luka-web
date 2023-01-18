<script lang="ts">

	import SettingDetailHeader from 'interfaces/presenters/components/molecules/SettingDetailHeader.svelte'
	import SettingDetailItem from 'interfaces/presenters/components/molecules/SettingDetailItem.svelte'

	let content: string = 'Twitterで表示および共有する情報を管理します。'

	let privacyLinks = [
		{
			to: '/settings/audience_and_tagging',
			icon: '',
			title: 'オーディエンスとタグ付け',
			description: 'Twitterで他のユーザーに表示する情報を管理します。',
		},
		{
			to: '/settings/your_thrads',
			icon: '',
			title: '投稿',
			description: '投稿に関連する情報を管理します。',
		},
		{
			to: '/settings/mute_and_block',
			icon: '',
			title: 'ミュートとブロック',
			description: 'ミュートまたはブロックしているアカウント、キーワード、通知を管理します。',
		},
		{
			to: '/settings/direct_messages',
			icon: '',
			title: 'ダイレクトメッセージ',
			description: 'ダイレクトメッセージを送信できるユーザーを管理します。',
		},
	]

</script>

<div>
	<SettingDetailHeader
		title={ 'プライバシーと安全' }
	/>
	<div>
		<div class="py-3 px-4">
			{ content }
		</div>
		<nav>
			<ul>
				{ #each privacyLinks as link }
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
