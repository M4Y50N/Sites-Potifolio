// app screenshots
let featurelist = document.querySelectorAll(".feature-content ul li"),
	featureimgs = document.querySelectorAll(".feature-img img"),
	featureimgslist = [];

featureimgs.forEach((x, index) => {
	if (index > 0) {
		featureimgslist.push(x);
	}
});

featurelist.forEach((x, index) => {
	let icon = x.querySelector("i");

	x.addEventListener("mouseover", (event) => {
		icon.style.color = "white";
		icon.style.backgroundColor = "#65ccd1";

		featureimgslist[index].classList.add("show");
		featureimgslist.forEach((x) => {
			if (x.classList == "show" && featureimgslist[index] != x) {
				x.classList.remove("show");
			}
		});
	});

	x.addEventListener("mouseout", (event) => {
		icon.style.color = "#65ccd1";
		icon.style.backgroundColor = "white";
	});
});

/////////////////////////////////////////////////////////
