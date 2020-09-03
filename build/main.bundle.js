/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/_prefix.module.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/_prefix.module.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".S0yd-0z1V1P9IQmir-GPV {\\r\\n    font-weight: bolder;\\r\\n    font-size: 3rem;\\r\\n    color: #008167;\\r\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"section-title\": \"S0yd-0z1V1P9IQmir-GPV\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/_prefix.module.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_prefix_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./_prefix.module.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/_prefix.module.css\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_prefix_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#nav {\\r\\n    width: 50%;\\r\\n    position: fixed;\\r\\n    height: 100vh;\\r\\n    z-index: 3;\\r\\n    transform: translateX(-150%);\\r\\n}\\r\\n\\r\\n#nav ul {\\r\\n    background-color: #eee;\\r\\n}\\r\\n\\r\\n#nav li a {\\r\\n    font-size: 3rem;\\r\\n}\\r\\n\\r\\n#nav-indicator {\\r\\n    height: 5px;\\r\\n    width: 40px;\\r\\n    background-color: #FC427B;\\r\\n\\r\\n    margin-top: 35px;\\r\\n    margin-left: 35px; \\r\\n\\r\\n    cursor: pointer;\\r\\n    z-index: 4;\\r\\n    position: fixed;\\r\\n\\r\\n    transition: 300ms all ease;\\r\\n}\\r\\n\\r\\n#nav-indicator::before, #nav-indicator::after {\\r\\n    content: '';\\r\\n    position: fixed;\\r\\n    height: 3px;\\r\\n    width: 30px;\\r\\n    background-color: #FC427B;\\r\\n    cursor: pointer;\\r\\n    transition: 200ms all ease;\\r\\n}\\r\\n\\r\\n#nav-indicator::before {\\r\\n    margin-top: -8px;\\r\\n}\\r\\n\\r\\n#nav-indicator::after {\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n#nav-indicator:hover::before {\\r\\n    transform: translateY(5px);\\r\\n}\\r\\n\\r\\n#nav-indicator:hover::after {\\r\\n    transform: translateY(-5px);\\r\\n}\\r\\n\\r\\nheader {\\r\\n    height: 100vh !important;\\r\\n    background-color: #000;\\r\\n}\\r\\n\\r\\nheader h2 {\\r\\n    z-index: 1;\\r\\n    font-size: 5rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n    max-width: 100vw !important;\\r\\n    overflow-x: hidden;\\r\\n    padding: 0 !important;\\r\\n}\\r\\n\\r\\n.heading{\\r\\n    height: 80vh;\\r\\n    background-color: #55E6C1;\\r\\n    width: 100vw;\\r\\n    padding-left: 15%;\\r\\n    padding-top: 15%;\\r\\n}\\r\\n\\r\\n.heading h2 {\\r\\n    font-size: 3.8rem;\\r\\n    width: 80%;\\r\\n}\\r\\n\\r\\n.wave {\\r\\n    width: 50%;\\r\\n    height: 200px;\\r\\n    margin-top: -5px;\\r\\n\\r\\n    background-color: #55E6C1;\\r\\n    border-bottom-left-radius: 70%;\\r\\n}\\r\\n\\r\\n.wave::before {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    left: 30%;\\r\\n    width: 60%;\\r\\n    height: 260px;\\r\\n    border-bottom-left-radius: 70%;\\r\\n    border-bottom-right-radius: 70%;\\r\\n    background-color: #55E6C1;\\r\\n}\\r\\n\\r\\n.wave::after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    left: 70%;\\r\\n    width: 30%;\\r\\n    height: 260px;\\r\\n    border-bottom-left-radius: 70%;\\r\\n    background-color: #55E6C1;\\r\\n}\\r\\n\\r\\n.progetti {\\r\\n    height: auto;\\r\\n}\\r\\n\\r\\n.progetti_body {\\r\\n    width: 80%;\\r\\n    height: auto;\\r\\n}\\r\\n\\r\\n.progetti_card {\\r\\n    width: 28%;\\r\\n    height: 200px;\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: 100% 100%;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.progetti_card img {\\r\\n    width: 100%;\\r\\n    height: 200px;\\r\\n    /* z-index: 20; */\\r\\n    margin-top: -220px;\\r\\n}\\r\\n\\r\\n.progetti_card_body {\\r\\n    background-color: #25CCF7;\\r\\n    transition: 400ms all ease;\\r\\n    transform: translateY(100%);\\r\\n    z-index: 20;\\r\\n}\\r\\n\\r\\n.progetti_card_body svg {\\r\\n    width: 2em;\\r\\n    height: 2em;\\r\\n}\\r\\n\\r\\n.progetti_card:hover > .progetti_card_body {\\r\\n    transform: translateY(0%);\\r\\n}\\r\\n\\r\\n.about {\\r\\n    height: auto;\\r\\n}\\r\\n\\r\\n.about_body {\\r\\n    width: 80%;\\r\\n    margin-top: 6% !important;\\r\\n}\\r\\n\\r\\n.about_body_profilo_card {\\r\\n    background-color: rgb(40, 42, 44);\\r\\n    min-width: 40%;\\r\\n    border-radius: 5px;\\r\\n}\\r\\n\\r\\n.about_body_profilo_card img {\\r\\n    width: 300px;\\r\\n    height: 300px;\\r\\n    border: 10px solid #55E6C1;\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\n.about_body_testo {\\r\\n    width: 40%;\\r\\n\\r\\n}\\r\\n\\r\\n.about_body_testo p {\\r\\n    font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.skills {\\r\\n    background-color: #55E6C1;\\r\\n    height: auto;\\r\\n}\\r\\n\\r\\n.skills_body {\\r\\n    width: 60%;\\r\\n    height: auto;\\r\\n    margin-top: 3%;\\r\\n}\\r\\n\\r\\n.skills_body > h6 {\\r\\n    height: 40px;\\r\\n    font-size: 0.9rem;\\r\\n    cursor: default;\\r\\n    user-select: none;\\r\\n    transition: 200ms all ease;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.skills_body > h6:hover {\\r\\n    border-right: 4px solid dodgerblue;\\r\\n}\\r\\n\\r\\n.contatti {\\r\\n    background-color: rgb(232, 232, 232);\\r\\n    height: auto;\\r\\n}\\r\\n\\r\\n.contatti > form {\\r\\n    width: 30%;\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.contatti form label {\\r\\n    font-weight: normal;\\r\\n    font-size: 0.9rem !important;\\r\\n}\\r\\n\\r\\n.contatti textarea, .contatti input {\\r\\n    border-radius: 0;\\r\\n    background-color: rgb(210, 210, 210);\\r\\n}\\r\\n\\r\\n.contatti > form input {\\r\\n    height: 50px;\\r\\n}\\r\\n\\r\\n.contatti > form input:focus, .contatti > form textarea:focus {\\r\\n    background-color: rgb(210, 210, 210);\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.contatti form button {\\r\\n    background-color: #55E6C1 !important;\\r\\n    text-transform: uppercase;\\r\\n    font-weight: bolder;\\r\\n    font-size: 1rem;\\r\\n}\\r\\n\\r\\nfooter a {\\r\\n    color: #eee;\\r\\n}\\r\\n\\r\\nfooter a:hover {\\r\\n    color: #eee;\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n@media (max-width: 600px) {\\r\\n    #nav {\\r\\n        width: 80%;\\r\\n    }\\r\\n\\r\\n    header h1 {\\r\\n        font-size: 14rem;\\r\\n    }\\r\\n\\r\\n    header h2 {\\r\\n        font-size: 2.6rem;\\r\\n    }\\r\\n\\r\\n    .heading {\\r\\n        height: auto;\\r\\n        padding-bottom: 10%;\\r\\n        padding-left: 10%;\\r\\n    }\\r\\n\\r\\n    .heading h2 {\\r\\n        font-size: 3rem;\\r\\n        /* height: auto; */\\r\\n    }\\r\\n\\r\\n    .wave {\\r\\n        width: 100%;\\r\\n        margin-top: -5px;\\r\\n    }\\r\\n\\r\\n    .wave::after, .wave::before {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .progetti_body {\\r\\n        width: 90%;\\r\\n    }\\r\\n\\r\\n    .progetti_card {\\r\\n        height: 180px;\\r\\n        width: 100%;\\r\\n        margin: 10px 0;\\r\\n    }\\r\\n\\r\\n    .about_body {\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n    .about_body_profilo_card {\\r\\n        min-width: 80% !important;\\r\\n    }\\r\\n\\r\\n    .about_body_testo {\\r\\n        width: 100%;\\r\\n        padding-top: 5% ;\\r\\n    }\\r\\n\\r\\n    .about_body_testo p {\\r\\n        margin-left: -10% !important;\\r\\n        min-width: 80% !important;\\r\\n        margin-right: 5%;\\r\\n    }\\r\\n\\r\\n    .contatti form {\\r\\n        width: 85%;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ \"./src/js/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./src/js/data.json\", 1);\n/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes */ \"./src/js/Classes.js\");\n\r\n\r\n\r\n\r\nlet navbar = new _Classes__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"](\"#nav\", false, \"#nav-indicator\")\r\nlet skills = new _Classes__WEBPACK_IMPORTED_MODULE_2__[\"MapSkills\"](\".skills_body\", _data_json__WEBPACK_IMPORTED_MODULE_1__.skills, _data_json__WEBPACK_IMPORTED_MODULE_1__.classes)\r\n\r\n\r\nfunction App() {\r\n    navbar.setNavIndicator()\r\n\r\n    for(let i = 0; i<navbar.nav.children.length; i++) {\r\n        navbar.nav.children[i].addEventListener(\"click\", () => navbar.closeNavbar())\r\n    }\r\n\r\n    skills.mapSkill()\r\n}\n\n//# sourceURL=webpack:///./src/js/App.js?");

