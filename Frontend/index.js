// Add active class to the current menu item
var navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(navLink) {
navLink.addEventListener("click", function() {
navLinks.forEach(function(link) {
link.classList.remove("active");
});
this.classList.add("active");
});
});