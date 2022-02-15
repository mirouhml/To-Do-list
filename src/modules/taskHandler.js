const dynamicSort = (property) => {
  const sortOrder = 1;
  // if(property[0] === "-") {
  //   sortOrder = -1;
  //   property = property.substr(1);
  // }
  return (a, b) => {
    let result = 0;
    if (a[property] < b[property]) result = -1;
    else if (a[property] > b[property]) result = 1;
    return result * sortOrder;
  };
};

const listContainer = document.getElementById('to-do-list');

const createTask = (task, i) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  listItem.innerHTML = `<div class="checkbox" id="checkbox${i}"></div>
                        <img class="checkmark" id="checkmark${i}" src="./asset/checkmark.svg" alt="Checkmark">
                        <h3 class="task-description">${task.description}</h3>
                        <img class="dots" src="./asset/vertical-dots.svg" alt="Vertical dots">`;
  const hr = document.createElement('hr');
  listContainer.appendChild(listItem);
  listContainer.appendChild(hr);
  const checkbox = document.getElementById(`checkbox${i}`);
  const checkmark = document.getElementById(`checkmark${i}`);
  checkbox.addEventListener('click', () => {
    checkbox.style.display = 'none';
    checkmark.style.display = 'block';
  });
  checkmark.addEventListener('click', () => {
    checkbox.style.display = 'block';
    checkmark.style.display = 'none';
  });
};

const display = (tasks) => {
  tasks.sort(dynamicSort('index'));
  for (let i = 0; i < tasks.length; i += 1) {
    createTask(tasks[i], i);
  }
};

export default (display);