function clickBurger() {
  const button = document.querySelector(".header__burger-menu");
  const animItems = document.querySelector(".anim__items");
  button.addEventListener("click", () => {
    animItems.classList.add("active");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  clickBurger();
});
