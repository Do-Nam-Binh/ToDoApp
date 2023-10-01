import Task from "./functions/task";
import Project from "./functions/project";
import { loadAllProjects } from "./functions/domManipulatorProject";
import "./css/style.css";
import { projectList } from "./functions/domManipulatorProject";

const today = new Date();
console.log(
  [today.getFullYear(), today.getMonth() + 1, today.getDate()].join("-")
);

let task1 = new Task("test1", "this is a test", "2023-12-11", "Low");
let task2 = new Task("test2", "this is a second test", "2024-01-23", "Low");
let task3 = new Task("test3", "Test", new Date(), "High");
let task4 = new Task("task4", "", today.setDate(today.getDate() + 3), "Medium");

console.log(task1);
task1.toggleCheck();

let projectArr = [];

let project1 = new Project("Test Project 1");
let project2 = new Project("Test Project 2");

projectList.push(project1);
projectList.push(project2);
project1.addTask(task1);
project1.addTask(task2);

project2.addTask(task3);
project2.addTask(task4);

console.log(project1);
project1.tasks.forEach((element) => {
  console.log(element);
});

console.log(project1);
project1.tasks.forEach((element) => {
  console.log(element);
});

loadAllProjects();
