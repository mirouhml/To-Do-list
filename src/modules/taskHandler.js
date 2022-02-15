const createTask = (task) => {
  const listContainer = document.getElementById('to-do-list');
  const listItem = document.createElement('li');
  listItem.innerHTML = `<h2>${task.description}</h2>`;
  listContainer.appendChild(listItem);
};

const display = (tasks) => {
  for(let i = 0; i < tasks.length; i++) {
    createTask(tasks[i]);
  }
};

export default (display);