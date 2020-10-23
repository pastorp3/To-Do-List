import { render } from './render';
import view from './viewtasks';
import save from './save';
class Library {
  constructor() {
    this.myprojects = [];
    this.projects_cont = document.getElementById('projects-container');
  };
  addProject(project, mainLib) {
    this.myprojects.push(project)
    this.viewprojects(mainLib);
  };
  viewprojects(mainLib) {
    this.clear();
    const div = document.createElement('div');
    const container = document.getElementById('projects-container');
    container.appendChild(div);
    for (let i = 0; i < this.myprojects.length; i++) {
      const child = document.createElement('div');
      const text = document.createElement('span');
      const deletebttn = document.createElement('button');
      div.appendChild(child);
      child.appendChild(text);
      child.appendChild(deletebttn);
      text.textContent = this.myprojects[i].title;
      child.setAttribute('id', this.myprojects[i].title);
      deletebttn.setAttribute('class', 'input');
      deletebttn.setAttribute('type', 'button');
      text.setAttribute('class', 'margin-right-trashicon');
      deletebttn.addEventListener('click', deleteproject => {
        this.myprojects.splice(i, 1);
        this.viewprojects();
      });
      deletebttn.innerHTML = '<img class="trashicon" src="https://cdn2.iconfinder.com/data/icons/business-1-58/48/69-512.png">';
      text.addEventListener('click', show => {
        render(this.myprojects[i], this.myprojects, mainLib);
        view(this.myprojects[i], mainLib);
        save(mainLib);
      });
      if (this.myprojects[i].title === 'Todos') {
        render(this.myprojects[i], this.myprojects, mainLib);
        view(this.myprojects[i], mainLib);
        save(mainLib);
      };
    };
  };
  clear() {
    let parent = this.projects_cont;
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    };
  }
};
export default Library;