<script lang="ts">

	import type User from 'domain/users'
	import Button from '../../atoms/buttons/Button.svelte'
	// import Button, { Label } from '@smui/button'
	// import IconButton from '@smui/icon-button'


	export let user:User = null
	export let isIdentification: boolean = false
	export let isFollow: boolean = false

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
				<div class="self-center">
					<span class="text-xl font-medium">
						{ user.screenName }
					</span>
				</div>
				{ #if isIdentification }
					<div class="pl-5 self-center">
						<Button>
							<!-- <Label> -->
								プロフィールを編集
							<!-- </Label> -->
						</Button>
						
					</div>
					<div class="pl-2">
						<div style="display: flex; align-items: center;">
							<Button>
								<i class="fa-solid fa-gear"></i>
							</Button>
						</div>
					</div>
				{ :else }
					{ #if isFollow }
						<div class="pl-5 self-center">
							<Button>
								<!-- <Label> -->
									フォロー中
								<!-- </Label> -->
							</Button>
						</div>
					{ :else }
						<div class="pl-5 self-center">
							<Button>
								<!-- <Label> -->
									フォローする
								<!-- </Label> -->
							</Button>
						</div>
					{ /if }
				{ /if }
			</div>
		</div>
		<div class="flex pb-4 text-sm">
			<div class="">
				<div>
					投稿
					{ user.threadCnt }件
				</div>
			</div>
			<div class="pl-5">
				<div>
					フォロー
					{ user.followingCnt }人
				</div>
			</div>
			<div class="pl-5">
				<div>
					フォロワー
					{ user.followerCnt }人
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
