const clock = document.querySelector('.js-clock');

const SHORT_CN = 'short';
let now = new Date();
let minutes = now.getMinutes();
let hours = now.getHours();

function getTimeNow() {
  let timeNow = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
  if (clock.classList.contains('short')) {
    clock.innerHTML = `${timeNow} KST`;
  } else {
    if (hours >= 0 && hours < 13) {
      clock.innerHTML = `${timeNow} AM KST`;
    } else {
      clock.innerHTML = `${timeNow} PM KST`;
    }
  }
}

function toggleClockCN(e) {
  clock.classList.toggle('short');
}

function init() {
  getTimeNow();
  setInterval(getTimeNow, 1000);
  clock.addEventListener('click', toggleClockCN);
}

init();
