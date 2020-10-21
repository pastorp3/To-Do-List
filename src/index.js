import Library from './library';
import Project from './project';



const library = new Library();
const addproject = document.querySelector('.addporjectbutton');
const form = document.getElementsByTagName('form')[0];
const text = document.querySelector('.input');


addproject.addEventListener('click', add => {
	const project = new Project(text.value);
	library.addProject(project);
	form.reset();
});






