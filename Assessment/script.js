var createProjectBtn = document.querySelector(".create-project-btn");
var projectDisplay = document.querySelector(".project-display");
// let projectContBig=document.querySelector(".project") as HTMLDivElement;
var formDisplay = document.querySelector(".create-form");
var backHomeBtn = document.querySelector(".back-home-btn");
var form = document.querySelector(".form");
var nameProjectInput = document.querySelector(".name");
var namePersonInput = document.querySelector(".person");
createProjectBtn.addEventListener("click", function (e) {
    e.preventDefault();
    projectDisplay.style.display = "none";
    formDisplay.style.display = "flex";
});
backHomeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    projectDisplay.style.display = "block";
    formDisplay.style.display = "none";
});
form.addEventListener("submit", function (e) {
    e.preventDefault();
    addProject();
});
var projects = [];
function addProject() {
    var nameProject = nameProjectInput.value;
    var namePerson = namePersonInput.value;
    var project = { nameProject: nameProject, namePerson: namePerson };
    projects.push(project);
    displayProject();
}
function displayProject() {
    projects.forEach(function (project) {
        var projectCont = document.createElement("div");
        projectCont.classList.add("project");
        var projectNameDiv = document.createElement("div");
        projectNameDiv.classList.add("project-name");
        var projectName = document.createElement("p");
        projectName.classList.add("name-project-display");
        projectName.textContent = "Name of the project: ".concat(project.nameProject);
        var personNameDiv = document.createElement("div");
        personNameDiv.classList.add("project-person");
        var personName = document.createElement("p");
        personName.classList.add("name-person-display");
        personName.textContent = "Name of the person: ".concat(project.namePerson);
        var reassignBtnDiv = document.createElement("div");
        reassignBtnDiv.classList.add("reassign-btn");
        var deleteBtnDiv = document.createElement("div");
        deleteBtnDiv.classList.add("delete-btn");
        var reassignBtn = document.createElement("button");
        reassignBtn.classList.add("reassign");
        reassignBtn.textContent = "Delete";
        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "Delete";
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
