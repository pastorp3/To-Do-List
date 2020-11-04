import view from '../src/viewtasks';
import Library from '../src/library';
import Project from '../src/addproject';

document.body.innerHTML = '<div id="container-left" ></div><div id ="container-right"></div><div id="projects-container" class="padding-left"><form name="form-projects" id="addporject" class="padding-left"><input type="input" class="input" placeholder="Add new project.."><button type="button" class="input addporjectbutton">+</button></form><div id="tasks"></div>'
const library = new Library();
const project = new Project('test');
library.myprojects.push(project);

it('check if it can create a view for a task', () => {
  expect(view(library.myprojects[0], library)).toBe(library.myprojects[0]);
})