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