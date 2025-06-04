const Controller = (() => {
    let currentEditIndex = null;
    let currentFilter = 'all';

    const form = document.getElementById('task-form');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');

    const render = () => {
        View.renderTasks(Model.getTasks(), currentFilter);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const description = descriptionInput.value;

        if (currentEditIndex !== null) {
            Model.editTask(currentEditIndex, title, description);
            currentEditIndex = null;
        } else {
            Model.addTask(title, description);
        }

        View.clearForm();
        render();
    });

    document.getElementById('task-list').addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        const index = parseInt(e.target.dataset.index);

        if (action === 'toggle') {
            Model.toggleTask(index);
        } else if (action === 'edit') {
            const task = Model.getTasks()[index];
            titleInput.value = task.title;
            descriptionInput.value = task.description;
            currentEditIndex = index;
        } else if (action === 'delete') {
            Model.deleteTask(index);
        }

        render();
    });

    document.querySelectorAll('.filters button').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            render();
        });
    });

    render();
})();
