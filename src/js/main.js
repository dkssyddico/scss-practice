const numFirst = document.querySelector('.number-first');
const numSecond = document.querySelector('.number-second');
const numThird = document.querySelector('.number-third');
const numFourth = document.querySelector('.number-fourth');
const thNum = document.querySelector('.th');
const krNum = document.querySelector('.kr');
const chNum = document.querySelector('.ch');
const bkNum = document.querySelector('.bk');
const body = document.querySelector('body');
const bgImg = document.querySelector('.bgImg');
const smallCountryName = document.querySelector('.blur-list');
const photoOrder = document.querySelector('.photo-num');

const countryName = document.querySelector('.country-name');

function hiThailand(e) {
  thNum.classList.add('active');
  thNum.classList.remove('hidden');
  countryName.innerHTML = 'Thailand';
  bgImg.src =
    'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
  smallCountryName.innerHTML = 'Thailand';
  photoOrder.innerHTML = '01/04';
}

function byeThailand(e) {
  thNum.classList.remove('active');
  thNum.classList.add('hidden');
}

const hiKrabi = () => {
  krNum.classList.add('active');
  krNum.classList.remove('hidden');
  countryName.innerHTML = 'Krabi';
  bgImg.src =
    'https://images.unsplash.com/photo-1598255055837-723370293a03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80';
  smallCountryName.innerHTML = 'Krabi';
  photoOrder.innerHTML = '02/04';
};

const byeKrabi = () => {
  krNum.classList.remove('active');
  krNum.classList.add('hidden');
};

const hiChiangmai = () => {
  chNum.classList.add('active');
  chNum.classList.remove('hidden');
  countryName.innerHTML = 'Chiangmai';
  bgImg.src =
    'https://images.unsplash.com/photo-1560851691-ebb64b584d3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80';
  smallCountryName.innerHTML = 'Chiangmai';
  photoOrder.innerHTML = '03/04';
};

const byeChiangmai = () => {
  chNum.classList.remove('active');
  chNum.classList.add('hidden');
};

const hiBankok = () => {
  bkNum.classList.add('active');
  bkNum.classList.remove('hidden');
  countryName.innerHTML = 'Bangkok';
  bgImg.src =
    'https://images.unsplash.com/photo-1531169628939-e84f860fa5d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
  smallCountryName.innerHTML = 'Bangkok';
  photoOrder.innerHTML = '04/04';
};

const byeBankok = () => {
  bkNum.classList.remove('active');
  bkNum.classList.add('hidden');
};

function init() {
  numFirst.addEventListener('mouseover', hiThailand);
  numFirst.addEventListener('mouseleave', byeThailand);
  numSecond.addEventListener('mouseover', hiKrabi);
  numSecond.addEventListener('mouseleave', byeKrabi);
  numThird.addEventListener('mouseover', hiChiangmai);
  numThird.addEventListener('mouseleave', byeChiangmai);
  numFourth.addEventListener('mouseover', hiBankok);
  numFourth.addEventListener('mouseleave', byeBankok);
}

init();
