<template>
	<header class="widget-header">
		<div class="widget-container">
			<div class="widget-header__info">
				Курс {{ currencyStore.baseCurrency }} на {{ formattedDateNow }}
			</div>
			<currencies-list
				:currency-list-arr="currencyStore.currencylistArr"
				@change-currency="changeCurrencyHandler"
			/>
		</div>
	</header>
</template>

<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core';
import CurrenciesList from '@/components/CurrenciesList.vue';
import { useCurrncyStore } from '@/store/currency-store.ts';

const currencyStore = useCurrncyStore();
const changeCurrencyHandler = (cur: string) => {
	currencyStore.updateCurrencies(cur);
};
const formattedDateNow = useDateFormat(useNow(), 'YYYY.MM.DD');


</script>

<style lang="scss">
.widget-header {
	background-color: #FFE782;
	padding-top: 30px;
}
.widget-header__info {
	font-size: 21px;
	margin-bottom: 8px;
}
</style>
