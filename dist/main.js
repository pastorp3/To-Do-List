(()=>{"use strict";let t=0;const e=class{constructor(e,n,s){this.title=e,this.priority=n,this.date=s,this.id=t,this.status="pending",t+=1}},n=t=>{const e=document.getElementById("tasks");d(e);const s=document.createElement("div"),i=t.tasks;e.appendChild(s),s.setAttribute("class","text-padding");for(let e=0;e<i.length;e++){const c=document.createElement("div"),d=document.createElement("span"),o=document.createElement("span"),l=document.createElement("button"),r=document.createElement("button");s.appendChild(c),c.appendChild(l),c.appendChild(d),c.appendChild(o),c.appendChild(r),c.setAttribute("id",""+i[e].id),d.setAttribute("class","margin-right"),o.setAttribute("class","margin-right"),d.textContent=""+i[e].title,o.textContent=""+i[e].date,r.setAttribute("class","input"),r.setAttribute("type","button"),r.innerHTML='<img class="trashicon" src="https://cdn2.iconfinder.com/data/icons/business-1-58/48/69-512.png">',"complete"===i[e].status&&(d.classList.toggle("complete"),o.classList.toggle("complete")),"low"===i[e].priority?l.setAttribute("class","prioritybttn-low"):"medium"===i[e].priority?l.setAttribute("class","prioritybttn-medium "):l.setAttribute("class","prioritybttn-high"),l.addEventListener("click",(t=>{d.classList.toggle("complete"),o.classList.toggle("complete"),l.classList.toggle("completebtn"),"pending"===i[e].status?i[e].status="complete":i[e].status="pending"})),r.addEventListener("click",(s=>{i.splice(e,1),console.log(i),n(t)}))}},s=n,i=(t,e)=>{const n=document.getElementById(""+e),s=t.tasks,i=document.createElement("div");n.appendChild(i),i.setAttribute("class","text-padding");for(let t=0;t<s.length;t++){const e=document.createElement("div"),n=document.createElement("span"),c=document.createElement("span"),d=document.createElement("button");i.appendChild(e),e.appendChild(d),e.appendChild(n),e.appendChild(c),e.setAttribute("id",""+s[t].id),n.setAttribute("class","margin-right"),c.setAttribute("class","margin-right"),n.textContent=""+s[t].title,c.textContent=""+s[t].date,"complete"===s[t].status&&(n.classList.toggle("complete"),c.classList.toggle("complete")),"low"===s[t].priority?d.setAttribute("class","prioritybttn-low"):"medium"===s[t].priority?d.setAttribute("class","prioritybttn-medium "):d.setAttribute("class","prioritybttn-high"),d.addEventListener("click",(e=>{n.classList.toggle("complete"),c.classList.toggle("complete"),d.classList.toggle("completebtn"),"pending"===s[t].status?s[t].status="complete":s[t].status="pending"}))}};let c=0;function d(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function o(){const t=document.getElementById("textpriority"),e=document.getElementById("selectpriority"),n=document.getElementById("date");t.classList.toggle("hide"),e.classList.toggle("hide"),n.classList.toggle("hide")}const l=(t,n)=>{if("Todos"===t.title)((t,e)=>{const n=document.getElementById("container-right");d(n);const s=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),l=document.createElement("hr"),r=document.createElement("div");n.appendChild(s),s.appendChild(c),s.setAttribute("class","card"),c.appendChild(o),c.appendChild(l),c.appendChild(r),r.setAttribute("id","tasks"),o.textContent=""+t.title,o.setAttribute("class","header-card "),l.setAttribute("class","borderline");for(let t=1;t<e.length;t++){const n=document.createElement("div"),s=document.createElement("p");c.appendChild(n),n.appendChild(s),n.setAttribute("id",""+t),n.setAttribute("class","text-padding"),s.textContent=e[t].title+":",s.setAttribute("class","todos-project"),i(e[t],t)}})(t,n);else{const n=document.getElementById("container-right");d(n);const i=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),a=document.createElement("hr"),p=document.createElement("div"),m=document.createElement("div");n.appendChild(i),i.appendChild(l),i.setAttribute("class","card"),l.appendChild(r),l.appendChild(a),l.appendChild(p),l.appendChild(m),p.setAttribute("id","tasks"),m.setAttribute("id","tasksform"),function(t){const n=document.getElementById("tasksform"),i=document.createElement("form"),d=document.createElement("input"),l=document.createElement("button"),r=document.createElement("select"),a=document.createElement("span"),p=document.createElement("option"),m=document.createElement("option"),u=document.createElement("option"),h=document.createElement("input");n.appendChild(i),i.appendChild(d),i.appendChild(a),i.appendChild(r),r.appendChild(p),r.appendChild(m),r.appendChild(u),i.appendChild(h),i.appendChild(l),n.setAttribute("class","text-padding"),d.setAttribute("class","input"),d.setAttribute("placeholder","Add new task.."),d.setAttribute("id","inputtask"),l.textContent="+",l.setAttribute("class","addtaskbttn input"),l.setAttribute("type","button"),p.textContent="low",m.textContent="medium",u.textContent="high",a.textContent="Prority: ",a.setAttribute("class","hide"),a.setAttribute("id","textpriority"),r.setAttribute("class","margin-right input hide"),r.setAttribute("id","selectpriority"),h.setAttribute("type","date"),h.setAttribute("class","input hide margin-right"),h.setAttribute("id","date"),d.addEventListener("click",o),l.addEventListener("click",(n=>{!function(t){const n=document.getElementById("inputtask"),s=document.getElementById("selectpriority"),i=document.getElementById("date"),d=new e(n.value,s.value,i.value);console.log(d),t.tasks.push(d),c=1}(t),document.getElementsByTagName("form")[1].reset(),o(),s(t)}))}(t),r.textContent=""+t.title,r.setAttribute("class","header-card "),a.setAttribute("class","borderline")}},r=class{constructor(t){this.title=t,this.tasks=[]}},a=new class{constructor(){this.myprojects=[],this.projects_cont=document.getElementById("projects-container")}addProject(t){this.myprojects.push(t),this.viewprojects()}viewprojects(){this.clear();const t=document.createElement("div");document.getElementById("projects-container").appendChild(t);for(let e=0;e<this.myprojects.length;e++){const n=document.createElement("div"),i=document.createElement("span"),c=document.createElement("button");t.appendChild(n),n.appendChild(i),n.appendChild(c),i.textContent=this.myprojects[e].title,n.setAttribute("id",this.myprojects[e].title),c.setAttribute("class","input"),c.setAttribute("type","button"),i.setAttribute("class","margin-right-trashicon"),c.addEventListener("click",(t=>{this.myprojects.splice(e,1),this.viewprojects()})),c.innerHTML='<img class="trashicon" src="https://cdn2.iconfinder.com/data/icons/business-1-58/48/69-512.png">',i.addEventListener("click",(t=>{l(this.myprojects[e],this.myprojects),s(this.myprojects[e])})),"Todos"===this.myprojects[e].title&&(l(this.myprojects[e],this.myprojects),s(this.myprojects[e]))}}clear(){let t=this.projects_cont;for(;t.firstChild;)t.removeChild(t.firstChild)}},p=document.querySelector(".addporjectbutton"),m=document.getElementsByTagName("form")[0],u=document.querySelector(".input");let h=new r("Todos");a.addProject(h),console.log(a),p.addEventListener("click",(t=>{const e=new r(u.value);var n;a.addProject(e),m.reset(),n=a,localStorage.library=JSON.stringify(n),console.log(n)}))})();