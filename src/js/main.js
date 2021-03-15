const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navHeight) {
    nav.classList.add('nav__top');
  } else {
    nav.classList.remove('nav__top');
  }
});

const sections = document.querySelectorAll('.picture');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  sections.forEach((section) => {
    const sectionHeight = section.getBoundingClientRect().height;
    const slideInAt = window.scrollY + window.innerHeight - sectionHeight / 2;
    const imageBottom = section.offsetTop + sectionHeight;
    const isHalfShown = slideInAt > section.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
