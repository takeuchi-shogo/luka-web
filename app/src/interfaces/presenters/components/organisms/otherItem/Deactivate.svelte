
<script lang="ts">

	import { Link } from 'svelte-routing'

	export let me = null


	function accoutDelete() {
		console.log(me)
	}

</script>


<div>
	<div>
		<h1>アカウントを削除</h1>
	</div>
	<div>
		<div>
			User情報
			{ me.displayName }
		</div>
		<div>
			<h1>アカウントが削除されます</h1>
		</div>
		<div>
			<div>
				Lukaアカウントの削除プロセスを開始します。表示名、ユーザー名、公開プロフィールは表示されなくなります。
			</div>
		</div>
		<div>
			<h1>その他のヒント</h1>
		</div>
		<div>
			<div>
				アカウントを間違って削除した場合でも、アカウント削除から30日以内であればLukaアカウントを復活させることができます。
			</div>
		</div>
		<div>
			<div>
				Googleなどの検索エンジンに一部のアカウント情報が残っている場合があります。
				<a href="/">
					詳しくはこちら
				</a>
			</div>
		</div>
		<div>
			<div>
				アカウントを削除しなくてもユーザー名を変更できます。<Link to="/others/accounts">設定</Link>で編集できます
			</div>
		</div>
		<div>
			<div>
				別のLukaアカウントに登録されているユーザー名やメールアドレスを使うには、このアカウントを削除する前に<Link to="/others/accounts">変更</Link>してください。
			</div>
		</div>
		<div>
			<div>
				<div>
					<span on:click={ accoutDelete }>アカウント削除</span>
				</div>
			</div>
		</div>
	</div>
</div>