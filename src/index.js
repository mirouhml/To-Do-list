import { display } from './modules/taskHandler.js';
import './style.css';
import './asset/checkmark.svg';
import './asset/vertical-dots.svg';
import './asset/refresh.svg';
import './asset/enter.svg';
import './asset/garbage.svg';
import Tasks from './modules/tasksCreator.js';

const tasks = new Tasks();
display(tasks);
const refresh = document.getElementById('refresh');
let rotate = -360;
refresh.addEventListener('click', () => {
  refresh.style.transform = `rotate(${rotate}deg)`;
  rotate -= 360;
  tasks.reset();
  display(tasks);
});

const enter = document.getElementById('enter');
const input = document.getElementById('add-task');
enter.addEventListener('click', () => {
  tasks.add(input.value);
  input.value = '';
  display(tasks);
});

input.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    tasks.add(input.value);
    input.value = '';
    display(tasks);
  }
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  tasks.clear();
  display(tasks);
});