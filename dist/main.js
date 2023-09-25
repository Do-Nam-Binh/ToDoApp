/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/project.js":
/*!**********************************!*\
  !*** ./src/functions/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/functions/task.js":
/*!*******************************!*\
  !*** ./src/functions/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = function (title, description, dueDate, priority) {
  let task = {};

  task.title = title;
  task.description = description;
  task.dueDate = Date(dueDate);
  task.priority = priority;

  return task;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/task */ "./src/functions/task.js");
/* harmony import */ var _functions_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/project */ "./src/functions/project.js");



let task1 = new _functions_task__WEBPACK_IMPORTED_MODULE_0__["default"]("test1", "this is a test", "27/12/2023", "low");
let task2 = new _functions_task__WEBPACK_IMPORTED_MODULE_0__["default"]("test2", "this is a second test", "27/12/2023", "low");

console.log(task1);

let project1 = new _functions_project__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Project 1");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQnZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUNYcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDTTs7QUFFMUMsZ0JBQWdCLHVEQUFJO0FBQ3BCLGdCQUFnQix1REFBSTs7QUFFcEI7O0FBRUEsbUJBQW1CLDBEQUFPO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9mdW5jdGlvbnMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2Z1bmN0aW9ucy90YXNrLmpzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFByb2plY3QgPSBmdW5jdGlvbiAobmFtZSkge1xuICBsZXQgcHJvamVjdCA9IHt9O1xuXG4gIHByb2plY3QubmFtZSA9IG5hbWU7XG4gIHByb2plY3QudGFza3MgPSBbXTtcblxuICBwcm9qZWN0LmFkZFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgfTtcblxuICBwcm9qZWN0LnJlbW92ZVRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgIGxldCBpbmRleCA9IHByb2plY3QudGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcHJvamVjdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjb25zdCBUYXNrID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgbGV0IHRhc2sgPSB7fTtcblxuICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGFzay5kdWVEYXRlID0gRGF0ZShkdWVEYXRlKTtcbiAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gIHJldHVybiB0YXNrO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vZnVuY3Rpb25zL3Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2Z1bmN0aW9ucy9wcm9qZWN0XCI7XG5cbmxldCB0YXNrMSA9IG5ldyBUYXNrKFwidGVzdDFcIiwgXCJ0aGlzIGlzIGEgdGVzdFwiLCBcIjI3LzEyLzIwMjNcIiwgXCJsb3dcIik7XG5sZXQgdGFzazIgPSBuZXcgVGFzayhcInRlc3QyXCIsIFwidGhpcyBpcyBhIHNlY29uZCB0ZXN0XCIsIFwiMjcvMTIvMjAyM1wiLCBcImxvd1wiKTtcblxuY29uc29sZS5sb2codGFzazEpO1xuXG5sZXQgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIlRlc3QgUHJvamVjdCAxXCIpO1xucHJvamVjdDEuYWRkVGFzayh0YXNrMSk7XG5wcm9qZWN0MS5hZGRUYXNrKHRhc2syKTtcblxuY29uc29sZS5sb2cocHJvamVjdDEpO1xucHJvamVjdDEudGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbn0pO1xuXG5wcm9qZWN0MS5yZW1vdmVUYXNrKHRhc2sxKTtcblxuY29uc29sZS5sb2cocHJvamVjdDEpO1xucHJvamVjdDEudGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9