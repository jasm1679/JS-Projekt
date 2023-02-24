function myFunction() {
  document.getElementById("myDropdown").classList.toggle("visual");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbutton")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("visual")) {
        openDropdown.classList.remove("visual");
      }
    }
  }
};
