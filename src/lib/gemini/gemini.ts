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
		'I want to know the status of buying small products from the country ' +
		source +
		'. I currently live in ' +
		dest +
		'. I want to buy ' +
		product +
		'.' +
		'inform me the total shipping cost and total taxes and duties that I might encounter. Also list the different ways of say air or sea that i can use. Say all of this in 120 words or less';

	// prompt =
	// 	'Please return values only in this format for upcoming queries : {"total_shipping_cost":"cost","total_taxes_and_duties":"cost"}' +
	// 	prompt;

	const result = await model.generateContent(prompt);
	// console.log(result);

	const response = result.response;
	return response.text();
};
