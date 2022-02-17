import display from './modules/taskHandler.js';
import './style.css';
import './asset/checkmark.svg';
import './asset/vertical-dots.svg';
import './asset/refresh.svg';
import './asset/enter.svg';
import './asset/garbage.svg';
import Tasks from './modules/tasksCreator.js';
import dragAndDrop from './modules/taskDrag.js';

const tasks = new Tasks();
display(tasks.getTasks());
const refresh = document.getElementById('refresh');
let rotate = -360;
refresh.addEventListener('click', () => {
  refresh.style.transform = `rotate(${rotate}deg)`;
  rotate -= 360;
});

const enter = document.getElementById('enter');
const input = document.getElementById('add-task');
enter.addEventListener('click', () => {
  tasks.add(input.value);
  input.value = '';
  display(tasks.getTasks());
});

input.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    tasks.add(input.value);
    input.value = '';
    display(tasks.getTasks());
  }
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  tasks.clear();
  display(tasks.getTasks());
});

dragAndDrop();