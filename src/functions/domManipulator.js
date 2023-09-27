const addTaskBtn = function () {
  const taskContainer = document.querySelector(".task-content");
  const addTaskBtn = document.createElement("div");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskBtn.textContent = "Add Task";

  //   Make function to create task
  addTaskBtn.addEventListener("click", addTaskInput);

  taskContainer.appendChild(addTaskBtn);
};

const clearTask = function () {
  document.querySelector(".task-content").innerHTML = ``;
};

const addTaskInput = function () {
  const inputTask = document.createElement("div");
  inputTask.innerHTML = `<div class="taskInput">
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

  document.querySelector(".task-content").appendChild(inputTask);
};

export { addTaskBtn };
