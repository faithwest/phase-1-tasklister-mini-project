//lets create the different variables to add to our to do list
document.addEventListener("DOMContentLoaded", function () {
let newInput = document.createElement("duration");

const myForm = document.getElementById('my-form');
const taskInput = document.getElementById('task');
const dateInput = document.getElementById('due date');
const taskList = document.getElementById('task-List');


//initiate the form element
const form = document.getElementById('myForm');
// to prevent form from submitting
form.addEventListener('submit', function(event){
  event.preventDefault();   //stops it from navigating into a new web page and stop sending request to the server
});

//lets check to ensure the user entered text before taking the next step
if (taskText !== "") {
  //creating a new HTML list <li>
  const listItem = document.createElement("li");//set the list,display text and show button for delete
listItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete">Delete</button>
`;
 // HTML unorderd list<ul> and also adds the ordered <li> to it
 taskList.appendChild(listItem);
 taskInput.value = "";//clear the input field for the next user


//storing the arrays
const tasks = [];

//adding event listener to delete button
const deleteButton = listItem.querySelector(".delete");//navigating into delete button
deleteButton.addEventListener('click', function() {
  taskList.removeChild(listItem);// removing list<li>
});
}
});

