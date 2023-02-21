// Bjælke
        const mellemRum = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'

    // Array
        const linje  = ["Trustpilot 4,3", "Levering 1-3 arbejdsdage", "Fri fragt på køb over 649 dkk"];
        let output = document.getElementById("out");

    // for-loop
        for (let i = 0; i < linje.length; i++) {
            output.innerHTML += mellemRum + linje[i]
    }