const clearTask = function () {
  document.querySelector(".task-content").innerHTML = ``;
};

const addTaskInput = function () {
  const inputTask = document.createElement("div");
  const taskContainer = document.querySelector(".task-content");
  inputTask.innerHTML = `<div class="addTaskBtn">Add Task</div>
  <div class="taskInput">
  <label for="taskName">Title</label>
  <input type="text" id="taskName" name="taskName" />
  <label for="description">Description</label>
  <textarea
    name="description"
    id="description"
    cols="20"
    rows="5"
    placeholder="eg: go outside to smell the flowers"
  ></textarea>
  <label for="taskDate">Date</label>
  <input type="date" id="taskDate" name="taskDate" />
  <div class= "addTaskChoiceBtn">
    <button class="addTaskConfirm">Confirm</button>
    <button class="addTaskCancel">Cancel</button>
  </div>
</div>`;

  taskContainer.appendChild(inputTask);
  addTaskBtnInit();
  addTaskConfirmInit();
  addTaskCancelInit();
};

const addTaskBtnInit = function () {
  const addTaskBtn = document.querySelector(".addTaskBtn");
  const taskInput = document.querySelector(".taskInput");
  addTaskBtn.addEventListener("click", () => {
    taskInput.classList.add("active");
  });
};

const addTaskConfirmInit = function () {
  const confirmBtn = document.querySelector(".addTaskConfirm");
  const taskInput = document.querySelector(".taskInput");
  confirmBtn.addEventListener("click", () => {
    //Add code to create task here

    clearAddTaskValue();
    taskInput.classList.remove("active");
  });
};

const addTaskCancelInit = function () {
  const cancelBtn = document.querySelector(".addTaskCancel");
  const taskInput = document.querySelector(".taskInput");
  cancelBtn.addEventListener("click", () => {
    clearAddTaskValue();
    taskInput.classList.remove("active");
  });
};

const clearAddTaskValue = function () {
  const title = document.querySelector("#taskName");
  const description = document.querySelector("#description");
  const date = document.querySelector("#taskDate");

  title.value = "";
  description.value = "";
  date.value = "";
};

export { addTaskInput };
