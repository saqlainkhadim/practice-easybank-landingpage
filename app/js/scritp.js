const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const fadeElems = document.querySelectorAll(".hasfade");

btnHamburger.addEventListener("click", function () {
    if (header.classList.contains("open")) {// close menu
        header.classList.remove("open");
        body.classList.remove("noscroll");

        fadeElems.forEach(function (element) {
            element.classList.remove("fadeout");
            element.classList.add("fadein");
        });
        
    } else {// open menu
        header.classList.add("open");
        fadeElems.forEach(function (element) {
            element.classList.add("fadeout");
            element.classList.remove("fadein");
        });
        body.classList.add("noscroll");
    }
});
