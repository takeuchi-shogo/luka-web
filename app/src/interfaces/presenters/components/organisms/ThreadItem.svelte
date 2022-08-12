
<script lang="ts">
	
	let displayName:string = 'テストユーザー'
	let createdAt: string = 'August 20.20.21'
	let title: string = '12 Graphic Design Skills You Need To Get Hired (& How to Develop Them)'
	let content: string = 'Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum consectetur quis. Etiam faucibus est risus, ac condimentum mauris consequat nec. Curabitur eget feugiat massa'

</script>


<div class="pt-8 sm:flex group">
	<div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
		<img class="w-full rounded-md h-32 lg:w-32 object-cover" src="/public/img/BotIcon.jpeg" alt="sample icon">
	</div>
	<div>
		<div class="text-sm">{ displayName }  <span class="text-gray-500">{ createdAt }</span></div>
		<h2 class="mt-3 font-medium leading-6">{ title }</h2>
		<p class="mt-2 text-lg text-gray-500">{ content }</p>
		<div class="pt-8">
			<div class="flex items-center justify-between text-slate-500">
				<div class="flex space-x-4 md:space-x-8">
					<div class="flex cursor-pointer items-center transition hover:text-slate-600">
						<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
						</svg>
						<span>125</span>
					</div>
					<div class="flex cursor-pointer items-center transition hover:text-slate-600">
						<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
						</svg>
						<span>4</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>