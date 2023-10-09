document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById('myForm');
  const taskInput = document.getElementById('task');
  const taskList = document.getElementById('taskList');

  // Initialize the tasks array
  const tasks = [];

  // Add a submit event listener to the form
  myForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting

      const taskText = taskInput.value.trim(); // Get the task text

      if (taskText !== "") {
          // Create a new list item and add it to the task list
          const listItem = document.createElement("li");
          listItem.innerHTML = `
              <span>${taskText}</span>
              <button class="delete">Delete</button>
          `;
          taskList.appendChild(listItem);

          // Add the task to the tasks array
          tasks.push(taskText);

          // Clear the input field
          taskInput.value = "";

          // Add a click event listener to the delete button
          const deleteButton = listItem.querySelector(".delete");
          deleteButton.addEventListener('click', function () {
              // Remove the list item
              taskList.removeChild(listItem);

              // Remove the task from the tasks array
              const index = tasks.indexOf(taskText);
              if (index !== -1) {
                  tasks.splice(index, 1);
              }
          });
      }
  });
});