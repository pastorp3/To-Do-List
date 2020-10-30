import Project from '../src/addproject';
import Task from '../src/addtask';
import Library from '../src/library';

const library = new Library();
const project = new Project('test');
const task1 = new Task('test','low','12/03/2000','This is a test');

it('check if a Project can be created', () => {
	expect(project).toBeDefined();
});

it('check if the Project title is the same than the input', () => {
	expect(project.title).toBe('test');
})

it('check if a Task can be created', () => {
	expect(task1).toBeDefined();
})

it('check if Task take the correct input', () => {
	expect(task1.title).toBe('test');
	expect(task1.priority).toBe('low');
	expect(task1.date).toBe('12/03/2000');
	expect(task1.description).toBe('This is a test');
})

it('check if a project have a task', () => {
	project.tasks.push(task1);
	expect(project.tasks[0]).toBeDefined();
})

it('check if a project can be saved', () => {
	library.myprojects.push(project);
	expect(library.myprojects[0]).toBeDefined();
})