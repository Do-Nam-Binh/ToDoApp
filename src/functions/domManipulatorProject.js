const addProjectInput = function () {
  const projectContainer = document.querySelector(".projects");

  projectContainer.innerHTML += `<div class="addProjectBtn">Add Project</div>
  <div class="projectInput">
  <input type="text" id="projectName" name="projectName" />
  <div class= "addProjectChoiceBtn">
    <button class="addProjectConfirm">Confirm</button>
    <button class="addProjectCancel">Cancel</button>
  </div>
</div>`;
  addProjectBtnInit();
  addProjectConfirmInit();
  addProjectCancelInit();
};

const addProjectBtnInit = function () {
  const addProjectBtn = document.querySelector(".addProjectBtn");
  const projectInput = document.querySelector(".projectInput");
  addProjectBtn.addEventListener("click", () => {
    projectInput.classList.add("active");
  });
};

const addProjectConfirmInit = function () {
  const confirmBtn = document.querySelector(".addProjectConfirm");
  const projectInput = document.querySelector(".projectInput");
  confirmBtn.addEventListener("click", () => {
    //Add code to create project here

    clearAddProjectValue();
    projectInput.classList.remove("active");
  });
};

const addProjectCancelInit = function () {
  const cancelBtn = document.querySelector(".addProjectCancel");
  const projectInput = document.querySelector(".projectInput");
  cancelBtn.addEventListener("click", () => {
    clearAddProjectValue();
    projectInput.classList.remove("active");
  });
};

const clearAddProjectValue = function () {
  const projectName = document.querySelector("#projectName");

  projectName.value = "";
};

const loadAllProjects = function (projectArr) {
  projectArr.forEach((project) => {
    loadProjects(project.name);
  });
  addProjectInput();
};

const loadProjects = function (name) {
  const userProjects = document.querySelector(".projects");
  userProjects.innerHTML += ` 
      <div class="project" data-project-button>
        <div class="left-project-panel">
          <i class="fas fa-tasks"></i>
          <span>${name}</span>
        </div>
        <div class="right-project-panel">
          <i class="fas fa-times"></i>
        </div>
      </div>`;

  //   addProjectInput();
};

export { loadAllProjects };
