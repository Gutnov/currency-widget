<template>
	<button
		class="widget-button"
		@click="emit('click')"
	>
		<slot name="prepend" />
		{{ buttonText }}
		<slot name="append" />
	</button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click']);

defineProps<{
	buttonText: string
}>();

</script>

<style lang="scss">
.widget-button {
	background-color: #fff;
	color: $text-color;
	font-weight: 300;
	font-size: 14px;
	padding: 10px 25px;
	box-shadow: -1px 5px 12px -5px $text-color-3;
	transition: all .3s;
	outline: none;
	border: none;
	min-width: 112px;
	display: flex;
	align-items: center;

	&:hover {
		background-color: #EFEFEF;
		outline: none;
		border: none;
		color: #787878;

		svg {
		path {
			fill: #787878;
			transition: all .3s;
		}
	}
	}

	svg {
		path {
			fill: #282828;
		}
	}
}
</style>
