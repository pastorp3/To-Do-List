import { clearcontainer } from './render';

const view = (id) => {
	const container = document.getElementById('tasks');
	clearcontainer(container);
	const divTasks = document.createElement('div');
	const tasks = id.tasks;
	container.appendChild(divTasks);
	divTasks.setAttribute('class','text-padding');
	
	for(let i = 0; i < tasks.length; i++) {
		const div = document.createElement('div');
		const title = document.createElement('span');
		const date = document.createElement('span');
		const prioritybtn = document.createElement('button');

		divTasks.appendChild(div);
		div.appendChild(prioritybtn);
		div.appendChild(title);
		div.appendChild(date);

		div.setAttribute('id',`${tasks[i].id}`);
		title.setAttribute('class','margin-right');


		title.textContent = `${tasks[i].title}`;
		date.textContent = `${tasks[i].date}`;

		if(tasks[i].priority === 'low') {
			prioritybtn.setAttribute('class','prioritybttn-low')
		} else if(tasks[i].priority === 'medium') {
			prioritybtn.setAttribute('class','prioritybttn-medium ');
		}else {
			prioritybtn.setAttribute('class','prioritybttn-high');
		}

		prioritybtn.addEventListener('click',complete => {
			title.classList.toggle('complete');
			date.classList.toggle('complete');
			prioritybtn.classList.toggle('completebtn');

		});

	};
};

export default view;