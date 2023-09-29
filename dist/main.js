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
  addEventNextWeek();
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
  projectDisplay.textContent = "All";
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
  projectDisplay.textContent = "Today";
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

//Function to handle "Next 7 days" tab
const addEventNextWeek = function () {
  const todayDOM = document.querySelector(".nextWeekTasks");
  todayDOM.addEventListener("click", loadNextWeekTask);
};
const loadNextWeekTask = function () {
  (0,_domManipulatorTask__WEBPACK_IMPORTED_MODULE_0__.clearTask)();
  const taskContent1 = document.querySelector(".task-content");
  const projectDisplay = document.createElement("div");
  projectDisplay.classList.add("projectDisplay");
  projectDisplay.textContent = "Next 7 Days";
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
      today.setHours(0, 0, 0, 0);
      const nextSevenDay = new Date();
      nextSevenDay.setHours(23, 59, 59, 999);
      const nextSevenDayFormatted = new Date(
        nextSevenDay.setDate(today.getDate() + 7)
      );
      const taskDueDate = new Date(task.dueDate);
      const taskDueDateFormatted = new Date(
        taskDueDate.setMonth(taskDueDate.getMonth())
      );
      console.log("task due: ", taskDueDateFormatted);
      console.log("today: ", today);
      console.log("next 7 days: ", nextSevenDay);
      if (
        today <= taskDueDateFormatted &&
        taskDueDateFormatted <= nextSevenDayFormatted
      ) {
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
let task3 = new _functions_task__WEBPACK_IMPORTED_MODULE_0__["default"]("test3", "Test", new Date(), "High");
let task4 = new _functions_task__WEBPACK_IMPORTED_MODULE_0__["default"]("task4", "", today.setDate(today.getDate() + 3), "Medium");

console.log(task1);
task1.toggleCheck();

let projectArr = [];

let project1 = new _functions_project__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Project 1");
let project2 = new _functions_project__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Project 2");

projectArr.push(project1);
projectArr.push(project2);
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

(0,_functions_domManipulatorProject__WEBPACK_IMPORTED_MODULE_3__.loadAllProjects)(projectArr);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvRkFBb0YsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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Ozs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNNO0FBQ21CO0FBQ087QUFDM0M7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix1REFBSTtBQUNwQixnQkFBZ0IsdURBQUk7QUFDcEIsZ0JBQWdCLHVEQUFJO0FBQ3BCLGdCQUFnQix1REFBSTs7QUFFcEI7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsMERBQU87QUFDMUIsbUJBQW1CLDBEQUFPOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2Z1bmN0aW9ucy9kb21NYW5pcHVsYXRvclByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9mdW5jdGlvbnMvZG9tTWFuaXB1bGF0b3JUYXNrLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9mdW5jdGlvbnMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggbWlubWF4KDYwMHB4LCAxZnIpIDMwcHg7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIC8qIHBhZGRpbmc6IDMwcHggNSU7ICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnRhYi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbn1cblxuLnRhc2stY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5wcm9qZWN0RGlzcGxheSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFzayB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDE4MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGFza1RpdGxlIHtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi50YXNrRGF0ZSB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4udGFzay5sb3dQcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODgsIDE5NCwgODgsIDAuNik7XG59XG4udGFzay5tZWRpdW1Qcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDI0NSwgMjQ1LCAwLjYpO1xufVxuLnRhc2suaGlnaFByaW9yaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY0LCA2NCwgMC42KTtcbn1cblxuLmhvbWUsXG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4uaG9tZSBkaXYsXG4ucHJvamVjdHMgLnByb2plY3Qge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaG9tZSBkaXY6aG92ZXIsXG4ucHJvamVjdHMgLnByb2plY3Q6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmFkZFByb2plY3RCdG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYWRkUHJvamVjdEJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLnByb2plY3RJbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wcm9qZWN0SW5wdXQuYWN0aXZlIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuI3Byb2plY3ROYW1lIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5hZGRQcm9qZWN0Q2hvaWNlQnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5hZGRQcm9qZWN0Q2hvaWNlQnRuIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFkZFByb2plY3RDb25maXJtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxNTcsIDIsIDAuNik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hZGRQcm9qZWN0Q29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAvNDAlKSAwIDApO1xufVxuXG4uYWRkUHJvamVjdENhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYWRkUHJvamVjdENhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAvNDAlKSAwIDApO1xufVxuXG4uYWRkVGFza0J0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG4uYWRkVGFza0J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi50YXNrSW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFza0lucHV0LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udGFza0lucHV0IGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGFza0lucHV0IGlucHV0IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uYWRkVGFza0Nob2ljZUJ0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYWRkVGFza0Nob2ljZUJ0biBidXR0b24ge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWRkVGFza0NhbmNlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xufVxuXG4uYWRkVGFza0NhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAvNDAlKSAwIDApO1xufVxuXG4uYWRkVGFza0NvbmZpcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDE1NywgMiwgMC42KTtcbn1cblxuLmFkZFRhc2tDb25maXJtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigwIDAgMC80MCUpIDAgMCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IG1pbm1heCg2MDBweCwgMWZyKSAzMHB4O1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgLyogcGFkZGluZzogMzBweCA1JTsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGFiLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLnByb2plY3REaXNwbGF5IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDE4MHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2tUaXRsZSB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50YXNrRGF0ZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRhc2subG93UHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OCwgMTk0LCA4OCwgMC42KTtcXG59XFxuLnRhc2subWVkaXVtUHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NywgMjQ1LCAyNDUsIDAuNik7XFxufVxcbi50YXNrLmhpZ2hQcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjQsIDY0LCAwLjYpO1xcbn1cXG5cXG4uaG9tZSxcXG4ucHJvamVjdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5ob21lIGRpdixcXG4ucHJvamVjdHMgLnByb2plY3Qge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmhvbWUgZGl2OmhvdmVyLFxcbi5wcm9qZWN0cyAucHJvamVjdDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmFkZFByb2plY3RCdG4ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5wcm9qZWN0SW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLnByb2plY3RJbnB1dC5hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI3Byb2plY3ROYW1lIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmFkZFByb2plY3RDaG9pY2VCdG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuXFxuLmFkZFByb2plY3RDaG9pY2VCdG4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uYWRkUHJvamVjdENvbmZpcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxNTcsIDIsIDAuNik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmFkZFByb2plY3RDb25maXJtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAvNDAlKSAwIDApO1xcbn1cXG5cXG4uYWRkUHJvamVjdENhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkUHJvamVjdENhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuLmFkZFRhc2tCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLnRhc2tJbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFza0lucHV0LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGFza0lucHV0IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLnRhc2tJbnB1dCBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5hZGRUYXNrQ2hvaWNlQnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmFkZFRhc2tDaG9pY2VCdG4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGRUYXNrQ2FuY2VsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4uYWRkVGFza0NhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcXG59XFxuXFxuLmFkZFRhc2tDb25maXJtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTU3LCAyLCAwLjYpO1xcbn1cXG5cXG4uYWRkVGFza0NvbmZpcm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigwIDAgMC80MCUpIDAgMCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBsb2FkQWxsVGFzaywgY2xlYXJUYXNrIH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0b3JUYXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5jb25zdCBjbGVhclByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gIHByb2plY3RzLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5cbiAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgXCJiZWZvcmVlbmRcIixcbiAgICBgPGRpdiBjbGFzcz1cImFkZFByb2plY3RCdG5cIj5BZGQgUHJvamVjdDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0SW5wdXRcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3ROYW1lXCIgbmFtZT1cInByb2plY3ROYW1lXCIgLz5cbiAgICA8ZGl2IGNsYXNzPSBcImFkZFByb2plY3RDaG9pY2VCdG5cIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGRQcm9qZWN0Q29uZmlybVwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGRQcm9qZWN0Q2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmBcbiAgKTtcblxuICBhZGRQcm9qZWN0QnRuSW5pdCgpO1xuICBhZGRQcm9qZWN0Q29uZmlybUluaXQoKTtcbiAgYWRkUHJvamVjdENhbmNlbEluaXQoKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RCdG5Jbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnRuXCIpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJbnB1dFwiKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RDb25maXJtSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdENvbmZpcm1cIik7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdElucHV0XCIpO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy9BZGQgY29kZSB0byBjcmVhdGUgcHJvamVjdCBoZXJlXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TGlzdCk7XG4gICAgbG9hZEFsbFByb2plY3RzKHByb2plY3RMaXN0KTtcbiAgICBjbGVhckFkZFByb2plY3RWYWx1ZSgpO1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RDYW5jZWxJbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RDYW5jZWxcIik7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdElucHV0XCIpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckFkZFByb2plY3RWYWx1ZSgpO1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsZWFyQWRkUHJvamVjdFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XG5cbiAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xufTtcblxuY29uc3QgbG9hZEFsbFByb2plY3RzID0gZnVuY3Rpb24gKHByb2plY3RBcnIpIHtcbiAgY2xlYXJQcm9qZWN0cygpO1xuICBwcm9qZWN0TGlzdCA9IHByb2plY3RBcnI7XG4gIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGxvYWRQcm9qZWN0cyhwcm9qZWN0KTtcbiAgfSk7XG4gIGFkZEV2ZW50QWxsUHJvamVjdHMoKTtcbiAgYWRkRXZlbnRUb2RheSgpO1xuICBhZGRFdmVudE5leHRXZWVrKCk7XG4gIGFkZFByb2plY3RJbnB1dCgpO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgdXNlclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RET00uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIHByb2plY3RET00udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Lm5hbWV9YDtcblxuICBwcm9qZWN0RE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUYXNrKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgbG9hZEFsbFRhc2socHJvamVjdCk7XG4gIH0pO1xuICB1c2VyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERPTSk7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RBcnIpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3ROYW1lXCIpO1xuXG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG5cbiAgcHJvamVjdEFyci5wdXNoKHByb2plY3QpO1xufTtcblxuLy9GdW5jdGlvbnMgdG8gaGFuZGxlIFwiQWxsIFRhc2tzXCIgdGFiXG5jb25zdCBhZGRFdmVudEFsbFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhbGxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxQcm9qZWN0VGFza3NcIik7XG4gIGFsbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRBbGxQcm9qZWN0VGFzayk7XG59O1xuXG5jb25zdCBsb2FkQWxsUHJvamVjdFRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGNsZWFyVGFzaygpO1xuICBjb25zdCB0YXNrQ29udGVudDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpc3BsYXlcIik7XG4gIHByb2plY3REaXNwbGF5LnRleHRDb250ZW50ID0gXCJBbGxcIjtcbiAgdGFza0NvbnRlbnQxLmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcblxuICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJMb3dcIikge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJsb3dQcmlvcml0eVwiKTtcbiAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVByaW9yaXR5XCIpO1xuICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwiSGlnaFwiKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImhpZ2hQcmlvcml0eVwiKTtcbiAgICAgIH1cbiAgICAgIHRhc2tEaXYuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tEYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy9GdW5jdGlvbnMgdG8gaGFuZGxlIFwiVG9kYXlcIiB0YWJcbmNvbnN0IGFkZEV2ZW50VG9kYXkgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRvZGF5RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVRhc2tcIik7XG4gIHRvZGF5RE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkVG9kYXlUYXNrKTtcbn07XG5cbmNvbnN0IGxvYWRUb2RheVRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGNsZWFyVGFzaygpO1xuICBjb25zdCB0YXNrQ29udGVudDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpc3BsYXlcIik7XG4gIHByb2plY3REaXNwbGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICB0YXNrQ29udGVudDEuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuXG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIik7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImxvd1ByaW9yaXR5XCIpO1xuICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVkaXVtUHJpb3JpdHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJIaWdoXCIpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlnaFByaW9yaXR5XCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXlGb21hdHRlZCA9IFtcbiAgICAgICAgdG9kYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgdG9kYXkuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgIHRvZGF5LmdldERhdGUoKSxcbiAgICAgIF0uam9pbihcIi1cIik7XG4gICAgICBpZiAodG9kYXlGb21hdHRlZCA9PSB0YXNrLmR1ZURhdGUpIHtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrRGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gaGFuZGxlIFwiTmV4dCA3IGRheXNcIiB0YWJcbmNvbnN0IGFkZEV2ZW50TmV4dFdlZWsgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRvZGF5RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXh0V2Vla1Rhc2tzXCIpO1xuICB0b2RheURPTS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE5leHRXZWVrVGFzayk7XG59O1xuY29uc3QgbG9hZE5leHRXZWVrVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJUYXNrKCk7XG4gIGNvbnN0IHRhc2tDb250ZW50MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGlzcGxheVwiKTtcbiAgcHJvamVjdERpc3BsYXkudGV4dENvbnRlbnQgPSBcIk5leHQgNyBEYXlzXCI7XG4gIHRhc2tDb250ZW50MS5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG5cbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibG93UHJpb3JpdHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1Qcmlvcml0eVwiKTtcbiAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSBcIkhpZ2hcIikge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XG4gICAgICB9XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIGNvbnN0IG5leHRTZXZlbkRheSA9IG5ldyBEYXRlKCk7XG4gICAgICBuZXh0U2V2ZW5EYXkuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgIGNvbnN0IG5leHRTZXZlbkRheUZvcm1hdHRlZCA9IG5ldyBEYXRlKFxuICAgICAgICBuZXh0U2V2ZW5EYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyA3KVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcbiAgICAgIGNvbnN0IHRhc2tEdWVEYXRlRm9ybWF0dGVkID0gbmV3IERhdGUoXG4gICAgICAgIHRhc2tEdWVEYXRlLnNldE1vbnRoKHRhc2tEdWVEYXRlLmdldE1vbnRoKCkpXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJ0YXNrIGR1ZTogXCIsIHRhc2tEdWVEYXRlRm9ybWF0dGVkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidG9kYXk6IFwiLCB0b2RheSk7XG4gICAgICBjb25zb2xlLmxvZyhcIm5leHQgNyBkYXlzOiBcIiwgbmV4dFNldmVuRGF5KTtcbiAgICAgIGlmIChcbiAgICAgICAgdG9kYXkgPD0gdGFza0R1ZURhdGVGb3JtYXR0ZWQgJiZcbiAgICAgICAgdGFza0R1ZURhdGVGb3JtYXR0ZWQgPD0gbmV4dFNldmVuRGF5Rm9ybWF0dGVkXG4gICAgICApIHtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tUaXRsZVwiPiR7dGFzay50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFza0RhdGVcIj4ke3Rhc2suZHVlRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRBbGxQcm9qZWN0cyB9O1xuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5sZXQgY3VycmVudFByb2plY3Q7XG5cbmNvbnN0IGNsZWFyVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIikuaW5uZXJIVE1MID0gYGA7XG59O1xuXG5jb25zdCBhZGRUYXNrSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGlucHV0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgaW5wdXRUYXNrLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWRkVGFza0J0blwiPkFkZCBUYXNrPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0YXNrSW5wdXRcIj5cbiAgPGxhYmVsIGZvcj1cInRhc2tOYW1lXCI+VGl0bGU8L2xhYmVsPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tOYW1lXCIgbmFtZT1cInRhc2tOYW1lXCIgLz5cbiAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICA8dGV4dGFyZWFcbiAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgIGNvbHM9XCIyMFwiXG4gICAgcm93cz1cIjVcIlxuICAgIHBsYWNlaG9sZGVyPVwiZWc6IGdvIG91dHNpZGUgdG8gc21lbGwgdGhlIGZsb3dlcnNcIlxuICA+PC90ZXh0YXJlYT5cbiAgPGxhYmVsIGZvcj1cInRhc2tEYXRlXCI+RGF0ZTwvbGFiZWw+XG4gIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidGFza0RhdGVcIiBuYW1lPVwidGFza0RhdGVcIiAvPlxuICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5TZWxlY3QgYSBwcmlvdGlyeTo8L2xhYmVsPlxuICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1QbGVhc2UgY2hvb3NlIGFuIHByaW9yaXR5LS08L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbiAgPGRpdiBjbGFzcz0gXCJhZGRUYXNrQ2hvaWNlQnRuXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImFkZFRhc2tDb25maXJtXCI+Q29uZmlybTwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJhZGRUYXNrQ2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+YDtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VGFzayk7XG4gIGFkZFRhc2tCdG5Jbml0KCk7XG4gIGFkZFRhc2tDb25maXJtSW5pdCgpO1xuICBhZGRUYXNrQ2FuY2VsSW5pdCgpO1xufTtcblxuY29uc3QgYWRkVGFza0J0bkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tCdG5cIik7XG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0lucHV0XCIpO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkVGFza0NvbmZpcm1Jbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQ29uZmlybVwiKTtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrSW5wdXRcIik7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvL0FkZCBjb2RlIHRvIGNyZWF0ZSB0YXNrIGhlcmVcbiAgICBjcmVhdGVUYXNrKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBjbGVhckFkZFRhc2tWYWx1ZSgpO1xuICAgIHRhc2tJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGxvYWRBbGxUYXNrKGN1cnJlbnRQcm9qZWN0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRUYXNrQ2FuY2VsSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQ2FuY2VsXCIpO1xuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tJbnB1dFwiKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJBZGRUYXNrVmFsdWUoKTtcbiAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGVhckFkZFRhc2tWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tOYW1lXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEYXRlXCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG5cbiAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gIGRhdGUudmFsdWUgPSBcIlwiO1xuICBwcmlvcml0eS52YWx1ZSA9IFwiXCI7XG59O1xuXG5jb25zdCBsb2FkQWxsVGFzayA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNsZWFyVGFzaygpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGlzcGxheVwiKTtcbiAgcHJvamVjdERpc3BsYXkudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgbG9hZFRhc2sodGFzayk7XG4gIH0pO1xuICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgYWRkVGFza0lucHV0KCk7XG59O1xuXG5jb25zdCBsb2FkVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIik7XG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBpZiAodGFzay5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibG93UHJpb3JpdHlcIik7XG4gIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKSB7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVkaXVtUHJpb3JpdHlcIik7XG4gIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSBcIkhpZ2hcIikge1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImhpZ2hQcmlvcml0eVwiKTtcbiAgfVxuICB0YXNrRGl2LmlubmVySFRNTCArPSBgXG4gIDxzcGFuIGNsYXNzPVwidGFza1RpdGxlXCI+JHt0YXNrLnRpdGxlfTwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJ0YXNrRGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvc3Bhbj5cbmA7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xufTtcblxuY29uc3QgY3JlYXRlVGFzayA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIik7XG4gIC8vIGNvbnN0IGRhdGVGb3JtYXR0ZWQgPSBuZXcgRGF0ZSh0YXNrRGF0ZS52YWx1ZSk7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcblxuICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgdGFza05hbWUudmFsdWUsXG4gICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgdGFza0RhdGUudmFsdWUsXG4gICAgcHJpb3JpdHkudmFsdWVcbiAgKTtcblxuICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG59O1xuXG5leHBvcnQgeyBsb2FkQWxsVGFzaywgY2xlYXJUYXNrIH07XG4iLCJjb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgbGV0IHByb2plY3QgPSB7fTtcblxuICBwcm9qZWN0Lm5hbWUgPSBuYW1lO1xuICBwcm9qZWN0LnRhc2tzID0gW107XG5cbiAgcHJvamVjdC5hZGRUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICBwcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gIH07XG5cbiAgcHJvamVjdC5yZW1vdmVUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0LnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHByb2plY3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiY29uc3QgVGFzayA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IGRhdGVVbmZvcm1hdHRlZCA9IG5ldyBEYXRlKGR1ZURhdGUpO1xuICBjb25zdCB5ZWFyID0gZGF0ZVVuZm9ybWF0dGVkLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZVVuZm9ybWF0dGVkLmdldE1vbnRoKCkgKyAxO1xuICBjb25zdCBkYXkgPSBkYXRlVW5mb3JtYXR0ZWQuZ2V0RGF0ZSgpO1xuXG4gIGxldCB0YXNrID0ge307XG5cbiAgdGFzay50aXRsZSA9IHRpdGxlO1xuICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRhc2suZHVlRGF0ZSA9IFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKFwiLVwiKTtcbiAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0YXNrLmNoZWNrZWQgPSBCb29sZWFuKGZhbHNlKTtcblxuICB0YXNrLnRvZ2dsZUNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRhc2suY2hlY2tlZCA9ICF0YXNrLmNoZWNrZWQ7XG4gIH07XG5cbiAgcmV0dXJuIHRhc2s7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vZnVuY3Rpb25zL3Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2Z1bmN0aW9ucy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBsb2FkQWxsVGFzayB9IGZyb20gXCIuL2Z1bmN0aW9ucy9kb21NYW5pcHVsYXRvclRhc2tcIjtcbmltcG9ydCB7IGxvYWRBbGxQcm9qZWN0cyB9IGZyb20gXCIuL2Z1bmN0aW9ucy9kb21NYW5pcHVsYXRvclByb2plY3RcIjtcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5jb25zb2xlLmxvZyhcbiAgW3RvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCkgKyAxLCB0b2RheS5nZXREYXRlKCldLmpvaW4oXCItXCIpXG4pO1xuXG5sZXQgdGFzazEgPSBuZXcgVGFzayhcInRlc3QxXCIsIFwidGhpcyBpcyBhIHRlc3RcIiwgXCIyMDIzLTEyLTExXCIsIFwiTG93XCIpO1xubGV0IHRhc2syID0gbmV3IFRhc2soXCJ0ZXN0MlwiLCBcInRoaXMgaXMgYSBzZWNvbmQgdGVzdFwiLCBcIjIwMjQtMDEtMjNcIiwgXCJMb3dcIik7XG5sZXQgdGFzazMgPSBuZXcgVGFzayhcInRlc3QzXCIsIFwiVGVzdFwiLCBuZXcgRGF0ZSgpLCBcIkhpZ2hcIik7XG5sZXQgdGFzazQgPSBuZXcgVGFzayhcInRhc2s0XCIsIFwiXCIsIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMyksIFwiTWVkaXVtXCIpO1xuXG5jb25zb2xlLmxvZyh0YXNrMSk7XG50YXNrMS50b2dnbGVDaGVjaygpO1xuXG5sZXQgcHJvamVjdEFyciA9IFtdO1xuXG5sZXQgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIlRlc3QgUHJvamVjdCAxXCIpO1xubGV0IHByb2plY3QyID0gbmV3IFByb2plY3QoXCJUZXN0IFByb2plY3QgMlwiKTtcblxucHJvamVjdEFyci5wdXNoKHByb2plY3QxKTtcbnByb2plY3RBcnIucHVzaChwcm9qZWN0Mik7XG5wcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcbnByb2plY3QxLmFkZFRhc2sodGFzazIpO1xuXG5wcm9qZWN0Mi5hZGRUYXNrKHRhc2szKTtcbnByb2plY3QyLmFkZFRhc2sodGFzazQpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0MSk7XG5wcm9qZWN0MS50YXNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xufSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3QxKTtcbnByb2plY3QxLnRhc2tzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgY29uc29sZS5sb2coZWxlbWVudCk7XG59KTtcblxubG9hZEFsbFByb2plY3RzKHByb2plY3RBcnIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9