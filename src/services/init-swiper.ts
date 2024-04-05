import 'swiper/css';
import Swiper from 'swiper';
export const useSwiper = () => {
	let swiperInstance: Swiper;
	const initSwiper = (container: string) => {
		swiperInstance = new Swiper(container, {
			slidesPerView: 3,
			loop: true,
			breakpoints: {
				575: {
					slidesPerView: 5
				},
				720: {
					slidesPerView: 7
				}
			}
		});
	};

	const prevSlide = () => {
		swiperInstance?.slidePrev();
	};

	const nextSlide = () => {
		swiperInstance.slideNext();
	};

	return { initSwiper, prevSlide, nextSlide };

};
