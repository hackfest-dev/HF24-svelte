import { sendMail } from '$lib/server/nodemailer';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const mailOptions = {
		from: 'admin@prathwik.fun',
		to: body.email,
		subject: body.subject,
		html: `some template`
	};

	try {
		await sendMail(mailOptions);
		return json({ status: 'success' });
	} catch (err) {
		console.log(err);
		throw error(500, 'Some Error!');
	}
};
