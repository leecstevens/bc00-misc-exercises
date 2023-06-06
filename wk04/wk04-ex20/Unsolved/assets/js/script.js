var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function

  var state = element.getAttribute("data-state")
  if ("hidden" === state) {
    element.setAttribute("data-state", "visible")
    //element.textContent = element.getAttribute("data-number")
    element.textContent = element.dataset.number;
  } else {
    element.setAttribute("data-state", "hidden");
    element.textContent = '';
  }
}
);
