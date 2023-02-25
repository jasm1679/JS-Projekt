//Dette er hvad jeg har prøvet at lave. Er meget usikker på om det virker eller ej,
//Jeg ved at der er fejl. Det har været en for stor opgave for mig at lave.
//Jeg har prøvet på at få counteren til at gå op og ned med + og - tasterne.

const antal = document.getElementById("antal");

let count = 0;

antal.value = count;

//incress
const handleIncrement = () => {
    count ++;
    antal.value = count;
};

//decress
const handleDecrement = () => {
    count-- ;
    antal.value = count;
}

//button
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

//incrementCount.addEventListner("click", handleIncrement);
//decrementCount.addEventListner("click", handleDecrement);

const numbers = ["one", "five", "ten", "twenty", "fifty", "onehundred"];

for (i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function() {
    if(antal > 0) {
        incrementCount == "bi bi-cart4" ;
    }
    if(antal <= 0) {
        decrementCount == "bi bi-cart4";
    }
}}

