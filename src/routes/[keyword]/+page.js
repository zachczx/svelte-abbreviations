import { abbreviations } from '$lib/data';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const keyword = params.keyword;
	return {
		abbreviations,
		keyword,
	};
}
