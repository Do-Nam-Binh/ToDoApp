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

.header {
  display: grid;
  align-content: center;
  font-size: 60px;
  font-weight: bolder;
  padding-left: 30px;
  background-color: gainsboro;
  border-bottom: 2px solid black;
}

.footer {
  display: grid;
  align-content: center;
  justify-content: center;
  font-size: 20px;
  background-color: gainsboro;
  border-top: 2px solid black;
  padding: 20px 0px;
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
  border-right: 1px solid black;
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
  display: grid;
  grid-template-columns: 3.5fr 1fr 50px;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
}
.removeTask {
  width: 30px;
  height: 30px;
  align-self: center;
  align-items: center;
  justify-self: center;
  justify-content: center;
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  display: grid;\n  justify-content: stretch;\n  align-content: stretch;\n  grid-template-rows: 80px minmax(600px, 1fr) 30px;\n}\n\n.header {\n  display: grid;\n  align-content: center;\n  font-size: 60px;\n  font-weight: bolder;\n  padding-left: 30px;\n  background-color: gainsboro;\n  border-bottom: 2px solid black;\n}\n\n.footer {\n  display: grid;\n  align-content: center;\n  justify-content: center;\n  font-size: 20px;\n  background-color: gainsboro;\n  border-top: 2px solid black;\n  padding: 20px 0px;\n}\n.main-container {\n  /* padding: 30px 5%; */\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.tab-bar {\n  background-color: whitesmoke;\n  padding: 20px 30px;\n  justify-self: stretch;\n  border-right: 1px solid black;\n}\n\n.task-content {\n  background-color: lightgrey;\n  padding: 20px 30px;\n  justify-self: stretch;\n}\n\n.projectDisplay {\n  border: 2px solid black;\n  background-color: whitesmoke;\n  font-size: 40px;\n  font-weight: bolder;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n.task {\n  font-size: 20px;\n  text-align: center;\n  margin: 10px;\n  display: grid;\n  grid-template-columns: 3.5fr 1fr 50px;\n  align-items: center;\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 10px;\n}\n.removeTask {\n  width: 30px;\n  height: 30px;\n  align-self: center;\n  align-items: center;\n  justify-self: center;\n  justify-content: center;\n}\n\n.taskTitle {\n  justify-self: start;\n  margin-left: 20px;\n}\n\n.taskDate {\n  justify-self: end;\n}\n\n.task.lowPriority {\n  background-color: rgba(88, 194, 88, 0.6);\n}\n.task.mediumPriority {\n  background-color: rgba(67, 245, 245, 0.6);\n}\n.task.highPriority {\n  background-color: rgba(244, 64, 64, 0.6);\n}\n\n.home,\n.projects {\n  display: grid;\n  align-items: center;\n  font-size: 40px;\n  font-weight: bold;\n  justify-content: start;\n}\n\n.home div,\n.projects .project {\n  font-size: 25px;\n  justify-self: start;\n  margin-left: 20px;\n  margin-bottom: 10px;\n}\n\n.home div:hover,\n.projects .project:hover {\n  text-decoration: underline;\n}\n\n.addProjectBtn {\n  border: 2px solid black;\n  font-size: 20px;\n  text-align: center;\n  font-weight: 300;\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n.addProjectBtn:hover {\n  background-color: lightgray;\n}\n\n.projectInput {\n  display: none;\n  margin-top: 5px;\n}\n.projectInput.active {\n  display: grid;\n}\n\n#projectName {\n  height: 30px;\n  padding: 2px 10px;\n  border-radius: 5px;\n  margin-top: 10px;\n  justify-self: stretch;\n}\n\n.addProjectChoiceBtn {\n  width: 100%;\n  display: grid;\n  grid-auto-flow: column;\n  justify-items: stretch;\n  margin-top: 10px;\n  margin-left: 0px;\n}\n\n.addProjectChoiceBtn button {\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n.addProjectConfirm {\n  background-color: rgba(2, 157, 2, 0.6);\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.addProjectConfirm:hover {\n  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);\n}\n\n.addProjectCancel {\n  background-color: rgba(255, 0, 0, 0.6);\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.addProjectCancel:hover {\n  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);\n}\n\n.addTaskBtn {\n  font-size: 20px;\n  text-align: center;\n  border-radius: 10px;\n  border: 2px solid black;\n  margin: 10px;\n  padding: 5px 0px;\n}\n\n.addTaskBtn:hover {\n  background-color: whitesmoke;\n}\n\n.taskInput {\n  display: none;\n}\n\n.taskInput.active {\n  display: grid;\n  justify-content: stretch;\n  padding: 5px;\n}\n\n.taskInput label {\n  font-size: 15px;\n}\n\n.taskInput input {\n  height: 30px;\n}\n\n.addTaskChoiceBtn {\n  margin-top: 10px;\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: stretch;\n  gap: 20px;\n}\n\n.addTaskChoiceBtn button {\n  padding: 20px 0px;\n  font-size: 20px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n.addTaskCancel {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 20px;\n  background-color: rgba(255, 0, 0, 0.6);\n}\n\n.addTaskCancel:hover {\n  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);\n}\n\n.addTaskConfirm {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 20px;\n  background-color: rgba(2, 157, 2, 0.6);\n}\n\n.addTaskConfirm:hover {\n  background-image: linear-gradient(rgb(0 0 0/40%) 0 0);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   loadAllProjects: () => (/* binding */ loadAllProjects),
/* harmony export */   projectList: () => (/* binding */ projectList)
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
/* harmony import */ var _domManipulatorProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulatorProject */ "./src/functions/domManipulatorProject.js");




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
  taskDiv.classList.add(`${task.title}`);
  taskDiv.classList.add(`${task.dueDate}`);

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
  <button class="removeTask ${task.title} ${task.dueDate}"><i class="fa fa-close"></i></button>
`;

  taskContent.appendChild(taskDiv);

  const removeTaskBtn = document.getElementsByClassName(
    `removeTask ${task.title} ${task.dueDate}`
  );

  removeTaskBtn[0].addEventListener("click", () => {
    deleteTask(task);
  });
};

const deleteTask = function (task) {
  //Remove task from list

  _domManipulatorProject__WEBPACK_IMPORTED_MODULE_2__.projectList.forEach((project) => {
    for (var i = project.tasks.length - 1; i >= 0; i--) {
      if (
        project.tasks[i].title == task.title &&
        project.tasks[i].dueDate == task.dueDate
      ) {
        project.tasks.splice(i, 1);
      }
    }
  });

  //Remove dom of task
  const taskDOM = document.getElementsByClassName(
    `task ${task.title} ${task.dueDate}`
  );
  taskDOM[0].remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcs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LHVEQUFJO0FBQ3BCLGdCQUFnQix1REFBSTs7QUFFcEI7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsMERBQU87QUFDMUIsbUJBQW1CLDBEQUFPOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2Z1bmN0aW9ucy9kb21NYW5pcHVsYXRvclByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9mdW5jdGlvbnMvZG9tTWFuaXB1bGF0b3JUYXNrLmpzIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvZnVuY3Rpb25zL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9mdW5jdGlvbnMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggbWlubWF4KDYwMHB4LCAxZnIpIDMwcHg7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuLm1haW4tY29udGFpbmVyIHtcbiAgLyogcGFkZGluZzogMzBweCA1JTsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4udGFiLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnRhc2stY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5wcm9qZWN0RGlzcGxheSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFzayB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMy41ZnIgMWZyIDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnJlbW92ZVRhc2sge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhc2tUaXRsZSB7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udGFza0RhdGUge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLnRhc2subG93UHJpb3JpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxOTQsIDg4LCAwLjYpO1xufVxuLnRhc2subWVkaXVtUHJpb3JpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCAyNDUsIDI0NSwgMC42KTtcbn1cbi50YXNrLmhpZ2hQcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NCwgNjQsIDAuNik7XG59XG5cbi5ob21lLFxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLmhvbWUgZGl2LFxuLnByb2plY3RzIC5wcm9qZWN0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmhvbWUgZGl2OmhvdmVyLFxuLnByb2plY3RzIC5wcm9qZWN0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5hZGRQcm9qZWN0QnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFkZFByb2plY3RCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5wcm9qZWN0SW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJvamVjdElucHV0LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbiNwcm9qZWN0TmFtZSB7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xufVxuXG4uYWRkUHJvamVjdENob2ljZUJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uYWRkUHJvamVjdENob2ljZUJ0biBidXR0b24ge1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hZGRQcm9qZWN0Q29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTU3LCAyLCAwLjYpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYWRkUHJvamVjdENvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcbn1cblxuLmFkZFByb2plY3RDYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmFkZFByb2plY3RDYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcbn1cblxuLmFkZFRhc2tCdG4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuLmFkZFRhc2tCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGFza0lucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhc2tJbnB1dC5hY3RpdmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnRhc2tJbnB1dCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRhc2tJbnB1dCBpbnB1dCB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmFkZFRhc2tDaG9pY2VCdG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGdhcDogMjBweDtcbn1cblxuLmFkZFRhc2tDaG9pY2VCdG4gYnV0dG9uIHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFkZFRhc2tDYW5jZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcbn1cblxuLmFkZFRhc2tDYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcbn1cblxuLmFkZFRhc2tDb25maXJtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxNTcsIDIsIDAuNik7XG59XG5cbi5hZGRUYXNrQ29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAvNDAlKSAwIDApO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBtaW5tYXgoNjAwcHgsIDFmcikgMzBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXG59XFxuLm1haW4tY29udGFpbmVyIHtcXG4gIC8qIHBhZGRpbmc6IDMwcHggNSU7ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRhYi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLnByb2plY3REaXNwbGF5IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzLjVmciAxZnIgNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ucmVtb3ZlVGFzayB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFza1RpdGxlIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnRhc2tEYXRlIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udGFzay5sb3dQcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg4LCAxOTQsIDg4LCAwLjYpO1xcbn1cXG4udGFzay5tZWRpdW1Qcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCAyNDUsIDI0NSwgMC42KTtcXG59XFxuLnRhc2suaGlnaFByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NCwgNjQsIDAuNik7XFxufVxcblxcbi5ob21lLFxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmhvbWUgZGl2LFxcbi5wcm9qZWN0cyAucHJvamVjdCB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaG9tZSBkaXY6aG92ZXIsXFxuLnByb2plY3RzIC5wcm9qZWN0OmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uYWRkUHJvamVjdEJ0biB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hZGRQcm9qZWN0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLnByb2plY3RJbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4ucHJvamVjdElucHV0LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jcHJvamVjdE5hbWUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG4uYWRkUHJvamVjdENob2ljZUJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMHB4O1xcbn1cXG5cXG4uYWRkUHJvamVjdENob2ljZUJ0biBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5hZGRQcm9qZWN0Q29uZmlybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDE1NywgMiwgMC42KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkUHJvamVjdENvbmZpcm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigwIDAgMC80MCUpIDAgMCk7XFxufVxcblxcbi5hZGRQcm9qZWN0Q2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5hZGRQcm9qZWN0Q2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAvNDAlKSAwIDApO1xcbn1cXG5cXG4uYWRkVGFza0J0biB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG4uYWRkVGFza0J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4udGFza0lucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrSW5wdXQuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50YXNrSW5wdXQgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4udGFza0lucHV0IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmFkZFRhc2tDaG9pY2VCdG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWRkVGFza0Nob2ljZUJ0biBidXR0b24ge1xcbiAgcGFkZGluZzogMjBweCAwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZFRhc2tDYW5jZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNik7XFxufVxcblxcbi5hZGRUYXNrQ2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAvNDAlKSAwIDApO1xcbn1cXG5cXG4uYWRkVGFza0NvbmZpcm0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxNTcsIDIsIDAuNik7XFxufVxcblxcbi5hZGRUYXNrQ29uZmlybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwLzQwJSkgMCAwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGxvYWRBbGxUYXNrLCBjbGVhclRhc2sgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRvclRhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5jb25zdCBjbGVhclByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gIHByb2plY3RzLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5cbiAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgXCJiZWZvcmVlbmRcIixcbiAgICBgPGRpdiBjbGFzcz1cImFkZFByb2plY3RCdG5cIj5BZGQgUHJvamVjdDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0SW5wdXRcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3ROYW1lXCIgbmFtZT1cInByb2plY3ROYW1lXCIgLz5cbiAgICA8ZGl2IGNsYXNzPSBcImFkZFByb2plY3RDaG9pY2VCdG5cIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGRQcm9qZWN0Q29uZmlybVwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGRQcm9qZWN0Q2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmBcbiAgKTtcblxuICBhZGRQcm9qZWN0QnRuSW5pdCgpO1xuICBhZGRQcm9qZWN0Q29uZmlybUluaXQoKTtcbiAgYWRkUHJvamVjdENhbmNlbEluaXQoKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RCdG5Jbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnRuXCIpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RJbnB1dFwiKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RDb25maXJtSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdENvbmZpcm1cIik7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdElucHV0XCIpO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy9BZGQgY29kZSB0byBjcmVhdGUgcHJvamVjdCBoZXJlXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TGlzdCk7XG4gICAgbG9hZEFsbFByb2plY3RzKHByb2plY3RMaXN0KTtcbiAgICBjbGVhckFkZFByb2plY3RWYWx1ZSgpO1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RDYW5jZWxJbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RDYW5jZWxcIik7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdElucHV0XCIpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckFkZFByb2plY3RWYWx1ZSgpO1xuICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsZWFyQWRkUHJvamVjdFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XG5cbiAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xufTtcblxuY29uc3QgbG9hZEFsbFByb2plY3RzID0gZnVuY3Rpb24gKHByb2plY3RBcnIpIHtcbiAgY2xlYXJQcm9qZWN0cygpO1xuICBwcm9qZWN0TGlzdCA9IHByb2plY3RBcnI7XG4gIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGxvYWRQcm9qZWN0cyhwcm9qZWN0KTtcbiAgfSk7XG4gIGFkZEV2ZW50QWxsUHJvamVjdHMoKTtcbiAgYWRkRXZlbnRUb2RheSgpO1xuICBhZGRFdmVudE5leHRXZWVrKCk7XG4gIGFkZFByb2plY3RJbnB1dCgpO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgdXNlclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RET00uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIHByb2plY3RET00udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Lm5hbWV9YDtcblxuICBwcm9qZWN0RE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUYXNrKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgbG9hZEFsbFRhc2socHJvamVjdCk7XG4gIH0pO1xuICB1c2VyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdERPTSk7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RBcnIpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3ROYW1lXCIpO1xuXG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG5cbiAgcHJvamVjdEFyci5wdXNoKHByb2plY3QpO1xufTtcblxuLy9GdW5jdGlvbnMgdG8gaGFuZGxlIFwiQWxsIFRhc2tzXCIgdGFiXG5jb25zdCBhZGRFdmVudEFsbFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhbGxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxQcm9qZWN0VGFza3NcIik7XG4gIGFsbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRBbGxQcm9qZWN0VGFzayk7XG59O1xuXG5jb25zdCBsb2FkQWxsUHJvamVjdFRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGNsZWFyVGFzaygpO1xuICBjb25zdCB0YXNrQ29udGVudDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpc3BsYXlcIik7XG4gIHByb2plY3REaXNwbGF5LnRleHRDb250ZW50ID0gXCJBbGxcIjtcbiAgdGFza0NvbnRlbnQxLmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcblxuICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJMb3dcIikge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJsb3dQcmlvcml0eVwiKTtcbiAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVByaW9yaXR5XCIpO1xuICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwiSGlnaFwiKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImhpZ2hQcmlvcml0eVwiKTtcbiAgICAgIH1cbiAgICAgIHRhc2tEaXYuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tEYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy9GdW5jdGlvbnMgdG8gaGFuZGxlIFwiVG9kYXlcIiB0YWJcbmNvbnN0IGFkZEV2ZW50VG9kYXkgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRvZGF5RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVRhc2tcIik7XG4gIHRvZGF5RE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkVG9kYXlUYXNrKTtcbn07XG5cbmNvbnN0IGxvYWRUb2RheVRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGNsZWFyVGFzaygpO1xuICBjb25zdCB0YXNrQ29udGVudDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpc3BsYXlcIik7XG4gIHByb2plY3REaXNwbGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICB0YXNrQ29udGVudDEuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuXG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIik7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICBpZiAodGFzay5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImxvd1ByaW9yaXR5XCIpO1xuICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVkaXVtUHJpb3JpdHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJIaWdoXCIpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlnaFByaW9yaXR5XCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXlGb21hdHRlZCA9IFtcbiAgICAgICAgdG9kYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgdG9kYXkuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgIHRvZGF5LmdldERhdGUoKSxcbiAgICAgIF0uam9pbihcIi1cIik7XG4gICAgICBpZiAodG9kYXlGb21hdHRlZCA9PSB0YXNrLmR1ZURhdGUpIHtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrVGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrRGF0ZVwiPiR7dGFzay5kdWVEYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gaGFuZGxlIFwiTmV4dCA3IGRheXNcIiB0YWJcbmNvbnN0IGFkZEV2ZW50TmV4dFdlZWsgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRvZGF5RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXh0V2Vla1Rhc2tzXCIpO1xuICB0b2RheURPTS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZE5leHRXZWVrVGFzayk7XG59O1xuY29uc3QgbG9hZE5leHRXZWVrVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJUYXNrKCk7XG4gIGNvbnN0IHRhc2tDb250ZW50MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGlzcGxheVwiKTtcbiAgcHJvamVjdERpc3BsYXkudGV4dENvbnRlbnQgPSBcIk5leHQgNyBEYXlzXCI7XG4gIHRhc2tDb250ZW50MS5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG5cbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwibG93UHJpb3JpdHlcIik7XG4gICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1Qcmlvcml0eVwiKTtcbiAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSBcIkhpZ2hcIikge1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XG4gICAgICB9XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIGNvbnN0IG5leHRTZXZlbkRheSA9IG5ldyBEYXRlKCk7XG4gICAgICBuZXh0U2V2ZW5EYXkuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgIGNvbnN0IG5leHRTZXZlbkRheUZvcm1hdHRlZCA9IG5ldyBEYXRlKFxuICAgICAgICBuZXh0U2V2ZW5EYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyA3KVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcbiAgICAgIGNvbnN0IHRhc2tEdWVEYXRlRm9ybWF0dGVkID0gbmV3IERhdGUoXG4gICAgICAgIHRhc2tEdWVEYXRlLnNldE1vbnRoKHRhc2tEdWVEYXRlLmdldE1vbnRoKCkpXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJ0YXNrIGR1ZTogXCIsIHRhc2tEdWVEYXRlRm9ybWF0dGVkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidG9kYXk6IFwiLCB0b2RheSk7XG4gICAgICBjb25zb2xlLmxvZyhcIm5leHQgNyBkYXlzOiBcIiwgbmV4dFNldmVuRGF5KTtcbiAgICAgIGlmIChcbiAgICAgICAgdG9kYXkgPD0gdGFza0R1ZURhdGVGb3JtYXR0ZWQgJiZcbiAgICAgICAgdGFza0R1ZURhdGVGb3JtYXR0ZWQgPD0gbmV4dFNldmVuRGF5Rm9ybWF0dGVkXG4gICAgICApIHtcbiAgICAgICAgdGFza0Rpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2tUaXRsZVwiPiR7dGFzay50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFza0RhdGVcIj4ke3Rhc2suZHVlRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRBbGxQcm9qZWN0cyB9O1xuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRvclByb2plY3RcIjtcblxubGV0IGN1cnJlbnRQcm9qZWN0O1xuXG5jb25zdCBjbGVhclRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpLmlubmVySFRNTCA9IGBgO1xufTtcblxuY29uc3QgYWRkVGFza0lucHV0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRlbnRcIik7XG4gIGlucHV0VGFzay5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFkZFRhc2tCdG5cIj5BZGQgVGFzazwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGFza0lucHV0XCI+XG4gIDxsYWJlbCBmb3I9XCJ0YXNrTmFtZVwiPlRpdGxlPC9sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIG5hbWU9XCJ0YXNrTmFtZVwiIC8+XG4gIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgPHRleHRhcmVhXG4gICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICBjb2xzPVwiMjBcIlxuICAgIHJvd3M9XCI1XCJcbiAgICBwbGFjZWhvbGRlcj1cImVnOiBnbyBvdXRzaWRlIHRvIHNtZWxsIHRoZSBmbG93ZXJzXCJcbiAgPjwvdGV4dGFyZWE+XG4gIDxsYWJlbCBmb3I9XCJ0YXNrRGF0ZVwiPkRhdGU8L2xhYmVsPlxuICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cInRhc2tEYXRlXCIgbmFtZT1cInRhc2tEYXRlXCIgLz5cbiAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+U2VsZWN0IGEgcHJpb3Rpcnk6PC9sYWJlbD5cbiAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tUGxlYXNlIGNob29zZSBhbiBwcmlvcml0eS0tPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG4gIDxkaXYgY2xhc3M9IFwiYWRkVGFza0Nob2ljZUJ0blwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJhZGRUYXNrQ29uZmlybVwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYWRkVGFza0NhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PmA7XG5cbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRhc2spO1xuICBhZGRUYXNrQnRuSW5pdCgpO1xuICBhZGRUYXNrQ29uZmlybUluaXQoKTtcbiAgYWRkVGFza0NhbmNlbEluaXQoKTtcbn07XG5cbmNvbnN0IGFkZFRhc2tCdG5Jbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQnRuXCIpO1xuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tJbnB1dFwiKTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFRhc2tDb25maXJtSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0NvbmZpcm1cIik7XG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0lucHV0XCIpO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy9BZGQgY29kZSB0byBjcmVhdGUgdGFzayBoZXJlXG4gICAgY3JlYXRlVGFzayhjdXJyZW50UHJvamVjdCk7XG4gICAgY2xlYXJBZGRUYXNrVmFsdWUoKTtcbiAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBsb2FkQWxsVGFzayhjdXJyZW50UHJvamVjdCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkVGFza0NhbmNlbEluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza0NhbmNlbFwiKTtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrSW5wdXRcIik7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQWRkVGFza1ZhbHVlKCk7XG4gICAgdGFza0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pO1xufTtcblxuY29uc3QgY2xlYXJBZGRUYXNrVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuXG4gIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICBkYXRlLnZhbHVlID0gXCJcIjtcbiAgcHJpb3JpdHkudmFsdWUgPSBcIlwiO1xufTtcblxuY29uc3QgbG9hZEFsbFRhc2sgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjbGVhclRhc2soKTtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGVudFwiKTtcbiAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpc3BsYXlcIik7XG4gIHByb2plY3REaXNwbGF5LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG4gIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGxvYWRUYXNrKHRhc2spO1xuICB9KTtcbiAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gIGFkZFRhc2tJbnB1dCgpO1xufTtcblxuY29uc3QgbG9hZFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250ZW50XCIpO1xuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKGAke3Rhc2sudGl0bGV9YCk7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChgJHt0YXNrLmR1ZURhdGV9YCk7XG5cbiAgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJMb3dcIikge1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImxvd1ByaW9yaXR5XCIpO1xuICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikge1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVByaW9yaXR5XCIpO1xuICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gXCJIaWdoXCIpIHtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XG4gIH1cbiAgdGFza0Rpdi5pbm5lckhUTUwgKz0gYFxuICA8c3BhbiBjbGFzcz1cInRhc2tUaXRsZVwiPiR7dGFzay50aXRsZX08L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwidGFza0RhdGVcIj4ke3Rhc2suZHVlRGF0ZX08L3NwYW4+XG4gIDxidXR0b24gY2xhc3M9XCJyZW1vdmVUYXNrICR7dGFzay50aXRsZX0gJHt0YXNrLmR1ZURhdGV9XCI+PGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT48L2J1dHRvbj5cbmA7XG5cbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgY29uc3QgcmVtb3ZlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgYHJlbW92ZVRhc2sgJHt0YXNrLnRpdGxlfSAke3Rhc2suZHVlRGF0ZX1gXG4gICk7XG5cbiAgcmVtb3ZlVGFza0J0blswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZVRhc2sodGFzayk7XG4gIH0pO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gIC8vUmVtb3ZlIHRhc2sgZnJvbSBsaXN0XG5cbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGZvciAodmFyIGkgPSBwcm9qZWN0LnRhc2tzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb2plY3QudGFza3NbaV0udGl0bGUgPT0gdGFzay50aXRsZSAmJlxuICAgICAgICBwcm9qZWN0LnRhc2tzW2ldLmR1ZURhdGUgPT0gdGFzay5kdWVEYXRlXG4gICAgICApIHtcbiAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvL1JlbW92ZSBkb20gb2YgdGFza1xuICBjb25zdCB0YXNrRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBgdGFzayAke3Rhc2sudGl0bGV9ICR7dGFzay5kdWVEYXRlfWBcbiAgKTtcbiAgdGFza0RPTVswXS5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza05hbWVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEYXRlXCIpO1xuICAvLyBjb25zdCBkYXRlRm9ybWF0dGVkID0gbmV3IERhdGUodGFza0RhdGUudmFsdWUpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG5cbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgIHRhc2tOYW1lLnZhbHVlLFxuICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgIHRhc2tEYXRlLnZhbHVlLFxuICAgIHByaW9yaXR5LnZhbHVlXG4gICk7XG5cbiAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xufTtcblxuZXhwb3J0IHsgbG9hZEFsbFRhc2ssIGNsZWFyVGFzayB9O1xuIiwiY29uc3QgUHJvamVjdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGxldCBwcm9qZWN0ID0ge307XG5cbiAgcHJvamVjdC5uYW1lID0gbmFtZTtcbiAgcHJvamVjdC50YXNrcyA9IFtdO1xuXG4gIHByb2plY3QuYWRkVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIHByb2plY3QucmVtb3ZlVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBwcm9qZWN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNvbnN0IFRhc2sgPSBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICBjb25zdCBkYXRlVW5mb3JtYXR0ZWQgPSBuZXcgRGF0ZShkdWVEYXRlKTtcbiAgY29uc3QgeWVhciA9IGRhdGVVbmZvcm1hdHRlZC5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IGRhdGVVbmZvcm1hdHRlZC5nZXRNb250aCgpICsgMTtcbiAgY29uc3QgZGF5ID0gZGF0ZVVuZm9ybWF0dGVkLmdldERhdGUoKTtcblxuICBsZXQgdGFzayA9IHt9O1xuXG4gIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0YXNrLmR1ZURhdGUgPSBbeWVhciwgbW9udGgsIGRheV0uam9pbihcIi1cIik7XG4gIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGFzay5jaGVja2VkID0gQm9vbGVhbihmYWxzZSk7XG5cbiAgdGFzay50b2dnbGVDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrLmNoZWNrZWQgPSAhdGFzay5jaGVja2VkO1xuICB9O1xuXG4gIHJldHVybiB0YXNrO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL2Z1bmN0aW9ucy90YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9mdW5jdGlvbnMvcHJvamVjdFwiO1xuaW1wb3J0IHsgbG9hZEFsbFRhc2sgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZG9tTWFuaXB1bGF0b3JUYXNrXCI7XG5pbXBvcnQgeyBsb2FkQWxsUHJvamVjdHMgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZG9tTWFuaXB1bGF0b3JQcm9qZWN0XCI7XG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuY29uc29sZS5sb2coXG4gIFt0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpICsgMSwgdG9kYXkuZ2V0RGF0ZSgpXS5qb2luKFwiLVwiKVxuKTtcblxubGV0IHRhc2sxID0gbmV3IFRhc2soXCJ0ZXN0MVwiLCBcInRoaXMgaXMgYSB0ZXN0XCIsIFwiMjAyMy0xMi0xMVwiLCBcIkxvd1wiKTtcbmxldCB0YXNrMiA9IG5ldyBUYXNrKFwidGVzdDJcIiwgXCJ0aGlzIGlzIGEgc2Vjb25kIHRlc3RcIiwgXCIyMDI0LTAxLTIzXCIsIFwiTG93XCIpO1xubGV0IHRhc2szID0gbmV3IFRhc2soXCJ0ZXN0M1wiLCBcIlRlc3RcIiwgbmV3IERhdGUoKSwgXCJIaWdoXCIpO1xubGV0IHRhc2s0ID0gbmV3IFRhc2soXCJ0YXNrNFwiLCBcIlwiLCB0b2RheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDMpLCBcIk1lZGl1bVwiKTtcblxuY29uc29sZS5sb2codGFzazEpO1xudGFzazEudG9nZ2xlQ2hlY2soKTtcblxubGV0IHByb2plY3RBcnIgPSBbXTtcblxubGV0IHByb2plY3QxID0gbmV3IFByb2plY3QoXCJUZXN0IFByb2plY3QgMVwiKTtcbmxldCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiVGVzdCBQcm9qZWN0IDJcIik7XG5cbnByb2plY3RBcnIucHVzaChwcm9qZWN0MSk7XG5wcm9qZWN0QXJyLnB1c2gocHJvamVjdDIpO1xucHJvamVjdDEuYWRkVGFzayh0YXNrMSk7XG5wcm9qZWN0MS5hZGRUYXNrKHRhc2syKTtcblxucHJvamVjdDIuYWRkVGFzayh0YXNrMyk7XG5wcm9qZWN0Mi5hZGRUYXNrKHRhc2s0KTtcblxuY29uc29sZS5sb2cocHJvamVjdDEpO1xucHJvamVjdDEudGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbn0pO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0MSk7XG5wcm9qZWN0MS50YXNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xufSk7XG5cbmxvYWRBbGxQcm9qZWN0cyhwcm9qZWN0QXJyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==