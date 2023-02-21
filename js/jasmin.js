// Bjælke
        const mellemRum = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'

    // Array
        const linje  = ["✔ Trustpilot 4,3", "✔ Levering 1-3 arbejdsdage", "✔ Fri fragt på køb over 649 dkk"];
        let output = document.getElementById("out");

    // for-loop
        for (let i = 0; i < linje.length; i++) {
            output.innerHTML += mellemRum + linje[i]
    }










    




// Antal (Dette er ikke en del af mit tildelte stykke js, blot ekstra)
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