import updateStatus from './taskUpdater.js';

const getDragAfterElement = (container, y) => {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
};

const dragAndDrop = (tasks) => {
  const list = tasks.getTasks();
  const draggables = document.querySelectorAll('.draggable');
  const container = document.getElementById('to-do-list');
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
      const everyChild = document.querySelectorAll('#to-do-list li');
      everyChild.forEach((child, index) => {
        list[child.getAttribute('id')].index = index;
      });
      tasks.orderTasks(list);
    });
  });
  draggables.forEach((draggable) => {
    draggable.removeEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.removeEventListener('dragend', () => {
      draggable.classList.remove('dragging');
      const everyChild = document.querySelectorAll('#to-do-list li');
      everyChild.forEach((child, index) => {
        list[child.getAttribute('id')].index = index;
      });
      tasks.orderTasks();
    });
  });
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
};

const display = (tasksObject) => {
  const listContainer = document.getElementById('to-do-list');
  const tasks = tasksObject.getTasks();
  listContainer.innerHTML = '';
  tasks.forEach((task, i) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.classList.add('draggable');
    listItem.setAttribute('draggable', 'true');
    listItem.setAttribute('id', i);
    listItem.innerHTML = `<div class="checkbox" id="checkbox${i}"></div>
                          <img class="checkmark" id="checkmark${i}" src="./asset/checkmark.svg" alt="Checkmark">
                          <div class="input-div" id="input-div${i}">
                            <input type="text" class="task-description" id="description${i}">
                            <img class="remove" id="remove${i}" src="./asset/garbage.svg" alt="Garbage bin icon">
                            <img class="dots" draggable="false" id="dots${i}" src="./asset/vertical-dots.svg" alt="Vertical dots">
                          </div>
                          `;
    listContainer.appendChild(listItem);
    const checkbox = document.getElementById(`checkbox${i}`);
    const checkmark = document.getElementById(`checkmark${i}`);
    const text = document.getElementById(`description${i}`);
    const elementArray = [checkmark, checkbox, text];
    updateStatus(elementArray, tasksObject, i);
    const remove = document.getElementById(`remove${i}`);
    const dots = document.getElementById(`dots${i}`);
    const input = document.getElementById(`description${i}`);
    const inputDiv = document.getElementById(`input-div${i}`);
    input.value = tasks[i].description;
    document.addEventListener('click', (event) => {
      const isClickInside = inputDiv.contains(event.target);
      if (!isClickInside) {
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
      tasksObject.remove(input.value);
      display(tasksObject);
    });
    input.addEventListener('change', () => {
      const thisTask = {
        description: input.value,
        completed: task.completed,
        index: task.index,
      };
      tasksObject.edit(i, thisTask);
    });
  });
  dragAndDrop(tasksObject);
};

export { display, dragAndDrop };