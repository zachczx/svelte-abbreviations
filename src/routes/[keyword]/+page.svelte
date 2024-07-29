<script>
	import { onMount } from 'svelte';

	let { data } = $props();

	let filterInput = $state('');

	onMount(() => {
		const abvElements = document.getElementsByClassName('abvEntry');
		const filterInput = document.getElementById('filter');

		if (filterInput.value) {
			for (let i = 0; i < abvElements.length; i++) {
				abvElements[i].classList.add('hidden');
				const tempVar = abvElements[i];
				const elIsFound = tempVar.innerHTML.toLowerCase().includes(filterInput.value.toLowerCase());
				if (elIsFound) {
					tempVar.classList.remove('hidden');
					console.log('Found');
				} else {
					console.log('Not Found');
				}
			}
		}

		filterInput.addEventListener('keyup', (evt) => {
			for (let i = 0; i < abvElements.length; i++) {
				abvElements[i].classList.add('hidden');
				const tempVar = abvElements[i];
				const elIsFound = tempVar.innerHTML.toLowerCase().includes(evt.target.value.toLowerCase());
				if (elIsFound) {
					tempVar.classList.remove('hidden');
					console.log('Found');
				} else {
					console.log('Not Found');
				}
			}
		});
	});
</script>

<main class="m-10 grid h-auto content-start justify-items-center">
	<section
		class="h-full space-y-10 rounded-3xl border border-gray-200 bg-gray-50/70 p-10 backdrop-blur-md lg:w-[60rem]">
		<div>
			<h1 class="view-logo text-8xl font-bold text-primary"><a href="/">Abbreviations</a></h1>
		</div>

		<div class="space-y-8">
			<label class="relative">
				<input
					type="text"
					id="filter"
					placeholder="Type a keyword to filter"
					bind:value={filterInput}
					class="input input-bordered input-primary h-16 w-full bg-[#FDFDFD] text-xl" />
				<button class="btn btn-primary absolute bottom-0 right-[0.5rem] top-0 my-auto text-xl">Filter</button>
			</label>
			<ul class="scroller overflow-auto rounded-3xl pe-4 ps-1 text-xl lg:max-h-[70vh]">
				<li class="grid grid-cols-3 border-b-2 border-b-gray-300 py-2 font-extrabold">
					<div class="col-span-1">Short Form</div>
					<div class="col-span-2">Long Form</div>
				</li>

				{#each data.abbreviations as abbreviation}
					<li
						class="abvEntry grid grid-cols-3 border-b-2 border-b-gray-300 py-2 {abbreviation.long.includes(
							filterInput,
						) || abbreviation.short.includes(filterInput)
							? undefined
							: 'hidden'}"
						id={abbreviation.short}>
						<div class="col-span-1">{abbreviation.short}</div>
						<div class="col-span-2">{abbreviation.long}</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</main>

<style>
	.view-logo {
		view-transition-name: view-logo;
	}
</style>
