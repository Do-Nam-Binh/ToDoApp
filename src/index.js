import Task from "./functions/task";
import Project from "./functions/project";
import { addTaskBtn, clearTask } from "./functions/domManipulator";
import "./css/style.css";

addTaskBtn();

let task1 = new Task("test1", "this is a test", "27/12/2023", "Low");
let task2 = new Task("test2", "this is a second test", "20/03/2023", "Low");
let task3 = new Task("incorrect", "asd", "asd/22d/aaf", "High");

console.log(task1);
console.log(task3);
task1.toggleCheck();

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
