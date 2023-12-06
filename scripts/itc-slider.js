// 1 слайдер

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


// 2 слайдер


function togglePrice() {
  let buttons1 = document.getElementsByClassName("toggle-button1");
  let buttons2 = document.getElementsByClassName("toggle-button2");
  for (let i = 0; i < buttons2.length; i++) {
    event.preventDefault();
    buttons1[i].classList.toggle("active");
    buttons2[i].classList.toggle("active"); // Remove active class from the other button
  }

  var monthPrices = document.getElementsByClassName("price-month");
  var yearPrices = document.getElementsByClassName("price-year");

  for (let i = 0; i < monthPrices.length; i++) {
    let monthPrice = monthPrices[i];
    let yearPrice = yearPrices[i];

    monthPrice.style.display = "none";
    yearPrice.style.display = "none";

    if (buttons1[0].classList.contains("active")) {
      monthPrice.style.display = "block";

    } else {
      yearPrice.style.display = "block";
    }
  }
}


// 3 слайдер
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slideM');
  const dots = document.querySelectorAll('.dot');
  let newIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
  };

  const activateDot = (index) => {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      newIndex = index;
      showSlide(newIndex);
      activateDot(newIndex);
    });
  });

  const leftArrowM = document.querySelector('.leftM');
  leftArrowM.addEventListener('click', () => {
    newIndex = (newIndex === 0) ? slides.length - 1 : newIndex - 1;
    showSlide(newIndex);
    activateDot(newIndex);
  });

  const rightArrowM = document.querySelector('.rightM');
  rightArrowM.addEventListener('click', () => {
    newIndex = (newIndex === slides.length - 1) ? 0 : newIndex + 1;
    showSlide(newIndex);
    activateDot(newIndex);
  });

  showSlide(newIndex);
  activateDot(newIndex);
});