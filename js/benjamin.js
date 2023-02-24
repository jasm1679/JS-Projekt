let slideIndex = 0;
let timerId = null;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slideimages");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  
  for (i = 0; i < x.length; i++) {
    x[i].onclick = function() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      } else {
        timerId = setTimeout(carousel, 1000);
      }
    }
  }
  
  timerId = setTimeout(carousel, 1000); 
}