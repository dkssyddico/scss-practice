const hideMenu = document.querySelector('.hide-menu');
const shop = document.querySelector('.shop');

shop.addEventListener('mouseover', () => {
  hideMenu.classList.toggle('hide');
  console.log('hi');
});

hideMenu.addEventListener('mouseleave', () => {
  hideMenu.classList.toggle('hide');
});