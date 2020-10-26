/* eslint-disable  no-unused-vars, import/no-cycle */

import { clearcontainer, form } from './render';
import view from './viewtasks';
import viewtodos from './viewtodos';

const todos = (id, lib, mainLib) => {
  const container = document.getElementById('container-right');
  clearcontainer(container);
  const div = document.createElement('div');
  const child = document.createElement('div');
  const titleDiv = document.createElement('div');
  const border = document.createElement('hr');
  const taskContainer = document.createElement('div');
  container.appendChild(div);
  div.appendChild(child);
  div.setAttribute('class', 'card');
  child.appendChild(titleDiv);
  child.appendChild(border);
  child.appendChild(taskContainer);
  taskContainer.setAttribute('id', 'tasks');
  titleDiv.textContent = `${id.title}`;
  titleDiv.setAttribute('class', 'header-card ');
  border.setAttribute('class', 'borderline');
  for (let i = 1; i < lib.length; i += 1) {
    const projectcontainer = document.createElement('div');
    const projecttitle = document.createElement('p');
    child.appendChild(projectcontainer);
    projectcontainer.appendChild(projecttitle);
    projectcontainer.setAttribute('id', `${i}`);
    projectcontainer.setAttribute('class', 'text-padding');
    projecttitle.textContent = `${lib[i].title}:`;
    projecttitle.setAttribute('class', 'todos-project');
    viewtodos(lib[i], i, mainLib);
  }
};
export default todos;
