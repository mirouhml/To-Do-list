const dynamicSort = (property) => {
  var sortOrder = 1;
  // if(property[0] === "-") {
  //   sortOrder = -1;
  //   property = property.substr(1);
  // }
  return (a,b) => {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

const createTask = (task) => {
  const listContainer = document.getElementById('to-do-list');
  const listItem = document.createElement('li');
  listItem.innerHTML = `<h2>${task.description}</h2>`;
  listContainer.appendChild(listItem);
};

const display = (tasks) => {
  tasks.sort( dynamicSort("index") );
  for(let i = 0; i < tasks.length; i++) {
    createTask(tasks[i]);
  }
};

export default (display);