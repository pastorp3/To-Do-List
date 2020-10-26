/* eslint-disable  no-unused-vars */

import Library from './library';
import Project from './project';
import save from './save';

const library = new Library();
const addproject = document.querySelector('.addporjectbutton');
const form = document.getElementsByTagName('form')[0];
const text = document.querySelector('.input');
const todosview = new Project('Todos');
const a = localStorage.getItem('counter');
if (a == null) {
  library.addProject(todosview);
} else {
  const datasaved = JSON.parse(localStorage.library);
  if (datasaved.myprojects.length > 0) {
    for (let i = 0; i < datasaved.myprojects.length; i += 1) {
      library.addProject(datasaved.myprojects[i], library);
    }
  }
}

addproject.addEventListener('click', add => {
  const project = new Project(text.value);
  library.addProject(project, library);
  form.reset();
  save(library);
});
