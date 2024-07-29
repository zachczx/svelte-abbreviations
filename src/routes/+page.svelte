<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<meta description="Find a public sector abbreviation!" />
	<title>Letters</title>
</svelte:head>

<main class="background-svg grid h-full content-center justify-items-center">
	<section
		class="max-w-[60rem] space-y-10 rounded-3xl border border-gray-200 bg-gray-50/50 p-10 backdrop-blur-md lg:p-20">
		<div>
			<h1 class="view-logo text-8xl font-extrabold text-primary"><a href="/">Abbreviation</a></h1>
			<p class="text-xl">Fear public sector acronyms no longer!</p>
		</div>
		<div>
			<form method="post" use:enhance>
				<label class="relative">
					<input
						type="text"
						placeholder="Type a keyword to search"
						name="keyword"
						class="input input-bordered input-primary h-16 w-full text-xl" />
					<button class="btn btn-primary absolute bottom-0 right-[0.5rem] top-0 my-auto text-xl">Search</button>
				</label>
			</form>
		</div>
	</section>
</main>

<style>
	.view-logo {
		view-transition-name: view-logo;
	}
</style>
