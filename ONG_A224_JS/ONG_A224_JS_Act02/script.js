const txtTaskList = document.getElementById('txtTaskList');
const btnAddTask = document.getElementById('btnAddTask');
const lstTodos = document.getElementById('lstTodos');

let todos = [];

// Function to display the tasks in the <ul>
function display() {
    lstTodos.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
        const listItem = document.createElement('li'); 
        listItem.textContent = todos[i]; 
        lstTodos.appendChild(listItem); 
    }
}

// Event listener for the "Add Task" button
btnAddTask.addEventListener('click', () => {
    const taskValue = txtTaskList.value.trim();
    if (taskValue) { 
        todos.push(taskValue); 
        console.log(todos);

        display();

        
        txtTaskList.value = '';
    } else {
        alert("Please enter a task."); // Alert for empty inputs
    }
});
