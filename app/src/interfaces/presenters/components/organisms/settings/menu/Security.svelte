
<script lang="ts">

	import SettingDetailHeader from 'interfaces/presenters/components/molecules/SettingDetailHeader.svelte'
    import SettingDetailItem from 'interfaces/presenters/components/molecules/SettingDetailItem.svelte';

	let content: string = 'アカウントのセキュリティを管理したり、アカウントと連携したアプリなどのアカウントによる使用を追跡したりします。'

	let securityLinks = [
		{
			to: '/settings/security',
			icon: '',
			title: 'セキュリティー',
			description: 'アカウントのセキュリティを管理します。',
		},
		{
			to: '/settings/apps_and_sessions',
			icon: '',
			title: 'アプリとセッション',
			description: 'アカウントのセキュリティを管理します。',
		},
	]

</script>

<div>
	<SettingDetailHeader
		title={ 'セキュリティ' }
	/>
	<div>
		<div class="py-3 px-4">
			{ content }
		</div>
		<nav>
			<ul>
				{ #each securityLinks as link }
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
