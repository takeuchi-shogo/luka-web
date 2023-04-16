
<script lang="ts">
	import Account from 'features/settings/menu/Account.svelte'
	import Notification from 'features/settings/menu/Notification.svelte'
	import Privacy from 'features/settings/menu/Privacy.svelte'
	import Security from 'features/settings/menu/Security.svelte'
	import Setting from 'features/settings/menu/Setting.svelte'

	import PasswordItem from 'features/settings/detail/account/Password.svelte'
	import AccountEdit from 'features/settings/detail/account/AccountEdit.svelte'
	import Deactivate from 'features/settings/detail/account/Deactivate.svelte'


	export let me = null
	export let category = ''

</script>


<div class="w-full px-6">
	<!-- { #if category == '' } -->
	{ #if category == 'accounts' }
		<Account />
	{ :else if category == 'account_edit' }
		<AccountEdit me={ me } />
	{ :else if category == 'screen_name' }
	<!-- { :else if category == 'phone' }
		<PhoneEdit />
	{ :else if category == 'email' }
		<EmailEdit />
	{ :else if category == 'audience' }
		<Audience />
	{ :else if category == 'contry' }
		<ContryEdit /> -->
	<!-- { :else if category == 'languages' }
	{ :else if category == 'gender' }
	{ :else if category == 'age' } -->
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
	<!-- { :else if category == 'informations' }
		<Informations />
	{ :else if category == 'columns' } 
		<Colums /> -->
	{ :else if category == 'settings' }
		<Setting />
	{ /if }
</div>
