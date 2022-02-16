import Tasks from './tasksCreator.js';
import display from './taskHandler.js';

const tasks = new Tasks();

const clearCompleted = () => {
  const clear = document.getElementById('clear');
  clear.addEventListener('click', () => {
  tasks.setTasks();
  tasks.clear();
  display(tasks.getTasks());
});
};

export {clearCompleted};