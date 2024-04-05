<template>
	<div
		ref="rateCard"
		class="rate-card"
	>
		<div class="rate-card__count">
			<span class="rate-card__count-number">{{ currencyCount }}</span>
			<span class="rate-card__count-base">{{ baseCurrency }}</span>
			=
		</div>
		<div class="rate-card__sum">
			<span
				ref="sumNumber"
				class="rate-card__sum-number"
			>{{ formatRate(rateValue) }} </span>
			<span class="rate-card__sum-symbol">{{ currencyName }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
const sumNumber = ref(null);
const rateCard = ref(null);

import { ref } from 'vue';
import { trimNumber, formatNumber } from '@/helpers';

defineProps<{
	baseCurrency: string | null,
	currencyName:string,
	rateValue: number,
	currencyCount: number
}>();

const formatRate = (digit: number) => {
	return formatNumber(trimNumber(digit));
};



</script>

<style lang="scss">

.rate-card {
	padding: 18px 24px 20px 30px;
	font-weight: 300;
	box-shadow: -1px 5px 12px -5px $text-color-3;
	margin-bottom: 20px;
	border-radius: 12px;
}

.rate-card__count {
	font-size: 24px;
	color: $text-color-4;
	margin-bottom: 19px;
}

.rate-card__count-number {
	color: $text-color;
}

.rate-card__sum {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
}

.rate-card__sum-number {
	font-size: 33px;
	margin-right: 10px;
	max-width: 250px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: block;
}

.rate-card__sum-symbol {
	font-size: 24px;
	padding-bottom: 3px;
}
</style>
