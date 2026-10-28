// THEME TOGGLE --------------------------------------------------------------------------------------
const themeBtn = document.querySelector("[data-theme-toggle]");
const root = document.documentElement;

function applyTheme(theme) {
	root.dataset.theme = theme;
	themeBtn.setAttribute(
		"aria-label",
		theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
	);
}

// Initial theme: saved choice first, then the system preference
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme ?? (systemPrefersDark ? "dark" : "light"));

themeBtn.addEventListener("click", () => {
	const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
	applyTheme(newTheme);
	localStorage.setItem("theme", newTheme);
});