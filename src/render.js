let addcounter = 0;

function clearcontainer(container){
	while(container.firstChild) {
		container.removeChild(container.firstChild);
	};
};

function hide() {
	const prioritytext = document.getElementById('textpriority');
	const select = document.getElementById('selectpriority');
	const date = document.getElementById('date');
	prioritytext.classList.toggle('hide');
	select.classList.toggle('hide');
	date.classList.toggle('hide');
}

function submitform(){
	const text = document.getElementById('inputtask');
	const option = document.getElementById('selectpriority');
	const date = document.getElementById('date');
	console.log(date.value);
	addcounter = 1;
};

function form() {
	const formcontainer = document.getElementById('tasksform');
	const form = document.createElement('form');
	const input = document.createElement('input');
	const button = document.createElement('button');
	const select = document.createElement('select');
	const priority = document.createElement('span');
	const op1 = document.createElement('option');
	const op2 = document.createElement('option');
	const op3 = document.createElement('option');
	const date = document.createElement('input');

	formcontainer.appendChild(form);
	form.appendChild(input);
	form.appendChild(priority);
	form.appendChild(select);
	select.appendChild(op1);
	select.appendChild(op2);
	select.appendChild(op3);
	form.appendChild(date);
	form.appendChild(button);

	formcontainer.setAttribute('class','text-padding');
	input.setAttribute('class','input');
	input.setAttribute('placeholder','Add new task..');
	input.setAttribute('id','inputtask');
	button.textContent = '+';
	button.setAttribute('class','addtaskbttn input');
	button.setAttribute('type','button');
	op1.textContent = 'low';
	op2.textContent = 'medium';
	op3.textContent = 'high';
	priority.textContent = 'Prority: '
	priority.setAttribute('class','hide');
	priority.setAttribute('id','textpriority');
	select.setAttribute('class','margin-right input hide');
	select.setAttribute('id','selectpriority');
	date.setAttribute('type','date');
	date.setAttribute('class','input hide margin-right');
	date.setAttribute('id','date')

	input.addEventListener('click', hide);

	button.addEventListener('click', submit => {
		if (addcounter === 0){
			submitform();
		} else {
			addcounter = 0;
		};		

		hide();
	});






}



const render = (id) => {
	const container = document.getElementById('container-right');
	clearcontainer(container);
	const div = document.createElement('div');
	const child = document.createElement('div');
	const titleDiv = document.createElement('div');
	const border = document.createElement('hr');
	const taskContainer = document.createElement('div');
	const formContainer = document.createElement('div');
	

	container.appendChild(div);
	div.appendChild(child);
	div.setAttribute('class', 'card');
	
	child.appendChild(titleDiv);
	child.appendChild(border);
	child.appendChild(taskContainer);
	child.appendChild(formContainer);
	taskContainer.setAttribute('id','tasks');
	formContainer.setAttribute('id','tasksform');
	form();
	



	titleDiv.textContent = `${id.title}`;
	titleDiv.setAttribute('class','header-card ');
	border.setAttribute('class', 'borderline');
	

	console.log(id);

};

export { render };