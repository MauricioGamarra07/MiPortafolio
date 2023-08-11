function llamar() {
  let botonera = document.getElementById("botonera");
  botonera.classList.toggle("botonera-open");

  let menu = document.getElementById("menu");
  menu.querySelector('.menu .cerrar').classList.toggle("fa-times");
}

//Header
window.addEventListener("scroll", Mover)
function Mover() {
  let header = document.querySelector(".cont-header");
  let pos = window.scrollY;
  /* console.log(pos); */
  if (pos > 600) {
    header.classList.add("efecto");
  }
  else {
    header.classList.remove("efecto");
  }
}

//Carousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  console.log(slideIndex)

  slides[slideIndex - 1].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}