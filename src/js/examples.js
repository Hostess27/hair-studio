
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "flex";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// }

let slideIndex = 1;
showSlides(slideIndex);

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function () {
  showSlides((slideIndex += 1));
  makeTimer();
});

prev.addEventListener('click', function () {
  showSlides((slideIndex -= 1));
  makeTimer();
});

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let dots = document.getElementsByClassName('dot');
  let slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[slideIndex - 1].className += ' active';
  slides[slideIndex - 1].style.display = 'flex';
}
let timer = 0;
makeTimer();
function makeTimer() {
  clearInterval(timer);
  timer = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, 4000);
}
