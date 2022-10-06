const buttonLeft = document.querySelector(".slider-left");
const buttonRight = document.querySelector(".slider-right");
const slides = document.querySelectorAll("reviews-list__item");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

// function previousSlide() {
//     showSlides(slideIndex -= 1);
// }

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

buttonLeft.addEventListener("click", plusSlide(-1));
buttonRight.addEventListener("click", plusSlide(1));
