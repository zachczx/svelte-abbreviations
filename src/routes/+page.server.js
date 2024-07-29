import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const keyword = data.get('keyword');

		if (keyword) {
			redirect(302, `/${keyword}`);
		}
	},
};
