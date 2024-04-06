import { PUBLIC_GEMINI_API_KEY } from '$env/static/public';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { json } from '@sveltejs/kit';

export const geminiFetchInsights = async (
	source: string,
	dest: string,
	product: string
): Promise<any> => {
	const genAI = new GoogleGenerativeAI(PUBLIC_GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

	let prompt =
		'Person A would like to know the current shipping status and estimated taxes and delivery date for buying product of category' +
		product +
		'from ' +
		source +
		'to ' +
		dest +
		'. Please provide relevant information in 100 words or less to help the person make an informed decision.';

	// prompt =
	// 	'Please return values only in this format for upcoming queries : {"total_shipping_cost":"cost","total_taxes_and_duties":"cost"}' +
	// 	prompt;

	const result = await model.generateContent(prompt);
	console.log(result);

	const response = result.response;
	return response.text();
};
