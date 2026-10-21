// THEME TOGGLE --------------------------------------------------------------------------------------
const themeToggle = document.querySelector("#theme-toggle");
const thumbIcon = document.querySelector(".thumb-icon");

function updateThemeIcon() {
	const theme = document.documentElement.dataset.theme;

	thumbIcon.textContent = theme === "dark" ? "☾" : "☀";
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
	const currentTheme = document.documentElement.dataset.theme;
	const newTheme = currentTheme === "dark" ? "light" : "dark";

	document.documentElement.dataset.theme = newTheme;
	localStorage.setItem("theme", newTheme);

	updateThemeIcon();
});