
<script lang="ts">

	import Button from "../atoms/Button.svelte"
	import SigininForm from "../molecules/SigininForm.svelte"

	let label = {
		email: 'Email',
		password: 'Password',
	}

	let params = {
		email: '',
		password: '',
	}
	

</script>

<form>
	<SigininForm bind:label={ label.email } bind:value={ params.email }/>
	<SigininForm bind:label={ label.password } bind:value={ params.password }/>
	<Button text={ 'Sign in' } />
</form>