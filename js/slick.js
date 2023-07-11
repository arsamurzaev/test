function slick() {
  const btnClick = document.querySelectorAll(".click");
  const slickBlocks = document.querySelectorAll(".main__slider-block");

  const moveSlickBlock = (slickBlock, translation) => {
    slickBlock.style.transform = `translate(${translation})`;
  };

  btnClick[0].addEventListener("click", () => {
    slickBlocks.forEach((slickBlock) => {
      moveSlickBlock(slickBlock, "-100%");
    });
  });

  btnClick[1].addEventListener("click", () => {
    slickBlocks.forEach((slickBlock) => {
      moveSlickBlock(slickBlock, "0");
    });
  });
}

window.addEventListener("DOMContentLoaded", slick);
