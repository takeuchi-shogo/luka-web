<script lang="ts">

	import { Link } from 'svelte-routing'

	import Logo from 'interfaces/presenters/components/atoms/Logo.svelte'
import SideMenuItem from '../molecules/SideMenuItem.svelte'


	let links = [
		{ link: '/threads', icon: 'fa-solid fa-house', title: '投稿' },
		{ link: '/search', icon: 'fa-solid fa-magnifying-glass', title: '検索' },
		{ link: '/communities', icon: 'fa-solid fa-users', title: 'コミュニティ' },
		{ link: '/messages', icon: 'fa-solid fa-comment-dots', title: 'メッセージ' },
		{ link: '/profile', icon: 'fa-regular fa-user', title: 'プロフィール' },
		{ link: '/others/accounts', icon: 'fa-solid fa-gear', title: 'その他' },
	]

</script>


<div class="hidden md:inline-block">
	<div class="flex flex-col w-16 lg:w-64 py-4 border-r">
		<nav class="">
			<div class="px-3 pb-3 font-bold">
				<Logo />
			</div>
			<div class="font-semibold">
				{ #each links as li }
					<SideMenuItem link={ li.link } icon={ li.icon } title={ li.title } />
				{ /each }
			</div>
			<!-- <ul class="font-semibold">
				<li>
					<div class="p-3">
						<Link to="/threads" class="flex">
							<div class="p-3">
								<i class="fa-solid fa-house"></i>
							</div>
							<div class="self-center">
								投稿
							</div>
						</Link>
					</div>
				</li>
				<li>
					<div class="p-3">
						<Link to="/search" class="flex">
							<div class="p-3">
								<i class="fa-solid fa-magnifying-glass"></i>
							</div>
							<div class="self-center">
								検索
							</div>
						</Link>
					</div>
				</li>
				<li>
					<div class="p-3">
						<Link to="/communities" class="flex">
							<div class="p-3">
								<i class="fa-solid fa-users"></i>
							</div>
							<div class="self-center">
								コミュニティ
							</div>
						</Link>
					</div>
				</li>
				<li>
					<div class="p-3">
						<Link to="/messages" class="flex">
							<div class="p-3">
								<i class="fa-solid fa-comment-dots"></i>
							</div>
							<div class="self-center">
								メッセージ
							</div>
						</Link>
					</div>
				</li>
				<li>
					<div class="p-3">
						<Link to="/profile" class="flex">
							<div class="p-3">
								<i class="fa-regular fa-user"></i>
							</div>
							<div class="self-center">
								プロフィール
							</div>
						</Link>
					</div>
				</li>
				<li>
					<div class="p-3">
						<Link to="/others/accounts" class="flex">
							<div class="p-3">
								<i class="fa-solid fa-gear"></i>
							</div>
							<div class="self-center">
								その他
							</div>
						</Link>
					</div>
				</li>
			</ul> -->
		</nav>
	</div>
</div>
