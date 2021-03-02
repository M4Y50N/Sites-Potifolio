// Carousel-Benefits
var swiper = new Swiper(".swiper-container", {
	slidesPerView: 4,
	spaceBetween: 23,
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
var swiper2 = new Swiper(".swiper-container-testimonials", {
	slidesPerView: 2,
	spaceBetween: 30,
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination-testimonials",
		clickable: true,
	},
});
