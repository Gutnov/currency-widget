<template>
	<div class="currency-input">
		<input
			v-model="currencyCountValue"
			type="number"
			class="currency-input__field"
			@blur="changeCurrencyCount"
			@keydown.enter="changeCurrencyCount"
		>
		<div class="currency-input__symbol">
			{{ baseCurrency }}
		</div>
	</div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue';

const props = defineProps<{
	baseCurrency: string | null,
	currencyCount: number
}>();

const emit = defineEmits(['change-count']);
const currencyCountValue = ref(1);

watch(() => props.currencyCount, (newVal: number) => {
	currencyCountValue.value = newVal;
});



const changeCurrencyCount = () => {

	if (currencyCountValue.value > 0 && currencyCountValue.value !== props.currencyCount) {
		emit('change-count', currencyCountValue.value);
	}
};

</script>

<style lang="scss">
.currency-input {
	margin-left: auto;
	width: max-content;
	display: flex;
	input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
}

.currency-input__field {
	background-color: transparent;
	border: none;
	outline: none;
	color: $text-color;
	border-bottom: 1px solid $text-color-3;
	text-align: right;
	font-size: 18px;
	padding-right: 9px;
}

.currency-input__symbol {
	font-size: 18px;
	color: $text-color-3;
}
</style>
