
<script lang="ts">

	import Button from 'interfaces/presenters/components/atoms/Button.svelte'
	import FormInput from 'interfaces/presenters/components/molecules/FormInput.svelte'

	export let me = null

	let types = {
		text: 'text'
	}

	let labels = {
		screenName: 'ユーザー名'
	}

	let placeholders = {
		screenName: ''
	}

	let params = {
		screenName: ''
	}

	function save() {
		console.log(me)
	}

</script>


<div>
	<div>
		<h1>アカウント情報編集ページ</h1>
	</div>
	<div>
		<div>
			<form>
				<FormInput type={ types.text } label={ labels.screenName } placeholder={ placeholders.screenName } value={ params.screenName } />
				<Button text={ '保存' }/>
			</form>
		</div>
	</div>
</div>