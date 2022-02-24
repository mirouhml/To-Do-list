const dynamicSort = (property) => {
  const sortOrder = 1;
  return (a, b) => {
    let result = 0;
    if (a[property] < b[property]) result = -1;
    else if (a[property] > b[property]) result = 1;
    return result * sortOrder;
  };
};

export default class Tasks {
  constructor() {
    if (localStorage.getItem('tasks')) {
      this.list = JSON.parse(localStorage.getItem('tasks'));
    } else this.list = [];
  }

  populateStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  add(description) {
    const task = {
      description,
      completed: false,
      index: this.list.length,
    };
    this.list.push(task);
    this.populateStorage();
    return this.list.length;
  }

  remove(description) {
    const { index } = this.search(description);
    this.list.splice(index, 1);
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i;
    }
    this.populateStorage();
    return this.list.length;
  }

  edit(index, task) {
    this.list[index].description = task.description;
    this.list[index].completed = task.completed;
    this.list[index].index = task.index;
    this.orderTasks();
  }

  clear() {
    this.list = this.list.filter((task) => task.completed === false);
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i + 1;
    }
    this.populateStorage();
  }

  search(description) {
    const result = this.list.filter((task) => task.description === description);
    return result[0];
  }

  reset() {
    this.list = [];
    this.populateStorage();
  }

  getTasks() {
    return this.list;
  }

  orderTasks() {
    this.list.sort(dynamicSort('index'));
    this.populateStorage();
  }
}
