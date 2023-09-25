const Task = function (title, description, dueDate, priority) {
  let task = {};

  task.title = title;
  task.description = description;
  task.dueDate = Date(dueDate);
  task.priority = priority;

  return task;
};

export default Task;
