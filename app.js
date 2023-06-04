const tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const task = taskInput.value;
    tasks.push(task);
    taskInput.value = '';
    updateTaskList();
});

createImageBitmap

function updateTaskList() {
    taskList.innerHTML = '';

    tasks.forEach(function(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}