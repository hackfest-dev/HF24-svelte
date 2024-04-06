import { PUBLIC_GEMINI_API_KEY } from '$env/static/public';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { json } from '@sveltejs/kit';

export const geminiFetch = async (url: string): Promise<any> => {
	let prompt =
		'What is the total shipping cost and total taxes and duties for a shipment from the US to Canada with a total value of $1000?';

	const genAI = new GoogleGenerativeAI(PUBLIC_GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

	prompt =
		'Please return values only in this format for upcoming queries : {"total_shipping_cost":"cost","total_taxes_and_duties":"cost"}' +
		prompt;

	const result = await model.generateContent(prompt);
	console.log(result);

	const response = result.response;
	const text = response.text();
	console.log(text);

	// return json({
	// 	data: text
	// });
};
