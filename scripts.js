function addTask() {
    var input = document.getElementById('taskInput').value;
    if (input.trim() !== '') {
        var ul = document.getElementById('taskList');
        var li = document.createElement('li');
        li.textContent = input;
        li.setAttribute('onclick', 'toggleTask(this)');
        ul.appendChild(li);
        document.getElementById('taskInput').value = '';
    }
}

function toggleTask(task) {
    task.classList.toggle('completed');
}
