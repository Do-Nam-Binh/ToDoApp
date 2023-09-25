import Task from "./functions/task";
import Project from "./functions/project";

let task1 = new Task("test1", "this is a test", "27/12/2023", "low");
let task2 = new Task("test2", "this is a second test", "27/12/2023", "low");

console.log(task1);

let project1 = new Project("Test Project 1");
project1.addTask(task1);
project1.addTask(task2);

console.log(project1);
project1.tasks.forEach((element) => {
  console.log(element);
});

project1.removeTask(task1);

console.log(project1);
project1.tasks.forEach((element) => {
  console.log(element);
});
