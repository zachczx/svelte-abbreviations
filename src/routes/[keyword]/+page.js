import { abbreviations } from '$lib/data';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		abbreviations,
	};
}
