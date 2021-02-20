const SHOWING_CN = 'showing';
const firstSlide = document.querySelector('.slider-item:first-child');

const rightBtn = document.querySelector('.btn-right');
const leftBtn = document.querySelector('.btn-left');

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CN}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CN);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CN);
    } else {
      firstSlide.classList.add(SHOWING_CN);
    }
  } else {
    firstSlide.classList.add(SHOWING_CN);
  }
}
rightBtn.addEventListener('click', slide);
