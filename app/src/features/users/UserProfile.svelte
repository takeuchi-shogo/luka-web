<script lang="ts">

	import type User from 'models/users'
	import Button from 'components/atoms/buttons/Button.svelte'


	export let user:User = null
	export let isIdentification: boolean = false
	export let isFollow: boolean = false
	
	export let isOpen:boolean = false

	function isOpenProfileEditor() {
		isOpen = !isOpen
	}

</script>


<div class="md:flex">
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
						<Button on:click={ isOpenProfileEditor }>
							<!-- <Label> -->
								プロフィールを編集
							<!-- </Label> -->
						</Button>
						
					</div>
					<div class="pl-2 self-center">
						<Button type={ 'secondary' }>
							<i class="fa-solid fa-gear text-sm"></i>
						</Button>
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
