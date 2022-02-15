import display from './modules/taskHandler.js';
import './style.css';
import './asset/checkmark.svg';
import './asset/vertical-dots.svg';
import './asset/refresh.svg';
import './asset/enter.svg';

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
    index: 0,
  },
];

display(toDoList);
