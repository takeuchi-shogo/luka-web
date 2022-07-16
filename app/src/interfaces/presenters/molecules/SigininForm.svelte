
<script lang="ts">

	export let label: string = ''
	export let value: string = ''

</script>

<div class="relative w-full mb-3">
	<label
	  class="block uppercase text-gray-700 text-xs font-bold mb-2"
	  for="grid-password"
  >
	  { label }
  </label>
  <input
	  type="email"
	  class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
	  placeholder="Email"
	  style="transition: all 0.15s ease 0s;"
	  bind:value={ value }
  />
</div>
<!-- <form>
	<div class="relative w-full mb-3">
	  	<label
			class="block uppercase text-gray-700 text-xs font-bold mb-2"
			for="grid-password"
		>
			Email
		</label>
		<input
			type="email"
			class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
			placeholder="Email"
			style="transition: all 0.15s ease 0s;"
		/>
	</div>
	<div class="relative w-full mb-3">
		<label
			class="block uppercase text-gray-700 text-xs font-bold mb-2"
			for="grid-password"
		>
			Password
		</label>
		<input
			type="password"
			class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
			placeholder="Password"
			style="transition: all 0.15s ease 0s;"
		/>
	</div>
	<div>
		<label class="inline-flex items-center cursor-pointer">
			<input
				id="customCheckLogin"
				type="checkbox"
				class="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
				style="transition: all 0.15s ease 0s;"
			/>
			<span class="ml-2 text-sm font-semibold text-gray-700">Remember me</span>
		</label>
	</div>
	<div class="text-center mt-6">
		<button
		class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
		type="button"
		style="transition: all 0.15s ease 0s;"
		>
			Sign In
		</button>
	</div>
</form> -->