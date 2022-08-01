
<script lang="ts">
	import Account from 'interfaces/presenters/components/organisms/otherMenu/Account.svelte'
	import Notification from 'interfaces/presenters/components/organisms/otherMenu/Notification.svelte'
	import Privacy from 'interfaces/presenters/components/organisms/otherMenu/Privacy.svelte'
	import Security from 'interfaces/presenters/components/organisms/otherMenu/Security.svelte'
	import Setting from 'interfaces/presenters/components/organisms/otherMenu/Setting.svelte'

	import PasswordItem from 'interfaces/presenters/components/organisms/otherItem/Password.svelte'


	export let category = ''

</script>


<div class="w-full px-6">
	{ category }
	<!-- { #if category == '' } -->
	{ #if category == 'accounts' }
		<Account />
	{ :else if category == 'security' }
		<Security />
	{ :else if category == 'password'}
		<PasswordItem />
	{ :else if category == 'privacy' }
		<Privacy />
	{ :else if category == 'notifications' }
		<Notification />
	{ :else if category == 'settings' }
		<Setting />
	{ /if }
</div>