
const updateStatus = (elements, tasksObject, index) => {
  const checkbox = elements[1];
  const checkmark = elements[0];
  const text = elements[2];
  const task = tasksObject.getTasks()[index];
  checkbox.addEventListener('click', () => {
    checkbox.style.display = 'none';
    checkmark.style.display = 'block';
    text.style.textDecoration = 'line-through';
    text.style.color = 'gray';
    task.completed = true;
    tasksObject.edit(index, task);
  });
  checkmark.addEventListener('click', () => {
    checkbox.style.display = 'block';
    checkmark.style.display = 'none';
    text.style.textDecoration = 'none';
    text.style.color = 'black';
    task.completed = false;
    tasksObject.edit(index, task);
  });
};

export default (updateStatus);