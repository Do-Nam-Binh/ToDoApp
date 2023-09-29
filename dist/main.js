/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
}

body {
  display: grid;
  justify-content: stretch;
  align-content: stretch;
  grid-template-rows: 80px minmax(600px, 1fr) 30px;
}

.main-container {
  /* padding: 30px 5%; */
  display: grid;
  grid-template-columns: 300px 1fr;
  font-family: Arial, Helvetica, sans-serif;
}

.tab-bar {
  background-color: whitesmoke;
  padding: 20px 30px;
  justify-self: stretch;
}

.task-content {
  background-color: lightgrey;
  padding: 20px 30px;
  justify-self: stretch;
}

.projectDisplay {
  border: 2px solid black;
  background-color: whitesmoke;
  font-size: 40px;
  font-weight: bolder;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.task {
  font-size: 20px;
  text-align: center;
  margin: 10px;
  padding: 5px 0px;
  display: grid;
  grid-template-columns: 80% 180px;
  align-content: center;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
}

.taskTitle {
  justify-self: start;
  margin-left: 20px;
}

.taskDate {
  justify-self: end;
}

.task.lowPriority {
  background-color: rgba(88, 194, 88, 0.6);
}
.task.mediumPriority {
  background-color: rgba(67, 245, 245, 0.6);
}
.task.highPriority {
  background-color: rgba(244, 64, 64, 0.6);
}

.home,
.projects {
  display: grid;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  justify-content: start;
}

.home div,
.projects .project {
  font-size: 25px;
  justify-self: start;
  margin-left: 20px;
  margin-bottom: 10px;
}

.home div:hover,
.projects .project:hover {
  text-decoration: underline;
}

.addProjectBtn {
  border: 2px solid black;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  padding: 5px 10px;
  border-radius: 10px;
}

.addProjectBtn:hover {
  background-color: lightgray;
}

.projectInput {
  display: none;
  margin-top: 5px;
}
.projectInput.active {
  display: grid;
}

#projectName {
  height: 30px;
  padding: 2px 10px;
  border-radius: 5px;
  margin-top: 10px;
  justify-self: stretch;
}

.addProjectChoiceBtn {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-items: stretch;
  margin-top: 10px;
  margin-left: 0px;
}

.addProjectChoiceBtn button {
  padding: 5px 0px;
  font-size: 15px;
  font-weight: 300;
}

.addProjectConfirm {
  background-color: rgba(2, 157, 2, 0.6);
  font-weight: bold;
  border-radius: 5px;
}

.addProjectConfirm:hover {
  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);
}

.addProjectCancel {
  background-color: rgba(255, 0, 0, 0.6);
  font-weight: bold;
  border-radius: 5px;
}

.addProjectCancel:hover {
  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);
}

.addTaskBtn {
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  margin: 10px;
  padding: 5px 0px;
}

.addTaskBtn:hover {
  background-color: whitesmoke;
}

.taskInput {
  display: none;
}

.taskInput.active {
  display: grid;
  justify-content: stretch;
  padding: 5px;
}

.taskInput label {
  font-size: 15px;
}

.taskInput input {
  height: 30px;
}

.addTaskChoiceBtn {
  margin-top: 10px;
  display: grid;
  grid-auto-flow: column;
  justify-content: stretch;
  gap: 20px;
}

.addTaskChoiceBtn button {
  padding: 20px 0px;
  font-size: 20px;
  border-radius: 5px;
  font-weight: bold;
}

.addTaskCancel {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  background-color: rgba(255, 0, 0, 0.6);
}

.addTaskCancel:hover {
  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);
}

.addTaskConfirm {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  background-color: rgba(2, 157, 2, 0.6);
}

