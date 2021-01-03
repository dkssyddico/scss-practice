const firstMenu = document.querySelector('.firstUl');
const firstContent = document.querySelector('.content__first');
const firstIcon = firstContent.querySelector('.fas');
const secondMenu = document.querySelector('.secondUl');
const secondContent = document.querySelector('.content__second');
const secondIcon = secondContent.querySelector('.fas');

function hide(e) {
  if (e.target == firstIcon) {
    firstContent.classList.remove('hide');
    firstContent.classList.add('hide');
  }

  if (e.target == secondIcon) {
    secondContent.classList.remove('hide');
    secondContent.classList.add('hide');
  }
}

function show(e) {
  if (e.target == firstMenu) {
    firstContent.classList.remove('hide');
    firstContent.classList.add('show');
  }
  if (e.target == secondMenu) {
    secondContent.classList.remove('hide');
    secondContent.classList.add('show');
  }
}

firstIcon.addEventListener('click', hide);
firstMenu.addEventListener('click', show);
secondIcon.addEventListener('click', hide);
secondMenu.addEventListener('click', show);
