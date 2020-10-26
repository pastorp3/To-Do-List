/* eslint-disable  no-unused-vars, import/no-cycle,  prefer-destructuring, no-use-before-define */

import { clearcontainer } from './render';
import save from './save';

function update(id, index, mainLib) {
  const object = id.tasks[index];
  const text = document.getElementById('inputtask-edit');
  const option = document.getElementById('selectpriority-edit');
  const date = document.getElementById('date-edit');
  const description = document.getElementById('description-edit');
  object.title = text.value;
  object.priority = option.value;
  object.date = date.value;
  object.description = description.value;
  object.id = text.value;
  save(mainLib);
  view(id, mainLib);
}

function editFrom(id, task, index, mainLib) {
  const container = document.getElementById(id);
  const form = document.createElement('form');
  const title = document.createElement('input');
  const description = document.createElement('textarea');
  const button = document.createElement('button');
  const select = document.createElement('select');
  const priority = document.createElement('span');
  const op1 = document.createElement('option');
  const op2 = document.createElement('option');
  const op3 = document.createElement('option');
  const date = document.createElement('input');
  container.appendChild(form);
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(priority);
  form.appendChild(select);
  select.appendChild(op1);
  select.appendChild(op2);
  select.appendChild(op3);
  form.appendChild(date);
  form.appendChild(button);
  form.setAttribute('id', 'edit-form');
  title.setAttribute('class', 'input');
  title.setAttribute('placeholder', 'New title...');
  title.setAttribute('id', 'inputtask-edit');
  description.setAttribute('class', 'margin-right');
  description.setAttribute('id', 'description-edit');
  button.textContent = '+';
  button.setAttribute('class', 'addtaskbttn input');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'bttn-edit');
  op1.textContent = 'low';
  op2.textContent = 'medium';
  op3.textContent = 'high';
  priority.textContent = 'Prority: ';
  priority.setAttribute('id', 'textpriority-edit');
  select.setAttribute('class', 'margin-right input ');
  select.setAttribute('id', 'selectpriority-edit');
  date.setAttribute('type', 'date');
  date.setAttribute('class', 'input  margin-right');
  date.setAttribute('id', 'date-edit');
  button.addEventListener('click', submit => {
    update(task, index, mainLib);
  });
}


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
    const description = document.createElement('span');
    const date = document.createElement('span');
    const prioritybtn = document.createElement('button');
    const editbttn = document.createElement('button');
    const deletebttn = document.createElement('button');
    divTasks.appendChild(div);
    div.appendChild(prioritybtn);
    div.appendChild(title);
    div.appendChild(date);
    div.appendChild(description);
    div.appendChild(editbttn);
    div.appendChild(deletebttn);
    div.setAttribute('id', `${tasks[i].id}`);
    title.setAttribute('class', 'margin-right');
    date.setAttribute('class', 'margin-right');
    title.textContent = `${tasks[i].title}`;
    date.textContent = `${tasks[i].date}`;
    description.textContent = `${tasks[i].description}`;
    editbttn.setAttribute('type', 'button');
    editbttn.setAttribute('class', 'input');
    editbttn.innerHTML = '<img class="trashicon" src="https://cdn0.iconfinder.com/data/icons/glyphpack/19/edit-512.png">';
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

    editbttn.addEventListener('click', edittask => {
      editFrom(tasks[i].id, id, i, mainLib);
    });

    deletebttn.addEventListener('click', deletetask => {
      tasks.splice(i, 1);
      view(id);
      save(mainLib);
    });
  }
};
export default view;
