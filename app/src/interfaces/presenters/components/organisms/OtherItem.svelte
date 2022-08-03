
<script lang="ts">
	import Account from 'interfaces/presenters/components/organisms/otherMenu/Account.svelte'
	import Notification from 'interfaces/presenters/components/organisms/otherMenu/Notification.svelte'
	import Privacy from 'interfaces/presenters/components/organisms/otherMenu/Privacy.svelte'
	import Security from 'interfaces/presenters/components/organisms/otherMenu/Security.svelte'
	import Setting from 'interfaces/presenters/components/organisms/otherMenu/Setting.svelte'

	import PasswordItem from 'interfaces/presenters/components/organisms/otherItem/Password.svelte'
	import AccountEdit from 'interfaces/presenters/components/organisms/otherItem/AccountEdit.svelte'
	import Deactivate from 'interfaces/presenters/components/organisms/otherItem/Deactivate.svelte'


	export let me = null
	export let category = ''

</script>


<div class="w-full px-6">
	{ category }
	<!-- { #if category == '' } -->
	{ #if category == 'accounts' }
		<Account />
	{ :else if category == 'account_edit' }
		<AccountEdit me={ me } />
	{ :else if category == 'deactivate' }
		<Deactivate me={ me } />
	{ :else if category == 'security' }
		<Security />
	{ :else if category == 'password'}
		<PasswordItem me={ me } />
	{ :else if category == 'privacy' }
		<Privacy />
	{ :else if category == 'notifications' }
		<Notification />
	{ :else if category == 'settings' }
		<Setting />
	{ /if }
</div>