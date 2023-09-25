const Project = function (name) {
  let project = {};

  project.name = name;
  project.tasks = [];

  project.addTask = function (task) {
    project.tasks.push(task);
  };

  project.removeTask = function (task) {
    let index = project.tasks.indexOf(task);
    if (index > -1) {
      project.tasks.splice(index, 1);
    }
  };

  return project;
};

export default Project;
