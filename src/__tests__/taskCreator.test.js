import Tasks from '../modules/tasksCreator.js';

describe('AddTask', () => {
  it('Test case 1', () => {
    const tasks = new Tasks();
    tasks.add('task1');
    tasks.add('task2');
    expect(tasks.getTasks()).toHaveLength(2);
  });

  it('Test case 2', () => {
    const tasks = new Tasks();
    tasks.add('task1');
    tasks.add('task2');
    tasks.add('task3');
    tasks.add('task4');
    tasks.add('task5');
    expect(tasks.getTasks()).toHaveLength(5);
  });

  it('Test case 3', () => {
    const tasks = new Tasks();
    tasks.add('task1');
    tasks.add('task2');
    tasks.add('task3');
    expect(tasks.getTasks()).toHaveLength(3);
  });
});

describe('Remove task', () => {
  test('Remove 1 task of 2', () => {
    const taskList = new Tasks();
    taskList.add('task1');
    taskList.add('task2');
    taskList.remove('task1');
    expect(taskList.getTasks()).toHaveLength(1);
  });

  test('Remove 2 tasks of 2', () => {
    const taskList = new Tasks();
    taskList.add('task1');
    taskList.add('task2');
    taskList.remove('task1');
    taskList.remove('task2');
    expect(taskList.getTasks()).toHaveLength(0);
  });

  test('Remove 1 task of 3', () => {
    const taskList = new Tasks();
    taskList.add('task1');
    taskList.add('task2');
    taskList.add('task3');
    taskList.remove('task1');
    expect(taskList.getTasks()).toHaveLength(2);
  });
});

describe('Reset to do list', () => {
  it('Remove all tasks', () => {
    const taskList = new Tasks();
    taskList.add('task1');
    taskList.add('task2');
    taskList.reset();
    expect(taskList.getTasks()).toHaveLength(0);
  });
});