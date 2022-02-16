import Tasks from './tasksCreator.js';

const tasks = new Tasks();

const updateStatus = (elements, task, index) => {
  const checkbox = elements[1];
  const checkmark = elements[0];
  const text = elements[2];
  checkbox.addEventListener('click', () => {
    checkbox.style.display = 'none';
    checkmark.style.display = 'block';
    text.style.textDecoration = 'line-through';
    text.style.color = 'gray';
    task.completed = true;
    tasks.edit(index, task);
  });
  checkmark.addEventListener('click', () => {
    checkbox.style.display = 'block';
    checkmark.style.display = 'none';
    text.style.textDecoration = 'none';
    text.style.color = 'black';
    task.completed = false;
    tasks.edit(index, task);
  });
};

export default (updateStatus);