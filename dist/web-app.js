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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n    box-sizing: border-box;\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n/*Main Section Styles*/\n\nbody {\n    position: relative;\n    background-color: var(--main-bg-color);\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n\n    /* Light Mode */\n    --main-txt-light: white;\n    --main-txt-color: #4E5340;\n    --sub-txt-color: #697268;\n    --main-bg-color: #B7D1DA;\n    --sub-bg-color: #E2E8DD;\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: rgba(0, 0, 0, 0.65);\n}\n\n#search-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    height: 5rem;\n    margin: 2rem 2rem;\n}\n\n#color-toggle {\n    margin-left: 1rem;\n}\n\n#weather-content {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n#weather-display {\n    position: relative;\n    background-color: var(--sub-bg-color);\n    border-radius: .5rem;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);\n    padding: 2rem;\n    height: 300px;\n    overflow: hidden;\n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n    grid-template-columns: repeat(10,1fr);\n}\n\n\n/*Search Bar Styles*/\n\n#form {\n    position: relative;\n    top: 0;\n    left:0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n#form input {\n    background-color: var(--sub-bg-opaque);\n    color: var(--main-txt-light);\n    padding: 1rem .5rem 1rem 3.5rem;\n    width: 20vw;\n    min-width: 20rem;\n    border: none;\n    border-radius: .5rem;\n    font-family: inherit;\n    font-size: 1.5rem;\n}\n\n#form button {\n    height: 3rem;\n    width: 3rem;\n    background-color: transparent;\n    position: absolute;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    left: 0.5rem;\n\n}\n\n#input-error {\n    color: red;\n    font-size: 1.2rem;\n    position: absolute;\n    top: 3rem;\n    left: 1rem;\n}\n\n#form button:hover {\n    cursor: pointer;\n}\n\n#form input:focus-visible {\n    outline: none;\n}\n\n#form input::placeholder {\n    color: var(--main-txt-light);\n}\n\n\n/*Weather Display Content Styles*/\n\n#city {\n    grid-area: 1/1/4/9 ;\n    padding: 0 0 2rem 0rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    overflow-wrap: break-word;\n}\n\n#city p {\n    font-size: 2.5rem;\n    color: var(--main-txt-color);\n}\n\n#weather {\n    grid-area: 3/1/5/8 ;\n    padding: 0 0 0 1.5rem;\n}\n\n#weather p {\n    font-size: 1.75rem;\n    color: var(--sub-txt-color);\n}\n\n#weather-img {\n    grid-area: 1/8/5/11 ;\n    display: flex;\n    justify-content: center;\n}\n\n#temp-now {\n    grid-area: 5/1/10/7 ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#temp-now p {\n    font-size: 9rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n}\n\n#units {\n    grid-area: 5/7/8/8 ;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n#units p {\n    font-size: 2rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n}\n\n#unit-switch {\n    grid-area: 10/1/11/7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#sub-info {\n    grid-area: 5/8/11/11 ;\n    display: flex;\n    flex-direction: column;\n    display: flex;\n    flex-direction: column;\n    /* margin-left: 1rem; */\n    justify-content: center;\n}\n\n#sub-info p {\n    font-size: 1.25rem;\n    color: var(--sub-txt-color);\n    padding-left: 1rem;\n}\n\n#unit-toggle {\n    border: none;\n    background-color: var(--sub-txt-color);\n    border-radius: .5rem;\n    padding: 0.5rem 2rem 0.5rem 2rem;\n    font-size: 1.2rem;\n    color: var(--sub-bg-color);\n}\n\n#unit-toggle:hover {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--main-bg-color);\n    color: var(--main-txt-color);\n    cursor: pointer;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);\n}\n\n#unit-toggle:active {\n    border: 1px solid var(--main-txt-color);\n}\n\n\n/*Darkmode Styles*/\n\n.dark-mode {\n    /* Dark Mode */\n    --main-txt-light: white;\n    --main-txt-color: #ECB365;\n    --sub-txt-color: #8D99AE;\n    --main-bg-color: #04293A;\n    --sub-bg-color: #333533;\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: rgba(149, 163, 164, 0.65);\n}\n\n.checkbox {\n    opacity: 0;\n    position: absolute;\n  }\n  \n.label {\n    width: 3rem;\n    height: 1.4rem;\n    background-color: var(--sub-bg-opaque);\n    display: flex;\n    border-radius:50px;\n    align-items: center;\n    justify-content: space-between;\n    position: relative;\n    transform: scale(1.5);\n    margin-left: 1.5rem;\n}\n  \n.ball {\n    width: 1rem;\n    height: 1rem;\n    background-color: white;\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    border-radius: 50%;\n    transition: transform 0.2s linear;\n}\n\n.checkbox:checked + .label .ball{\n    transform: translateX(1.6rem);\n}\n  \n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n    box-sizing: border-box;\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n/*Main Section Styles*/\n\nbody {\n    position: relative;\n    background-color: var(--main-bg-color);\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n\n    /* Light Mode */\n    --main-txt-light: white;\n    --main-txt-color: #4E5340;\n    --sub-txt-color: #697268;\n    --main-bg-color: #B7D1DA;\n    --sub-bg-color: #E2E8DD;\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: rgba(0, 0, 0, 0.65);\n}\n\n#search-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    height: 5rem;\n    margin: 2rem 2rem;\n}\n\n#color-toggle {\n    margin-left: 1rem;\n}\n\n#weather-content {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n#weather-display {\n    position: relative;\n    background-color: var(--sub-bg-color);\n    border-radius: .5rem;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);\n    padding: 2rem;\n    height: 300px;\n    overflow: hidden;\n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n    grid-template-columns: repeat(10,1fr);\n}\n\n\n/*Search Bar Styles*/\n\n#form {\n    position: relative;\n    top: 0;\n    left:0;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n#form input {\n    background-color: var(--sub-bg-opaque);\n    color: var(--main-txt-light);\n    padding: 1rem .5rem 1rem 3.5rem;\n    width: 20vw;\n    min-width: 20rem;\n    border: none;\n    border-radius: .5rem;\n    font-family: inherit;\n    font-size: 1.5rem;\n}\n\n#form button {\n    height: 3rem;\n    width: 3rem;\n    background-color: transparent;\n    position: absolute;\n    border: none;\n    background-image: url(./images/search-icon.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    left: 0.5rem;\n\n}\n\n#input-error {\n    color: red;\n    font-size: 1.2rem;\n    position: absolute;\n    top: 3rem;\n    left: 1rem;\n}\n\n#form button:hover {\n    cursor: pointer;\n}\n\n#form input:focus-visible {\n    outline: none;\n}\n\n#form input::placeholder {\n    color: var(--main-txt-light);\n}\n\n\n/*Weather Display Content Styles*/\n\n#city {\n    grid-area: 1/1/4/9 ;\n    padding: 0 0 2rem 0rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    overflow-wrap: break-word;\n}\n\n#city p {\n    font-size: 2.5rem;\n    color: var(--main-txt-color);\n}\n\n#weather {\n    grid-area: 3/1/5/8 ;\n    padding: 0 0 0 1.5rem;\n}\n\n#weather p {\n    font-size: 1.75rem;\n    color: var(--sub-txt-color);\n}\n\n#weather-img {\n    grid-area: 1/8/5/11 ;\n    display: flex;\n    justify-content: center;\n}\n\n#temp-now {\n    grid-area: 5/1/10/7 ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#temp-now p {\n    font-size: 9rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n}\n\n#units {\n    grid-area: 5/7/8/8 ;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n#units p {\n    font-size: 2rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n}\n\n#unit-switch {\n    grid-area: 10/1/11/7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#sub-info {\n    grid-area: 5/8/11/11 ;\n    display: flex;\n    flex-direction: column;\n    display: flex;\n    flex-direction: column;\n    /* margin-left: 1rem; */\n    justify-content: center;\n}\n\n#sub-info p {\n    font-size: 1.25rem;\n    color: var(--sub-txt-color);\n    padding-left: 1rem;\n}\n\n#unit-toggle {\n    border: none;\n    background-color: var(--sub-txt-color);\n    border-radius: .5rem;\n    padding: 0.5rem 2rem 0.5rem 2rem;\n    font-size: 1.2rem;\n    color: var(--sub-bg-color);\n}\n\n#unit-toggle:hover {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--main-bg-color);\n    color: var(--main-txt-color);\n    cursor: pointer;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);\n}\n\n#unit-toggle:active {\n    border: 1px solid var(--main-txt-color);\n}\n\n\n/*Darkmode Styles*/\n\n.dark-mode {\n    /* Dark Mode */\n    --main-txt-light: white;\n    --main-txt-color: #ECB365;\n    --sub-txt-color: #8D99AE;\n    --main-bg-color: #04293A;\n    --sub-bg-color: #333533;\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: rgba(149, 163, 164, 0.65);\n}\n\n.checkbox {\n    opacity: 0;\n    position: absolute;\n  }\n  \n.label {\n    width: 3rem;\n    height: 1.4rem;\n    background-color: var(--sub-bg-opaque);\n    display: flex;\n    border-radius:50px;\n    align-items: center;\n    justify-content: space-between;\n    position: relative;\n    transform: scale(1.5);\n    margin-left: 1.5rem;\n}\n  \n.ball {\n    width: 1rem;\n    height: 1rem;\n    background-color: white;\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    border-radius: 50%;\n    transition: transform 0.2s linear;\n}\n\n.checkbox:checked + .label .ball{\n    transform: translateX(1.6rem);\n}\n  \n\n\n\n\n\n\n"],"sourceRoot":""}]);
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




//Variables
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



//Functions
const init = () => {
    //Initializing page with Atlanta GA weather data
    document.getElementById("search-input").value = "Atlanta";
    const eventStart = new Event('submit',{cancelable: true });
    document.getElementById("form").dispatchEvent(eventStart);
    document.getElementById("search-input").value = "";
};

const addListeners = () => {
    //Adding event listeners for search bar and color toggle 
    let formIn = document.getElementById("form");
    let colorToggle = document.getElementById("checkbox");
    formIn.addEventListener("submit",submitIn);
    //submits on enter key from input element or submit button 
    colorToggle.addEventListener("change",toggleColorMode);
};

const addUnitListeners = () => {
    //adds switch unit event listener since functionality isnt necessary initially 
    let unitSwitchBtn = document.getElementById("unit-toggle");
    unitSwitchBtn.addEventListener("click",switchUnits);
};

const toggleColorMode = () => {
    //toggles class of body element to determine color scheme of display
    let docBody = document.querySelector("body");
    docBody.classList.toggle("dark-mode");

};

const submitIn = (e) => {
    //handles functionality of user input and display on page 
    e.preventDefault();
    let searchInputElement = document.getElementById("search-input");
    let searchValue = cleanInput(searchInputElement.value.trim());

    if (searchValue[0] < 1) {
        //error handling - no search value error handling
        searchInputElement.classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = "Please input a location.";
    } else {
        //error handling - reset
        searchInputElement.classList = "search-input";
        document.getElementById("input-error").innerHTML = "";

        //Intiates API Call for Geo Location Data
        getGeo(searchValue).then((resultGeo) => {
            if (resultGeo) {
                locationData.city = resultGeo[0].name;
                locationData.country = resultGeo[0].country;
                locationData.state = resultGeo[0].state;
                locationData.long = resultGeo[0].lon;
                locationData.lat = resultGeo[0].lat;
            }
        }).then(() => {
            //Intiates API Call for Weather Data per Geo Data
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
    };
};

const getGeo = async (locationIn) => {
    try {
        let apiKeyGeo = "a35be01e648d24c61de74b1684656be9" //free api key, same for Geo and Weather APIs
        let urlGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${locationIn[0]}&limit=3&appid=${apiKeyGeo}`;
        let responseGeo = await fetch(urlGeo, {mode: "cors"});
        let geoDataOut = await responseGeo.json();
        //error handling - no location data from API
        if (geoDataOut.length < 1) {
            throw "That location was not found. Please try again.";
        };
        return geoDataOut;
    } catch (err) {
        document.getElementById("search-input").classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = `${err}`;
    };
};

const getWeather = async () => {
    try {
        let apiKey = "a35be01e648d24c61de74b1684656be9" //free api key
        let URL =`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.long}&appid=${apiKey}`;
        let response = await fetch(URL, {mode: "cors"});
        let weatherDataOut = await response.json();
        //error handling - no weather data from API
        if (weatherDataOut.length < 1) {
            throw "The weather for that location was not found. Please try again.";
        }
        return weatherDataOut;
    } catch (err) {
        document.getElementById("search-input").classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = `${err}`;
    };
};

const updateDisplay = () => {
    //Location
    if (locationData.state === undefined) {
        let locationText = document.querySelector("div#city p");
        locationText.innerHTML = `${locationData.city}, ${locationData.country}`;
    } else {
        let locationText = document.querySelector("div#city p");
        locationText.innerHTML = `${locationData.city}, ${locationData.state}, ${locationData.country}`;
    };
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
};

const returnDirection = (windDegrees) => {
    if (67.5 > windDegrees && windDegrees >= 22.5) {
        return "NE";
    } else if (112.5 > windDegrees && windDegrees >= 67.5) {
        return "E";
    }
    else if (157.5 > windDegrees && windDegrees >= 112.5) {
        return "SE";
    }
    else if (202.5 > windDegrees && windDegrees >= 157.5) {
        return "S";
    }
    else if (247.5 > windDegrees && windDegrees >= 202.5) {
        return "SW";
    }
    else if (295.5 > windDegrees && windDegrees >= 247.5) {
        return "W";
    }
    else if (337.5 > windDegrees && windDegrees >= 295.5) {
        return "NW";
    }
    else {
        return "N";
    }
};

const switchUnits = () => {
    weatherData.switchTempUnit();
    updateDisplay();
};

const cleanInput = (inputValue) => {
    //Function to handle user input for API Geo search
    //For now simply splitting out in case of comma input
    let inputsAll = inputValue.split(",");
    return inputsAll;
};

//Initializing page with Weather Data and UI controls
document.addEventListener('DOMContentLoaded', addListeners());
window.addEventListener("load", init);








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxRQUFRLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFV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QUNBO0FBQ0Esd0VBQXdFLGlCQUFpQixPQUFPLGtCQUFrQixTQUFTLE9BQU87QUFDbEkseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsOERBQThELElBQUk7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0IsSUFBSSxxQkFBcUI7QUFDL0UsTUFBTTtBQUNOO0FBQ0Esb0NBQW9DLGtCQUFrQixJQUFJLG1CQUFtQixJQUFJLHFCQUFxQjtBQUN0RztBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQSwyREFBMkQsd0JBQXdCO0FBQ25GO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQSw0Q0FBNEMsc0JBQXNCLEdBQUcscUJBQXFCO0FBQzFGO0FBQ0E7QUFDQSxrQ0FBa0Msc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsMkNBQTJDO0FBQzdIO0FBQ0E7QUFDQSx1Q0FBdUMscUJBQXFCO0FBQzVEO0FBQ0E7QUFDQSwwQ0FBMEMscUJBQXFCLEVBQUUsc0JBQXNCO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7ICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLypNYWluIFNlY3Rpb24gU3R5bGVzKi9cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIC8qIExpZ2h0IE1vZGUgKi9cXG4gICAgLS1tYWluLXR4dC1saWdodDogd2hpdGU7XFxuICAgIC0tbWFpbi10eHQtY29sb3I6ICM0RTUzNDA7XFxuICAgIC0tc3ViLXR4dC1jb2xvcjogIzY5NzI2ODtcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjQjdEMURBO1xcbiAgICAtLXN1Yi1iZy1jb2xvcjogI0UyRThERDtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICM5NUEzQTQ7XFxuICAgIC0tc3ViLWJnLW9wYXF1ZTogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXG59XFxuXFxuI2NvbG9yLXRvZ2dsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4jd2VhdGhlci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3dlYXRoZXItZGlzcGxheSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxufVxcblxcblxcbi8qU2VhcmNoIEJhciBTdHlsZXMqL1xcblxcbiNmb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6MDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmctb3BhcXVlKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWxpZ2h0KTtcXG4gICAgcGFkZGluZzogMXJlbSAuNXJlbSAxcmVtIDMuNXJlbTtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2Zvcm0gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGxlZnQ6IDAuNXJlbTtcXG5cXG59XFxuXFxuI2lucHV0LWVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcmVtO1xcbiAgICBsZWZ0OiAxcmVtO1xcbn1cXG5cXG4jZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtIGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtbGlnaHQpO1xcbn1cXG5cXG5cXG4vKldlYXRoZXIgRGlzcGxheSBDb250ZW50IFN0eWxlcyovXFxuXFxuI2NpdHkge1xcbiAgICBncmlkLWFyZWE6IDEvMS80LzkgO1xcbiAgICBwYWRkaW5nOiAwIDAgMnJlbSAwcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjaXR5IHAge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG59XFxuXFxuI3dlYXRoZXIge1xcbiAgICBncmlkLWFyZWE6IDMvMS81LzggO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxLjVyZW07XFxufVxcblxcbiN3ZWF0aGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItdHh0LWNvbG9yKTtcXG59XFxuXFxuI3dlYXRoZXItaW1nIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzgvNS8xMSA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdGVtcC1ub3cge1xcbiAgICBncmlkLWFyZWE6IDUvMS8xMC83IDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wLW5vdyBwIHtcXG4gICAgZm9udC1zaXplOiA5cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG59XFxuXFxuI3VuaXRzIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzcvOC84IDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3VuaXRzIHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbn1cXG5cXG4jdW5pdC1zd2l0Y2gge1xcbiAgICBncmlkLWFyZWE6IDEwLzEvMTEvNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzdWItaW5mbyB7XFxuICAgIGdyaWQtYXJlYTogNS84LzExLzExIDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDFyZW07ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc3ViLWluZm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi10eHQtY29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbiN1bml0LXRvZ2dsZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbSAwLjVyZW0gMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItYmctY29sb3IpO1xcbn1cXG5cXG4jdW5pdC10b2dnbGU6aG92ZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdWItZGFyay1jb2xvcik7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG59XFxuXFxuXFxuLypEYXJrbW9kZSBTdHlsZXMqL1xcblxcbi5kYXJrLW1vZGUge1xcbiAgICAvKiBEYXJrIE1vZGUgKi9cXG4gICAgLS1tYWluLXR4dC1saWdodDogd2hpdGU7XFxuICAgIC0tbWFpbi10eHQtY29sb3I6ICNFQ0IzNjU7XFxuICAgIC0tc3ViLXR4dC1jb2xvcjogIzhEOTlBRTtcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjMDQyOTNBO1xcbiAgICAtLXN1Yi1iZy1jb2xvcjogIzMzMzUzMztcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICM5NUEzQTQ7XFxuICAgIC0tc3ViLWJnLW9wYXF1ZTogcmdiYSgxNDksIDE2MywgMTY0LCAwLjY1KTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcbiAgXFxuLmxhYmVsIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmctb3BhcXVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czo1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG4gIFxcbi5iYWxsIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAycHg7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkICsgLmxhYmVsIC5iYWxse1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS42cmVtKTtcXG59XFxuICBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQSwyQ0FBMkM7O0FBRTNDO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixxQ0FBcUM7QUFDekM7OztBQUdBLHNCQUFzQjs7QUFFdEI7SUFDSSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTOztJQUVULGVBQWU7SUFDZix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFB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SUFDbEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG4vKiBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi8qTWFpbiBTZWN0aW9uIFN0eWxlcyovXFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICAvKiBMaWdodCBNb2RlICovXFxuICAgIC0tbWFpbi10eHQtbGlnaHQ6IHdoaXRlO1xcbiAgICAtLW1haW4tdHh0LWNvbG9yOiAjNEU1MzQwO1xcbiAgICAtLXN1Yi10eHQtY29sb3I6ICM2OTcyNjg7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI0I3RDFEQTtcXG4gICAgLS1zdWItYmctY29sb3I6ICNFMkU4REQ7XFxuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiAjOTVBM0E0O1xcbiAgICAtLXN1Yi1iZy1vcGFxdWU6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxufVxcblxcbiNjb2xvci10b2dnbGUge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuI3dlYXRoZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiN3ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG5cXG5cXG4vKlNlYXJjaCBCYXIgU3R5bGVzKi9cXG5cXG4jZm9ybSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OjA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb3JtIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJnLW9wYXF1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1saWdodCk7XFxuICAgIHBhZGRpbmc6IDFyZW0gLjVyZW0gMXJlbSAzLjVyZW07XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNmb3JtIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3NlYXJjaC1pY29uLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbGVmdDogMC41cmVtO1xcblxcbn1cXG5cXG4jaW5wdXQtZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNyZW07XFxuICAgIGxlZnQ6IDFyZW07XFxufVxcblxcbiNmb3JtIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0gaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1saWdodCk7XFxufVxcblxcblxcbi8qV2VhdGhlciBEaXNwbGF5IENvbnRlbnQgU3R5bGVzKi9cXG5cXG4jY2l0eSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzQvOSA7XFxuICAgIHBhZGRpbmc6IDAgMCAycmVtIDByZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NpdHkgcCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbn1cXG5cXG4jd2VhdGhlciB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzUvOCA7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDEuNXJlbTtcXG59XFxuXFxuI3dlYXRoZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi10eHQtY29sb3IpO1xcbn1cXG5cXG4jd2VhdGhlci1pbWcge1xcbiAgICBncmlkLWFyZWE6IDEvOC81LzExIDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wLW5vdyB7XFxuICAgIGdyaWQtYXJlYTogNS8xLzEwLzcgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RlbXAtbm93IHAge1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbn1cXG5cXG4jdW5pdHMge1xcbiAgICBncmlkLWFyZWE6IDUvNy84LzggO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdW5pdHMgcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxufVxcblxcbiN1bml0LXN3aXRjaCB7XFxuICAgIGdyaWQtYXJlYTogMTAvMS8xMS83O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3N1Yi1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzgvMTEvMTEgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMXJlbTsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzdWItaW5mbyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItdHh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtIDAuNXJlbSAycmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi1iZy1jb2xvcik7XFxufVxcblxcbiN1bml0LXRvZ2dsZTpob3ZlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1Yi1kYXJrLWNvbG9yKTsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbn1cXG5cXG4jdW5pdC10b2dnbGU6YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbn1cXG5cXG5cXG4vKkRhcmttb2RlIFN0eWxlcyovXFxuXFxuLmRhcmstbW9kZSB7XFxuICAgIC8qIERhcmsgTW9kZSAqL1xcbiAgICAtLW1haW4tdHh0LWxpZ2h0OiB3aGl0ZTtcXG4gICAgLS1tYWluLXR4dC1jb2xvcjogI0VDQjM2NTtcXG4gICAgLS1zdWItdHh0LWNvbG9yOiAjOEQ5OUFFO1xcbiAgICAtLW1haW4tYmctY29sb3I6ICMwNDI5M0E7XFxuICAgIC0tc3ViLWJnLWNvbG9yOiAjMzMzNTMzO1xcbiAgICAtLWFsdC1saWdodC1jb2xvcjogIzk1QTNBNDtcXG4gICAgLS1zdWItYmctb3BhcXVlOiByZ2JhKDE0OSwgMTYzLCAxNjQsIDAuNjUpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB9XFxuICBcXG4ubGFiZWwge1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iZy1vcGFxdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcbiAgXFxuLmJhbGwge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJweDtcXG4gICAgbGVmdDogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLmNoZWNrYm94OmNoZWNrZWQgKyAubGFiZWwgLmJhbGx7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjZyZW0pO1xcbn1cXG4gIFxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5cblxuLy9WYXJpYWJsZXNcbmNvbnN0IHdlYXRoZXJEYXRhID0gIHtcbiAgICBjaXR5OiBcIlwiLFxuICAgIHdlYXRoZXI6IFwiXCIsXG4gICAgd2VhdGhlckljb246IFwiXCIsXG4gICAgdGVtcE5vdzogXCJcIixcbiAgICB0ZW1wRmVlbDogXCJcIixcbiAgICB3aW5kU3BlZWQ6IFwiXCIsXG4gICAgd2luZERpcmVjdGlvbjogXCJcIixcbiAgICBodW1pZGl0eTogXCJcIixcbiAgICBwcmVzc3VyZTogXCJcIixcbiAgICB0ZW1wVW5pdDogXCJcIixcbiAgICBwcmVzc1VuaXQ6IFwiXCIsXG4gICAgd2luZFVuaXQ6IFwiXCIsXG4gICAgc3dpdGNoVGVtcFVuaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50ZW1wVW5pdCA9PT0gXCJGXCIpIHtcbiAgICAgICAgICAgIC8vdG8gTWV0cmljXG4gICAgICAgICAgICB0aGlzLnRlbXBVbml0ID0gXCJDXCI7XG4gICAgICAgICAgICB0aGlzLnByZXNzVW5pdCA9IFwiaFBhXCI7XG4gICAgICAgICAgICB0aGlzLndpbmRVbml0ID0gXCJrcGhcIjtcbiAgICAgICAgICAgIHRoaXMudGVtcE5vdyA9IE1hdGgucm91bmQoKCh0aGlzLnRlbXBOb3cgLSAzMikvKDkvNSkpKjEwKS8xMDtcbiAgICAgICAgICAgIHRoaXMudGVtcEZlZWwgPSBNYXRoLnJvdW5kKCgodGhpcy50ZW1wRmVlbCAtIDMyKS8oOS81KSkqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy53aW5kU3BlZWQgPSBNYXRoLnJvdW5kKCh0aGlzLndpbmRTcGVlZCoxLjYwOTM0NCkqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy5wcmVzc3VyZSA9IE1hdGgucm91bmQoKHRoaXMucHJlc3N1cmUvMC4wMjk1Mjk5ODMwNzE0NDUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdG8gSW1wZXJpYWxcbiAgICAgICAgICAgIHRoaXMudGVtcFVuaXQgPSBcIkZcIjtcbiAgICAgICAgICAgIHRoaXMucHJlc3NVbml0ID0gXCJpbkhnXCI7XG4gICAgICAgICAgICB0aGlzLndpbmRVbml0ID0gXCJtcGhcIjtcbiAgICAgICAgICAgIHRoaXMudGVtcE5vdyA9IE1hdGgucm91bmQoKCh0aGlzLnRlbXBOb3cqKDkvNSkpICsgMzIpKjEwKS8xMDtcbiAgICAgICAgICAgIHRoaXMudGVtcEZlZWwgPSBNYXRoLnJvdW5kKCgodGhpcy50ZW1wRmVlbCooOS81KSkgKyAzMikqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy53aW5kU3BlZWQgPSBNYXRoLnJvdW5kKCh0aGlzLndpbmRTcGVlZC8xLjYwOTM0NCkqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy5wcmVzc3VyZSA9IE1hdGgucm91bmQoKHRoaXMucHJlc3N1cmUqMC4wMjk1Mjk5ODMwNzE0NDUpKjEwMCkvMTAwO1xuICAgICAgICB9XG4gICAgfSxcbn1cblxuY29uc3QgbG9jYXRpb25EYXRhID0gIHtcbiAgICBjaXR5OiBcIlwiLFxuICAgIGNvdW50cnk6IFwiXCIsXG4gICAgc3RhdGU6IFwiXCIsXG4gICAgbG9uZzogXCJcIixcbiAgICBsYXQ6IFwiXCIsXG59XG5cblxuXG4vL0Z1bmN0aW9uc1xuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAvL0luaXRpYWxpemluZyBwYWdlIHdpdGggQXRsYW50YSBHQSB3ZWF0aGVyIGRhdGFcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS52YWx1ZSA9IFwiQXRsYW50YVwiO1xuICAgIGNvbnN0IGV2ZW50U3RhcnQgPSBuZXcgRXZlbnQoJ3N1Ym1pdCcse2NhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmRpc3BhdGNoRXZlbnQoZXZlbnRTdGFydCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xufTtcblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIC8vQWRkaW5nIGV2ZW50IGxpc3RlbmVycyBmb3Igc2VhcmNoIGJhciBhbmQgY29sb3IgdG9nZ2xlIFxuICAgIGxldCBmb3JtSW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gICAgbGV0IGNvbG9yVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveFwiKTtcbiAgICBmb3JtSW4uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLHN1Ym1pdEluKTtcbiAgICAvL3N1Ym1pdHMgb24gZW50ZXIga2V5IGZyb20gaW5wdXQgZWxlbWVudCBvciBzdWJtaXQgYnV0dG9uIFxuICAgIGNvbG9yVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIix0b2dnbGVDb2xvck1vZGUpO1xufTtcblxuY29uc3QgYWRkVW5pdExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAvL2FkZHMgc3dpdGNoIHVuaXQgZXZlbnQgbGlzdGVuZXIgc2luY2UgZnVuY3Rpb25hbGl0eSBpc250IG5lY2Vzc2FyeSBpbml0aWFsbHkgXG4gICAgbGV0IHVuaXRTd2l0Y2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXQtdG9nZ2xlXCIpO1xuICAgIHVuaXRTd2l0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsc3dpdGNoVW5pdHMpO1xufTtcblxuY29uc3QgdG9nZ2xlQ29sb3JNb2RlID0gKCkgPT4ge1xuICAgIC8vdG9nZ2xlcyBjbGFzcyBvZiBib2R5IGVsZW1lbnQgdG8gZGV0ZXJtaW5lIGNvbG9yIHNjaGVtZSBvZiBkaXNwbGF5XG4gICAgbGV0IGRvY0JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBkb2NCb2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLW1vZGVcIik7XG5cbn07XG5cbmNvbnN0IHN1Ym1pdEluID0gKGUpID0+IHtcbiAgICAvL2hhbmRsZXMgZnVuY3Rpb25hbGl0eSBvZiB1c2VyIGlucHV0IGFuZCBkaXNwbGF5IG9uIHBhZ2UgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBzZWFyY2hJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKTtcbiAgICBsZXQgc2VhcmNoVmFsdWUgPSBjbGVhbklucHV0KHNlYXJjaElucHV0RWxlbWVudC52YWx1ZS50cmltKCkpO1xuXG4gICAgaWYgKHNlYXJjaFZhbHVlWzBdIDwgMSkge1xuICAgICAgICAvL2Vycm9yIGhhbmRsaW5nIC0gbm8gc2VhcmNoIHZhbHVlIGVycm9yIGhhbmRsaW5nXG4gICAgICAgIHNlYXJjaElucHV0RWxlbWVudC5jbGFzc0xpc3QgPSBcInNlYXJjaC1pbnB1dCBpbnZhbGlkXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZXJyb3JcIikuaW5uZXJIVE1MID0gXCJQbGVhc2UgaW5wdXQgYSBsb2NhdGlvbi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvL2Vycm9yIGhhbmRsaW5nIC0gcmVzZXRcbiAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LmNsYXNzTGlzdCA9IFwic2VhcmNoLWlucHV0XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZXJyb3JcIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAvL0ludGlhdGVzIEFQSSBDYWxsIGZvciBHZW8gTG9jYXRpb24gRGF0YVxuICAgICAgICBnZXRHZW8oc2VhcmNoVmFsdWUpLnRoZW4oKHJlc3VsdEdlbykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdEdlbykge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5jaXR5ID0gcmVzdWx0R2VvWzBdLm5hbWU7XG4gICAgICAgICAgICAgICAgbG9jYXRpb25EYXRhLmNvdW50cnkgPSByZXN1bHRHZW9bMF0uY291bnRyeTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkRhdGEuc3RhdGUgPSByZXN1bHRHZW9bMF0uc3RhdGU7XG4gICAgICAgICAgICAgICAgbG9jYXRpb25EYXRhLmxvbmcgPSByZXN1bHRHZW9bMF0ubG9uO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5sYXQgPSByZXN1bHRHZW9bMF0ubGF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vSW50aWF0ZXMgQVBJIENhbGwgZm9yIFdlYXRoZXIgRGF0YSBwZXIgR2VvIERhdGFcbiAgICAgICAgICAgIGdldFdlYXRoZXIoKS50aGVuKChyZXN1bHRXZWF0aGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEuY2l0eSA9IHJlc3VsdFdlYXRoZXIubmFtZTtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID0gcmVzdWx0V2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLndlYXRoZXJJY29uID0gcmVzdWx0V2VhdGhlci53ZWF0aGVyWzBdLmljb247XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEudGVtcE5vdyA9IE1hdGgucm91bmQoKHJlc3VsdFdlYXRoZXIubWFpbi50ZW1wIC0gMjczLjE1KSoxMCkvMTA7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEudGVtcEZlZWwgPSBNYXRoLnJvdW5kKChyZXN1bHRXZWF0aGVyLm1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSkqMTApLzEwO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLnRlbXBVbml0ID0gXCJDXCI7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEucHJlc3NVbml0ID0gXCJoUGFcIjtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS53aW5kVW5pdCA9IFwia3BoXCI7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEud2luZFNwZWVkID0gcmVzdWx0V2VhdGhlci53aW5kLnNwZWVkO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLndpbmREaXJlY3Rpb24gPSByZXN1bHRXZWF0aGVyLndpbmQuZGVnO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLmh1bWlkaXR5ID0gcmVzdWx0V2VhdGhlci5tYWluLmh1bWlkaXR5O1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLnByZXNzdXJlID0gcmVzdWx0V2VhdGhlci5tYWluLnByZXNzdXJlO1xuICAgICAgICAgICAgICAgIGFkZFVuaXRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9O1xufTtcblxuY29uc3QgZ2V0R2VvID0gYXN5bmMgKGxvY2F0aW9uSW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgYXBpS2V5R2VvID0gXCJhMzViZTAxZTY0OGQyNGM2MWRlNzRiMTY4NDY1NmJlOVwiIC8vZnJlZSBhcGkga2V5LCBzYW1lIGZvciBHZW8gYW5kIFdlYXRoZXIgQVBJc1xuICAgICAgICBsZXQgdXJsR2VvID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25JblswXX0mbGltaXQ9MyZhcHBpZD0ke2FwaUtleUdlb31gO1xuICAgICAgICBsZXQgcmVzcG9uc2VHZW8gPSBhd2FpdCBmZXRjaCh1cmxHZW8sIHttb2RlOiBcImNvcnNcIn0pO1xuICAgICAgICBsZXQgZ2VvRGF0YU91dCA9IGF3YWl0IHJlc3BvbnNlR2VvLmpzb24oKTtcbiAgICAgICAgLy9lcnJvciBoYW5kbGluZyAtIG5vIGxvY2F0aW9uIGRhdGEgZnJvbSBBUElcbiAgICAgICAgaWYgKGdlb0RhdGFPdXQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgXCJUaGF0IGxvY2F0aW9uIHdhcyBub3QgZm91bmQuIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBnZW9EYXRhT3V0O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS5jbGFzc0xpc3QgPSBcInNlYXJjaC1pbnB1dCBpbnZhbGlkXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZXJyb3JcIikuaW5uZXJIVE1MID0gYCR7ZXJyfWA7XG4gICAgfTtcbn07XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGFwaUtleSA9IFwiYTM1YmUwMWU2NDhkMjRjNjFkZTc0YjE2ODQ2NTZiZTlcIiAvL2ZyZWUgYXBpIGtleVxuICAgICAgICBsZXQgVVJMID1gaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bG9jYXRpb25EYXRhLmxhdH0mbG9uPSR7bG9jYXRpb25EYXRhLmxvbmd9JmFwcGlkPSR7YXBpS2V5fWA7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwge21vZGU6IFwiY29yc1wifSk7XG4gICAgICAgIGxldCB3ZWF0aGVyRGF0YU91dCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgLy9lcnJvciBoYW5kbGluZyAtIG5vIHdlYXRoZXIgZGF0YSBmcm9tIEFQSVxuICAgICAgICBpZiAod2VhdGhlckRhdGFPdXQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgXCJUaGUgd2VhdGhlciBmb3IgdGhhdCBsb2NhdGlvbiB3YXMgbm90IGZvdW5kLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YU91dDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIikuY2xhc3NMaXN0ID0gXCJzZWFyY2gtaW5wdXQgaW52YWxpZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWVycm9yXCIpLmlubmVySFRNTCA9IGAke2Vycn1gO1xuICAgIH07XG59O1xuXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIC8vTG9jYXRpb25cbiAgICBpZiAobG9jYXRpb25EYXRhLnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY2l0eSBwXCIpO1xuICAgICAgICBsb2NhdGlvblRleHQuaW5uZXJIVE1MID0gYCR7bG9jYXRpb25EYXRhLmNpdHl9LCAke2xvY2F0aW9uRGF0YS5jb3VudHJ5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY2l0eSBwXCIpO1xuICAgICAgICBsb2NhdGlvblRleHQuaW5uZXJIVE1MID0gYCR7bG9jYXRpb25EYXRhLmNpdHl9LCAke2xvY2F0aW9uRGF0YS5zdGF0ZX0sICR7bG9jYXRpb25EYXRhLmNvdW50cnl9YDtcbiAgICB9O1xuICAgIC8vV2VhdGhlciBEZXNjcmlwdGlvblxuICAgIGxldCB3ZWF0aGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjd2VhdGhlciBwXCIpO1xuICAgIHdlYXRoZXJUZXh0LmlubmVySFRNTCA9IGAke3dlYXRoZXJEYXRhLndlYXRoZXJ9YDtcbiAgICAvL1dlYXRoZXIgSW1hZ2VcbiAgICBsZXQgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I3dlYXRoZXItaW1nIGltZ1wiKTtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlckljb259QDJ4LnBuZ2A7XG4gICAgLy9UZW1wIEN1cnJlbnRcbiAgICBsZXQgdGVtcE5vd1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I3RlbXAtbm93IHBcIik7XG4gICAgdGVtcE5vd1RleHQuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEudGVtcE5vd31gO1xuICAgIC8vVW5pdHNcbiAgICBsZXQgdW5pdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I3VuaXRzIHBcIik7XG4gICAgdW5pdFRleHQuaW5uZXJIVE1MID0gYMKwJHt3ZWF0aGVyRGF0YS50ZW1wVW5pdH1gO1xuICAgIC8vVGVtcCBGZWVscyBMaWtlXG4gICAgbGV0IHRlbXBGZWVsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjdGVtcC1mZWVsIHBcIik7XG4gICAgdGVtcEZlZWxUZXh0LmlubmVySFRNTCA9IGBGZWVscyBMaWtlOiAke3dlYXRoZXJEYXRhLnRlbXBGZWVsfSDCsCR7d2VhdGhlckRhdGEudGVtcFVuaXR9YDtcbiAgICAvL1dpbmRcbiAgICBsZXQgd2luZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I3dpbmQgcFwiKTtcbiAgICB3aW5kVGV4dC5pbm5lckhUTUwgPSBgV2luZDogJHt3ZWF0aGVyRGF0YS53aW5kU3BlZWR9JHt3ZWF0aGVyRGF0YS53aW5kVW5pdH0gJHtyZXR1cm5EaXJlY3Rpb24od2VhdGhlckRhdGEud2luZERpcmVjdGlvbil9YDtcbiAgICAvL0h1bWlkaXR5XG4gICAgbGV0IGh1bWlkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjaHVtaWRpdHkgcFwiKTtcbiAgICBodW1pZFRleHQuaW5uZXJIVE1MID0gYEh1bWlkaXR5OiAke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSVgO1xuICAgIC8vUHJlc3N1cmVcbiAgICBsZXQgcHJlc3N1cmVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNwcmVzc3VyZSBwXCIpO1xuICAgIHByZXNzdXJlVGV4dC5pbm5lckhUTUwgPSBgUHJlc3N1cmU6ICR7d2VhdGhlckRhdGEucHJlc3N1cmV9JHt3ZWF0aGVyRGF0YS5wcmVzc1VuaXR9YDtcbn07XG5cbmNvbnN0IHJldHVybkRpcmVjdGlvbiA9ICh3aW5kRGVncmVlcykgPT4ge1xuICAgIGlmICg2Ny41ID4gd2luZERlZ3JlZXMgJiYgd2luZERlZ3JlZXMgPj0gMjIuNSkge1xuICAgICAgICByZXR1cm4gXCJORVwiO1xuICAgIH0gZWxzZSBpZiAoMTEyLjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSA2Ny41KSB7XG4gICAgICAgIHJldHVybiBcIkVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoMTU3LjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSAxMTIuNSkge1xuICAgICAgICByZXR1cm4gXCJTRVwiO1xuICAgIH1cbiAgICBlbHNlIGlmICgyMDIuNSA+IHdpbmREZWdyZWVzICYmIHdpbmREZWdyZWVzID49IDE1Ny41KSB7XG4gICAgICAgIHJldHVybiBcIlNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoMjQ3LjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSAyMDIuNSkge1xuICAgICAgICByZXR1cm4gXCJTV1wiO1xuICAgIH1cbiAgICBlbHNlIGlmICgyOTUuNSA+IHdpbmREZWdyZWVzICYmIHdpbmREZWdyZWVzID49IDI0Ny41KSB7XG4gICAgICAgIHJldHVybiBcIldcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoMzM3LjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSAyOTUuNSkge1xuICAgICAgICByZXR1cm4gXCJOV1wiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiTlwiO1xuICAgIH1cbn07XG5cbmNvbnN0IHN3aXRjaFVuaXRzID0gKCkgPT4ge1xuICAgIHdlYXRoZXJEYXRhLnN3aXRjaFRlbXBVbml0KCk7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xufTtcblxuY29uc3QgY2xlYW5JbnB1dCA9IChpbnB1dFZhbHVlKSA9PiB7XG4gICAgLy9GdW5jdGlvbiB0byBoYW5kbGUgdXNlciBpbnB1dCBmb3IgQVBJIEdlbyBzZWFyY2hcbiAgICAvL0ZvciBub3cgc2ltcGx5IHNwbGl0dGluZyBvdXQgaW4gY2FzZSBvZiBjb21tYSBpbnB1dFxuICAgIGxldCBpbnB1dHNBbGwgPSBpbnB1dFZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICByZXR1cm4gaW5wdXRzQWxsO1xufTtcblxuLy9Jbml0aWFsaXppbmcgcGFnZSB3aXRoIFdlYXRoZXIgRGF0YSBhbmQgVUkgY29udHJvbHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhZGRMaXN0ZW5lcnMoKSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdCk7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==