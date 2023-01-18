
<script lang="ts">

	import { Link } from 'svelte-routing'

	export let me = null


	function accoutDelete() {
		console.log(me)
	}

</script>


<div>
	<div class="h-14 flex items-center px-4">
		<div class="w-12 items-center hover:bg-gray-200">
			<div>
				<Link to="/others/accounts">
					<i class="fa-solid fa-arrow-left"></i>
				</Link>
			</div>
		</div>
		<div>
			<h1 class="font-bold">Delete Account Page</h1>
		</div>
	</div>
	<div>
		<div class="px-4 py-3">
			User情報
			<!-- { me.displayName } -->
		</div>
		<div class="px-4 py-3">
			<h1 class="font-bold">アカウントが削除されます</h1>
		</div>
		<div class="px-4 py-3">
			<div class="text-gray-500 text-sm">
				Lukaアカウントの削除プロセスを開始します。表示名、ユーザー名、公開プロフィールは表示されなくなります。
			</div>
		</div>
		<div class="px-4 py-3">
			<h1 class="font-bold">その他のヒント</h1>
		</div>
		<div class="px-4 py-3">
			<div class="text-gray-500 text-sm">
				アカウントを間違って削除した場合でも、アカウント削除から30日以内であればLukaアカウントを復活させることができます。
			</div>
		</div>
		<div class="px-4 py-3">
			<div class="text-gray-500 text-sm">
				Googleなどの検索エンジンに一部のアカウント情報が残っている場合があります。
				<a href="/">
					詳しくはこちら
				</a>
			</div>
		</div>
		<div class="px-4 py-3">
			<div class="text-gray-500 text-sm">
				アカウントを削除しなくてもユーザー名を変更できます。<Link to="/others/accounts">設定</Link>で編集できます
			</div>
		</div>
		<div class="px-4 py-3">
			<div class="text-gray-500 text-sm">
				別のLukaアカウントに登録されているユーザー名やメールアドレスを使うには、このアカウントを削除する前に<Link to="/others/accounts">変更</Link>してください。
			</div>
		</div>
		<div class="px-4 py-3 hover:bg-red-300 hover:bg-opacity-10">
			<div class="w-full text-center">
				<div class="text-red-500 text-sm">
					<span on:click={ accoutDelete }>アカウント削除</span>
				</div>
			</div>
		</div>
	</div>
</div>