/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* stylelint-disable no-descending-specificity */\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  height: 100%;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.to-do-list {\\r\\n  list-style-type: none;\\r\\n  width: 400px;\\r\\n}\\r\\n\\r\\n#top-list {\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n#to-do-list {\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n#to-do-list li {\\r\\n  padding: 0 0 0 10px;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  border: 2px solid gray;\\r\\n  border-radius: 2px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.checkmark {\\r\\n  width: 14px;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.remove {\\r\\n  width: 14px;\\r\\n  display: none;\\r\\n  margin-right: 5px;\\r\\n}\\r\\n\\r\\n.checkbox,\\r\\n.checkmark,\\r\\n#enter,\\r\\n#refresh,\\r\\n.remove {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.task-description {\\r\\n  margin: 0 12px;\\r\\n  font-weight: 100;\\r\\n  word-break: break-all;\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  display: flex;\\r\\n  padding: 10px 0 10px 10px;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.todo-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  justify-items: center;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.todo-div {\\r\\n  max-height: 600px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  box-shadow: 0 3px 10px 0 #8f8d8c73;\\r\\n}\\r\\n\\r\\nh2,\\r\\nh3 {\\r\\n  font-size: 1rem;\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  color: #545862;\\r\\n}\\r\\n\\r\\n#enter,\\r\\n#refresh {\\r\\n  margin-right: 10px;\\r\\n  width: 12px;\\r\\n}\\r\\n\\r\\n#refresh {\\r\\n  overflow: hidden;\\r\\n  transition-duration: 0.2s;\\r\\n  transition-property: transform;\\r\\n  transform: rotate(0deg);\\r\\n  -webkit-transform: rotate(0deg);\\r\\n}\\r\\n\\r\\n.dots {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  flex-grow: 1;\\r\\n  border: 0;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  border: 0;\\r\\n  border-top: 1px solid #c7c7c7;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#add-task input[type=\\\"text\\\"] {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\nhr:last-of-type {\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #bdbdbd;\\r\\n  text-align: center;\\r\\n  font-weight: 100;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.last-item {\\r\\n  background-color: #f6f6f6;\\r\\n  width: 400px;\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\n.input-div {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\nli {\\r\\n  border: 0;\\r\\n  border-bottom: 1px solid #c7c7c7;\\r\\n}\\r\\n\\r\\n.draggable.dragging {\\r\\n  border: 1px solid blue;\\r\\n}\\r\\n\\r\\n.draggable.invisible {\\r\\n  display: none;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-best-practices/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-best-practices/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/asset/checkmark.svg":
/*!*********************************!*\
  !*** ./src/asset/checkmark.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"asset/checkmark.svg\");\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/asset/checkmark.svg?");

/***/ }),

/***/ "./src/asset/enter.svg":
/*!*****************************!*\
  !*** ./src/asset/enter.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"asset/enter.svg\");\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/asset/enter.svg?");

/***/ }),

/***/ "./src/asset/garbage.svg":
/*!*******************************!*\
  !*** ./src/asset/garbage.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"asset/garbage.svg\");\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/asset/garbage.svg?");

/***/ }),

/***/ "./src/asset/refresh.svg":
/*!*******************************!*\
  !*** ./src/asset/refresh.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"asset/refresh.svg\");\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/asset/refresh.svg?");

/***/ }),

/***/ "./src/asset/vertical-dots.svg":
/*!*************************************!*\
  !*** ./src/asset/vertical-dots.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"asset/vertical-dots.svg\");\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/asset/vertical-dots.svg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-best-practices/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-best-practices/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-best-practices/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-best-practices/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-best-practices/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-best-practices/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_taskHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskHandler.js */ \"./src/modules/taskHandler.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _asset_checkmark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/checkmark.svg */ \"./src/asset/checkmark.svg\");\n/* harmony import */ var _asset_vertical_dots_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/vertical-dots.svg */ \"./src/asset/vertical-dots.svg\");\n/* harmony import */ var _asset_refresh_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/refresh.svg */ \"./src/asset/refresh.svg\");\n/* harmony import */ var _asset_enter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/enter.svg */ \"./src/asset/enter.svg\");\n/* harmony import */ var _asset_garbage_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/garbage.svg */ \"./src/asset/garbage.svg\");\n/* harmony import */ var _modules_tasksCreator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/tasksCreator.js */ \"./src/modules/tasksCreator.js\");\n/* harmony import */ var _modules_taskDrag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/taskDrag.js */ \"./src/modules/taskDrag.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tasks = new _modules_tasksCreator_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\r\n(0,_modules_taskHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks.getTasks());\r\nconst refresh = document.getElementById('refresh');\r\nlet rotate = -360;\r\nrefresh.addEventListener('click', () => {\r\n  refresh.style.transform = `rotate(${rotate}deg)`;\r\n  rotate -= 360;\r\n});\r\n\r\nconst enter = document.getElementById('enter');\r\nconst input = document.getElementById('add-task');\r\nenter.addEventListener('click', () => {\r\n  tasks.add(input.value);\r\n  input.value = '';\r\n  (0,_modules_taskHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks.getTasks());\r\n});\r\n\r\ninput.addEventListener('keydown', (e) => {\r\n  if (e.code === 'Enter') {\r\n    tasks.add(input.value);\r\n    input.value = '';\r\n    (0,_modules_taskHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks.getTasks());\r\n  }\r\n});\r\n\r\nconst clear = document.getElementById('clear');\r\nclear.addEventListener('click', () => {\r\n  tasks.clear();\r\n  (0,_modules_taskHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks.getTasks());\r\n});\r\n\r\n(0,_modules_taskDrag_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/index.js?");

