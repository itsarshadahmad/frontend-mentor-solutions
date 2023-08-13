const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", (event) => {
	navLinks.classList.toggle("active");
	hamburger.classList.toggle("active");
});
