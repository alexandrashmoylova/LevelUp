const buttonLeft = document.querySelector(".slider__left");
const buttonRight = document.querySelector(".slider__right");
const slides = document.querySelectorAll(".reviews-list__item");
const countDown = document.querySelector(".timer__counter");
let time = 1800;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
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

const togglePreviousSlide = () => {
  plusSlide(-1);
};

const toggleNextSlide = () => {
  plusSlide(1);
};

buttonLeft.addEventListener("click", togglePreviousSlide);
buttonRight.addEventListener("click", togglePreviousSlide);

setInterval(updateCountDown, 1000);

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDown.innerHTML = `${minutes} : ${seconds}`;
  time--;
}
