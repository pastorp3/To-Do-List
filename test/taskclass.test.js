import Task from '../src/addtask';

const task1 = new Task('test', 'low', '12/03/2000', 'This is a test');
it('check if a Task can be created', () => {
  expect(task1).toBeDefined();
});

it('check if Task take the correct input', () => {
  expect(task1.title).toBe('test');
  expect(task1.priority).toBe('low');
  expect(task1.date).toBe('12/03/2000');
  expect(task1.description).toBe('This is a test');
});