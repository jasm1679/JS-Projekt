let slideIndexe = 1;
showSlides(slideIndexe);

// frem/tilbage kontrol
function plusSlides(n) {
  showSlides(slideIndexe += n);
}

// Billederne som skal dukke op en efter en
function currentSlide(n) {
  showSlides(slideIndexe = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexe = 1}
  if (n < 1) {slideIndexe = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexe-1].style.display = "block";
  dots[slideIndexe-1].className += " active";
}