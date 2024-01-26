let createProjectBtn=document.querySelector(".create-project-btn") as HTMLButtonElement;
let projectDisplay = document.querySelector(".project-display") as HTMLDivElement;
// let projectContBig=document.querySelector(".project") as HTMLDivElement;
let formDisplay = document.querySelector(".create-form") as HTMLDivElement;

let backHomeBtn = document.querySelector(".back-home-btn") as HTMLButtonElement;

let form=document.querySelector(".form") as HTMLFormElement;

let nameProjectInput=document.querySelector(".name") as HTMLInputElement;
let namePersonInput = document.querySelector(".person") as HTMLInputElement;

createProjectBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    projectDisplay.style.display="none";
    formDisplay.style.display="flex";
})

backHomeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  projectDisplay.style.display = "block";
  formDisplay.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addProject();
});

let projects: { nameProject: string; namePerson: string;}[] = [];

function addProject(): void {
  let nameProject = nameProjectInput.value;
  let namePerson = namePersonInput.value;
  let project = { nameProject,namePerson };

  projects.push(project);

  displayProject();
}
function displayProject() {
    
  projects.forEach((project) => {
    let projectCont=document.createElement("div");
    projectCont.classList.add("project");

    let projectNameDiv = document.createElement("div");
    projectNameDiv.classList.add("project-name");

    let projectName = document.createElement("p");
    projectName.classList.add("name-project-display");
    projectName.textContent=`Name of the project: ${project.nameProject}`;

    let personNameDiv = document.createElement("div");
    personNameDiv.classList.add("project-person");

    let personName = document.createElement("p");
    personName.classList.add("name-person-display");
    personName.textContent = `Name of the person: ${project.namePerson}`;

    let reassignBtnDiv = document.createElement("div");
    reassignBtnDiv.classList.add("reassign-btn");

    let deleteBtnDiv = document.createElement("div");
    deleteBtnDiv.classList.add("delete-btn");

    let reassignBtn=document.createElement("button");
    reassignBtn.classList.add("reassign");
    reassignBtn.textContent = "Delete";

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent="Delete";

    projectNameDiv.appendChild(projectName);
    personNameDiv.appendChild(personName);
    projectCont.appendChild(projectNameDiv);
    projectCont.appendChild(personNameDiv);
    reassignBtnDiv.appendChild(reassignBtn);
    deleteBtnDiv.appendChild(deleteBtn);
    projectCont.appendChild(reassignBtnDiv);
    projectCont.appendChild(deleteBtnDiv);
    projectDisplay.appendChild(projectCont);

  });
}