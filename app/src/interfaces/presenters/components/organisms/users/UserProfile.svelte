<script lang="ts">

	import type User from 'domain/users'
	import Button from '../../atoms/button/Button.svelte'


	export let user:User = null

	export let threadCnt: number = 0
	export let followingCnt: number = 0
	export let followerCnt: number = 0

</script>


<div class="flex">
	<div class="px-12">
		<div class="w-48 h-48">
			Icon
		</div>
	</div>
	<section class="flex flex-col">
		<div class="pb-4">
			<div class="flex">
				<div class="text-center">
					<span class="text-xl font-medium">
						{ user.screenName }
					</span>
				</div>
				<div class="pl-5">
					<Button text={ 'プロフィールを編集' }/>
				</div>
				<div class="pl-5">
					<Button text={ '設定' } />
				</div>
			</div>
		</div>
		<div class="flex pb-4 text-sm">
			<div class="">
				<div>
					投稿
					{ threadCnt }件
				</div>
			</div>
			<div class="pl-5">
				<div>
					フォロー
					{ followingCnt }人
				</div>
			</div>
			<div class="pl-5">
				<div>
					フォロワー
					{ followerCnt }人
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<div class="text-lg font-semibold">
				{ user.displayName }
			</div>
			<div class="text-sm font-light">
				<!-- description -->
				ここにアカウントの概要が入るイメージ
			</div>
		</div>
	</section>
</div>
