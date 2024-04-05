<template>
	<aside class="widget-box">
		<widget-header />

		<div class="widget-box__content">
			<div class="widget-container">
				<currency-input
					:base-currency="currncyStore.baseCurrency"
					:currency-count="currncyStore.currencyCount"
					@change-count="updateCurrencyCount"
				/>
				<rate-list :currency-list-arr="paginatedItems" />
				<div class="widget-box__pagination">
					<widget-button
						button-text="НАЗАД"
						style="margin-right: 18px"
						@click="previousPage"
					>
						<template #prepend>
							<prev-arrow style="margin-right: 10px;" />
						</template>
					</widget-button>
					<widget-button
						button-text="ДАЛЕЕ"
						@click="nextPage"
					>
						<template #append>
							<next-arrow style="margin-left: 10px;" />
						</template>
					</widget-button>
				</div>
			</div>
		</div>
	</aside>
</template>
<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { onMounted, computed, ref, watch } from 'vue';
import CurrencyInput from '@/components/CurrencyInput.vue';
import WidgetButton from '@/components/WidgetButton.vue';
import WidgetHeader from '@/components/WidgetHeader.vue';
import NextArrow from '@/components/icons/NextArrow.vue';
import PrevArrow from '@/components/icons/PrevArrow.vue';
import RateList from '@/components/rates/RateList.vue';
import { useCurrncyStore } from '@/store/currency-store';

const currncyStore = useCurrncyStore();
const { width } = useWindowSize();
const pageSize = ref(4);
const currentPage = ref(1);

watch(width, (newVal) => {
	if(newVal <= 575) {
		pageSize.value = 2;
	} else if(newVal > 575) {
		pageSize.value = 4;
	}
}, { immediate: true });

watch(() => currncyStore.currencyList, () => {
	currentPage.value = 1;

});

onMounted(async () => {
	await currncyStore.updateCurrencies();
});





const paginatedItems = computed(() => {
	const startIndex = (currentPage.value - 1) * pageSize.value;
	return currncyStore.currencylistArr.slice(startIndex, startIndex + pageSize.value);
});

const totalPages = computed(() => Math.ceil(currncyStore.currencylistArr.length / pageSize.value));

function nextPage() {
	if (currentPage.value < totalPages.value) {
		currentPage.value++;
	}
}

function previousPage() {
	if (currentPage.value > 1) {
		currentPage.value--;
	}
}


const updateCurrencyCount = (count: number) => {
	currncyStore.updateCurrencyCount(count);
};
</script>

<style lang="scss">

.widget-box__content {
	background-color: #fff;
	padding-top: 29px;
	padding-bottom: 24px;
}

.widget-box__pagination {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>
