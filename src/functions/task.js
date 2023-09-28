const Task = function (title, description, dueDate, priority) {
  //   if (isNaN(new Date(dueDate))) {
  //     throw Error("Invalid Date");
  //   }

  let task = {};

  task.title = title;
  task.description = description;
  task.dueDate = new Date(dueDate);
  task.priority = priority;
  task.checked = Boolean(false);

  task.toggleCheck = function () {
    task.checked = !task.checked;
  };

  return task;
};

export default Task;
