<script lang="ts">

	import { fade } from 'svelte/transition'
	// export let comments = []

	let displayName = 'テストユーザー'
	let createdAt = 'Jun 20.21.10'
	let content = 'FF外から失礼します。'
	let commentCnt = 1
	let likeCnt = 3
	let discription = ''

	let isModalOpen = false


	function post() {
		console.log('post')
	}

	function isOpen() {
		isModalOpen = !isModalOpen
	}

</script>


<!--  -->
<div class="">
	<div class="">
		<!-- <div>
		</div> -->
		<div class="flex">
			<div class="md:w-32">
				User Icon
			</div>
			<div class="">
				<div class="text-sm">{ displayName }  <span class="text-gray-500">{ createdAt }</span></div>
				<div class="mt-2 text-lg text-gray-500">{ content }</div>
				<div class="pt-8">
					<div class="flex items-center justify-between text-slate-500">
						<div class="flex space-x-4 md:space-x-8">
							<div class="flex cursor-pointer items-center transition hover:text-slate-600" on:click={ isOpen }>
								<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
								</svg>
								<span>{ commentCnt }</span>
							</div>
							<div class="flex cursor-pointer items-center transition hover:text-slate-600">
								<svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
								</svg>
								<span>{ likeCnt }</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal -->
{ #if isModalOpen }
	<div class="flex items-center justify-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full bg-gray-200 bg-opacity-75" transition:fade={{ duration: 150 }}>
		<div class="relative p-4 w-full max-w-2xl h-full">
			<div class="relative bg-white rounded-lg shadow">
				<div class="flex justify-between items-start px-6 py-4 rounded-t border-b">
					<h3 class="text-xl font-semibold text-gray-500">
						コメント
					</h3>
					<button
						type="button"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
						on:click={ isOpen }
					>
						<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<div class="p-6 space-y-6">
					<textarea class="w-full h-56 px-3 py-3 placeholder-gray-400 text-gray-500 rounded text-sm shadow" bind:value={ discription } placeholder="コメントを入力してください"></textarea>
				</div>
				<div class="p-6 flex justify-between">
					<button
						class="text-sm text-gray-500 bg-pink-300 hover:opacity-75 font-medium px-4 py-2 text-center rounded"
						on:click={ post }
					>
						コメントする
					</button>
					<button
						class="text-sm text-gray-500 bg-gray-200 hover:opacity-75 font-medium px-4 py-2 text-center rounded"
						on:click={ isOpen }
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
{ /if }