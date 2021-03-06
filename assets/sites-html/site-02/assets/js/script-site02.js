window.addEventListener("scroll", function () {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

document.querySelectorAll(".prev").forEach((x) => {
	x.addEventListener("mouseover", () => {
		x.firstElementChild.classList.toggle("show");
		x.querySelector(".img").classList.toggle("img-hover");
	});
	x.addEventListener("mouseout", () => {
		x.firstElementChild.classList.toggle("show");
		x.querySelector(".img").classList.toggle("img-hover");
	});
});
