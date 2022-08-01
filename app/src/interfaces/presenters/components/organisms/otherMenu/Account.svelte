
<script lang="ts">
	import { onMount } from 'svelte'
	import { Link } from 'svelte-routing'

	let test = 'test'

	onMount(() => {
		console.log(test)
	})
</script>


<div>
	アカウント情報ページ
	<nav>
		<li>
			<div>
				<Link to="/others/password">
					パスワードを変更する
				</Link>
			</div>
		</li>
	</nav>
</div>