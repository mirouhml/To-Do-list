import Tasks from './tasksCreator.js';
import {updateStatus} from './taskUpdater.js';
const listContainer = document.getElementById('to-do-list');

const tasksObject = new Tasks();

const display = (tasks) => {
  tasksObject.setTasks();
  listContainer.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.innerHTML = `<div class="checkbox" id="checkbox${i}"></div>
                          <img class="checkmark" id="checkmark${i}" src="./asset/checkmark.svg" alt="Checkmark">
                          <div class="input-div" id="input-div${i}">
                            <input type="text" class="task-description" id="description${i}">
                            <img class="remove" id="remove${i}" src="./asset/garbage.svg" alt="Garbage bin icon">
                            <img class="dots" id="dots${i}" src="./asset/vertical-dots.svg" alt="Vertical dots">
                          </div>
                          `;
    const hr = document.createElement('hr');
    listContainer.appendChild(listItem);
    listContainer.appendChild(hr);
    const checkbox = document.getElementById(`checkbox${i}`);
    const checkmark = document.getElementById(`checkmark${i}`);
    const text = document.getElementById(`description${i}`);
    const elementArray = [checkmark, checkbox, text];
    updateStatus(elementArray,tasks[i],i);
    const remove = document.getElementById(`remove${i}`);
    const dots = document.getElementById(`dots${i}`);
    const input = document.getElementById(`description${i}`);
    const inputDiv = document.getElementById(`input-div${i}`);
    input.value = tasks[i].description;

    document.addEventListener('click', (event) => {
      const isClickInside = inputDiv.contains(event.target);
      if (!isClickInside) {
        // the click was outside the specifiedElement, do something
        listItem.style.backgroundColor = '#fff';
        input.style.backgroundColor = '#fff';
        remove.style.display = 'none';
        dots.style.display = 'block';
        if (checkmark.style.display === 'block') text.style.textDecoration = 'line-through';
      } else {
        listItem.style.backgroundColor = '#fffeca';
        input.style.backgroundColor = '#fffeca';
        remove.style.display = 'block';
        dots.style.display = 'none';
        if (checkmark.style.display === 'block') text.style.textDecoration = 'none';
      }
    });
    remove.addEventListener('click', () => {
      tasksObject.remove(i);
      display(tasksObject.getTasks());
    });
    input.addEventListener('change', () => {
      const task = {
        description: input.value,
        completed: tasks[i].completed,
        index: tasks[i].index,
      };
      tasksObject.edit(i, task);
    });
  }
};

export default (display);