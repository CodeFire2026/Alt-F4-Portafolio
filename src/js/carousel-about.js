// IMAGE SHOWCASE ------------------------------------------------------------------------------------
const showcase = document.querySelector(".showcase");
const slideImages = showcase.querySelectorAll(".showcase-images img");
const slideTexts = showcase.querySelectorAll(".caption");
const arrows = showcase.querySelectorAll(".showcase-arrow");
const dotsBox = showcase.querySelector(".showcase-dots");

let current = 0;

// Build one dot per slide
const dots = [...slideImages].map((_, i) => {
	const dot = document.createElement("button");
	dot.type = "button";
	dot.setAttribute("aria-label", `Show slide ${i + 1}`);
	dot.addEventListener("click", () => showSlide(i));
	dotsBox.append(dot);
	return dot;
});

function showSlide(index) {
	// Wrap around at both ends
	current = (index + slideImages.length) % slideImages.length;

	slideImages.forEach((img, i) => {
		img.classList.toggle("active", i === current);
	});
	slideTexts.forEach((txt, i) => {
        txt.classList.toggle("active", i === current);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
    });
}

arrows.forEach((arrow) => {
	arrow.addEventListener("click", () => showSlide(current + Number(arrow.dataset.dir)));
});

// Left/right arrow keys while focus is inside the showcase
showcase.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") showSlide(current - 1);
	if (e.key === "ArrowRight") showSlide(current + 1);
});

showSlide(0);