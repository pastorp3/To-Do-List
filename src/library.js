class Library {
  constructor() {
    this.myprojects = [];
    this.projects_cont = document.getElementById('projects-container');
  };

  addProject(project) {
  	this.myprojects.push(project)
  	this.viewprojects();
  };

  viewprojects() {
  	this.clear();
  	const div = document.createElement('div');
  	const container = document.getElementById('projects-container');
  	container.appendChild(div);

  	for(let i = 0; i < this.myprojects.length; i++) {
  		  		
  		const child = document.createElement('div');
  		div.appendChild(child);
  		child.textContent = this.myprojects[i].title;

  	};
  };

  clear(){
  	let parent = this.projects_cont;

  	while(parent.firstChild) {
  		parent.removeChild(parent.firstChild);
  	};
  }
};

export default Library;