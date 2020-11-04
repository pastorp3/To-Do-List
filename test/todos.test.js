import todos from '../src/todos';
import Library from '../src/library';
import Project from '../src/addproject';

document.body.innerHTML = '<div id="container-left" ></div><div id ="container-right"></div><div id="projects-container" class="padding-left"><form name="form-projects" id="addporject" class="padding-left"><input type="input" class="input" placeholder="Add new project.."><button type="button" class="input addporjectbutton">+</button></form>';
const library = new Library();
const project = new Project('test');
library.myprojects.push(project);

it('check if it can create todos view', () => {
  expect(todos(library.myprojects[0], library.myprojects, library)).toBe(true);
});