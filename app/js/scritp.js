const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", function () {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        overlay.classList.remove("fadeout");
        overlay.classList.add("fadein");
    } else {
        header.classList.add("open");
        overlay.classList.add("fadeout");
        overlay.classList.remove("fadein");
    }
});
