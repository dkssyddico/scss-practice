const mainCards = document.querySelectorAll('.main-card');

const HIDDEN_CN = 'hidden';

mainCards.forEach((mainCard) => {
  mainCard.addEventListener('mouseover', () => {
    const subCard = mainCard.querySelector('.sub-container');
    subCard.classList.remove('hidden');
  });
  mainCard.addEventListener('mouseleave', () => {
    const subCard = mainCard.querySelector('.sub-container');
    subCard.classList.add('hidden');
  });
});
