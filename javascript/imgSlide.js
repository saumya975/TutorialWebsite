let currentSlide = 1;
const slides = document.querySelectorAll('.slides img');
const maxSlides = slides.length;

function nextSlide() {
  if (currentSlide < maxSlides) {
    currentSlide++;
  } else {
    currentSlide = 1;
  }
  document.querySelector(`#slide${currentSlide}`).checked = true;
}

function prevSlide() {
  if (currentSlide > 1) {
    currentSlide--;
  } else {
    currentSlide = maxSlides;
  }
  document.querySelector(`#slide${currentSlide}`).checked = true;
}

setInterval(nextSlide, 5000);