.addTaskConfirm:hover {
  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,sBAAsB;EACtB,gDAAgD;AAClD;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,gCAAgC;EAChC,yCAAyC;AAC3C;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;EACvB,4BAA4B;EAC5B,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,gCAAgC;EAChC,qBAAqB;EACrB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,wCAAwC;AAC1C;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,wCAAwC;AAC1C;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;;EAEE,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;EACtC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,sCAAsC;EACtC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,qDAAqD;AACvD","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  display: grid;\n  justify-content: stretch;\n  align-content: stretch;\n  grid-template-rows: 80px minmax(600px, 1fr) 30px;\n}\n\n.main-container {\n  /* padding: 30px 5%; */\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.tab-bar {\n  background-color: whitesmoke;\n  padding: 20px 30px;\n  justify-self: stretch;\n}\n\n.task-content {\n  background-color: lightgrey;\n  padding: 20px 30px;\n  justify-self: stretch;\n}\n\n.projectDisplay {\n  border: 2px solid black;\n  background-color: whitesmoke;\n  font-size: 40px;\n  font-weight: bolder;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n.task {\n  font-size: 20px;\n  text-align: center;\n  margin: 10px;\n  padding: 5px 0px;\n  display: grid;\n  grid-template-columns: 80% 180px;\n  align-content: center;\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.taskTitle {\n  justify-self: start;\n  margin-left: 20px;\n}\n\n.taskDate {\n  justify-self: end;\n}\n\n.task.lowPriority {\n  background-color: rgba(88, 194, 88, 0.6);\n}\n.task.mediumPriority {\n  background-color: rgba(67, 245, 245, 0.6);\n}\n.task.highPriority {\n  background-color: rgba(244, 64, 64, 0.6);\n}\n\n.home,\n.projects {\n  display: grid;\n  align-items: center;\n  font-size: 40px;\n  font-weight: bold;\n  justify-content: start;\n}\n\n.home div,\n.projects .project {\n  font-size: 25px;\n  justify-self: start;\n  margin-left: 20px;\n  margin-bottom: 10px;\n}\n\n.home div:hover,\n.projects .project:hover {\n  text-decoration: underline;\n}\n\n.addProjectBtn {\n  border: 2px solid black;\n  font-size: 20px;\n  text-align: center;\n  font-weight: 300;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n.addProjectBtn:hover {\n  background-color: lightgray;\n}\n\n.projectInput {\n  display: none;\n  margin-top: 5px;\n}\n.projectInput.active {\n  display: grid;\n}\n\n#projectName {\n  height: 30px;\n  padding: 2px 10px;\n  border-radius: 5px;\n  margin-top: 10px;\n  justify-self: stretch;\n}\n\n.addProjectChoiceBtn {\n  width: 100%;\n  display: grid;\n  grid-auto-flow: column;\n  justify-items: stretch;\n  margin-top: 10px;\n  margin-left: 0px;\n}\n\n.addProjectChoiceBtn button {\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n.addProjectConfirm {\n  background-color: rgba(2, 157, 2, 0.6);\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.addProjectConfirm:hover {\n  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);\n}\n\n.addProjectCancel {\n  background-color: rgba(255, 0, 0, 0.6);\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.addProjectCancel:hover {\n  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);\n}\n\n.addTaskBtn {\n  font-size: 20px;\n  text-align: center;\n  border-radius: 10px;\n  border: 2px solid black;\n  margin: 10px;\n  padding: 5px 0px;\n}\n\n.addTaskBtn:hover {\n  background-color: whitesmoke;\n}\n\n.taskInput {\n  display: none;\n}\n\n.taskInput.active {\n  display: grid;\n  justify-content: stretch;\n  padding: 5px;\n}\n\n.taskInput label {\n  font-size: 15px;\n}\n\n.taskInput input {\n  height: 30px;\n}\n\n.addTaskChoiceBtn {\n  margin-top: 10px;\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: stretch;\n  gap: 20px;\n}\n\n.addTaskChoiceBtn button {\n  padding: 20px 0px;\n  font-size: 20px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n.addTaskCancel {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 20px;\n  background-color: rgba(255, 0, 0, 0.6);\n}\n\n.addTaskCancel:hover {\n  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);\n}\n\n.addTaskConfirm {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 20px;\n  background-color: rgba(2, 157, 2, 0.6);\n}\n\n.addTaskConfirm:hover {\n  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/domManipulatorProject.js":
/*!************************************************!*\
  !*** ./src/functions/domManipulatorProject.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAllProjects: () => (/* binding */ loadAllProjects)
/* harmony export */ });
/* harmony import */ var _domManipulatorTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulatorTask */ "./src/functions/domManipulatorTask.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/functions/project.js");



let projectList = [];

const clearProjects = function () {
  const projects = document.querySelector(".projects");
  projects.innerHTML = "Projects";
};

