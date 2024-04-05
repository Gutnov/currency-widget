import axios from 'axios';

export const openaiAxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_CURRENCY_BASE_URL,
	params: {
		access_key: import.meta.env.VITE_CURRENCY_API_KEY
	}
});



export const fetchCurrencies = async () => {
	let responsData;
	try {
		const { data } = await openaiAxiosInstance.get('/latest');
		responsData = data;
	} catch (error) {
		console.error(error);
		responsData = await import('@/rates.json');
	}

	return responsData;
};
