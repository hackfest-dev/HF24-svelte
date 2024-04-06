import { PUBLIC_GEMINI_API_KEY } from '$env/static/public';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	let { prompt } = await request.json();
	const genAI = new GoogleGenerativeAI(PUBLIC_GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
	prompt =
		'Please return values only in this format for upcoming queries : {"total_shipping_cost":"cost","total_taxes_and_duties":"cost"}' +
		prompt;

	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	console.log(text);
	return json({
		data: text
	});
};
