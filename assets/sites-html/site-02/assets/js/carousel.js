// Carousel-Benefits
var swiper = new Swiper(".swiper-container", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

//Carousel-Testmonials
