import { PUBLIC_GEMINI_API_KEY } from '$env/static/public';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { json } from '@sveltejs/kit';

function cleanAndParseJSON(input) {
	const cleanedInput = input.replace(/`/g, '').replace(/\n/g, '').replace(/\s/g, '');
	const jsonObject = JSON.parse(cleanedInput) || '{}';

	return jsonObject;
}

export const geminiFetchRoutes = async (
	source: string,
	dest: string,
	product: string
): Promise<any> => {
	const genAI = new GoogleGenerativeAI(PUBLIC_GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

	let prompt = `Give me 5 list of country names that fall in the 5 best trading routes between ${source} and ${dest}. And they have be the optimal routes. The output has to be only the 5 list of country names in JSON FORMAT ONLY, not even serial numbers or in bullets and NO explanation, NO description or NO comments. Here are few examples of 
    what you can return when asked to find best routes between USA and Bolivia -
    {
        "route1": ["USA", "Panama", "Bolivia"],
        "route2": ["USA", "Colombia", "Ecuador", "Peru", "Bolivia"],
        "route3": ["USA", "Chile", "Bolivia"],
        "route4": ["USA", "Brazil", "Paraguay", "Bolivia"],
        "route5": ["USA", "Argentina", "Bolivia"]
    }
`;

	const result = await model.generateContent(prompt);
	const response = result.response;
	console.log(response.text());

	return cleanAndParseJSON(response.text());
};
