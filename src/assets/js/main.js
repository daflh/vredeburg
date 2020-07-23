// hide header on scroll down & show on scroll up
const header = document.getElementById("header");
let lastPos = document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
    let currPos = document.documentElement.scrollTop;
    if (currPos > lastPos) {
        if (currPos > header.offsetHeight) {
            header.classList.add("hide-header");
            header.classList.remove("nice-shadow");
        }
    } else {
        header.classList.remove("hide-header");
        header.classList.add("nice-shadow");
    }
    lastPos = currPos;
});

// menu toggle on mobile device
const menu = document.getElementById("menu");
const searchBox = document.getElementById("search");
const menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    searchBox.classList.toggle("hidden");
});