const hamburgerNav = document.getElementById("nav-ham");
const navbarLinks = document.getElementById("navbar-links");
const triangleNav = document.getElementById("triangle-nav");

hamburgerNav.addEventListener("click", (e) => {
	navbarLinks.classList.toggle("active");
	triangleNav.classList.toggle("active");
});
