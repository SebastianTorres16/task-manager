const Model = (() => {
    let tasks = [];

    const getTasks = () => tasks;

    const addTask = (title, description) => {
        tasks.push({ title, description, completed: false });
    };

    const editTask = (index, title, description) => {
        if (tasks[index]) {
            tasks[index].title = title;
            tasks[index].description = description;
        }
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
    };

    const toggleTask = (index) => {
        if (tasks[index]) {
            tasks[index].completed = !tasks[index].completed;
        }
    };

    return { getTasks, addTask, editTask, deleteTask, toggleTask };
})();