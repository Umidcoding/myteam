let burgerButton = document.querySelector(".header__burger-btn");
let closeButton =  document.querySelector(".header__menu-close");
let headerMenu = document.querySelector(".header__menu");



burgerButton.addEventListener("click", () => {
  headerMenu.classList.add('header__trfm');
});

closeButton.addEventListener("click", () => {
  headerMenu.classList.remove('header__trfm');
});