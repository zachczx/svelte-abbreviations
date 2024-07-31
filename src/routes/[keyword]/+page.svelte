<script>
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	let filterInput = $state(data.keyword);

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

<main class="grid h-auto content-start justify-items-center lg:m-10">
	<section
		class="h-full space-y-10 rounded-3xl border border-gray-200 bg-gray-50/70 p-4 backdrop-blur-md lg:w-[60rem] lg:p-8">
		<div>
			<h1 class="view-logo text-4xl font-bold text-primary lg:text-8xl">
				<a href="/"
					>Abbreviatio<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						class="-mx-[0.2em] inline"
						viewBox="0 0 24 24"
						><g fill="none"
							><path
								fill="#0069ff"
								fill-opacity=".25"
								fill-rule="evenodd"
								d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14M10.087 7.38A5 5 0 0 1 12 7a.5.5 0 0 0 0-1a6 6 0 0 0-6 6a.5.5 0 0 0 1 0a5 5 0 0 1 3.087-4.62"
								clip-rule="evenodd" /><path stroke="#0069ff" stroke-linecap="round" d="M20.5 20.5L17 17" /><circle
								cx="11"
								cy="11"
								r="8.5"
								stroke="#0069ff" /></g
						></svg
					>ns</a>
			</h1>
		</div>

		<div class="space-y-8">
			<label class="view-input relative">
				<input
					type="text"
					id="filter"
					placeholder="Type a keyword to filter"
					bind:value={filterInput}
					class="input input-bordered input-primary h-16 w-full rounded-full bg-[#FDFDFD] text-xl" />
				<button class="absolute bottom-0 right-[0.5rem] top-0 my-auto h-8 w-8 lg:h-14 lg:w-14">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-full w-full fill-primary hover:saturate-50"
						viewBox="0 0 24 24"
						><path
							d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
				</button>
			</label>
			<ul class="scroller overflow-auto pe-4 ps-1 text-xl lg:max-h-[70vh]">
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
	.view-input {
		view-transition-name: view-input;
	}
</style>
