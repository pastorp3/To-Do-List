import viewtodos from '../src/viewtodos';
import Library from '../src/library';
import Project from '../src/addproject';

document.body.innerHTML = '<div id="container-left" ></div><div id ="container-right"></div><div id="projects-container" class="padding-left"><form name="form-projects" id="addporject" class="padding-left"><input type="input" class="input" placeholder="Add new project.."><button type="button" class="input addporjectbutton">+</button></form><div id="tasks"></div><div id="0"></div>';
const library = new Library();
const project = new Project('test');
const project2 = new Project('test2');
library.myprojects.push(project);
library.myprojects.push(project2);

it('check it can render all projects in todos view', () => {
  expect(viewtodos(library.myprojects[0], 0, library)).toBe(library.myprojects[0]);
});