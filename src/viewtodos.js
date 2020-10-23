/* eslint-disable  no-unused-vars, prefer-destructuring */

import save from './save';

const viewtodos = (id, index, mainLib) => {
  const container = document.getElementById(`${index}`);
  const tasks = id.tasks;
  const divTasks = document.createElement('div');
  container.appendChild(divTasks);
  divTasks.setAttribute('class', 'text-padding');
  for (let i = 0; i < tasks.length; i += 1) {
    const div = document.createElement('div');
    const title = document.createElement('span');
    const date = document.createElement('span');
    const prioritybtn = document.createElement('button');
    divTasks.appendChild(div);
    div.appendChild(prioritybtn);
    div.appendChild(title);
    div.appendChild(date);
    div.setAttribute('id', `${tasks[i].id}`);
    title.setAttribute('class', 'margin-right');
    date.setAttribute('class', 'margin-right');
    title.textContent = `${tasks[i].title}`;
    date.textContent = `${tasks[i].date}`;
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
  }
};
export default viewtodos;