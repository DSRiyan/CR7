// Show Scroll to Top Button on Scroll
window.addEventListener("scroll", function () {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
