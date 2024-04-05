export const convertCurrency = (
	baseCurrency: string, targetCurrency: string, rates: Record<string, number>,
) : Record<string, number> | null => {
	// Проверяем, что базовая и целевая валюты есть в списке курсов
	if (!(baseCurrency in rates) || !(targetCurrency in rates)) {
		return null;
	}

	// Находим курс целевой валюты относительно базовой
	const targetRate = rates[targetCurrency];
	const baseRate = rates[baseCurrency];

	// Вычисляем курсы всех валют относительно целевой валюты
	const convertedRates: Record<string, number> = {};
	for (const currency in rates) {
		const rate = rates[currency];
		convertedRates[currency] = (rate / targetRate * baseRate);
	}

	return convertedRates;
};

export const trimNumber = (digit: number) => {
	const result = digit > 1 ? digit.toFixed(2) : digit.toPrecision(2);
	return +result;
};

export const formatNumber = (digit: number) => {
	if(digit < 1000) return digit;
	return digit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
