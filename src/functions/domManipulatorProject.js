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

export { addProjectInput };
