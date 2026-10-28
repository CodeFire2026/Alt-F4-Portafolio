
const triggers = document.querySelectorAll(".menu-trigger"),
	card = document.getElementById("menu-card"),
	activeClass = "active",
	openClass = "open";

function closeMenu() {
	card.classList.remove(openClass);
	triggers.forEach((trigger) => {
		trigger.classList.remove(activeClass);
		trigger.setAttribute("aria-expanded", "false");
	});
}

// triggers.forEach((trigger) => {
// 	trigger.addEventListener("click", (e) => {
// 		e.currentTarget.classList.toggle(activeClass);
// 	});
// });

triggers.forEach((trigger) => {
	trigger.addEventListener("click", (e) => {
		e.stopPropagation(); // so the document click below doesn't close it right away
		const isActive = e.currentTarget.classList.toggle(activeClass);
		card.classList.toggle(openClass, isActive);
		e.currentTarget.setAttribute("aria-expanded", isActive);
	});
});

// Close when clicking outside the card
document.addEventListener("click", (e) => {
	if (!card.contains(e.target)) closeMenu();
});

// Close with Escape
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeMenu();
});

// Prevent active menu flash
// let resizeTimer;
// window.addEventListener("resize", () => {
// 	card.style.transition = "none";
// 	clearTimeout(resizeTimer);
// 	resizeTimer = setTimeout(() => {
// 		card.style.transition = "";
// 	}, 100);
// });

const mq = window.matchMedia("(max-width: 900px)");

mq.addEventListener("change", () => {
	card.style.transition = "none";
	// force the browser to apply the change without animating
	void card.offsetHeight;
	card.style.transition = "";
});