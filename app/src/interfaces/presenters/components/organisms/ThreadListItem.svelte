<script lang="ts">
    import type Thread from 'domain/threads'

	// import ThreadHeader from 'src/interfaces/presenters/molecules/ThreadHeader.svelte'
	// import ThreadContent from 'src/interfaces/presenters/molecules/ThreadContent.svelte'
	// import ThreadFooter from 'src/interfaces/presenters/molecules/ThreadFooter.svelte'

	export let thread:Thread

</script>


<div class="py-4 hover:bg-gray-100 border-b">
	<div class="pt-8 sm:flex group">
		<div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
			<!-- <img class="w-full rounded-md h-32 lg:w-32 object-cover" src="public/img/BotIcon.jpeg" alt="sample icon"> -->
		</div>
		<div>
			<div class="text-sm">{ thread.user.displayName }  <span class="text-gray-500">{ thread.formatCreatedAt }</span></div>
			<h2 class="mt-3 font-medium leading-6">{ thread.title }</h2>
			<p class="mt-2 text-lg text-gray-500">{ thread.description }</p>
			<div class="pt-8">
				<div class="flex items-center text-slate-500">
					<div class="flex space-x-8 md:space-x-16">
						<div class="flex cursor-pointer items-center transition hover:text-slate-600">
							<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
							</svg>
							<span>{ thread.commentCnt }</span>
						</div>
						<div class="flex cursor-pointer items-center transition hover:text-slate-600">
							<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
							</svg>
							<span>{ thread.favoriteCnt }</span>
						</div>
						<div class="flex cursor-pointer items-center transition hover:text-slate-600">
							<i class="fa-solid fa-paper-plane"></i>
							<span>2</span>
						</div>
						<div class="flex cursor-pointer items-center transition hover:text-slate-600">
							<i class="fa-solid fa-chart-simple"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

