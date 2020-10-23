/* eslint-disable  no-unused-vars, import/no-cycle */

import { clearcontainer } from './render';
import save from './save';
const view = (id, mainLib) => {
  const container = document.getElementById('tasks');
  clearcontainer(container);
  const divTasks = document.createElement('div');
  const tasks = id.tasks;
  container.appendChild(divTasks);
  divTasks.setAttribute('class', 'text-padding');
  for (let i = 0; i < tasks.length; i += 1) {
    const div = document.createElement('div');
    const title = document.createElement('span');
    const date = document.createElement('span');
    const prioritybtn = document.createElement('button');
    const deletebttn = document.createElement('button');
    divTasks.appendChild(div);
    div.appendChild(prioritybtn);
    div.appendChild(title);
    div.appendChild(date);
    div.appendChild(deletebttn);
    div.setAttribute('id', `${tasks[i].id}`);
    title.setAttribute('class', 'margin-right');
    date.setAttribute('class', 'margin-right');
    title.textContent = `${tasks[i].title}`;
    date.textContent = `${tasks[i].date}`;
    deletebttn.setAttribute('class', 'input');
    deletebttn.setAttribute('type', 'button');
    deletebttn.innerHTML = '<img class="trashicon" src="https://cdn2.iconfinder.com/data/icons/business-1-58/48/69-512.png">';
    if (tasks[i].status === 'complete') {
      title.classList.toggle('complete');
      date.classList.toggle('complete');
    }
    if (tasks[i].priority === 'low') {
      prioritybtn.setAttribute('class', 'prioritybttn-low');
    } else if (tasks[i].priority === 'medium') {
      prioritybtn.setAttribute('class', 'prioritybttn-medium ');
    } else {
      prioritybtn.setAttribute('class', 'prioritybttn-high');
    }
    prioritybtn.addEventListener('click', complete => {
      title.classList.toggle('complete');
      date.classList.toggle('complete');
      prioritybtn.classList.toggle('completebtn');
      if (tasks[i].status === 'pending') {
        tasks[i].status = 'complete';
      } else {
        tasks[i].status = 'pending';
      }
      save(mainLib);
    });
    deletebttn.addEventListener('click', deletetask => {
      tasks.splice(i, 1);
      view(id);
      save(mainLib);
    });
  }
};
export default view;
