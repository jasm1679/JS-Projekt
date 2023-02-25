function getOption() {
  selectElement = document.querySelector("#button_a");
  output = selectElement.value;
}
const selected = document.querySelector("#button_a");
const price = document.querySelector(".regular_a");

selected.addEventListener("change", selection);

function selection() {
  const choice = selected.value;

  if (choice === "one") {
    price.textContent = "3.500,00 DKK";
  } else if (choice === "five") {
    price.textContent = "3.800,00 DKK";
  } else if (choice === "ten") {
    price.textContent = "4.200,00 DKK";
  } else if (choice === "twenty") {
    price.textContent = "4.600,00 DKK";
  } else if (choice === "fifty") {
    price.textContent = "5.000,00 DKK";
  } else if (choice === "onehundred") {
    price.textContent = "6.000,00 DKK";
  }
}
