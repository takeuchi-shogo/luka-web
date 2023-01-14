<script lang="ts">

	import SettingDetailHeader from '../../molecules/SettingDetailHeader.svelte'
	import SettingDetailItem from '../../molecules/SettingDetailItem.svelte'

	let content: string = 'アクティビティ、興味関心、おすすめについて受け取る通知の種類を選択します。'

	let notificationLinks = [
		{
			to: '/others/filters',
			icon: '',
			title: 'フィルター',
			description: '表示する通知と表示しない通知を選択してください',
		},
		{
			to: '/others/preferences',
			icon: '',
			title: '設定',
			description: '通知の種類ごとに設定を選択してください。',
		},
	]

</script>

<div>
	<SettingDetailHeader
		title={ '通知' }
	/>
	<div>
		<div class="py-3 px-4">
			{ content }
		</div>
		<nav>
			<ul>
				{ #each notificationLinks as link }
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
