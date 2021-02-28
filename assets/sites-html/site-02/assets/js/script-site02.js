let scrollPos = window.pageYOffset,
	headerEl = document.querySelector(".header"),
	headerElFixed = document.querySelector(".header-fixed");

window.addEventListener("scroll", function (e) {
	scrollPos = window.pageYOffset;
	if (scrollPos >= 160) {
		headerElFixed.classList.add("header-fixed-show");
	} else {
		headerElFixed.classList.remove("header-fixed-show");
	}
});
