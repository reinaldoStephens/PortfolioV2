const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toogleMenu() {
    menu.classList.toggle("menu-opened");
}

openMenuBtn.addEventListener("click", () => toogleMenu());
closeMenuBtn.addEventListener("click", () => toogleMenu());
