
<script lang="ts">

	import { onMount } from 'svelte'
	import { Link } from 'svelte-routing'

	let test = 'test'

	onMount(() => {
		console.log(test)
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
				<div class="p-3">
					<Link to="/others/account_edit">
						アカウント情報を変更する
					</Link>
					<p class="font-medium text-sm text-gray-500">電話番号やメールアドレスなどのアカウント情報を確認できます</p>
				</div>
			</li>
			<li>
				<div class="p-3">
					<Link to="/others/password">
						パスワードを変更する
					</Link>
					<p class="font-medium text-sm text-gray-500">パスワードはいつでも変更できます</p>
				</div>
			</li>
			<li>
				<div class="p-3">
					<Link to="/others/deactivate">
						アカウント削除
					</Link>
					<p class="font-medium text-sm text-gray-500">アカウントを削除する方法について説明します</p>
				</div>
			</li>
		</ul>
	</nav>
</div>