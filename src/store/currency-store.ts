import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Ref } from 'vue';
import { fetchCurrencies } from '@/api';
import { convertCurrency } from '@/helpers';

export const useCurrncyStore = defineStore('currencyStore', () => {
	const baseCurrency: Ref<null | string> = ref(null);
	const currencyList: Ref<Record<string, number>> = ref({});
	const currencyCount = ref(1);

	const updateCurrencies = async(currency: string = 'EUR') => {
		const data = await fetchCurrencies();
		baseCurrency.value = currency;
		currencyCount.value = 1;
		const convertedRates = convertCurrency(
			data.base, currency, data.rates
		);
		if (convertedRates !== null) {
			currencyList.value = convertedRates;
		} else {
			currencyList.value = data.rates;
		}
	};

	const updateCurrencyCount = (count: number) => {
		const result: {[key: string]: number} = {};

		for (const currency in currencyList.value) {
			result[currency] = currencyList.value[currency] * count;
		}
		currencyList.value = result;
		currencyCount.value = count;
	};

	const currencylistArr = computed(() => {
		return Object.entries(currencyList.value).map(([currency, rate]) => ({ currency, rate }));
	});

	const currencySymbolsLists = computed(() => {
		return Object.keys(currencyList.value);
	});

	return {
		updateCurrencies,
		baseCurrency,
		currencySymbolsLists,
		updateCurrencyCount,
		currencyList,
		currencyCount,
		currencylistArr
	};
});
