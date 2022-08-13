
<script lang="ts">

	import { onMount } from 'svelte'
	import { Link } from 'svelte-routing'

	
	onMount(() => {
		
	})

</script>


<div>
	<div>
		<h1 class="font-bold p-3">
			アカウント情報ページ
		</h1>
	</div>
	<nav>
		<ul>
			<li>
				<div class="p-3 hover:bg-slate-100">
					<Link to="/others/account_edit" class="flex justify-between">
						<div class="flex">
							<div class="self-center pr-4">
								<i class="fa-solid fa-user"></i>
							</div>
							<div>
								アカウント情報を変更する
								<p class="font-medium text-sm text-gray-500">電話番号やメールアドレスなどのアカウント情報を確認できます</p>
							</div>
						</div>
						<div class="self-center pl-3">
							<i class="fa-solid fa-angle-right"></i>
						</div>
					</Link>
				</div>
			</li>
			<li>
				<div class="p-3 hover:bg-slate-100">
					<Link to="/others/password" class="flex justify-between">
						<div class="flex">
							<div class="self-center pr-4">
								<i class="fa-solid fa-key"></i>
							</div>
							<div>
								パスワードを変更する
								<p class="font-medium text-sm text-gray-500">パスワードはいつでも変更できます</p>
							</div>
						</div>
						<div class="self-center pl-3">
							<i class="fa-solid fa-angle-right"></i>
						</div>
					</Link>
				</div>
			</li>
			<li>
				<div class="p-3 hover:bg-slate-100">
					<Link to="/others/deactivate" class="flex justify-between">
						<div class="flex">
							<div class="self-center pr-4">
								<i class="fa-solid fa-heart-crack"></i>
							</div>
							<div>
								アカウント削除
								<p class="font-medium text-sm text-gray-500">アカウントを削除する方法について説明します</p>
							</div>
						</div>
						<div class="self-center pl-3">
							<i class="fa-solid fa-angle-right"></i>
						</div>
					</Link>
				</div>
			</li>
		</ul>
	</nav>
</div>