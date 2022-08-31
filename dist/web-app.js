/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/search-icon.png */ "./src/images/search-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n    box-sizing: border-box;\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n/*Main Section Styles*/\nbody {\n    position: relative;\n    background-color: var(--main-bg-color);\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n\n    /* Light Mode */\n    --main-txt-light: white;\n    --main-txt-color: #4E5340;\n    --sub-txt-color: #697268;\n\n    --main-bg-color: #B7D1DA;\n    --sub-bg-color: #E2E8DD;\n\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: rgba(0, 0, 0, 0.65);\n}\n\n#search-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    height: 5rem;\n    margin: 2rem 2rem;\n}\n\n#color-toggle {\n    margin-left: 1rem;\n}\n\n#weather-content {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n\n#weather-display {\n    position: relative;\n    background-color: var(--sub-bg-color);\n    border-radius: .5rem;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);\n    padding: 2rem;\n    height: 300px;\n    overflow: hidden;\n    \n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n    grid-template-columns: repeat(10,1fr);\n}\n\n/*Search Bar Styles*/\n\n#form {\n    position: relative;\n    top: 0;\n    left:0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n#form input {\n    background-color: var(--sub-bg-opaque);\n    color: var(--main-txt-light);\n    padding: .3rem .3rem .3rem 3rem;\n    height: 3rem;\n    width: 20vw;\n    min-width: 20rem;\n    border: none;\n    border-radius: .5rem;\n\n    font-family: inherit;\n    font-size: 1.5rem;\n}\n\n#form button {\n    height: 3rem;\n    width: 3rem;\n    background-color: transparent;\n    position: absolute;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n\n}\n\n#input-error {\n    color: red;\n    font-size: 1.2rem;\n    position: absolute;\n    top: 3rem;\n    left: 1rem;\n}\n\n#form button:hover {\n    cursor: pointer;\n}\n\n#form input:focus-visible {\n    outline: none;\n}\n\n#form input::placeholder {\n    color: var(--main-txt-light)\n}\n\n\n\n/*Weather Display Content Styles*/\n#city {\n    grid-area: 1/1/4/9 ;\n    padding: 0 0 2rem 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    overflow-wrap: break-word;\n}\n\n#city p {\n    font-size: 2.5rem;\n    color: var(--main-txt-color);\n}\n\n#weather {\n    grid-area: 3/1/5/8 ;\n    padding: 0 0 0 3rem;\n\n}\n\n#weather p {\n    font-size: 1.75rem;\n    color: var(--sub-txt-color);\n}\n\n#weather-img {\n    grid-area: 1/8/5/11 ;\n    display: flex;\n    justify-content: center;\n}\n\n#temp-now {\n    grid-area: 5/1/10/7 ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#temp-now p {\n    font-size: 9rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n\n}\n\n#units {\n    grid-area: 5/7/8/8 ;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n#units p {\n    font-size: 2rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--sub-txt-color);\n}\n\n#unit-switch {\n    grid-area: 10/1/11/7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#sub-info {\n    grid-area: 5/8/11/11 ;\n    display: flex;\n    flex-direction: column;\n    display: flex;\n    flex-direction: column;\n    /* margin-left: 1rem; */\n    justify-content: center;\n}\n\n#sub-info p {\n    font-size: 1.25rem;\n    color: var(--sub-txt-color);\n    padding-left: 1rem;\n}\n\n#unit-toggle {\n    border: none;\n    background-color: var(--sub-txt-color);\n    border-radius: .5rem;\n    padding: 0.5rem 2rem 0.5rem 2rem;\n    font-size: 1.2rem;\n    color: var(--sub-bg-color);\n}\n\n#unit-toggle:hover {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--main-bg-color);\n    color: var(--main-txt-color);\n    cursor: pointer;\n}\n\n#unit-toggle:active {\n    border: 1px solid var(--main-txt-color);\n}\n\n\n/*Darkmode Toggle Styles*/\n\n.dark-mode {\n    /* Dark Mode */\n    --main-txt-light: white;\n    --main-txt-color: #ECB365;\n    --sub-txt-color: #8D99AE;\n    --main-bg-color: #04293A;\n    --sub-bg-color: #333533;\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: rgba(149, 163, 164, 0.65);\n}\n\n.checkbox {\n    opacity: 0;\n    position: absolute;\n  }\n  \n.label {\n    width: 3rem;\n    height: 1.5rem;\n    background-color:#111;\n    display: flex;\n    border-radius:50px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px;\n    position: relative;\n    transform: scale(1.5);\n    margin-left: 1.5rem;\n}\n  \n.ball {\n    width: 1rem;\n    height: 1rem;\n    background-color: white;\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    border-radius: 50%;\n    transition: transform 0.2s linear;\n}\n\n.checkbox:checked + .label .ball{\n    transform: translateX(1.5rem);\n}\n  \n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n    box-sizing: border-box;\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n/*Main Section Styles*/\nbody {\n    position: relative;\n    background-color: var(--main-bg-color);\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n\n    /* Light Mode */\n    --main-txt-light: white;\n    --main-txt-color: #4E5340;\n    --sub-txt-color: #697268;\n\n    --main-bg-color: #B7D1DA;\n    --sub-bg-color: #E2E8DD;\n\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: rgba(0, 0, 0, 0.65);\n}\n\n#search-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    height: 5rem;\n    margin: 2rem 2rem;\n}\n\n#color-toggle {\n    margin-left: 1rem;\n}\n\n#weather-content {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n\n#weather-display {\n    position: relative;\n    background-color: var(--sub-bg-color);\n    border-radius: .5rem;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);\n    padding: 2rem;\n    height: 300px;\n    overflow: hidden;\n    \n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n    grid-template-columns: repeat(10,1fr);\n}\n\n/*Search Bar Styles*/\n\n#form {\n    position: relative;\n    top: 0;\n    left:0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n#form input {\n    background-color: var(--sub-bg-opaque);\n    color: var(--main-txt-light);\n    padding: .3rem .3rem .3rem 3rem;\n    height: 3rem;\n    width: 20vw;\n    min-width: 20rem;\n    border: none;\n    border-radius: .5rem;\n\n    font-family: inherit;\n    font-size: 1.5rem;\n}\n\n#form button {\n    height: 3rem;\n    width: 3rem;\n    background-color: transparent;\n    position: absolute;\n    border: none;\n    background-image: url(./images/search-icon.png);\n    background-size: contain;\n\n}\n\n#input-error {\n    color: red;\n    font-size: 1.2rem;\n    position: absolute;\n    top: 3rem;\n    left: 1rem;\n}\n\n#form button:hover {\n    cursor: pointer;\n}\n\n#form input:focus-visible {\n    outline: none;\n}\n\n#form input::placeholder {\n    color: var(--main-txt-light)\n}\n\n\n\n/*Weather Display Content Styles*/\n#city {\n    grid-area: 1/1/4/9 ;\n    padding: 0 0 2rem 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    overflow-wrap: break-word;\n}\n\n#city p {\n    font-size: 2.5rem;\n    color: var(--main-txt-color);\n}\n\n#weather {\n    grid-area: 3/1/5/8 ;\n    padding: 0 0 0 3rem;\n\n}\n\n#weather p {\n    font-size: 1.75rem;\n    color: var(--sub-txt-color);\n}\n\n#weather-img {\n    grid-area: 1/8/5/11 ;\n    display: flex;\n    justify-content: center;\n}\n\n#temp-now {\n    grid-area: 5/1/10/7 ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#temp-now p {\n    font-size: 9rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n\n}\n\n#units {\n    grid-area: 5/7/8/8 ;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n#units p {\n    font-size: 2rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--sub-txt-color);\n}\n\n#unit-switch {\n    grid-area: 10/1/11/7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#sub-info {\n    grid-area: 5/8/11/11 ;\n    display: flex;\n    flex-direction: column;\n    display: flex;\n    flex-direction: column;\n    /* margin-left: 1rem; */\n    justify-content: center;\n}\n\n#sub-info p {\n    font-size: 1.25rem;\n    color: var(--sub-txt-color);\n    padding-left: 1rem;\n}\n\n#unit-toggle {\n    border: none;\n    background-color: var(--sub-txt-color);\n    border-radius: .5rem;\n    padding: 0.5rem 2rem 0.5rem 2rem;\n    font-size: 1.2rem;\n    color: var(--sub-bg-color);\n}\n\n#unit-toggle:hover {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--main-bg-color);\n    color: var(--main-txt-color);\n    cursor: pointer;\n}\n\n#unit-toggle:active {\n    border: 1px solid var(--main-txt-color);\n}\n\n\n/*Darkmode Toggle Styles*/\n\n.dark-mode {\n    /* Dark Mode */\n    --main-txt-light: white;\n    --main-txt-color: #ECB365;\n    --sub-txt-color: #8D99AE;\n    --main-bg-color: #04293A;\n    --sub-bg-color: #333533;\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: rgba(149, 163, 164, 0.65);\n}\n\n.checkbox {\n    opacity: 0;\n    position: absolute;\n  }\n  \n.label {\n    width: 3rem;\n    height: 1.5rem;\n    background-color:#111;\n    display: flex;\n    border-radius:50px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px;\n    position: relative;\n    transform: scale(1.5);\n    margin-left: 1.5rem;\n}\n  \n.ball {\n    width: 1rem;\n    height: 1rem;\n    background-color: white;\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    border-radius: 50%;\n    transition: transform 0.2s linear;\n}\n\n.checkbox:checked + .label .ball{\n    transform: translateX(1.5rem);\n}\n  \n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/images/search-icon.png":
/*!************************************!*\
  !*** ./src/images/search-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfa7ebbeaa2ca49497a2.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const weatherData =  {
    city: "",
    weather: "",
    weatherIcon: "",
    tempNow: "",
    tempFeel: "",
    windSpeed: "",
    windDirection: "",
    humidity: "",
    pressure: "",
    tempUnit: "",
    pressUnit: "",
    windUnit: "",
    switchTempUnit: function() {
        if (this.tempUnit === "F") {
            //to Metric
            this.tempUnit = "C";
            this.pressUnit = "hPa";
            this.windUnit = "kph";
            this.tempNow = Math.round(((this.tempNow - 32)/(9/5))*10)/10;
            this.tempFeel = Math.round(((this.tempFeel - 32)/(9/5))*10)/10;
            this.windSpeed = Math.round((this.windSpeed*1.609344)*10)/10;
            this.pressure = Math.round((this.pressure/0.029529983071445));
        } else {
            //to Imperial
            this.tempUnit = "F";
            this.pressUnit = "inHg";
            this.windUnit = "mph";
            this.tempNow = Math.round(((this.tempNow*(9/5)) + 32)*10)/10;
            this.tempFeel = Math.round(((this.tempFeel*(9/5)) + 32)*10)/10;
            this.windSpeed = Math.round((this.windSpeed/1.609344)*10)/10;
            this.pressure = Math.round((this.pressure*0.029529983071445)*100)/100;
        }
    },
}

const locationData =  {
    city: "",
    country: "",
    state: "",
    long: "",
    lat: "",
}

const addListeners = () => {
    let formIn = document.getElementById("form");
    let colorToggle = document.getElementById("checkbox");
    formIn.addEventListener("submit",submitIn);
    colorToggle.addEventListener("change",toggleColorMode);
    //submits on enter key from input element or submit button 
}

const addUnitListeners = () => {
    //adds switch unit listener since it isnt necessary initially 
    let unitSwitchBtn = document.getElementById("unit-toggle");
    unitSwitchBtn.addEventListener("click",switchUnits);
}

const toggleColorMode = () => {
    console.log("Change color mode");
    let docBody = document.querySelector("body");
    docBody.classList.toggle("dark-mode");

}

const submitIn = (e) => {
    e.preventDefault();
    let searchInputElement = document.getElementById("search-input");
    let searchValue = cleanInput(searchInputElement.value.trim());

    if (searchValue[0] < 1) {
        searchInputElement.classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = "Please input a location.";
        // console.log("No Value Input");
    } else {
        searchInputElement.classList = "search-input";
        document.getElementById("input-error").innerHTML = "";
        // console.log("Valid Input");

        //Intiates API Call for Geo Location
        getGeo(searchValue).then((resultGeo) => {
            locationData.city = resultGeo[0].name;
            locationData.country = resultGeo[0].country;
            locationData.state = resultGeo[0].state;
            locationData.long = resultGeo[0].lon;
            locationData.lat = resultGeo[0].lat;
        }).then(() => {
            getWeather().then((resultWeather) => {
    
                weatherData.city = resultWeather.name;
                weatherData.weather = resultWeather.weather[0].description;
                weatherData.weatherIcon = resultWeather.weather[0].icon;
                weatherData.tempNow = Math.round((resultWeather.main.temp - 273.15)*10)/10;
                weatherData.tempFeel = Math.round((resultWeather.main.feels_like - 273.15)*10)/10;
                weatherData.tempUnit = "C";
                weatherData.pressUnit = "hPa";
                weatherData.windUnit = "kph";
                weatherData.windSpeed = resultWeather.wind.speed;
                weatherData.windDirection = resultWeather.wind.deg;
                weatherData.humidity = resultWeather.main.humidity;
                weatherData.pressure = resultWeather.main.pressure;
                addUnitListeners();
                updateDisplay();
            });
        })
    }
}

const getGeo = async (locationIn) => {
    try {
        let apiKeyGeo = "a35be01e648d24c61de74b1684656be9" //free api key, same for Geo and Weather APIs
        let urlGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${locationIn[0]}&limit=3&appid=${apiKeyGeo}`;
        let responseGeo = await fetch(urlGeo, {mode: "cors"});
        let geoDataOut = await responseGeo.json();
        // console.log(geoDataOut);
        if (geoDataOut.length < 1) {
            throw "That location was not found. Please try again.";
        }
        return geoDataOut;
    } catch (err) {
        document.getElementById("search-input").classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = `${err}`;
        console.error(err);
    }
}

const getWeather = async () => {
    try {
        let apiKey = "a35be01e648d24c61de74b1684656be9" //free api key
        let URL =`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.long}&appid=${apiKey}`;
        let response = await fetch(URL, {mode: "cors"});
        let weatherDataOut = await response.json();
        //ADD error catching here to throw error if issue pulling weather data
        if (weatherDataOut.length < 1) {
            throw "The weather for that location was not found. Please try again.";
        }
        return weatherDataOut;
    } catch (err) {
        document.getElementById("search-input").classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = `${err}`;
        console.error(err);
    }
}

const updateDisplay = () => {
    //Location
    if (locationData.state === undefined) {
        let locationText = document.querySelector("div#city p");
        locationText.innerHTML = `${locationData.city}, ${locationData.country}`;
    } else {
        let locationText = document.querySelector("div#city p");
        locationText.innerHTML = `${locationData.city}, ${locationData.state}, ${locationData.country}`;
    }
    //Weather Description
    let weatherText = document.querySelector("div#weather p");
    weatherText.innerHTML = `${weatherData.weather}`;
    //Weather Image
    let weatherIcon = document.querySelector("div#weather-img img");
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`;
    //Temp Current
    let tempNowText = document.querySelector("div#temp-now p");
    tempNowText.innerHTML = `${weatherData.tempNow}`;
    //Units
    let unitText = document.querySelector("div#units p");
    unitText.innerHTML = `°${weatherData.tempUnit}`;
    //Temp Feels Like
    let tempFeelText = document.querySelector("div#temp-feel p");
    tempFeelText.innerHTML = `Feels Like: ${weatherData.tempFeel} °${weatherData.tempUnit}`;
    //Wind
    let windText = document.querySelector("div#wind p");
    windText.innerHTML = `Wind: ${weatherData.windSpeed}${weatherData.windUnit} ${returnDirection(weatherData.windDirection)}`;
    //Humidity
    let humidText = document.querySelector("div#humidity p");
    humidText.innerHTML = `Humidity: ${weatherData.humidity}%`;
    //Pressure
    let pressureText = document.querySelector("div#pressure p");
    pressureText.innerHTML = `Pressure: ${weatherData.pressure}${weatherData.pressUnit}`;
}

const returnDirection = (windDegrees) => {
    if (67.5 > windDegrees && windDegrees >= 22.5) {
        return "NE"
    } else if (112.5 > windDegrees && windDegrees >= 67.5) {
        return "E"
    }
    else if (157.5 > windDegrees && windDegrees >= 112.5) {
        return "SE"
    }
    else if (202.5 > windDegrees && windDegrees >= 157.5) {
        return "S"
    }
    else if (247.5 > windDegrees && windDegrees >= 202.5) {
        return "SW"
    }
    else if (295.5 > windDegrees && windDegrees >= 247.5) {
        return "W"
    }
    else if (337.5 > windDegrees && windDegrees >= 295.5) {
        return "NW"
    }
    else {
        return "N"
    }
}

const switchUnits = () => {
    weatherData.switchTempUnit();
    updateDisplay();
}

const cleanInput = (inputValue) => {
    //Function to sanitize unser input for Api Location search
    //For now simply splitting out in case of comma input
    let inputsAll = inputValue.split(",");
    // console.log(inputsAll);
    return inputsAll;
}

const init = () => {
    document.getElementById("search-input").value = "Atlanta";
    const eventStart = new Event('submit',{ cancelable: true });
    document.getElementById("form").dispatchEvent(eventStart);
    document.getElementById("search-input").value = "";
}



//Initializing page with Atlanta Data
document.addEventListener('DOMContentLoaded', addListeners());
window.addEventListener("load", init);








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxh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QUFDQSw4REFBOEQsSUFBSTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0JBQWtCLElBQUkscUJBQXFCO0FBQy9FLE1BQU07QUFDTjtBQUNBLG9DQUFvQyxrQkFBa0IsSUFBSSxtQkFBbUIsSUFBSSxxQkFBcUI7QUFDdEc7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0EsMkRBQTJELHdCQUF3QjtBQUNuRjtBQUNBO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0EsNENBQTRDLHNCQUFzQixHQUFHLHFCQUFxQjtBQUMxRjtBQUNBO0FBQ0Esa0NBQWtDLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLDJDQUEyQztBQUM3SDtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBO0FBQ0EsMENBQTBDLHFCQUFxQixFQUFFLHNCQUFzQjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsa0JBQWtCO0FBQzlEO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7ICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLypNYWluIFNlY3Rpb24gU3R5bGVzKi9cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIC8qIExpZ2h0IE1vZGUgKi9cXG4gICAgLS1tYWluLXR4dC1saWdodDogd2hpdGU7XFxuICAgIC0tbWFpbi10eHQtY29sb3I6ICM0RTUzNDA7XFxuICAgIC0tc3ViLXR4dC1jb2xvcjogIzY5NzI2ODtcXG5cXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjQjdEMURBO1xcbiAgICAtLXN1Yi1iZy1jb2xvcjogI0UyRThERDtcXG5cXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICM5NUEzQTQ7XFxuICAgIC0tc3ViLWJnLW9wYXF1ZTogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXG59XFxuXFxuI2NvbG9yLXRvZ2dsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4jd2VhdGhlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuXFxuI3dlYXRoZXItZGlzcGxheSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG5cXG4vKlNlYXJjaCBCYXIgU3R5bGVzKi9cXG5cXG4jZm9ybSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OjA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb3JtIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJnLW9wYXF1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1saWdodCk7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC4zcmVtIC4zcmVtIDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2Zvcm0gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuXFxufVxcblxcbiNpbnB1dC1lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogM3JlbTtcXG4gICAgbGVmdDogMXJlbTtcXG59XFxuXFxuI2Zvcm0gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9ybSBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2Zvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWxpZ2h0KVxcbn1cXG5cXG5cXG5cXG4vKldlYXRoZXIgRGlzcGxheSBDb250ZW50IFN0eWxlcyovXFxuI2NpdHkge1xcbiAgICBncmlkLWFyZWE6IDEvMS80LzkgO1xcbiAgICBwYWRkaW5nOiAwIDAgMnJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjaXR5IHAge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG59XFxuXFxuI3dlYXRoZXIge1xcbiAgICBncmlkLWFyZWE6IDMvMS81LzggO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAzcmVtO1xcblxcbn1cXG5cXG4jd2VhdGhlciBwIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxufVxcblxcbiN3ZWF0aGVyLWltZyB7XFxuICAgIGdyaWQtYXJlYTogMS84LzUvMTEgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RlbXAtbm93IHtcXG4gICAgZ3JpZC1hcmVhOiA1LzEvMTAvNyA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGVtcC1ub3cgcCB7XFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuXFxufVxcblxcbiN1bml0cyB7XFxuICAgIGdyaWQtYXJlYTogNS83LzgvOCA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN1bml0cyBwIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLXN1Yi10eHQtY29sb3IpO1xcbn1cXG5cXG4jdW5pdC1zd2l0Y2gge1xcbiAgICBncmlkLWFyZWE6IDEwLzEvMTEvNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzdWItaW5mbyB7XFxuICAgIGdyaWQtYXJlYTogNS84LzExLzExIDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDFyZW07ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc3ViLWluZm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi10eHQtY29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbiN1bml0LXRvZ2dsZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbSAwLjVyZW0gMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItYmctY29sb3IpO1xcbn1cXG5cXG4jdW5pdC10b2dnbGU6aG92ZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdWItZGFyay1jb2xvcik7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG59XFxuXFxuXFxuLypEYXJrbW9kZSBUb2dnbGUgU3R5bGVzKi9cXG5cXG4uZGFyay1tb2RlIHtcXG4gICAgLyogRGFyayBNb2RlICovXFxuICAgIC0tbWFpbi10eHQtbGlnaHQ6IHdoaXRlO1xcbiAgICAtLW1haW4tdHh0LWNvbG9yOiAjRUNCMzY1O1xcbiAgICAtLXN1Yi10eHQtY29sb3I6ICM4RDk5QUU7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogIzA0MjkzQTtcXG4gICAgLS1zdWItYmctY29sb3I6ICMzMzM1MzM7XFxuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiAjOTVBM0E0O1xcbiAgICAtLXN1Yi1iZy1vcGFxdWU6IHJnYmEoMTQ5LCAxNjMsIDE2NCwgMC42NSk7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIH1cXG4gIFxcbi5sYWJlbCB7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTExO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuICBcXG4uYmFsbCB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMnB4O1xcbiAgICBsZWZ0OiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZCArIC5sYWJlbCAuYmFsbHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSk7XFxufVxcbiAgXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUEsMkNBQTJDOztBQUUzQztJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0lBRVQsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsd0JBQXdCOztJQUV4Qix3QkFBd0I7SUFDeEIsdUJBQXVCOztJQUV2QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7Ozs7QUFJQTtJ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O0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG4vKiBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qTWFpbiBTZWN0aW9uIFN0eWxlcyovXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICAvKiBMaWdodCBNb2RlICovXFxuICAgIC0tbWFpbi10eHQtbGlnaHQ6IHdoaXRlO1xcbiAgICAtLW1haW4tdHh0LWNvbG9yOiAjNEU1MzQwO1xcbiAgICAtLXN1Yi10eHQtY29sb3I6ICM2OTcyNjg7XFxuXFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI0I3RDFEQTtcXG4gICAgLS1zdWItYmctY29sb3I6ICNFMkU4REQ7XFxuXFxuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiAjOTVBM0E0O1xcbiAgICAtLXN1Yi1iZy1vcGFxdWU6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxufVxcblxcbiNjb2xvci10b2dnbGUge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuI3dlYXRoZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbiN3ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuXFxuLypTZWFyY2ggQmFyIFN0eWxlcyovXFxuXFxuI2Zvcm0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDowO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZm9ybSBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iZy1vcGFxdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtbGlnaHQpO1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuM3JlbSAuM3JlbSAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcblxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNmb3JtIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3NlYXJjaC1pY29uLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5cXG59XFxuXFxuI2lucHV0LWVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbn1cXG5cXG4jZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtIGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtbGlnaHQpXFxufVxcblxcblxcblxcbi8qV2VhdGhlciBEaXNwbGF5IENvbnRlbnQgU3R5bGVzKi9cXG4jY2l0eSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzQvOSA7XFxuICAgIHBhZGRpbmc6IDAgMCAycmVtIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NpdHkgcCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbn1cXG5cXG4jd2VhdGhlciB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzUvOCA7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDNyZW07XFxuXFxufVxcblxcbiN3ZWF0aGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItdHh0LWNvbG9yKTtcXG59XFxuXFxuI3dlYXRoZXItaW1nIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzgvNS8xMSA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdGVtcC1ub3cge1xcbiAgICBncmlkLWFyZWE6IDUvMS8xMC83IDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wLW5vdyBwIHtcXG4gICAgZm9udC1zaXplOiA5cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG5cXG59XFxuXFxuI3VuaXRzIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzcvOC84IDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3VuaXRzIHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxufVxcblxcbiN1bml0LXN3aXRjaCB7XFxuICAgIGdyaWQtYXJlYTogMTAvMS8xMS83O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3N1Yi1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzgvMTEvMTEgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMXJlbTsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzdWItaW5mbyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItdHh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtIDAuNXJlbSAycmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi1iZy1jb2xvcik7XFxufVxcblxcbiN1bml0LXRvZ2dsZTpob3ZlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1Yi1kYXJrLWNvbG9yKTsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdW5pdC10b2dnbGU6YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbn1cXG5cXG5cXG4vKkRhcmttb2RlIFRvZ2dsZSBTdHlsZXMqL1xcblxcbi5kYXJrLW1vZGUge1xcbiAgICAvKiBEYXJrIE1vZGUgKi9cXG4gICAgLS1tYWluLXR4dC1saWdodDogd2hpdGU7XFxuICAgIC0tbWFpbi10eHQtY29sb3I6ICNFQ0IzNjU7XFxuICAgIC0tc3ViLXR4dC1jb2xvcjogIzhEOTlBRTtcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjMDQyOTNBO1xcbiAgICAtLXN1Yi1iZy1jb2xvcjogIzMzMzUzMztcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICM5NUEzQTQ7XFxuICAgIC0tc3ViLWJnLW9wYXF1ZTogcmdiYSgxNDksIDE2MywgMTY0LCAwLjY1KTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcbiAgXFxuLmxhYmVsIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxMTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6NTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG4gIFxcbi5iYWxsIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAycHg7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkICsgLmxhYmVsIC5iYWxse1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS41cmVtKTtcXG59XFxuICBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuY29uc3Qgd2VhdGhlckRhdGEgPSAge1xuICAgIGNpdHk6IFwiXCIsXG4gICAgd2VhdGhlcjogXCJcIixcbiAgICB3ZWF0aGVySWNvbjogXCJcIixcbiAgICB0ZW1wTm93OiBcIlwiLFxuICAgIHRlbXBGZWVsOiBcIlwiLFxuICAgIHdpbmRTcGVlZDogXCJcIixcbiAgICB3aW5kRGlyZWN0aW9uOiBcIlwiLFxuICAgIGh1bWlkaXR5OiBcIlwiLFxuICAgIHByZXNzdXJlOiBcIlwiLFxuICAgIHRlbXBVbml0OiBcIlwiLFxuICAgIHByZXNzVW5pdDogXCJcIixcbiAgICB3aW5kVW5pdDogXCJcIixcbiAgICBzd2l0Y2hUZW1wVW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBVbml0ID09PSBcIkZcIikge1xuICAgICAgICAgICAgLy90byBNZXRyaWNcbiAgICAgICAgICAgIHRoaXMudGVtcFVuaXQgPSBcIkNcIjtcbiAgICAgICAgICAgIHRoaXMucHJlc3NVbml0ID0gXCJoUGFcIjtcbiAgICAgICAgICAgIHRoaXMud2luZFVuaXQgPSBcImtwaFwiO1xuICAgICAgICAgICAgdGhpcy50ZW1wTm93ID0gTWF0aC5yb3VuZCgoKHRoaXMudGVtcE5vdyAtIDMyKS8oOS81KSkqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy50ZW1wRmVlbCA9IE1hdGgucm91bmQoKCh0aGlzLnRlbXBGZWVsIC0gMzIpLyg5LzUpKSoxMCkvMTA7XG4gICAgICAgICAgICB0aGlzLndpbmRTcGVlZCA9IE1hdGgucm91bmQoKHRoaXMud2luZFNwZWVkKjEuNjA5MzQ0KSoxMCkvMTA7XG4gICAgICAgICAgICB0aGlzLnByZXNzdXJlID0gTWF0aC5yb3VuZCgodGhpcy5wcmVzc3VyZS8wLjAyOTUyOTk4MzA3MTQ0NSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy90byBJbXBlcmlhbFxuICAgICAgICAgICAgdGhpcy50ZW1wVW5pdCA9IFwiRlwiO1xuICAgICAgICAgICAgdGhpcy5wcmVzc1VuaXQgPSBcImluSGdcIjtcbiAgICAgICAgICAgIHRoaXMud2luZFVuaXQgPSBcIm1waFwiO1xuICAgICAgICAgICAgdGhpcy50ZW1wTm93ID0gTWF0aC5yb3VuZCgoKHRoaXMudGVtcE5vdyooOS81KSkgKyAzMikqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy50ZW1wRmVlbCA9IE1hdGgucm91bmQoKCh0aGlzLnRlbXBGZWVsKig5LzUpKSArIDMyKSoxMCkvMTA7XG4gICAgICAgICAgICB0aGlzLndpbmRTcGVlZCA9IE1hdGgucm91bmQoKHRoaXMud2luZFNwZWVkLzEuNjA5MzQ0KSoxMCkvMTA7XG4gICAgICAgICAgICB0aGlzLnByZXNzdXJlID0gTWF0aC5yb3VuZCgodGhpcy5wcmVzc3VyZSowLjAyOTUyOTk4MzA3MTQ0NSkqMTAwKS8xMDA7XG4gICAgICAgIH1cbiAgICB9LFxufVxuXG5jb25zdCBsb2NhdGlvbkRhdGEgPSAge1xuICAgIGNpdHk6IFwiXCIsXG4gICAgY291bnRyeTogXCJcIixcbiAgICBzdGF0ZTogXCJcIixcbiAgICBsb25nOiBcIlwiLFxuICAgIGxhdDogXCJcIixcbn1cblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGxldCBmb3JtSW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gICAgbGV0IGNvbG9yVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveFwiKTtcbiAgICBmb3JtSW4uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLHN1Ym1pdEluKTtcbiAgICBjb2xvclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsdG9nZ2xlQ29sb3JNb2RlKTtcbiAgICAvL3N1Ym1pdHMgb24gZW50ZXIga2V5IGZyb20gaW5wdXQgZWxlbWVudCBvciBzdWJtaXQgYnV0dG9uIFxufVxuXG5jb25zdCBhZGRVbml0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIC8vYWRkcyBzd2l0Y2ggdW5pdCBsaXN0ZW5lciBzaW5jZSBpdCBpc250IG5lY2Vzc2FyeSBpbml0aWFsbHkgXG4gICAgbGV0IHVuaXRTd2l0Y2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXQtdG9nZ2xlXCIpO1xuICAgIHVuaXRTd2l0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsc3dpdGNoVW5pdHMpO1xufVxuXG5jb25zdCB0b2dnbGVDb2xvck1vZGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDaGFuZ2UgY29sb3IgbW9kZVwiKTtcbiAgICBsZXQgZG9jQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGRvY0JvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstbW9kZVwiKTtcblxufVxuXG5jb25zdCBzdWJtaXRJbiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBzZWFyY2hJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKTtcbiAgICBsZXQgc2VhcmNoVmFsdWUgPSBjbGVhbklucHV0KHNlYXJjaElucHV0RWxlbWVudC52YWx1ZS50cmltKCkpO1xuXG4gICAgaWYgKHNlYXJjaFZhbHVlWzBdIDwgMSkge1xuICAgICAgICBzZWFyY2hJbnB1dEVsZW1lbnQuY2xhc3NMaXN0ID0gXCJzZWFyY2gtaW5wdXQgaW52YWxpZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWVycm9yXCIpLmlubmVySFRNTCA9IFwiUGxlYXNlIGlucHV0IGEgbG9jYXRpb24uXCI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTm8gVmFsdWUgSW5wdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LmNsYXNzTGlzdCA9IFwic2VhcmNoLWlucHV0XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZXJyb3JcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJWYWxpZCBJbnB1dFwiKTtcblxuICAgICAgICAvL0ludGlhdGVzIEFQSSBDYWxsIGZvciBHZW8gTG9jYXRpb25cbiAgICAgICAgZ2V0R2VvKHNlYXJjaFZhbHVlKS50aGVuKChyZXN1bHRHZW8pID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5jaXR5ID0gcmVzdWx0R2VvWzBdLm5hbWU7XG4gICAgICAgICAgICBsb2NhdGlvbkRhdGEuY291bnRyeSA9IHJlc3VsdEdlb1swXS5jb3VudHJ5O1xuICAgICAgICAgICAgbG9jYXRpb25EYXRhLnN0YXRlID0gcmVzdWx0R2VvWzBdLnN0YXRlO1xuICAgICAgICAgICAgbG9jYXRpb25EYXRhLmxvbmcgPSByZXN1bHRHZW9bMF0ubG9uO1xuICAgICAgICAgICAgbG9jYXRpb25EYXRhLmxhdCA9IHJlc3VsdEdlb1swXS5sYXQ7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZ2V0V2VhdGhlcigpLnRoZW4oKHJlc3VsdFdlYXRoZXIpID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5jaXR5ID0gcmVzdWx0V2VhdGhlci5uYW1lO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPSByZXN1bHRXZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEud2VhdGhlckljb24gPSByZXN1bHRXZWF0aGVyLndlYXRoZXJbMF0uaWNvbjtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS50ZW1wTm93ID0gTWF0aC5yb3VuZCgocmVzdWx0V2VhdGhlci5tYWluLnRlbXAgLSAyNzMuMTUpKjEwKS8xMDtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS50ZW1wRmVlbCA9IE1hdGgucm91bmQoKHJlc3VsdFdlYXRoZXIubWFpbi5mZWVsc19saWtlIC0gMjczLjE1KSoxMCkvMTA7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEudGVtcFVuaXQgPSBcIkNcIjtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5wcmVzc1VuaXQgPSBcImhQYVwiO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLndpbmRVbml0ID0gXCJrcGhcIjtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS53aW5kU3BlZWQgPSByZXN1bHRXZWF0aGVyLndpbmQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEud2luZERpcmVjdGlvbiA9IHJlc3VsdFdlYXRoZXIud2luZC5kZWc7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEuaHVtaWRpdHkgPSByZXN1bHRXZWF0aGVyLm1haW4uaHVtaWRpdHk7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEucHJlc3N1cmUgPSByZXN1bHRXZWF0aGVyLm1haW4ucHJlc3N1cmU7XG4gICAgICAgICAgICAgICAgYWRkVW5pdExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgZ2V0R2VvID0gYXN5bmMgKGxvY2F0aW9uSW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgYXBpS2V5R2VvID0gXCJhMzViZTAxZTY0OGQyNGM2MWRlNzRiMTY4NDY1NmJlOVwiIC8vZnJlZSBhcGkga2V5LCBzYW1lIGZvciBHZW8gYW5kIFdlYXRoZXIgQVBJc1xuICAgICAgICBsZXQgdXJsR2VvID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25JblswXX0mbGltaXQ9MyZhcHBpZD0ke2FwaUtleUdlb31gO1xuICAgICAgICBsZXQgcmVzcG9uc2VHZW8gPSBhd2FpdCBmZXRjaCh1cmxHZW8sIHttb2RlOiBcImNvcnNcIn0pO1xuICAgICAgICBsZXQgZ2VvRGF0YU91dCA9IGF3YWl0IHJlc3BvbnNlR2VvLmpzb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZ2VvRGF0YU91dCk7XG4gICAgICAgIGlmIChnZW9EYXRhT3V0Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IFwiVGhhdCBsb2NhdGlvbiB3YXMgbm90IGZvdW5kLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZW9EYXRhT3V0O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS5jbGFzc0xpc3QgPSBcInNlYXJjaC1pbnB1dCBpbnZhbGlkXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZXJyb3JcIikuaW5uZXJIVE1MID0gYCR7ZXJyfWA7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGFwaUtleSA9IFwiYTM1YmUwMWU2NDhkMjRjNjFkZTc0YjE2ODQ2NTZiZTlcIiAvL2ZyZWUgYXBpIGtleVxuICAgICAgICBsZXQgVVJMID1gaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bG9jYXRpb25EYXRhLmxhdH0mbG9uPSR7bG9jYXRpb25EYXRhLmxvbmd9JmFwcGlkPSR7YXBpS2V5fWA7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwge21vZGU6IFwiY29yc1wifSk7XG4gICAgICAgIGxldCB3ZWF0aGVyRGF0YU91dCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgLy9BREQgZXJyb3IgY2F0Y2hpbmcgaGVyZSB0byB0aHJvdyBlcnJvciBpZiBpc3N1ZSBwdWxsaW5nIHdlYXRoZXIgZGF0YVxuICAgICAgICBpZiAod2VhdGhlckRhdGFPdXQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgXCJUaGUgd2VhdGhlciBmb3IgdGhhdCBsb2NhdGlvbiB3YXMgbm90IGZvdW5kLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YU91dDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIikuY2xhc3NMaXN0ID0gXCJzZWFyY2gtaW5wdXQgaW52YWxpZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWVycm9yXCIpLmlubmVySFRNTCA9IGAke2Vycn1gO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIC8vTG9jYXRpb25cbiAgICBpZiAobG9jYXRpb25EYXRhLnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY2l0eSBwXCIpO1xuICAgICAgICBsb2NhdGlvblRleHQuaW5uZXJIVE1MID0gYCR7bG9jYXRpb25EYXRhLmNpdHl9LCAke2xvY2F0aW9uRGF0YS5jb3VudHJ5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY2l0eSBwXCIpO1xuICAgICAgICBsb2NhdGlvblRleHQuaW5uZXJIVE1MID0gYCR7bG9jYXRpb25EYXRhLmNpdHl9LCAke2xvY2F0aW9uRGF0YS5zdGF0ZX0sICR7bG9jYXRpb25EYXRhLmNvdW50cnl9YDtcbiAgICB9XG4gICAgLy9XZWF0aGVyIERlc2NyaXB0aW9uXG4gICAgbGV0IHdlYXRoZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiN3ZWF0aGVyIHBcIik7XG4gICAgd2VhdGhlclRleHQuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEud2VhdGhlcn1gO1xuICAgIC8vV2VhdGhlciBJbWFnZVxuICAgIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjd2VhdGhlci1pbWcgaW1nXCIpO1xuICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS53ZWF0aGVySWNvbn1AMngucG5nYDtcbiAgICAvL1RlbXAgQ3VycmVudFxuICAgIGxldCB0ZW1wTm93VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjdGVtcC1ub3cgcFwiKTtcbiAgICB0ZW1wTm93VGV4dC5pbm5lckhUTUwgPSBgJHt3ZWF0aGVyRGF0YS50ZW1wTm93fWA7XG4gICAgLy9Vbml0c1xuICAgIGxldCB1bml0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjdW5pdHMgcFwiKTtcbiAgICB1bml0VGV4dC5pbm5lckhUTUwgPSBgwrAke3dlYXRoZXJEYXRhLnRlbXBVbml0fWA7XG4gICAgLy9UZW1wIEZlZWxzIExpa2VcbiAgICBsZXQgdGVtcEZlZWxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiN0ZW1wLWZlZWwgcFwiKTtcbiAgICB0ZW1wRmVlbFRleHQuaW5uZXJIVE1MID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlckRhdGEudGVtcEZlZWx9IMKwJHt3ZWF0aGVyRGF0YS50ZW1wVW5pdH1gO1xuICAgIC8vV2luZFxuICAgIGxldCB3aW5kVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjd2luZCBwXCIpO1xuICAgIHdpbmRUZXh0LmlubmVySFRNTCA9IGBXaW5kOiAke3dlYXRoZXJEYXRhLndpbmRTcGVlZH0ke3dlYXRoZXJEYXRhLndpbmRVbml0fSAke3JldHVybkRpcmVjdGlvbih3ZWF0aGVyRGF0YS53aW5kRGlyZWN0aW9uKX1gO1xuICAgIC8vSHVtaWRpdHlcbiAgICBsZXQgaHVtaWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNodW1pZGl0eSBwXCIpO1xuICAgIGh1bWlkVGV4dC5pbm5lckhUTUwgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEuaHVtaWRpdHl9JWA7XG4gICAgLy9QcmVzc3VyZVxuICAgIGxldCBwcmVzc3VyZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I3ByZXNzdXJlIHBcIik7XG4gICAgcHJlc3N1cmVUZXh0LmlubmVySFRNTCA9IGBQcmVzc3VyZTogJHt3ZWF0aGVyRGF0YS5wcmVzc3VyZX0ke3dlYXRoZXJEYXRhLnByZXNzVW5pdH1gO1xufVxuXG5jb25zdCByZXR1cm5EaXJlY3Rpb24gPSAod2luZERlZ3JlZXMpID0+IHtcbiAgICBpZiAoNjcuNSA+IHdpbmREZWdyZWVzICYmIHdpbmREZWdyZWVzID49IDIyLjUpIHtcbiAgICAgICAgcmV0dXJuIFwiTkVcIlxuICAgIH0gZWxzZSBpZiAoMTEyLjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSA2Ny41KSB7XG4gICAgICAgIHJldHVybiBcIkVcIlxuICAgIH1cbiAgICBlbHNlIGlmICgxNTcuNSA+IHdpbmREZWdyZWVzICYmIHdpbmREZWdyZWVzID49IDExMi41KSB7XG4gICAgICAgIHJldHVybiBcIlNFXCJcbiAgICB9XG4gICAgZWxzZSBpZiAoMjAyLjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSAxNTcuNSkge1xuICAgICAgICByZXR1cm4gXCJTXCJcbiAgICB9XG4gICAgZWxzZSBpZiAoMjQ3LjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSAyMDIuNSkge1xuICAgICAgICByZXR1cm4gXCJTV1wiXG4gICAgfVxuICAgIGVsc2UgaWYgKDI5NS41ID4gd2luZERlZ3JlZXMgJiYgd2luZERlZ3JlZXMgPj0gMjQ3LjUpIHtcbiAgICAgICAgcmV0dXJuIFwiV1wiXG4gICAgfVxuICAgIGVsc2UgaWYgKDMzNy41ID4gd2luZERlZ3JlZXMgJiYgd2luZERlZ3JlZXMgPj0gMjk1LjUpIHtcbiAgICAgICAgcmV0dXJuIFwiTldcIlxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiTlwiXG4gICAgfVxufVxuXG5jb25zdCBzd2l0Y2hVbml0cyA9ICgpID0+IHtcbiAgICB3ZWF0aGVyRGF0YS5zd2l0Y2hUZW1wVW5pdCgpO1xuICAgIHVwZGF0ZURpc3BsYXkoKTtcbn1cblxuY29uc3QgY2xlYW5JbnB1dCA9IChpbnB1dFZhbHVlKSA9PiB7XG4gICAgLy9GdW5jdGlvbiB0byBzYW5pdGl6ZSB1bnNlciBpbnB1dCBmb3IgQXBpIExvY2F0aW9uIHNlYXJjaFxuICAgIC8vRm9yIG5vdyBzaW1wbHkgc3BsaXR0aW5nIG91dCBpbiBjYXNlIG9mIGNvbW1hIGlucHV0XG4gICAgbGV0IGlucHV0c0FsbCA9IGlucHV0VmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGlucHV0c0FsbCk7XG4gICAgcmV0dXJuIGlucHV0c0FsbDtcbn1cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS52YWx1ZSA9IFwiQXRsYW50YVwiO1xuICAgIGNvbnN0IGV2ZW50U3RhcnQgPSBuZXcgRXZlbnQoJ3N1Ym1pdCcseyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5kaXNwYXRjaEV2ZW50KGV2ZW50U3RhcnQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcbn1cblxuXG5cbi8vSW5pdGlhbGl6aW5nIHBhZ2Ugd2l0aCBBdGxhbnRhIERhdGFcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhZGRMaXN0ZW5lcnMoKSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdCk7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==