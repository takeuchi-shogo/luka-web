<script lang="ts">

	import SettingDetailHeader from '../../molecules/SettingDetailHeader.svelte'
	import SettingDetailItem from '../../molecules/SettingDetailItem.svelte'

	let content: string = 'Twitterで表示および共有する情報を管理します。'

	let privacyLinks = [
		{
			to: '/others/audience_and_tagging',
			icon: '',
			title: 'オーディエンスとタグ付け',
			description: 'Twitterで他のユーザーに表示する情報を管理します。',
		},
		{
			to: '/others/your_thrads',
			icon: '',
			title: '投稿',
			description: '投稿に関連する情報を管理します。',
		},
		{
			to: '/others/mute_and_block',
			icon: '',
			title: 'ミュートとブロック',
			description: 'ミュートまたはブロックしているアカウント、キーワード、通知を管理します。',
		},
		{
			to: '/others/direct_messages',
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
