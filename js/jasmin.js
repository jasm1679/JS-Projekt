// Bjælke
        const mellemRum = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'

    // Array
        const linje  = ["✔ Trustpilot 4,3", "✔ Levering 1-3 arbejdsdage", "✔ Fri fragt på køb over 649 dkk"];
        let output = document.getElementById("out");

    // for-loop
        for (let i = 0; i < linje.length; i++) {
            output.innerHTML += mellemRum + linje[i]
    }
    
// Bil
    const scrollArea = 1700 - innerHeight;
    let koretoj;
    const random = Math.floor(Math.random()*2);

  // if else
    if (random == 0){
      document.getElementById("bil").style.visibility = "visible";
      koretoj = document.getElementById("bil");
    } else {
      document.getElementById("motorcykel").style.visibility = "visible";
      koretoj = document.getElementById("motorcykel");
    }

  // Event
    addEventListener("scroll", doScroll);

  // Funktion
    function doScroll() {
      let scrollPercent = scrollY / scrollArea;
      let newPosition = scrollPercent * innerWidth - 2200;
      if (newPosition > 1200) {
        koretoj.style.left = 0 + 'px';
      } else {
        koretoj.style.left = scrollPercent * innerWidth - 2200 + 'px';
      }
    }





//(Dette er ikke en del af mit tildelte stykke js, blot ekstra)
// Antal
/* Slettet fordi ellers driller Julies del
    function plus() {
        let value, inputObject;
      
        inputObject = document.getElementById("antal");
        value=parseInt(inputObject.value);
        if (isNaN(value)) {
          inputObject.value=1;
        } else {
          inputObject.value=value+1;
        }
      }

      function minus() {
        let value, inputObject;
      
        inputObject = document.getElementById("antal");
        value=parseInt(inputObject.value);
        if (isNaN(value)){
          inputObject.value=1;
        } else if (value < 2) {
          inputObject.value=1;
        } else {
          inputObject.value=value-1;
        }
      }
*/

//Popup
function myPop() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}