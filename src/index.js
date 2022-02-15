import display from './modules/taskHandler';

const toDoList = [
  { 
    description: 'task 1',
    completed: false,
    index: 2,
  },
  { 
    description: 'task 2',
    completed: false,
    index: 1,
  },
  { 
    description: 'task 3',
    completed: false,
    index: 3,
  },
];

display(toDoList);