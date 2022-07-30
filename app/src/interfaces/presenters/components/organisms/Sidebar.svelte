<script lang="ts">

	import { Link } from 'svelte-routing'

	import Logo from 'interfaces/presenters/components/atoms/Logo.svelte'


</script>


<div class="flex flex-col w-64 py-4">
	<nav class="">
		<div class="px-3 pb-3 font-bold">
			<Logo />
		</div>
		<ul class="font-semibold">
			<li>
				<div class="p-3">
					<Link to="/threads">投稿</Link>
				</div>
			</li>
			<li>
				<div class="p-3">
					<Link to="/search">検索</Link>
				</div>
			</li>
			<li>
				<div class="p-3">
					<Link to="/communities">コミュニティ</Link>
				</div>
			</li>
			<li>
				<div class="p-3">
					<Link to="/messages">メッセージ</Link>
				</div>
			</li>
			<li>
				<div class="p-3">
					<Link to="/profile">プロフィール</Link>
				</div>
			</li>
			<li>
				<div class="p-3">
					<Link to="/others">その他</Link>
				</div>
			</li>
		</ul>
	</nav>
</div>