/***/ }),

/***/ "./src/modules/taskDrag.js":
/*!*********************************!*\
  !*** ./src/modules/taskDrag.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasksCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksCreator.js */ \"./src/modules/tasksCreator.js\");\n\r\n\r\nconst tasks = new _tasksCreator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst getDragAfterElement = (container, y) => {\r\n  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];\r\n\r\n  return draggableElements.reduce((closest, child) => {\r\n    const box = child.getBoundingClientRect();\r\n    const offset = y - box.top - box.height / 2;\r\n    if (offset < 0 && offset > closest.offset) {\r\n      return { offset, element: child };\r\n    }\r\n    return closest;\r\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\r\n};\r\n\r\nconst dragAndDrop = () => {\r\n  const dots = [];\r\n  const draggables = document.querySelectorAll('.draggable');\r\n  const container = document.getElementById('to-do-list');\r\n\r\n  for (let i = 0; i < tasks.getTasks().length; i += 1) {\r\n    dots.push(document.getElementById(`dots${i}`));\r\n  }\r\n  draggables.forEach((draggable) => {\r\n    draggable.addEventListener('dragstart', () => {\r\n      draggable.classList.add('dragging');\r\n    });\r\n\r\n    draggable.addEventListener('dragend', () => {\r\n      draggable.classList.remove('dragging');\r\n    });\r\n  });\r\n  draggables.forEach((draggable) => {\r\n    draggable.removeEventListener('dragstart', () => {\r\n      draggable.classList.add('dragging');\r\n    });\r\n\r\n    draggable.removeEventListener('dragend', () => {\r\n      draggable.classList.remove('dragging');\r\n    });\r\n  });\r\n  container.addEventListener('dragover', (e) => {\r\n    e.preventDefault();\r\n    const afterElement = getDragAfterElement(container, e.clientY);\r\n    const draggable = document.querySelector('.dragging');\r\n    if (afterElement == null) {\r\n      container.appendChild(draggable);\r\n    } else {\r\n      container.insertBefore(draggable, afterElement);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragAndDrop);\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/modules/taskDrag.js?");

/***/ }),

/***/ "./src/modules/taskHandler.js":
/*!************************************!*\
  !*** ./src/modules/taskHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasksCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksCreator.js */ \"./src/modules/tasksCreator.js\");\n/* harmony import */ var _taskUpdater_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskUpdater.js */ \"./src/modules/taskUpdater.js\");\n/* harmony import */ var _taskDrag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDrag.js */ \"./src/modules/taskDrag.js\");\n\r\n\r\n\r\n\r\nconst listContainer = document.getElementById('to-do-list');\r\n\r\nconst tasksObject = new _tasksCreator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst display = (tasks) => {\r\n  (0,_taskDrag_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  listContainer.innerHTML = '';\r\n  for (let i = 0; i < tasks.length; i += 1) {\r\n    const listItem = document.createElement('li');\r\n    listItem.classList.add('list-item');\r\n    listItem.classList.add('draggable');\r\n    listItem.setAttribute('draggable', 'true');\r\n    listItem.innerHTML = `<div class=\"checkbox\" id=\"checkbox${i}\"></div>\r\n                          <img class=\"checkmark\" id=\"checkmark${i}\" src=\"./asset/checkmark.svg\" alt=\"Checkmark\">\r\n                          <div class=\"input-div\" id=\"input-div${i}\">\r\n                            <input type=\"text\" class=\"task-description\" id=\"description${i}\">\r\n                            <img class=\"remove\" id=\"remove${i}\" src=\"./asset/garbage.svg\" alt=\"Garbage bin icon\">\r\n                            <img class=\"dots\" draggable=\"false\" id=\"dots${i}\" src=\"./asset/vertical-dots.svg\" alt=\"Vertical dots\">\r\n                          </div>\r\n                          `;\r\n    listContainer.appendChild(listItem);\r\n    const checkbox = document.getElementById(`checkbox${i}`);\r\n    const checkmark = document.getElementById(`checkmark${i}`);\r\n    const text = document.getElementById(`description${i}`);\r\n    const elementArray = [checkmark, checkbox, text];\r\n    (0,_taskUpdater_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elementArray, tasks[i], i);\r\n    const remove = document.getElementById(`remove${i}`);\r\n    const dots = document.getElementById(`dots${i}`);\r\n    const input = document.getElementById(`description${i}`);\r\n    const inputDiv = document.getElementById(`input-div${i}`);\r\n    input.value = tasks[i].description;\r\n\r\n    document.addEventListener('click', (event) => {\r\n      const isClickInside = inputDiv.contains(event.target);\r\n      if (!isClickInside) {\r\n        // the click was outside the specifiedElement, do something\r\n        listItem.style.backgroundColor = '#fff';\r\n        input.style.backgroundColor = '#fff';\r\n        remove.style.display = 'none';\r\n        dots.style.display = 'block';\r\n        if (checkmark.style.display === 'block') text.style.textDecoration = 'line-through';\r\n      } else {\r\n        listItem.style.backgroundColor = '#fffeca';\r\n        input.style.backgroundColor = '#fffeca';\r\n        remove.style.display = 'block';\r\n        dots.style.display = 'none';\r\n        if (checkmark.style.display === 'block') text.style.textDecoration = 'none';\r\n      }\r\n    });\r\n    remove.addEventListener('click', () => {\r\n      tasksObject.remove(i);\r\n      display(tasksObject.getTasks());\r\n    });\r\n    input.addEventListener('change', () => {\r\n      const task = {\r\n        description: input.value,\r\n        completed: tasks[i].completed,\r\n        index: tasks[i].index,\r\n      };\r\n      tasksObject.edit(i, task);\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/modules/taskHandler.js?");

