new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper__arrow__next',
		prevEl: '.swiper__arrow__prev'
	},
	speed: 1000,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	loop: true,
});