import Library from '../src/library';
import Project from '../src/addproject';

document.body.innerHTML = '<div id="projects-container"></div>';

const library = new Library();
const project = new Project('test');
it('check if a Project can be created', () => {
  expect(library).toBeDefined();
});

it('check if a project can be add it to Library', () => {
  expect(library.addProject(project, library)).toBeDefined();
});

it('check if it can render the page with all projects', () => {
  expect(library.viewprojects(library)).toBe(library);
});