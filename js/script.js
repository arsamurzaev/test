function clickBurger() {
  const button = document.querySelector(".header__burger-menu");
  const wrapper = document.querySelector(".wrapper");
  const animItems = document.querySelector(".anim__items");
  button.addEventListener("click", () => {
    animItems.classList.add("active");
    wrapper.style.display = "none";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  clickBurger();
});
