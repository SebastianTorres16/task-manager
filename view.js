const View = (() => {
    const taskList = document.getElementById('task-list');

    const clearForm = () => {
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    };

    const renderTasks = (tasks, filter) => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            if (filter === 'completed' && !task.completed) return;
            if (filter === 'pending' && task.completed) return;

            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            li.innerHTML = `
        <strong>${task.title}</strong>: ${task.description}
        <div>
          <button data-action="toggle" data-index="${index}">✔</button>
          <button data-action="edit" data-index="${index}">✏️</button>
          <button data-action="delete" data-index="${index}">🗑️</button>
        </div>
      `;
            taskList.appendChild(li);
        });
    };

    return { clearForm, renderTasks };
})();