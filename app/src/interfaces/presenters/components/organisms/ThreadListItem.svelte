<script lang="ts">

	// import ThreadHeader from 'src/interfaces/presenters/molecules/ThreadHeader.svelte'
	// import ThreadContent from 'src/interfaces/presenters/molecules/ThreadContent.svelte'
	// import ThreadFooter from 'src/interfaces/presenters/molecules/ThreadFooter.svelte'

	let displayName:string = 'テストユーザー'
	let createdAt: string = 'August 20.20.21'
	let title: string = '12 Graphic Design Skills You Need To Get Hired (& How to Develop Them)'
	let content: string = 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.'

</script>


<div class="pt-8 sm:flex lg:items-end group">
	<div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
		<img class="w-full rounded-md h-32 lg:w-32 object-cover" src="src/assets/BotIcon.jpeg" alt="sample icon">
	</div>
	<div>
		<div class="text-sm">{ displayName }<span class="text-gray-500">{ createdAt }</span></div>
		<h2 class="mt-3 font-medium leading-6">{ title }</h2>
		<p class="mt-2 text-lg text-gray-500">{ content }</p>
	</div>
</div>
<!-- <ThreadHeader bind:title={ thread.title }/>
<ThreadContent bind:thread={ thread }/>
<ThreadFooter/> -->