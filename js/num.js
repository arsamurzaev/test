function animateCounter() {
  let counters = document.getElementsByClassName("counter");
  let scrollOffset = window.innerHeight * 0.1; // Отступ от нижней границы экрана для запуска анимации
  let animationDuration = 1000; // Продолжительность анимации в миллисекундах

  function animateValue(element, start, end, duration) {
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let percentage = Math.min(progress / duration, 1); // Вычисляем процент завершенности анимации
      let value = Math.floor(percentage * (end - start) + start); // Вычисляем текущее значение

      element.textContent = value; // Обновляем текст элемента

      if (progress < duration) {
        window.requestAnimationFrame(step); // Продолжаем анимацию, если не достигнута продолжительность
      }
    }
    window.requestAnimationFrame(step);
  }

  function startAnimation() {
    let allAnimated = true; // Переменная для отслеживания анимации всех блоков

    for (let i = 0; i < counters.length; i++) {
      let counter = counters[i];
      let counterPosition = counter.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (
        counterPosition < windowHeight - scrollOffset &&
        !counter.classList.contains("animated")
      ) {
        let startValue = 0;
        let endValue = parseInt(counter.getAttribute("data-target"));
        animateValue(counter, startValue, endValue, animationDuration);
        counter.classList.add("animated");
      }

      if (!counter.classList.contains("animated")) {
        allAnimated = false; // Если хотя бы один блок не был анимирован, устанавливаем allAnimated в false
      }
    }

    if (allAnimated) {
      window.removeEventListener("scroll", startAnimation); // Удаляем обработчик события прокрутки страницы, если все блоки анимированы
    }
  }

  // Запуск анимации при загрузке страницы и при прокрутке
  window.addEventListener("load", startAnimation);
  window.addEventListener("scroll", startAnimation);
}

animateCounter();
