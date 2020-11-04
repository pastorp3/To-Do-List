import * as Render from '../src/render';
import Library from '../src/library';
import Project from '../src/addproject';

document.body.innerHTML = '<div id="container-left" ></div><div id ="container-right"></div><div id="projects-container" class="padding-left"><form name="form-projects" id="addporject" class="padding-left"><input type="input" class="input" placeholder="Add new project.."><button type="button" class="input addporjectbutton">+</button></form>';
const library = new Library();
const project = new Project('test');
library.myprojects.push(project);


it('check if it can show each project in the page', () => {
  expect(Render.render(library.myprojects[0], library.myprojects, library)).toBe(true);
});

it('check if it can take the value of the form', () => {
  expect(Render.form(library.myprojects[0], library)).toBe(true);
});

it('check if it can submit the form', () => {
  expect(Render.submitform(library.myprojects[0])).toBeUndefined();
});