var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var submit_button = $('submit-item')


// TODO: Create a function to handle the form submission event 
// that captures the form's `<input>` value and prints it to the 
// `shoppingListEl` as a `<li>`

function handle_postback(event) {
    event.preventDefault();
}

var shoppingItem = $('input[name="shopping-input"]').val();

shoppingListEl.append('<li>'+shoppingItem+'</l1>')



// TODO: Add an event listener to the `shoppingFormEl` to handle submission


shoppingFormEl.on('submit', handle_postback())

