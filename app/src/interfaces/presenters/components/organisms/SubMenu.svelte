
<script lang="ts">

	import { Link } from 'svelte-routing'

</script>


<div class="flex flex-col w-64 h-screen md:block py-4 border-r">
	<nav class="px-4">
		<div>
			<h1 class="pb-3 font-bold">設定</h1>
		</div>
		<ul class="font-semibold">
			<li>
				<div class="py-3">
					<Link to="/others/accounts">アカウント</Link>
				</div>
			</li>
			<li>
				<div class="py-3">
					<Link to="/others/security">セキュリティ</Link>
				</div>
			</li>
			<li>
				<div class="py-3">
					<Link to="/others/privacy">プライバシー</Link>
				</div>
			</li>
			<li>
				<div class="py-3">
					<Link to="/others/notifications">通知設定</Link>
				</div>
			</li>
			<li>
				<div class="py-3">
					<Link to="/others/informations">お知らせ</Link>
				</div>
			</li>
			<li>
				<div class="py-3">
					<Link to="/others/columus">Lukaコラム</Link>
				</div>
			</li>
			<li>
				<div class="py-3">
					<Link to="/others/settings">その他の設定</Link>
				</div>
			</li>
		</ul>
	</nav>
</div>