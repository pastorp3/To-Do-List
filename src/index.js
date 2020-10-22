import Library from './library';
import Project from './project';
import save from './save';



const library = new Library();
const addproject = document.querySelector('.addporjectbutton');
const form = document.getElementsByTagName('form')[0];
const text = document.querySelector('.input');
let todosview = new Project('Todos');



library.addProject(todosview);


console.log(library);



addproject.addEventListener('click', add => {
	const project = new Project(text.value);
	library.addProject(project);
	form.reset();
	save(library);
});












