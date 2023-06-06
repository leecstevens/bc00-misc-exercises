

function keydownAction(event) {
  // TODO: Complete keydown function
let key_value = event.key;
let key_code = event.code
document.querySelector("#key").textContent = key_value
document.querySelector("#code").textContent = key_code
document.querySelector("#status").textContent = "KeyDown Event"
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keyup" event
document.addEventListener("keydown", keydownAction)
