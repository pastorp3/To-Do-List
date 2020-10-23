import Library from './library';
import Project from './project';
import save from './save';



const library = new Library();
const addproject = document.querySelector('.addporjectbutton');
const form = document.getElementsByTagName('form')[0];
const text = document.querySelector('.input');
let todosview = new Project('Todos');
const datasaved = JSON.parse(localStorage["library"]);

if(datasaved.myprojects.length > 0) {
	for(let i = 0; i < datasaved.myprojects.length; i++) {
		console.log(datasaved.myprojects[i]);
		library.addProject(datasaved.myprojects[i]);
	};
}else {
	library.addProject(todosview);
};




console.log(datasaved);;



addproject.addEventListener('click', add => {
	const project = new Project(text.value);
	library.addProject(project);
	form.reset();
	save(library);
});












