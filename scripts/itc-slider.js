document.addEventListener('DOMContentLoaded', function () {

  const slider = document.querySelector('.slider');
  const cards = document.querySelectorAll('.card');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const cardWidth = cards[0].offsetWidth + 20; // 20px is the margin between cards

  let currentIndex = 0;

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
    updateSlider();
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
  });

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      card.classList.toggle('blue');
    });
  });

  function updateSlider() {
    const position = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${position}px)`;
  }

}); 