/***/ }),

/***/ "./src/js/Classes.js":
/*!***************************!*\
  !*** ./src/js/Classes.js ***!
  \***************************/
/*! exports provided: Navbar, MapSkills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navbar\", function() { return Navbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapSkills\", function() { return MapSkills; });\nclass Navbar {\r\n\r\n    constructor(item, isOpen, navIndicator) {\r\n        this.nav = document.querySelector(item)\r\n        this.isOpen = isOpen\r\n        this.navIndicator = document.querySelector(navIndicator)\r\n    }\r\n    \r\n    closeNavbar() {\r\n        this.nav.style.transition = \"200ms\"\r\n        this.nav.style.transform = \"translateX(-150%)\"\r\n        this.navIndicator.style.transform = \"rotate(0deg)\"\r\n\r\n        this.isOpen = false\r\n    }\r\n\r\n    openNavbar() {\r\n        this.nav.style.transition = \"300ms\"\r\n        this.nav.style.transform = \"translateX(0%)\"\r\n        this.navIndicator.style.transform = \"rotate(90deg)\"\r\n\r\n        this.isOpen = true\r\n    }\r\n\r\n    setNavIndicator() {\r\n        \r\n        this.navIndicator.addEventListener(\"click\", () => {\r\n            if(this.isOpen) {\r\n                this.openNavbar()\r\n                this.isOpen = false\r\n            } else {\r\n                this.closeNavbar()\r\n                this.isOpen = true\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nclass MapSkills {\r\n\r\n    constructor(body, skills = [], classes = []) {\r\n        this.skillsBody = document.querySelector(body)\r\n        this.skills = skills\r\n        this.classes = classes\r\n    }\r\n    \r\n\r\n    mapSkill() {\r\n        let skill\r\n        console.log(\"runned\")\r\n\r\n        this.skills.map(skl => {\r\n            skill = document.createElement(\"h6\")\r\n            skill.textContent = skl\r\n\r\n            this.classes.map(styleClass => skill.classList.add(styleClass))\r\n            this.skillsBody.appendChild(skill)\r\n        })\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/Classes.js?");

/***/ }),

/***/ "./src/js/data.json":
/*!**************************!*\
  !*** ./src/js/data.json ***!
  \**************************/
/*! exports provided: skills, classes, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"skills\\\":[\\\"HTML5\\\",\\\"CSS3\\\",\\\"JavaScript - ES6+\\\",\\\"Bootstrap\\\",\\\"Sass\\\",\\\"NPM\\\",\\\"Webpack\\\",\\\"Babel\\\",\\\"Reactjs\\\",\\\"React Chartjs\\\",\\\"Ant deisgn\\\",\\\"Axios\\\",\\\"Redux (React-Redux)\\\",\\\"Git\\\",\\\"GitHub\\\",\\\"Facebook API\\\",\\\"TMdb API\\\",\\\"VSCODE\\\",\\\"Atom\\\",\\\"Sublime Text\\\",\\\"Figma\\\"],\\\"classes\\\":[\\\"bg-white\\\",\\\"py-3\\\",\\\"px-4\\\",\\\"m-2\\\",\\\"d-flex\\\",\\\"justify-content-center\\\",\\\"align-items-center\\\"]}\");\n\n//# sourceURL=webpack:///./src/js/data.json?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/js/App.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    Object(_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n})\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ })

/******/ });