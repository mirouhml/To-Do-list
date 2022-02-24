/**
 * @jest-environment jsdom
 */

import { display } from '../modules/taskHandler.js';
import Tasks from '../modules/tasksCreator.js';
import updateStatus from '../modules/taskUpdater.js';

describe('Display tasks', () => {
  it('Add one new item to the list', () => {
    const tasks = new Tasks();
    document.body.innerHTML = '<div>  <ul class="to-do-list" id="to-do-list"></ul> </div>';
    tasks.add('task1');
    display(tasks);
    const list = document.querySelectorAll('#to-do-list li');
    expect(list).toHaveLength(1);
  });

  it('Add two new items to the list', () => {
    const tasks = new Tasks();
    document.body.innerHTML = '<div>  <ul class="to-do-list" id="to-do-list"></ul> </div>';
    tasks.add('task1');
    tasks.add('task2');
    display(tasks);
    const list = document.querySelectorAll('#to-do-list li');
    expect(list).toHaveLength(2);
  });

  it('Add two new items to the list', () => {
    const tasks = new Tasks();
    document.body.innerHTML = '<div>  <ul class="to-do-list" id="to-do-list"></ul> </div>';
    tasks.add('task1');
    tasks.add('task2');
    tasks.remove('task2');
    display(tasks);
    const list = document.querySelectorAll('#to-do-list li');
    expect(list).toHaveLength(1);
  });
});

describe('Edit tasks', () => {
  it("Edit one task's description", () => {
    const tasks = new Tasks();
    tasks.add('task1');
    const editedTask = tasks.search('task1');
    const task = {
      description: 'task2',
      completed: editedTask.completed,
      index: editedTask.index,
    };
    tasks.edit(0, task);
    expect(editedTask.description).toBe('task2');
  });

  it("Edit one task's description", () => {
    const tasks = new Tasks();
    tasks.add('task1');
    tasks.add('task2');
    const editedTask = tasks.search('task2');
    const task = {
      description: 'not task2',
      completed: editedTask.completed,
      index: editedTask.index,
    };
    tasks.edit(1, task);
    expect(editedTask.description).toBe('not task2');
  });

  it("Edit one task's status from pending to finished", () => {
    const tasks = new Tasks();
    tasks.add('task1');
    tasks.add('task2');
    document.body.innerHTML = '<div>  <ul class="to-do-list" id="to-do-list"></ul> </div>';
    display(tasks);
    const checkbox = document.getElementById('checkbox0');
    const checkmark = document.getElementById('checkmark0');
    const text = document.getElementById('description0');
    const elementArray = [checkmark, checkbox, text];
    updateStatus(elementArray, tasks, 0);
    checkbox.click();
    const task = tasks.search('task1');
    expect(task.completed).toBe(true);
  });

  it("Edit one task's status from finished to pending", () => {
    const tasks = new Tasks();
    tasks.add('task1');
    tasks.add('task2');
    document.body.innerHTML = '<div> <ul class="to-do-list" id="to-do-list"></ul> </div>';
    display(tasks);
    const checkbox = document.getElementById('checkbox0');
    const checkmark = document.getElementById('checkmark0');
    const text = document.getElementById('description0');
    const elementArray = [checkmark, checkbox, text];
    updateStatus(elementArray, tasks, 0);
    checkbox.click();
    checkmark.click();
    const task = tasks.search('task1');
    expect(task.completed).toBe(false);
  });
});

describe('Clear completed tasks', () => {
  it('Clear one task', () => {
    const tasks = new Tasks();
    tasks.add('task1');
    tasks.add('task2');
    tasks.add('task2');
    document.body.innerHTML = '<div>  <ul class="to-do-list" id="to-do-list"></ul> </div>';
    display(tasks);
    const checkbox = document.getElementById('checkbox0');
    const checkmark = document.getElementById('checkmark0');
    const text = document.getElementById('description0');
    const elementArray = [checkmark, checkbox, text];
    updateStatus(elementArray, tasks, 0);
    checkbox.click();
    tasks.clear();
    expect(tasks.getTasks()).toHaveLength(2);
  });

  it('Clear two tasks', () => {
    const tasks = new Tasks();
    tasks.add('task1');
    tasks.add('task2');
    tasks.add('task2');
    document.body.innerHTML = '<div>  <ul class="to-do-list" id="to-do-list"></ul> </div>';
    display(tasks);
    let checkbox = document.getElementById('checkbox0');
    let checkmark = document.getElementById('checkmark0');
    let text = document.getElementById('description0');
    let elementArray = [checkmark, checkbox, text];
    updateStatus(elementArray, tasks, 0);
    checkbox.click();
    checkbox = document.getElementById('checkbox1');
    checkmark = document.getElementById('checkmark1');
    text = document.getElementById('description1');
    elementArray = [checkmark, checkbox, text];
    checkbox.click();
    tasks.clear();
    expect(tasks.getTasks()).toHaveLength(1);
  });
});
