export interface CurrenciesRequestConfig {
	symbols: string,
	base: string
}

export interface CurrencyItem {
	currency: string,
	rate: number
}
