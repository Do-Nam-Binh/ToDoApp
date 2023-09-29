import Task from "./functions/task";
import Project from "./functions/project";
import { loadAllTask } from "./functions/domManipulatorTask";
import { loadAllProjects } from "./functions/domManipulatorProject";
import "./css/style.css";

let task1 = new Task("test1", "this is a test", "2023-12-11", "Low");
let task2 = new Task("test2", "this is a second test", "2024-01-23", "Low");

console.log(task1);
task1.toggleCheck();

let projectArr = [];

let project1 = new Project("Test Project 1");
let project2 = new Project("Test Project 2");

projectArr.push(project1);
projectArr.push(project2);
project1.addTask(task1);
project1.addTask(task2);

console.log(project1);
project1.tasks.forEach((element) => {
  console.log(element);
});

console.log(project1);
project1.tasks.forEach((element) => {
  console.log(element);
});

loadAllProjects(projectArr);
