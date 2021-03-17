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

const body = document.querySelector('body');

//158, 875,1592, 2309, 3026, 3743, 4460

const changeColor = () => {
  let windowScrollY = window.scrollY;
  if (windowScrollY >= 158) {
    body.classList.remove('basicBg');
    body.classList.add('plum');
  }
  if (windowScrollY >= 1592) {
    body.classList.remove('plum');
    body.classList.add('powderBlue');
  }

  if (windowScrollY >= 3026) {
    body.classList.remove('powderBlue');
    body.classList.add('rosyBrown');
  }
};

function checkSlide() {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    changeColor();
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
