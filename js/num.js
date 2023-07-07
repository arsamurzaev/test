window.addEventListener("DOMContentLoaded", () => {
  const animItems = document.querySelectorAll(".nums-anim");
  if (animItems.length > 0) {
    if (window.innerWidth <= 576) {
      window.addEventListener("scroll", animOnScroll);
      function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 2;

          let animItemPoint = window.innerHeight - animItemHeight / animStart;

          if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }

          if (
            scrollY > animItemOffset - animItemPoint &&
            scrollY < animItemOffset + animItemHeight / animStart
          ) {
            animItem.classList.add("active");
          } else {
            animItem.classList.remove("active");
          }
        }
      }
      function offset(el) {
        var rect = el.getBoundingClientRect(),
          scrollLeft = window.scrollX || document.documentElement.scrollLeft,
          scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
      animOnScroll();
    }
  }
});