/***/ }),

/***/ "./src/modules/taskUpdater.js":
/*!************************************!*\
  !*** ./src/modules/taskUpdater.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasksCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksCreator.js */ \"./src/modules/tasksCreator.js\");\n\n\nconst tasks = new _tasksCreator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst updateStatus = (elements, task, index) => {\n  const checkbox = elements[1];\n  const checkmark = elements[0];\n  const text = elements[2];\n  checkbox.addEventListener('click', () => {\n    checkbox.style.display = 'none';\n    checkmark.style.display = 'block';\n    text.style.textDecoration = 'line-through';\n    text.style.color = 'gray';\n    task.completed = true;\n    tasks.edit(index, task);\n  });\n  checkmark.addEventListener('click', () => {\n    checkbox.style.display = 'block';\n    checkmark.style.display = 'none';\n    text.style.textDecoration = 'none';\n    text.style.color = 'black';\n    task.completed = false;\n    tasks.edit(index, task);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStatus);\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/modules/taskUpdater.js?");

/***/ }),

/***/ "./src/modules/tasksCreator.js":
/*!*************************************!*\
  !*** ./src/modules/tasksCreator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\nconst dynamicSort = (property) => {\r\n  const sortOrder = 1;\r\n  return (a, b) => {\r\n    let result = 0;\r\n    if (a[property] < b[property]) result = -1;\r\n    else if (a[property] > b[property]) result = 1;\r\n    return result * sortOrder;\r\n  };\r\n};\r\n\r\nclass Tasks {\r\n  constructor() {\r\n    if (localStorage.getItem('tasks')) { this.list = JSON.parse(localStorage.getItem('tasks')); } else this.list = [];\r\n  }\r\n\r\n  populateStorage() {\r\n    localStorage.setItem('tasks', JSON.stringify(this.list));\r\n    this.setTasks();\r\n  }\r\n\r\n  add(description) {\r\n    const task = {\r\n      description,\r\n      completed: false,\r\n      index: this.list.length + 1,\r\n    };\r\n    this.list.push(task);\r\n    this.list.sort(dynamicSort('index'));\r\n    this.populateStorage();\r\n  }\r\n\r\n  remove(index) {\r\n    this.list[index].index = this.list.length + 1;\r\n    this.list.sort(dynamicSort('index'));\r\n    this.list.pop();\r\n    for (let i = 0; i < this.list.length; i += 1) {\r\n      this.list[i].index = i + 1;\r\n    }\r\n    this.populateStorage();\r\n  }\r\n\r\n  edit(index, task) {\r\n    this.list[index].description = task.description;\r\n    this.list[index].completed = task.completed;\r\n    this.list[index].index = task.index;\r\n    this.list.sort(dynamicSort('index'));\r\n    this.populateStorage();\r\n  }\r\n\r\n  clear() {\r\n    this.list = this.list.filter((task) => task.completed === false);\r\n    for (let i = 0; i < this.list.length; i += 1) {\r\n      this.list[i].index = i + 1;\r\n    }\r\n    this.populateStorage();\r\n  }\r\n\r\n  getTasks() {\r\n    return this.list;\r\n  }\r\n\r\n  setTasks() {\r\n    if (localStorage.getItem('tasks')) { this.list = JSON.parse(localStorage.getItem('tasks')); }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list-best-practices/./src/modules/tasksCreator.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;