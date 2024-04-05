<template>
	<div class="currencies-list">
		<div class="swiper currencies-list__slider">
			<div class="swiper-wrapper">
				<div
					v-for="(curItem, index) in currencyListArr"
					:key="curItem.currency"
					class="swiper-slide currencies-list__slider-item"
					:class="{'currencies-list__slider-item--active': activeIndex === index}"
					@click="clickHandler(index, curItem.currency)"
				>
					<div class="currencies-list__item-content">
						{{ curItem.currency }}
					</div>
				</div>
			</div>
		</div>
		<div
			class="swiper-button swiper-button--prev"
			@click="prevSlide"
		>
			<prev-arrow />
		</div>
		<div
			class="swiper-button swiper-button--next"
			@click="nextSlide"
		>
			<next-arrow />
		</div>
	</div>
</template>

<script setup lang="ts">
import 'swiper/css';
import { onMounted, ref } from 'vue';
import NextArrow from '@/components/icons/NextArrow.vue';
import PrevArrow from '@/components/icons/PrevArrow.vue';
import { useSwiper } from '@/services/init-swiper';
import { CurrencyItem } from '@/types';

const { initSwiper, prevSlide, nextSlide } = useSwiper();
onMounted(() =>{
	initSwiper('.currencies-list__slider');
});

defineProps<{
	currencyListArr: CurrencyItem[]
}>();


const emit = defineEmits(['change-currency']);
const activeIndex = ref(-1);


const clickHandler = (index: number, currency: string) => {

	if(activeIndex.value !== index) {
		activeIndex.value = index;
		emit('change-currency', currency);
	}
};
</script>

<style lang="scss">
.currencies-list {
	position: relative;
	padding: 0 20px;
	.swiper {
		width: 100%;
		height: 100%;
	}
}

.widget-header {
	background-color: #FFE782;
}

.currencies-list__slider-item {
	background-color: transparent;
	cursor: pointer;

	display: flex;
	justify-content: center;

	&--active {
		background-color: #fff;
		border-radius: 10px 10px 0 0;
		color: $text-color;

		.currencies-list__item-content {
			color: $text-color;
		}
	}
}
.currencies-list__item-content {
	padding: 16px 10px;
	color: $text-color-2;
}

.currencies-list__item--active {
	background-color: #fff;
}

.currencies-list__slider-prev {
	transform: rotate(180deg);
}

.swiper-button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	height: 12px;
	display: flex;
	cursor: pointer;
	z-index: 2;
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	svg {
		height: 100%;
		path {
			fill: $text-color-2;
		}
	}

	&--prev {
		left: -5px;
	}

	&--next {
		right: -5px;
	}
}
</style>
