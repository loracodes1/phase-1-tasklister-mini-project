
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
    // Select the form element
    const taskForm = document.getElementById('create-task-form');
    // Select the task list element
    const taskList = document.getElementById('tasks');
    
    // Add an event listener to handle form submission
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form's default behavior (page reload)
      
      // Get the value from the input field
      const newTaskDescription = document.getElementById('new-task-description').value;
      
      // Create a new list item (li) element
      const newTask = document.createElement('li');
      newTask.innerText = newTaskDescription; // Set the task text
      
      // Append the new task to the task list
      taskList.appendChild(newTask);
      
      // Clear the input field after the task is added
      taskForm.reset();
    });
  });
  
