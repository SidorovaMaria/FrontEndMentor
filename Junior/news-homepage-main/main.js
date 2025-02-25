const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const backdrop = document.getElementById("backdrop");
const mobileNav = document.getElementById("navigation");

const toggleNavigation = () => {
	menuClose.classList.toggle("visible");
	menuOpen.classList.toggle("hidden");
	mobileNav.classList.toggle("visible");
	backdrop.classList.toggle("visible");
};
menuClose.addEventListener("click", toggleNavigation);
menuOpen.addEventListener("click", toggleNavigation);
