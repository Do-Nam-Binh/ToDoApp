import Task from "./functions/task";
import Project from "./functions/project";
import { addTaskInput, clearTask } from "./functions/domManipulatorTask";
import { loadAllProjects } from "./functions/domManipulatorProject";
import "./css/style.css";

addTaskInput();

let task1 = new Task("test1", "this is a test", "27/12/2023", "Low");
let task2 = new Task("test2", "this is a second test", "20/03/2023", "Low");

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

project1.removeTask(task1);

console.log(project1);
project1.tasks.forEach((element) => {
  console.log(element);
});

loadAllProjects(projectArr);