const addProjectInput = function () {
  const projectContainer = document.querySelector(".projects");

  projectContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="addProjectBtn">Add Project</div>
    <div class="projectInput">
    <input type="text" id="projectName" name="projectName" />
    <div class= "addProjectChoiceBtn">
      <button class="addProjectConfirm">Confirm</button>
      <button class="addProjectCancel">Cancel</button>
    </div>
  </div>`
  );

  addProjectBtnInit();
  addProjectConfirmInit();
  addProjectCancelInit();
};

const addProjectBtnInit = function () {
  const addProjectBtn = document.querySelector(".addProjectBtn");
  const projectInput = document.querySelector(".projectInput");
  addProjectBtn.addEventListener("click", () => {
    projectInput.classList.add("active");
  });
};

const addProjectConfirmInit = function () {
  const confirmBtn = document.querySelector(".addProjectConfirm");
  const projectInput = document.querySelector(".projectInput");
  confirmBtn.addEventListener("click", () => {
    //Add code to create project here
    createProject(projectList);
    loadAllProjects(projectList);
    clearAddProjectValue();
    projectInput.classList.remove("active");
  });
};

const addProjectCancelInit = function () {
  const cancelBtn = document.querySelector(".addProjectCancel");
  const projectInput = document.querySelector(".projectInput");
  cancelBtn.addEventListener("click", () => {
    clearAddProjectValue();
    projectInput.classList.remove("active");
  });
};

const clearAddProjectValue = function () {
  const projectName = document.querySelector("#projectName");

  projectName.value = "";
};

const loadAllProjects = function (projectArr) {
  clearProjects();
  projectList = projectArr;
  projectArr.forEach((project) => {
    loadProjects(project);
  });
  addEventAllProjects();
  addEventToday();
  addProjectInput();
};

const loadProjects = function (project) {
  const userProjects = document.querySelector(".projects");
  const projectDOM = document.createElement("div");
  projectDOM.classList.add("project");
  projectDOM.textContent = `${project.name}`;

  projectDOM.addEventListener("click", function () {
    (0,_domManipulatorTask__WEBPACK_IMPORTED_MODULE_0__.clearTask)();
    console.log(project);
    (0,_domManipulatorTask__WEBPACK_IMPORTED_MODULE_0__.loadAllTask)(project);
  });
  userProjects.appendChild(projectDOM);
};

const createProject = function (projectArr) {
  const projectName = document.querySelector("#projectName");

  const project = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectName.value);

  projectArr.push(project);
};

//Functions to handle "All Tasks" tab
const addEventAllProjects = function () {
  const allProject = document.querySelector(".allProjectTasks");
  allProject.addEventListener("click", loadAllProjectTask);
};

const loadAllProjectTask = function () {
  (0,_domManipulatorTask__WEBPACK_IMPORTED_MODULE_0__.clearTask)();
  const taskContent1 = document.querySelector(".task-content");
  const projectDisplay = document.createElement("div");
  projectDisplay.classList.add("projectDisplay");
  projectDisplay.textContent = "All Tasks";
  taskContent1.appendChild(projectDisplay);

  projectList.forEach((project) => {
    project.tasks.forEach((task) => {
      const taskContent = document.querySelector(".task-content");
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      if (task.priority == "Low") {
        taskDiv.classList.add("lowPriority");
      } else if (task.priority == "Medium") {
        taskDiv.classList.add("mediumPriority");
      } else if (task.priority == "High") {
        taskDiv.classList.add("highPriority");
      }
      taskDiv.innerHTML += `
                    <span class="taskTitle">${task.title}</span>
                    <span class="taskDate">${task.dueDate}</span>
                    `;
      taskContent.appendChild(taskDiv);
    });
  });
};

//Functions to handle "Today" tab
const addEventToday = function () {
  const todayDOM = document.querySelector(".todayTask");
  todayDOM.addEventListener("click", loadTodayTask);
};

const loadTodayTask = function () {
  (0,_domManipulatorTask__WEBPACK_IMPORTED_MODULE_0__.clearTask)();
  const taskContent1 = document.querySelector(".task-content");
  const projectDisplay = document.createElement("div");
  projectDisplay.classList.add("projectDisplay");
  projectDisplay.textContent = "Today Tasks";
  taskContent1.appendChild(projectDisplay);

  projectList.forEach((project) => {
    project.tasks.forEach((task) => {
      const taskContent = document.querySelector(".task-content");
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      if (task.priority == "Low") {
        taskDiv.classList.add("lowPriority");
      } else if (task.priority == "Medium") {
        taskDiv.classList.add("mediumPriority");
      } else if (task.priority == "High") {
        taskDiv.classList.add("highPriority");
      }
      const today = new Date();
      const todayFomatted = [
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
      ].join("-");
      if (todayFomatted == task.dueDate) {
        taskDiv.innerHTML += `
            <span class="taskTitle">${task.title}</span>
            <span class="taskDate">${task.dueDate}</span>
            `;
        taskContent.appendChild(taskDiv);
      }
    });
  });
};




/***/ }),

/***/ "./src/functions/domManipulatorTask.js":
/*!*********************************************!*\
  !*** ./src/functions/domManipulatorTask.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearTask: () => (/* binding */ clearTask),
/* harmony export */   loadAllTask: () => (/* binding */ loadAllTask)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/functions/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/functions/project.js");



let currentProject;

const clearTask = function () {
  document.querySelector(".task-content").innerHTML = ``;
};

const addTaskInput = function () {
  const inputTask = document.createElement("div");
  const taskContainer = document.querySelector(".task-content");
  inputTask.innerHTML = `<div class="addTaskBtn">Add Task</div>
  <div class="taskInput">
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
  <label for="priority">Select a priotiry:</label>
  <select name="priority" id="priority">
    <option value="">--Please choose an priority--</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
  <div class= "addTaskChoiceBtn">
    <button class="addTaskConfirm">Confirm</button>
    <button class="addTaskCancel">Cancel</button>
  </div>
</div>`;

  taskContainer.appendChild(inputTask);
  addTaskBtnInit();
  addTaskConfirmInit();
  addTaskCancelInit();
};

const addTaskBtnInit = function () {
  const addTaskBtn = document.querySelector(".addTaskBtn");
  const taskInput = document.querySelector(".taskInput");
  addTaskBtn.addEventListener("click", () => {
    taskInput.classList.add("active");
  });
};

const addTaskConfirmInit = function () {
  const confirmBtn = document.querySelector(".addTaskConfirm");
  const taskInput = document.querySelector(".taskInput");
  confirmBtn.addEventListener("click", () => {
    //Add code to create task here
    createTask(currentProject);
    clearAddTaskValue();
    taskInput.classList.remove("active");
    loadAllTask(currentProject);
  });
};

const addTaskCancelInit = function () {
  const cancelBtn = document.querySelector(".addTaskCancel");
  const taskInput = document.querySelector(".taskInput");
  cancelBtn.addEventListener("click", () => {
    clearAddTaskValue();
    taskInput.classList.remove("active");
  });
};

const clearAddTaskValue = function () {
  const title = document.querySelector("#taskName");
  const description = document.querySelector("#description");
  const date = document.querySelector("#taskDate");
  const priority = document.querySelector("#priority");

  title.value = "";
  description.value = "";
  date.value = "";
  priority.value = "";
};

const loadAllTask = function (project) {
  clearTask();
  const taskContent = document.querySelector(".task-content");
  const projectDisplay = document.createElement("div");
  projectDisplay.classList.add("projectDisplay");
  projectDisplay.textContent = project.name;
  taskContent.appendChild(projectDisplay);
  project.tasks.forEach((task) => {
    loadTask(task);
  });
  currentProject = project;
  console.log(currentProject);
  addTaskInput();
};

const loadTask = function (task) {
  const taskContent = document.querySelector(".task-content");
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  if (task.priority == "Low") {
    taskDiv.classList.add("lowPriority");
  } else if (task.priority == "Medium") {
    taskDiv.classList.add("mediumPriority");
  } else if (task.priority == "High") {
    taskDiv.classList.add("highPriority");
  }
  taskDiv.innerHTML += `
  <span class="taskTitle">${task.title}</span>
  <span class="taskDate">${task.dueDate}</span>
`;
  taskContent.appendChild(taskDiv);
};

const createTask = function (project) {
  const taskName = document.querySelector("#taskName");
  const description = document.querySelector("#description");
  const taskDate = document.querySelector("#taskDate");
  // const dateFormatted = new Date(taskDate.value);
  const priority = document.querySelector("#priority");

  const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](
    taskName.value,
    description.value,
    taskDate.value,
    priority.value
  );

  project.tasks.push(task);
};




/***/ }),

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
  const dateUnformatted = new Date(dueDate);
  const year = dateUnformatted.getFullYear();
  const month = dateUnformatted.getMonth() + 1;
  const day = dateUnformatted.getDate();

  let task = {};

  task.title = title;
  task.description = description;
  task.dueDate = [year, month, day].join("-");
  task.priority = priority;
  task.checked = Boolean(false);

  task.toggleCheck = function () {
    task.checked = !task.checked;
  };

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _functions_domManipulatorTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/domManipulatorTask */ "./src/functions/domManipulatorTask.js");
/* harmony import */ var _functions_domManipulatorProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/domManipulatorProject */ "./src/functions/domManipulatorProject.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");






const today = new Date();
console.log(
  [today.getFullYear(), today.getMonth() + 1, today.getDate()].join("-")
);

let task1 = new _functions_task__WEBPACK_IMPORTED_MODULE_0__["default"]("test1", "this is a test", "2023-12-11", "Low");
let task2 = new _functions_task__WEBPACK_IMPORTED_MODULE_0__["default"]("test2", "this is a second test", "2024-01-23", "Low");

console.log(task1);
task1.toggleCheck();

let projectArr = [];

let project1 = new _functions_project__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Project 1");
let project2 = new _functions_project__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Project 2");

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

(0,_functions_domManipulatorProject__WEBPACK_IMPORTED_MODULE_3__.loadAllProjects)(projectArr);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvRkFBb0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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QWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9mdW5jdGlvbnMvZG9tTWFuaXB1bGF0b3JQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvZnVuY3Rpb25zL2RvbU1hbmlwdWxhdG9yVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2Z1bmN0aW9ucy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvZnVuY3Rpb25zL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IG1pbm1heCg2MDBweCwgMWZyKSAzMHB4O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAvKiBwYWRkaW5nOiAzMHB4IDUlOyAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi50YWItYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG59XG5cbi50YXNrLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xufVxuXG4ucHJvamVjdERpc3BsYXkge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhc2sge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxODBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRhc2tUaXRsZSB7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udGFza0RhdGUge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLnRhc2subG93UHJpb3JpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxOTQsIDg4LCAwLjYpO1xufVxuLnRhc2subWVkaXVtUHJpb3JpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCAyNDUsIDI0NSwgMC42KTtcbn1cbi50YXNrLmhpZ2hQcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NCwgNjQsIDAuNik7XG59XG5cbi5ob21lLFxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLmhvbWUgZGl2LFxuLnByb2plY3RzIC5wcm9qZWN0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmhvbWUgZGl2OmhvdmVyLFxuLnByb2plY3RzIC5wcm9qZWN0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5hZGRQcm9qZWN0QnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFkZFByb2plY3RCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5wcm9qZWN0SW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJvamVjdElucHV0LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbiNwcm9qZWN0TmFtZSB7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xufVxuXG4uYWRkUHJvamVjdENob2ljZUJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uYWRkUHJvamVjdENob2ljZUJ0biBidXR0b24ge1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hZGRQcm9qZWN0Q29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTU3LCAyLCAwLjYpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYWRkUHJvamVjdENvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcbn1cblxuLmFkZFByb2plY3RDYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmFkZFByb2plY3RDYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcbn1cblxuLmFkZFRhc2tCdG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuLmFkZFRhc2tCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGFza0lucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhc2tJbnB1dC5hY3RpdmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnRhc2tJbnB1dCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRhc2tJbnB1dCBpbnB1dCB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmFkZFRhc2tDaG9pY2VCdG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGdhcDogMjBweDtcbn1cblxuLmFkZFRhc2tDaG9pY2VCdG4gYnV0dG9uIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFkZFRhc2tDYW5jZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcbn1cblxuLmFkZFRhc2tDYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcbn1cblxuLmFkZFRhc2tDb25maXJtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxNTcsIDIsIDAuNik7XG59XG5cbi5hZGRUYXNrQ29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAvNDAlKSAwIDApO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBtaW5tYXgoNjAwcHgsIDFmcikgMzBweDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIC8qIHBhZGRpbmc6IDMwcHggNSU7ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRhYi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbi5wcm9qZWN0RGlzcGxheSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxODBweDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50YXNrVGl0bGUge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4udGFza0RhdGUge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi50YXNrLmxvd1ByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDE5NCwgODgsIDAuNik7XFxufVxcbi50YXNrLm1lZGl1bVByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDI0NSwgMjQ1LCAwLjYpO1xcbn1cXG4udGFzay5oaWdoUHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY0LCA2NCwgMC42KTtcXG59XFxuXFxuLmhvbWUsXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uaG9tZSBkaXYsXFxuLnByb2plY3RzIC5wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5ob21lIGRpdjpob3ZlcixcXG4ucHJvamVjdHMgLnByb2plY3Q6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5hZGRQcm9qZWN0QnRuIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmFkZFByb2plY3RCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ucHJvamVjdElucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5wcm9qZWN0SW5wdXQuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNwcm9qZWN0TmFtZSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbi5hZGRQcm9qZWN0Q2hvaWNlQnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxufVxcblxcbi5hZGRQcm9qZWN0Q2hvaWNlQnRuIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmFkZFByb2plY3RDb25maXJtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTU3LCAyLCAwLjYpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5hZGRQcm9qZWN0Q29uZmlybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcXG59XFxuXFxuLmFkZFByb2plY3RDYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmFkZFByb2plY3RDYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigwIDAgMC80MCUpIDAgMCk7XFxufVxcblxcbi5hZGRUYXNrQnRuIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxufVxcblxcbi5hZGRUYXNrQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi50YXNrSW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2tJbnB1dC5hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2tJbnB1dCBsYWJlbCB7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi50YXNrSW5wdXQgaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYWRkVGFza0Nob2ljZUJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5hZGRUYXNrQ2hvaWNlQnRuIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkVGFza0NhbmNlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG59XFxuXFxuLmFkZFRhc2tDYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigwIDAgMC80MCUpIDAgMCk7XFxufVxcblxcbi5hZGRUYXNrQ29uZmlybSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDE1NywgMiwgMC42KTtcXG59XFxuXFxuLmFkZFRhc2tDb25maXJtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAvNDAlKSAwIDApO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbG9hZEFsbFRhc2ssIGNsZWFyVGFzayB9IGZyb20gXCIuL2RvbU1hbmlwdWxhdG9yVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgY2xlYXJQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICBwcm9qZWN0cy5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG4gIHByb2plY3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgYDxkaXYgY2xhc3M9XCJhZGRQcm9qZWN0QnRuXCI+QWRkIFByb2plY3Q8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdElucHV0XCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qZWN0TmFtZVwiIG5hbWU9XCJwcm9qZWN0TmFtZVwiIC8+XG4gICAgPGRpdiBjbGFzcz0gXCJhZGRQcm9qZWN0Q2hvaWNlQnRuXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkUHJvamVjdENvbmZpcm1cIj5Db25maXJtPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkUHJvamVjdENhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gXG4gICk7XG5cbiAgYWRkUHJvamVjdEJ0bkluaXQoKTtcbiAgYWRkUHJvamVjdENvbmZpcm1Jbml0KCk7XG4gIGFkZFByb2plY3RDYW5jZWxJbml0KCk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEJ0blwiKTtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0SW5wdXRcIik7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0Q29uZmlybUluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RDb25maXJtXCIpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJbnB1dFwiKTtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vQWRkIGNvZGUgdG8gY3JlYXRlIHByb2plY3QgaGVyZVxuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdExpc3QpO1xuICAgIGxvYWRBbGxQcm9qZWN0cyhwcm9qZWN0TGlzdCk7XG4gICAgY2xlYXJBZGRQcm9qZWN0VmFsdWUoKTtcbiAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0Q2FuY2VsSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0Q2FuY2VsXCIpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJbnB1dFwiKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJBZGRQcm9qZWN0VmFsdWUoKTtcbiAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGVhckFkZFByb2plY3RWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3ROYW1lXCIpO1xuXG4gIHByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbn07XG5cbmNvbnN0IGxvYWRBbGxQcm9qZWN0cyA9IGZ1bmN0aW9uIChwcm9qZWN0QXJyKSB7XG4gIGNsZWFyUHJvamVjdHMoKTtcbiAgcHJvamVjdExpc3QgPSBwcm9qZWN0QXJyO1xuICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBsb2FkUHJvamVjdHMocHJvamVjdCk7XG4gIH0pO1xuICBhZGRFdmVudEFsbFByb2plY3RzKCk7XG4gIGFkZEV2ZW50VG9kYXkoKTtcbiAgYWRkUHJvamVjdElucHV0KCk7XG59O1xuXG5jb25zdCBsb2FkUHJvamVjdHMgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCB1c2VyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdERPTS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdERPTS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX1gO1xuXG4gIHByb2plY3RET00uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRhc2soKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBsb2FkQWxsVGFzayhwcm9qZWN0KTtcbiAgfSk7XG4gIHVzZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0RE9NKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdEFycikge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XG5cbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcblxuICBwcm9qZWN0QXJyLnB1c2gocHJvamVjdCk7XG59O1xuXG4vL0Z1bmN0aW9ucyB0byBoYW5kbGUgXCJBbGwgVGFza3NcIiB0YWJcbmNvbnN0IGFkZEV2ZW50QWxsUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFsbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbFByb2plY3RUYXNrc1wiKTtcbiAgYWxsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEFsbFByb2plY3RUYXNrKTtcbn07XG5cbmNvbnN0IGxvYWRBbGxQcm9qZWN0VGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJUYXNrKCk7XG4gIGNvbnN0IHRhc2tDb250ZW50MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGlzcGxheVwiKTtcbiAgcHJvamVjdERpc3BsYXkudGV4dENvbnRlbnQgPSBcIkFsbCBUYXNrc1wiO1xuICB0YXNrQ29udGVudDEuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuXG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIik7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImxvd1ByaW9yaXR5XCIpO1xuICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVkaXVtUHJpb3JpdHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJIaWdoXCIpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlnaFByaW9yaXR5XCIpO1xuICAgICAgfVxuICAgICAgdGFza0Rpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tUaXRsZVwiPiR7dGFzay50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFza0RhdGVcIj4ke3Rhc2suZHVlRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vL0Z1bmN0aW9ucyB0byBoYW5kbGUgXCJUb2RheVwiIHRhYlxuY29uc3QgYWRkRXZlbnRUb2RheSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdG9kYXlET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5VGFza1wiKTtcbiAgdG9kYXlET00uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRUb2RheVRhc2spO1xufTtcblxuY29uc3QgbG9hZFRvZGF5VGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJUYXNrKCk7XG4gIGNvbnN0IHRhc2tDb250ZW50MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGlzcGxheVwiKTtcbiAgcHJvamVjdERpc3BsYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5IFRhc2tzXCI7XG4gIHRhc2tDb250ZW50MS5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG5cbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibG93UHJpb3JpdHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1Qcmlvcml0eVwiKTtcbiAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSBcIkhpZ2hcIikge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XG4gICAgICB9XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheUZvbWF0dGVkID0gW1xuICAgICAgICB0b2RheS5nZXRGdWxsWWVhcigpLFxuICAgICAgICB0b2RheS5nZXRNb250aCgpICsgMSxcbiAgICAgICAgdG9kYXkuZ2V0RGF0ZSgpLFxuICAgICAgXS5qb2luKFwiLVwiKTtcbiAgICAgIGlmICh0b2RheUZvbWF0dGVkID09IHRhc2suZHVlRGF0ZSkge1xuICAgICAgICB0YXNrRGl2LmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tUaXRsZVwiPiR7dGFzay50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tEYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9zcGFuPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbG9hZEFsbFByb2plY3RzIH07XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmxldCBjdXJyZW50UHJvamVjdDtcblxuY29uc3QgY2xlYXJUYXNrID0gZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKS5pbm5lckhUTUwgPSBgYDtcbn07XG5cbmNvbnN0IGFkZFRhc2tJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaW5wdXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICBpbnB1dFRhc2suaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJhZGRUYXNrQnRuXCI+QWRkIFRhc2s8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRhc2tJbnB1dFwiPlxuICA8bGFiZWwgZm9yPVwidGFza05hbWVcIj5UaXRsZTwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza05hbWVcIiBuYW1lPVwidGFza05hbWVcIiAvPlxuICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gIDx0ZXh0YXJlYVxuICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgY29scz1cIjIwXCJcbiAgICByb3dzPVwiNVwiXG4gICAgcGxhY2Vob2xkZXI9XCJlZzogZ28gb3V0c2lkZSB0byBzbWVsbCB0aGUgZmxvd2Vyc1wiXG4gID48L3RleHRhcmVhPlxuICA8bGFiZWwgZm9yPVwidGFza0RhdGVcIj5EYXRlPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrRGF0ZVwiIG5hbWU9XCJ0YXNrRGF0ZVwiIC8+XG4gIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlNlbGVjdCBhIHByaW90aXJ5OjwvbGFiZWw+XG4gIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLVBsZWFzZSBjaG9vc2UgYW4gcHJpb3JpdHktLTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuICA8ZGl2IGNsYXNzPSBcImFkZFRhc2tDaG9pY2VCdG5cIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYWRkVGFza0NvbmZpcm1cIj5Db25maXJtPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImFkZFRhc2tDYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5gO1xuXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUYXNrKTtcbiAgYWRkVGFza0J0bkluaXQoKTtcbiAgYWRkVGFza0NvbmZpcm1Jbml0KCk7XG4gIGFkZFRhc2tDYW5jZWxJbml0KCk7XG59O1xuXG5jb25zdCBhZGRUYXNrQnRuSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0J0blwiKTtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrSW5wdXRcIik7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRUYXNrQ29uZmlybUluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tDb25maXJtXCIpO1xuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tJbnB1dFwiKTtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vQWRkIGNvZGUgdG8gY3JlYXRlIHRhc2sgaGVyZVxuICAgIGNyZWF0ZVRhc2soY3VycmVudFByb2plY3QpO1xuICAgIGNsZWFyQWRkVGFza1ZhbHVlKCk7XG4gICAgdGFza0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgbG9hZEFsbFRhc2soY3VycmVudFByb2plY3QpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFRhc2tDYW5jZWxJbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tDYW5jZWxcIik7XG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0lucHV0XCIpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckFkZFRhc2tWYWx1ZSgpO1xuICAgIHRhc2tJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsZWFyQWRkVGFza1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza05hbWVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIik7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcblxuICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgZGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHByaW9yaXR5LnZhbHVlID0gXCJcIjtcbn07XG5cbmNvbnN0IGxvYWRBbGxUYXNrID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY2xlYXJUYXNrKCk7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIik7XG4gIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXNwbGF5XCIpO1xuICBwcm9qZWN0RGlzcGxheS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBsb2FkVGFzayh0YXNrKTtcbiAgfSk7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICBhZGRUYXNrSW5wdXQoKTtcbn07XG5cbmNvbnN0IGxvYWRUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJsb3dQcmlvcml0eVwiKTtcbiAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIHtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1Qcmlvcml0eVwiKTtcbiAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwiSGlnaFwiKSB7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlnaFByaW9yaXR5XCIpO1xuICB9XG4gIHRhc2tEaXYuaW5uZXJIVE1MICs9IGBcbiAgPHNwYW4gY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cInRhc2tEYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9zcGFuPlxuYDtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGF0ZVwiKTtcbiAgLy8gY29uc3QgZGF0ZUZvcm1hdHRlZCA9IG5ldyBEYXRlKHRhc2tEYXRlLnZhbHVlKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuXG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcbiAgICB0YXNrTmFtZS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICB0YXNrRGF0ZS52YWx1ZSxcbiAgICBwcmlvcml0eS52YWx1ZVxuICApO1xuXG4gIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRBbGxUYXNrLCBjbGVhclRhc2sgfTtcbiIsImNvbnN0IFByb2plY3QgPSBmdW5jdGlvbiAobmFtZSkge1xuICBsZXQgcHJvamVjdCA9IHt9O1xuXG4gIHByb2plY3QubmFtZSA9IG5hbWU7XG4gIHByb2plY3QudGFza3MgPSBbXTtcblxuICBwcm9qZWN0LmFkZFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgfTtcblxuICBwcm9qZWN0LnJlbW92ZVRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgIGxldCBpbmRleCA9IHByb2plY3QudGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcHJvamVjdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjb25zdCBUYXNrID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgZGF0ZVVuZm9ybWF0dGVkID0gbmV3IERhdGUoZHVlRGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBkYXRlVW5mb3JtYXR0ZWQuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBkYXRlVW5mb3JtYXR0ZWQuZ2V0TW9udGgoKSArIDE7XG4gIGNvbnN0IGRheSA9IGRhdGVVbmZvcm1hdHRlZC5nZXREYXRlKCk7XG5cbiAgbGV0IHRhc2sgPSB7fTtcblxuICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGFzay5kdWVEYXRlID0gW3llYXIsIG1vbnRoLCBkYXldLmpvaW4oXCItXCIpO1xuICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRhc2suY2hlY2tlZCA9IEJvb2xlYW4oZmFsc2UpO1xuXG4gIHRhc2sudG9nZ2xlQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGFzay5jaGVja2VkID0gIXRhc2suY2hlY2tlZDtcbiAgfTtcblxuICByZXR1cm4gdGFzaztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9mdW5jdGlvbnMvdGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vZnVuY3Rpb25zL3Byb2plY3RcIjtcbmltcG9ydCB7IGxvYWRBbGxUYXNrIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2RvbU1hbmlwdWxhdG9yVGFza1wiO1xuaW1wb3J0IHsgbG9hZEFsbFByb2plY3RzIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2RvbU1hbmlwdWxhdG9yUHJvamVjdFwiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbmNvbnNvbGUubG9nKFxuICBbdG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSArIDEsIHRvZGF5LmdldERhdGUoKV0uam9pbihcIi1cIilcbik7XG5cbmxldCB0YXNrMSA9IG5ldyBUYXNrKFwidGVzdDFcIiwgXCJ0aGlzIGlzIGEgdGVzdFwiLCBcIjIwMjMtMTItMTFcIiwgXCJMb3dcIik7XG5sZXQgdGFzazIgPSBuZXcgVGFzayhcInRlc3QyXCIsIFwidGhpcyBpcyBhIHNlY29uZCB0ZXN0XCIsIFwiMjAyNC0wMS0yM1wiLCBcIkxvd1wiKTtcblxuY29uc29sZS5sb2codGFzazEpO1xudGFzazEudG9nZ2xlQ2hlY2soKTtcblxubGV0IHByb2plY3RBcnIgPSBbXTtcblxubGV0IHByb2plY3QxID0gbmV3IFByb2plY3QoXCJUZXN0IFByb2plY3QgMVwiKTtcbmxldCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiVGVzdCBQcm9qZWN0IDJcIik7XG5cbnByb2plY3RBcnIucHVzaChwcm9qZWN0MSk7XG5wcm9qZWN0QXJyLnB1c2gocHJvamVjdDIpO1xucHJvamVjdDEuYWRkVGFzayh0YXNrMSk7XG5wcm9qZWN0MS5hZGRUYXNrKHRhc2syKTtcblxuY29uc29sZS5sb2cocHJvamVjdDEpO1xucHJvamVjdDEudGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbn0pO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0MSk7XG5wcm9qZWN0MS50YXNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xufSk7XG5cbmxvYWRBbGxQcm9qZWN0cyhwcm9qZWN0QXJyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==