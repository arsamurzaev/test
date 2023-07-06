function slick() {
  const btnClick = document.querySelectorAll(".click");
  const slickBlocks = document.querySelectorAll(".main__slider-block");
  for (let i = 0; i < slickBlocks.length; i++) {
    const slickBlock = slickBlocks[i];
    btnClick[0].addEventListener(
      "click",
      () => (slickBlock.style.transform = "translate(-100%)")
    );
    btnClick[1].addEventListener(
      "click",
      () => (slickBlock.style.transform = "translate(0)")
    );
  }
}

window.addEventListener("DOMContentLoaded", slick);
