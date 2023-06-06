var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  todoList.innerHTML = "";  // blanking the todolist or #todo-list id
  todoCountSpan.textContent = todos.length; //takes the array and writing the array length to the element
  
  // TODO: Describe the functionality of the following `for` loop.
  for (var i = 0; i < todos.length; i++) {
    // create loop to add todos.
    var todo = todos[i];

    // create li element with the todo content
    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    // create button to complete todo when complete.
    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    //adds the new li button
    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
function init() {
  // TODO: What is the purpose of the following line of code?
  /* Creates var, parses input from localstorage todos */
  var storedTodos = JSON.parse(localStorage.getItem("todos")); 
  // TODO: Describe the functionality of the following `if` statement.
  // if the storedtodos has data, populate todos with it
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  renderTodos(); //Invoking the function
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init(); // Calls the init function above
