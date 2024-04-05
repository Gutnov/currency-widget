<template>
	<div class="rate-list">
		<rate-card
			v-for="currencyItem in currencyListArr"
			:key="currencyItem.currency"
			:currency-name="currencyItem.currency"
			:rate-value="currencyItem.rate"
			:base-currency="currencyStore.baseCurrency"
			:currency-count="currencyStore.currencyCount"
		/>
	</div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import RateCard from '@/components/rates/RateCard.vue';
import { useCurrncyStore } from '@/store/currency-store.ts';
import { CurrencyItem } from '@/types';

defineProps<{
	currencyListArr: CurrencyItem[]
}>();

const currencyStore = useCurrncyStore();

</script>

<style lang="scss">

.rate-list {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 18px;
	padding-top: 23px;
	padding-bottom: 41px;

	@media (max-width: 575px) {
		grid-template-columns: 1fr;
	}
}
</style>
