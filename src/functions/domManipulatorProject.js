import { loadAllTask, clearTask } from "./domManipulatorTask";
import Project from "./project";

export let projectList = [];

const clearProjects = function () {
  const projects = document.querySelector(".projects");
  projects.innerHTML = "Projects";
};

const addProjectInput = function () {
  const projectContainer = document.querySelector(".projects");

  projectContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="addProjectBtn">Add Project</div>
    <div class="projectInput">
    <input type="text" id="projectName" name="projectName" />
    <div class= "addProjectChoiceBtn">
      <button class="addProjectConfirm">Confirm</button>
      <button class="addProjectCancel">Cancel</button>
    </div>
  </div>`
  );

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
    createProject(projectList);
    loadAllProjects(projectList);
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
  clearProjects();
  projectList = projectArr;
  projectArr.forEach((project) => {
    loadProjects(project);
  });
  addEventAllProjects();
  addEventToday();
  addEventNextWeek();
  addProjectInput();
};

const loadProjects = function (project) {
  const userProjects = document.querySelector(".projects");
  const projectDOM = document.createElement("div");
  projectDOM.classList.add("project");
  projectDOM.textContent = `${project.name}`;

  projectDOM.addEventListener("click", function () {
    clearTask();
    console.log(project);
    loadAllTask(project);
  });
  userProjects.appendChild(projectDOM);
};

const createProject = function (projectArr) {
  const projectName = document.querySelector("#projectName");

  const project = new Project(projectName.value);

  projectArr.push(project);
};

//Functions to handle "All Tasks" tab
const addEventAllProjects = function () {
  const allProject = document.querySelector(".allProjectTasks");
  allProject.addEventListener("click", loadAllProjectTask);
};

const loadAllProjectTask = function () {
  clearTask();
  const taskContent1 = document.querySelector(".task-content");
  const projectDisplay = document.createElement("div");
  projectDisplay.classList.add("projectDisplay");
  projectDisplay.textContent = "All";
  taskContent1.appendChild(projectDisplay);

  projectList.forEach((project) => {
    project.tasks.forEach((task) => {
      const taskContent = document.querySelector(".task-content");
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      if (task.priority == "Low") {
        taskDiv.classList.add("lowPriority");
      } else if (task.priority == "Medium") {
        taskDiv.classList.add("mediumPriority");
      } else if (task.priority == "High") {
        taskDiv.classList.add("highPriority");
      }
      taskDiv.innerHTML += `
                    <span class="taskTitle">${task.title}</span>
                    <span class="taskDate">${task.dueDate}</span>
                    `;
      taskContent.appendChild(taskDiv);
    });
  });
};

//Functions to handle "Today" tab
const addEventToday = function () {
  const todayDOM = document.querySelector(".todayTask");
  todayDOM.addEventListener("click", loadTodayTask);
};

const loadTodayTask = function () {
  clearTask();
  const taskContent1 = document.querySelector(".task-content");
  const projectDisplay = document.createElement("div");
  projectDisplay.classList.add("projectDisplay");
  projectDisplay.textContent = "Today";
  taskContent1.appendChild(projectDisplay);

  projectList.forEach((project) => {
    project.tasks.forEach((task) => {
      const taskContent = document.querySelector(".task-content");
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      if (task.priority == "Low") {
        taskDiv.classList.add("lowPriority");
      } else if (task.priority == "Medium") {
        taskDiv.classList.add("mediumPriority");
      } else if (task.priority == "High") {
        taskDiv.classList.add("highPriority");
      }
      const today = new Date();
      const todayFomatted = [
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
      ].join("-");
      if (todayFomatted == task.dueDate) {
        taskDiv.innerHTML += `
            <span class="taskTitle">${task.title}</span>
            <span class="taskDate">${task.dueDate}</span>
            `;
        taskContent.appendChild(taskDiv);
      }
    });
  });
};

//Function to handle "Next 7 days" tab
const addEventNextWeek = function () {
  const todayDOM = document.querySelector(".nextWeekTasks");
  todayDOM.addEventListener("click", loadNextWeekTask);
};
const loadNextWeekTask = function () {
  clearTask();
  const taskContent1 = document.querySelector(".task-content");
  const projectDisplay = document.createElement("div");
  projectDisplay.classList.add("projectDisplay");
  projectDisplay.textContent = "Next 7 Days";
  taskContent1.appendChild(projectDisplay);

  projectList.forEach((project) => {
    project.tasks.forEach((task) => {
      const taskContent = document.querySelector(".task-content");
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      if (task.priority == "Low") {
        taskDiv.classList.add("lowPriority");
      } else if (task.priority == "Medium") {
        taskDiv.classList.add("mediumPriority");
      } else if (task.priority == "High") {
        taskDiv.classList.add("highPriority");
      }
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const nextSevenDay = new Date();
      nextSevenDay.setHours(23, 59, 59, 999);
      const nextSevenDayFormatted = new Date(
        nextSevenDay.setDate(today.getDate() + 7)
      );
      const taskDueDate = new Date(task.dueDate);
      const taskDueDateFormatted = new Date(
        taskDueDate.setMonth(taskDueDate.getMonth())
      );
      console.log("task due: ", taskDueDateFormatted);
      console.log("today: ", today);
      console.log("next 7 days: ", nextSevenDay);
      if (
        today <= taskDueDateFormatted &&
        taskDueDateFormatted <= nextSevenDayFormatted
      ) {
        taskDiv.innerHTML += `
              <span class="taskTitle">${task.title}</span>
              <span class="taskDate">${task.dueDate}</span>
              `;
        taskContent.appendChild(taskDiv);
      }
    });
  });
};

export { loadAllProjects };
