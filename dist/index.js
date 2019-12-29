(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("feather-icons-react"), require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.input"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/koenbok.tab-bar"); } catch(e) {} }()), require("material-icons-react"), require("react"), require("react-column-resizer"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["feather-icons-react", "framer", "framer-package-loader!@framer/benjamin.input", "framer-package-loader!@framer/koenbok.tab-bar", "material-icons-react", "react", "react-column-resizer", "styled-components"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("feather-icons-react"), require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/benjamin.input"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/koenbok.tab-bar"); } catch(e) {} }()), require("material-icons-react"), require("react"), require("react-column-resizer"), require("styled-components")) : factory(root["feather-icons-react"], root["Framer"], root["framer-package-loader!@framer/benjamin.input"], root["framer-package-loader!@framer/koenbok.tab-bar"], root["material-icons-react"], root["React"], root["react-column-resizer"], root["styled-components"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_feather_icons_react__, __WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_input__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_koenbok_tab_bar__, __WEBPACK_EXTERNAL_MODULE_material_icons_react__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_column_resizer__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./code/styles.css":
/*!*********************************************************************************************************************!*\
  !*** /Users/udig/.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./code/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".resizer{\n    background:red;\n    width:6px;\n}", ""]);


/***/ }),

/***/ "../../../.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************************************************!*\
  !*** /Users/udig/.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../../.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/udig/.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.tsx": "./code/App.tsx",
	"./Button.tsx": "./code/Button.tsx",
	"./Comp.tsx": "./code/Comp.tsx",
	"./DataView.tsx": "./code/DataView.tsx",
	"./Examples.tsx": "./code/Examples.tsx",
	"./Grid2.tsx": "./code/Grid2.tsx",
	"./HeaderButton.tsx": "./code/HeaderButton.tsx",
	"./IDETabs2.tsx": "./code/IDETabs2.tsx",
	"./Icon.tsx": "./code/Icon.tsx",
	"./IconBtn.tsx": "./code/IconBtn.tsx",
	"./Input.tsx": "./code/Input.tsx",
	"./Layers.tsx": "./code/Layers.tsx",
	"./LeftTree.tsx": "./code/LeftTree.tsx",
	"./Panels.tsx": "./code/Panels.tsx",
	"./PropertiesPanel.tsx": "./code/PropertiesPanel.tsx",
	"./ReactCloseableTabs.tsx": "./code/ReactCloseableTabs.tsx",
	"./Tabbar.tsx": "./code/Tabbar.tsx",
	"./Tabs.tsx": "./code/Tabs.tsx",
	"./Test.tsx": "./code/Test.tsx",
	"./Test_1.tsx": "./code/Test_1.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./snippets.tsx": "./code/snippets.tsx",
	"./styles.css": "./code/styles.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQThDO0FBRTlDLHNFQUFzRTtBQUN0RSxtREFBbUQ7QUFDbkQsTUFBTSxJQUFJLEdBQUcsYUFBSSxDQUFDO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsY0FBYyxFQUFFLElBQUk7SUFDcEIsS0FBSyxFQUFFLEtBQUs7SUFDWixNQUFNLEVBQUUsS0FBSztJQUNiLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLE1BQU0sRUFBRSxPQUFPO0lBQ2YsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO0lBQ3RELE9BQU8sRUFBRTtRQUNMO1lBQ0ksR0FBRyxFQUFFLFNBQVM7WUFDZCxTQUFTLEVBQUUsQ0FDUDtnQkFDSSxvQkFBQyxjQUFLLGlCQUFlLENBQ25CLENBQ1Q7WUFDRCxFQUFFLEVBQUUsQ0FBQztZQUNMLFNBQVMsRUFBRSxJQUFJO1NBQ2xCO1FBQ0Q7WUFDSSxHQUFHLEVBQUUsWUFBWTtZQUNqQixTQUFTLEVBQUUsQ0FDUCw2QkFBSyxLQUFLLEVBQUMsa0RBQWtELHlCQUV2RCxDQUNUO1lBQ0QsRUFBRSxFQUFFLENBQUM7WUFDTCxTQUFTLEVBQUUsSUFBSTtTQUNsQjtRQUNEO1lBQ0ksR0FBRyxFQUFFLFNBQVM7WUFDZCxTQUFTLEVBQUUsc0RBQTZCO1lBQ3hDLEVBQUUsRUFBRSxDQUFDO1lBQ0wsU0FBUyxFQUFFLElBQUk7U0FDbEI7S0FDSjtDQUNKLENBQUMsQ0FBQTtBQUVGLGtEQUFrRDtBQUNsRCxlQUFlO0FBQ2YsOEJBQThCO0FBQzlCLHVDQUF1QztBQUN2QyxvREFBb0Q7QUFDcEQsYUFBYTtBQUNiLFFBQVE7QUFDUixJQUFJO0FBRUosTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7O0lBQzlCLE9BQU8sS0FBSyxDQUFDLE1B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

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
// import { Unsplash } from "@framer/unsplash.unsplash/code/Unsplash";
// Override Docs: https://framer.com/docs/overrides
const data = framer_1.Data({
    focusedTab: null,
    iconTabsActive: null,
    popup: false,
    corvid: false,
    propertiesPanel: false,
    layout: "stage",
    popupState: { type: "Primary", text: "Enable Corvid" },
    IDEtabs: [
        {
            tab: "Home.js",
            component: (React.createElement("div", null,
                React.createElement(framer_1.Frame, null, "frame1"))),
            id: 1,
            closeable: true,
        },
        {
            tab: "Gallery.js",
            component: (React.createElement("div", { style: "width:400px;height:400px; background-color:#000;" }, "Item details for 2")),
            id: 2,
            closeable: true,
        },
        {
            tab: "Item.js",
            component: React.createElement("div", null, "Item details for 3"),
            id: 3,
            closeable: true,
        },
    ],
});
// export function onUpdateTabs(props): Override {
//     return {
//         tabs: data.IDEtabs,
//         updateTabs(array, element) {
//             data.IDEtabs = remove(array, element)
//         },
//     }
// }
const remove = (array, element) => {
    window["__checkBudget__"]();
    return array.filter(el => el !== element);
};
function enableCorvid(props) {
    window["__checkBudget__"]();
    return {
        layout: data.layout,
        IDETabs: data.IDEtabs,
        updateTabs(array, element) {
            window["__checkBudget__"]();
            data.IDEtabs = remove(array, element);
        },
        onTabFocusChange(x, y, z) {
            window["__checkBudget__"]();
            data.focusedTab = x;
        },
        setLayout(ly) {
            window["__checkBudget__"]();
            console.log("set" + ly);
            data.layout = ly;
        },
    };
}
exports.enableCorvid = enableCorvid;
function ShowPopup(props) {
    window["__checkBudget__"]();
    return {
        visible: data.popup,
    };
}
exports.ShowPopup = ShowPopup;
function propertiesPanel(props) {
    window["__checkBudget__"]();
    return {
        visible: data.propertiesPanel,
    };
}
exports.propertiesPanel = propertiesPanel;
function toggleToolbar(props) {
    window["__checkBudget__"]();
    return {
        visible: data.layout === "stage" ? true : false,
    };
}
exports.toggleToolbar = toggleToolbar;
function setPanelView(props) {
    window["__checkBudget__"]();
    return {
        view: data.iconTabsActive,
    };
}
exports.setPanelView = setPanelView;
function DevSwitchButton(props) {
    window["__checkBudget__"]();
    return {
        style: {
            cursor: "pointer",
        },
        State: data.layout === "stage" ? "Off" : "On",
        onClick() {
            window["__checkBudget__"]();
            let current = data.layout;
            if (current == "stage") {
                data.layout = "ide";
                clearTabs();
            }
            else {
                data.layout = "stage";
            }
        },
    };
}
exports.DevSwitchButton = DevSwitchButton;
function adjustStageHeight(props) {
    window["__checkBudget__"]();
    return {
        height: data.layout == "stage" ? "95%" : "105%",
    };
}
exports.adjustStageHeight = adjustStageHeight;
function listenToIconTabs(props) {
    window["__checkBudget__"]();
    return {
        setActive(v) {
            window["__checkBudget__"]();
            data.iconTabsActive = v;
        },
        active: data.iconTabsActive,
    };
}
exports.listenToIconTabs = listenToIconTabs;
function tooglePopup(props) {
    window["__checkBudget__"]();
    return {
        onClick() {
            window["__checkBudget__"]();
            const ide = !data.popup;
            data.popup = ide;
        },
    };
}
exports.tooglePopup = tooglePopup;
function compClick(props) {
    window["__checkBudget__"]();
    return {
        visible: false,
        onTap() {
            window["__checkBudget__"]();
            console.log("tap");
        },
    };
}
exports.compClick = compClick;
function clearPanel(props) {
    window["__checkBudget__"]();
    return {
        style: { cursor: "pointer" },
        onClick() {
            window["__checkBudget__"]();
            data.iconTabsActive = null;
        },
    };
}
exports.clearPanel = clearPanel;
function toggleCorvid() {
    window["__checkBudget__"]();
    return {
        type: data.popupState.type,
        text: data.popupState.text,
        onClick() {
            window["__checkBudget__"]();
            const isOpen = !data.corvid;
            data.corvid = isOpen;
            data.popup = false;
            data.popupState.type = data.corvid ? "Secondery" : "Primary";
            data.popupState.text = data.corvid
                ? "Disable Corvid"
                : "Enable Corvid";
        },
    };
}
exports.toggleCorvid = toggleCorvid;
function setIDE(props) {
    window["__checkBudget__"]();
    return {
        width: "100%",
        height: "100%",
    };
}
exports.setIDE = setIDE;
function clearTabs() {
    window["__checkBudget__"]();
    data.iconTabsActive = null;
}
exports.clearTabs = clearTabs;
exports.__info__ = [{ "name": "enableCorvid", "type": "override" }, { "name": "ShowPopup", "type": "override" }, { "name": "propertiesPanel", "type": "override" }, { "name": "toggleToolbar", "type": "override" }, { "name": "setPanelView", "type": "override" }, { "name": "DevSwitchButton", "type": "override" }, { "name": "adjustStageHeight", "type": "override" }, { "name": "listenToIconTabs", "type": "override" }, { "name": "tooglePopup", "type": "override" }, { "name": "compClick", "type": "override" }, { "name": "clearPanel", "type": "override" }, { "name": "toggleCorvid", "type": "override" }, { "name": "setIDE", "type": "override" }];


/***/ }),

/***/ "./code/Button.tsx":
/*!*************************!*\
  !*** ./code/Button.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFvRTtBQUNwRSx5REFBeUQ7QUFXekQsTUFBTSxPQUFPLEdBQUc7SUFDWixlQUFlLEVBQUUsU0FBUztJQUMxQixVQUFVLEVBQUUsU0FBUztJQUNyQixLQUFLLEVBQUUsU0FBUztJQUNoQixTQUFTLEVBQUUsU0FBUztDQUN2QixDQUFBO0FBRUQsTUFBTSxTQUFTLEdBQUc7SUFDZCxlQUFlLEVBQUUsU0FBUztJQUMxQixVQUFVLEVBQUUsU0FBUztJQUNyQixLQUFLLEVBQUUsU0FBUztJQUNoQixTQUFTLEVBQUUsU0FBUztDQUN2QixDQUFBO0FBRUQsTUFBTSxlQUFlLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7Ozs7O2FBV3JCLENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLO3FCQUM1QixDQUFDLENBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZO3dCQUNsQyxDQUFDLENBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZTs7NEJBRTFDLENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVO2lCQUNwRCxDQUFDLENBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUzs7Q0FFeEQsQ0FBQTtBQUVELE1BQWEsTUFBTyxTQUFRLEtBQUssQ0FBQyxTQUFnQjtJQW1COUMsTUFBTTs7UUFDRixPQUFPLENBQ0gsb0JBQUMsaUNBQWEsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLG9CQUFDLGNBQUssSUFBQyxTQUFTLEVBQUMsT0FBTztnQkFDcEIsb0JBQUMsZUFBZSxJQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDM0IsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUVwQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDRixDQUNkLENBQ0ksQ0FDbkIsQ0FBQTtLQUNKOztBQWhDTCx3QkFpQ0M7QUFoQ1UsbUJBQVksR0FBRztJQUNsQixJQUFJLEVBQUUsU0FBUztJQUNmLElBQUksRUFBRSxjQUFjO0lBQ3BCLFlBQVksRUFBRSxFQUFFO0lBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsaUNBQUc7Q0FDcEIsQ0FBQTtBQUVNLHVCQUFnQixHQUFxQjtJQUN4QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUNqRCxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUMzRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQztRQUNqQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ3pDO0NBQ0osQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const Primary = {
    backgroundColor: "#3899EC",
    hoverColor: "#4EB7F5",
    color: "#ffffff",
    fontHover: "#ffffff",
};
const Secondery = {
    backgroundColor: "#eaf7ff",
    hoverColor: "#D3EDFF",
    color: "#3899ec",
    fontHover: "#3899EC",
};
const ButtonContainer = styled_components_1.default.div `
    position: relative;
    width:auto;
    padding: 0 18px;
    height: 30px;
    font-family:HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:14px;
    line-height:14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(p) => p.theme.color};
    border-radius: ${(p) => p.borderRadius}px;
    background-color: ${(p) => p.theme.backgroundColor};
    &:hover {
        background-color: ${(p) => p.theme.hoverColor};
        color: ${(p) => p.theme.fontHover};
    }
`;
class Button extends React.Component {
    render() {
        window["__checkBudget__"]();
        return (React.createElement(styled_components_1.ThemeProvider, { theme: eval(this.props.type) },
            React.createElement(framer_1.Stack, { alignment: "start" },
                React.createElement(ButtonContainer, { onClick: this.props.onClick, borderRadius: this.props.borderRadius }, this.props.text))));
    }
}
exports.Button = Button;
Button.defaultProps = {
    type: "Primary",
    text: "Hello World!",
    borderRadius: 15,
    onClick: () => { window["__checkBudget__"](); },
};
Button.propertyControls = {
    text: { type: framer_1.ControlType.String, title: "Text" },
    borderRadius: { type: framer_1.ControlType.Number, title: "Radius" },
    type: {
        type: framer_1.ControlType.Enum,
        title: "Type",
        options: ["Primary", "Secondery"],
        optionTitles: ["Primary", "Secondery"],
    },
};
exports.__info__ = [{ "name": "Button", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Comp.tsx":
/*!***********************!*\
  !*** ./code/Comp.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQ29tcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXVFO0FBQ3ZFLHVEQUFtRDtBQUNuRCw0QkFBNEI7QUFDNUIscUNBQXFDO0FBRXJDLFNBQWdCLElBQUksQ0FBQyxLQUFLOztJQUN0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUE7SUFDckIsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQy9DLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyRCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUUzRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFOztRQUMzQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtLQUMvRCxDQUFDLENBQUE7SUFFRixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTs7UUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDcEIsQ0FBQTtJQUNELE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFOztRQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDakIsQ0FBQTtJQUVELE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFOztRQUNoQixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDbEIsQ0FBQTtJQUVELE9BQU8sQ0FDSCxvQkFBQyxjQUFLO1FBQ0Ysb0JBQUMsY0FBSyxJQUNGLElBQUksUUFDSixZQUFZLEVBQUUsS0FBSyxFQUNuQixLQUFLLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLE1BQU07YUFDakIsRUFDRCxZQUFZLEVBQUUsT0FBTyxFQUNyQixZQUFZLEVBQUUsT0FBTyxFQUNyQixLQUFLLEVBQUUsS0FBSztZQUVaLG9CQUFDLGNBQUssSUFDRixLQUFLLEVBQUU7b0JBQ0gsVUFBVSxFQUFFLE9BQU87b0JBQ25CLEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRSxNQUFNO2lCQUNqQixJQUVBLEtBQUssQ0FBQyxJQUFJLENBQ1A7WUFDUCxVQUFVLENBQ1A7UUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLG9CQUFDLGlDQUFlLE9BQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNsQyxDQUNYLENBQUE7Q0FDSjtBQWhERCxvQkFnREM7QUFFRCw0QkFBbUIsQ0FBQyxJQUFJLEVBQUU7SUFDdEIsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLG9CQUFXLENBQUMsaUJBQWlCO0tBQ3RDO0lBQ0QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Q0FDbEQsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLFlBQVksR0FBRztJQUNoQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0NBQ2YsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const PropertiesPanel_1 = __webpack_require__(/*! ./PropertiesPanel */ "./code/PropertiesPanel.tsx");
// Open Preview: Command + P
// Learn more: https://framer.com/api
function Comp(props) {
    window["__checkBudget__"]();
    let activeView = null;
    const [hover, setHover] = React.useState(false);
    const [dropDown, setDropdown] = React.useState(false);
    const compStyle = hover ? { border: "1px solid #09F" } : {};
    React.Children.forEach(props.children, child => {
        window["__checkBudget__"]();
        activeView = React.cloneElement(child, { style: compStyle });
    });
    const onTap = e => {
        window["__checkBudget__"]();
        setDropdown(true);
    };
    const onEnter = e => {
        window["__checkBudget__"]();
        setHover(true);
    };
    const onLeave = e => {
        window["__checkBudget__"]();
        setHover(false);
    };
    return (React.createElement(framer_1.Stack, null,
        React.createElement(framer_1.Stack, { drag: true, dragMomentum: false, style: {
                width: "auto",
                height: "auto",
            }, onMouseEnter: onEnter, onMouseLeave: onLeave, onTap: onTap },
            React.createElement(framer_1.Frame, { style: {
                    background: "white",
                    width: "auto",
                    height: "auto",
                } }, props.text),
            activeView),
        dropDown ? React.createElement(PropertiesPanel_1.PropertiesPanel, null) : null));
}
exports.Comp = Comp;
framer_1.addPropertyControls(Comp, {
    children: {
        type: framer_1.ControlType.ComponentInstance,
    },
    text: { type: framer_1.ControlType.String, title: "ID" },
});
Comp.defaultProps = {
    view: "view",
    text: "text",
};
exports.__info__ = [{ "name": "Comp", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/DataView.tsx":
/*!***************************!*\
  !*** ./code/DataView.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0RhdGFWaWV3LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBK0M7QUFDL0MsaUNBQTZCO0FBQzdCLHlEQUFzQztBQUN0Qyx5QkFBeUI7QUFDekIsNENBQTRDO0FBRTVDLFNBQWdCLFFBQVEsQ0FBQyxLQUFLOztJQUMxQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO0lBRXJCLE9BQU8sQ0FDSCw2QkFBSyxLQUFLLEVBQUUsU0FBUztRQUNqQixvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLHVCQUVoRDtRQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQ2xCLE9BQU8sQ0FDSCxvQkFBQyxNQUFNLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUMvRCxDQUFBO1NBQ0osQ0FBQyxDQUNBLENBQ1QsQ0FBQTtDQUNKO0FBZkQsNEJBZUM7QUFFRCxTQUFnQixNQUFNLENBQUMsS0FBSzs7SUFDeEIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN2QixNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFNUMsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFOztRQUNmLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFBO1FBQ3pCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtLQUN2QixDQUFBO0lBRUQsT0FBTyxDQUNIO1FBQ0ksb0JBQUMsT0FBTyxJQUFDLE9BQU8sRUFBRSxLQUFL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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function DataView(props) {
    window["__checkBudget__"]();
    let tree = props.tree;
    return (React.createElement("div", { style: treeStyle },
        React.createElement(framer_1.Frame, { width: "100%", height: "36px", style: HeaderStyle }, "Data Collections"),
        tree.map((item, i) => {
            window["__checkBudget__"]();
            return (React.createElement(Folder, { section: item.section, files: item.items, key: i }));
        })));
}
exports.DataView = DataView;
function Folder(props) {
    window["__checkBudget__"]();
    let files = props.files;
    const [open, setOpen] = React.useState(true);
    const onTap = () => {
        window["__checkBudget__"]();
        const folderState = !open;
        setOpen(folderState);
    };
    return (React.createElement("div", null,
        React.createElement(Section, { onClick: onTap },
            React.createElement(Icon_1.Icon, { icon: "credit-card", set: "feather", height: "14px", width: "14px", color: "#162D3D" }),
            React.createElement(framer_1.Frame, { style: labelStyle }, props.section),
            React.createElement(framer_1.Frame, { height: "14px", width: "14px", position: "relative", background: "transparent", visible: false },
                React.createElement(Icon_1.Icon, { icon: "more-vertical", set: "feather", height: "14px", width: "14px", color: "#878787", visible: false }))),
        open
            ? files.map((file, index) => (React.createElement(File, { key: index },
                React.createElement(Icon_1.Icon, { icon: file.icon, set: file.set, height: "14px", width: "14px", color: "#162D3D" }),
                React.createElement(framer_1.Frame, { style: labelStyle }, file.label))))
            : null));
}
exports.Folder = Folder;
const treeStyle = {
    position: "relative",
    flexDirection: "column",
    justifyContent: "start",
    width: "100%",
    height: "100%",
    background: "#F4F4F4",
};
const HeaderStyle = {
    fontFamily: "HelveticaNeueW01-55Ligh, HelveticaNeueW02-55Ligh, HelveticaNeueW10-55Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "14px",
    textAlign: "left",
    background: "#F4F4F4",
    justifyContent: "left",
    paddingLeft: "10px",
    color: "#162D3D",
    borderBottom: "1px solid #DEDEDE",
    position: "relative",
};
const labelStyle = {
    marginLeft: "5px",
    background: "transparent",
    fontFamily: "HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    justifyContent: "left",
    paddingLeft: "20px",
};
const Section = styled_components_1.default.div `
    text-align: left;
    background: #F4F4F4;
    color: #162D3D;
    width: 100%;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content:space-between;
    cursor: pointer;
    padding-left: 5px;
    &:hover{
        background: #E6E6E6;
    }
`;
const File = styled_components_1.default.div `
    position: relative;
    width:100%;
    padding-left:30px;
    height: 30px;
    font-family:HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:12px;
    color: #162D3D;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    background: #F4F4F4;
    &:hover{
        background: #E6E6E6;
    }
`;
const lineStyle = {
    background: "#DEDEDE",
    height: "36px",
    width: "1px",
    left: "12px",
    top: "0px",
};
DataView.defaultProps = {
    tree: [
        {
            section: "Insights",
            items: [
                { label: "Title", icon: "text_fields", set: "material" },
                { label: "Quote", icon: "text_fields", set: "material" },
                { label: "Sentiment", icon: "link", set: "material" },
            ],
        },
        {
            section: "Tags",
            items: [
                { label: "Title", icon: "text_fields", set: "material" },
                { label: "Insight", icon: "link", set: "material" },
                { label: "count", icon: "hash", set: "feather" },
            ],
        },
    ],
};
Folder.defaultProps = {
    files: ["file1", "file2", "file3"],
    section: "Folder",
};
exports.__info__ = [{ "name": "DataView", "children": false, "type": "component" }, { "name": "Folder", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUF1QztBQUV2QyxNQUFNLElBQUksR0FBRyxhQUFJLENBQUM7SUFDZCxNQUFNLEVBQUUsQ0FBQztJQUNULE9BQU8sRUFBRSxDQUFDO0lBQ1YsTUFBTSxFQUFFLElBQUk7Q0FDZixDQUFDLENBQUE7QUFFRixTQUFnQixLQUFLOztJQUNqQixPQUFPO1FBQ0gsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtLQUM3QixDQUFBO0NBQ0o7QUFKRCxzQkFJQztBQUVELFNBQWdCLFNBQVM7O0lBQ3JCLE9BQU87UUFDSCxJQUFJLEVBQUUsSUFBSTtLQUNiLENBQUE7Q0FDSjtBQUpELDhCQUlDO0FBRUQsU0FBZ0IsTUFBTTs7SUFDbEIsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2hDLEtBQUs7O1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtTQUNqQztLQUNKLENBQUE7Q0FDSjtBQVBELHdCQU9DO0FBRUQsU0FBZ0IsU0FBUzs7SUFDckIsT0FBTztRQUNILEtBQUs7O1lBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQTtTQUN4QjtLQUNKLENBQUE7Q0FDSjtBQVJELDhCQVFDO0FBRUQsU0FBZ0IsVUFBVTs7SUFDdEIsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO0tBQ3JDLENBQUE7Q0FDSjtBQUpELGdDQUlDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const data = framer_1.Data({
    rotate: 0,
    rotateY: 0,
    toggle: true,
});
function Hover() {
    window["__checkBudget__"]();
    return {
        whileHover: { scale: 0.8 },
    };
}
exports.Hover = Hover;
function Draggable() {
    window["__checkBudget__"]();
    return {
        drag: true,
    };
}
exports.Draggable = Draggable;
function Rotate() {
    window["__checkBudget__"]();
    return {
        animate: { rotate: data.rotate },
        onTap() {
            window["__checkBudget__"]();
            data.rotate = data.rotate + 90;
        },
    };
}
exports.Rotate = Rotate;
function FlipInput() {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            const toggle = data.toggle;
            data.rotateY = toggle ? 180 : 0;
            data.toggle = !toggle;
        },
    };
}
exports.FlipInput = FlipInput;
function FlipOutput() {
    window["__checkBudget__"]();
    return {
        animate: { rotateY: data.rotateY },
    };
}
exports.FlipOutput = FlipOutput;
exports.__info__ = [{ "name": "Hover", "type": "override" }, { "name": "Draggable", "type": "override" }, { "name": "Rotate", "type": "override" }, { "name": "FlipInput", "type": "override" }, { "name": "FlipOutput", "type": "override" }];


/***/ }),

/***/ "./code/Grid2.tsx":
/*!************************!*\
  !*** ./code/Grid2.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0dyaWQyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBK0M7QUFDL0MsK0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxxQ0FBZ0M7QUFDaEMscUNBQW9DO0FBQ3BDLHlDQUFxQztBQUNyQyx5Q0FBcUM7QUFDckMscUNBQThCO0FBQzlCLHlDQUFxQztBQUNyQyxxQ0FBaUM7QUFDakMseURBQXNDO0FBRXRDLHVDQUFtQztBQVluQyxNQUFNLEtBQUssR0FBd0I7SUFDL0IsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sRUFBRSxLQUFLO0lBQ2QsTUFBTSxFQUFFLEtBQUs7SUFDYixNQUFNLEVBQUUsS0FBSztJQUNiLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFDRCxNQUFNLEVBQUUsR0FBd0I7SUFDNUIsTUFBTSxFQUFFLE1BQU07SUFDZCxhQUFhLEVBQUUsS0FBSztJQUNwQixPQUFPLEVBQUUsS0FBSztJQUNkLE1BQU0sRUFBRSxLQUFLO0lBQ2IsTUFBTSxFQUFFLEtBQUs7SUFDYixVQUFVLEVBQUUsT0FBTztDQUN0QixDQUFBO0FBRUQsTUFBTSxHQUFHLEdBQXdCO0lBQzdCLE1BQU0sRUFBRSxNQUFNO0lBQ2QsYUFBYSxFQUFFLEtBQUs7SUFDcEIsT0FBTyxFQUFFLEtBQUs7SUFDZCxNQUFNLEVBQUUsS0FBSztJQUNiLE1BQU0sRUFBRSxLQUFLO0lBQ2IsVUFBVSxFQUFFLE9BQU87SUFDbkIsUUFBUSxFQUFFLE1BQU07SUFDaEIsUUFBUSxFQUFFLE1BQU07SUFDaEIsZUFBZSxFQUFFLE9BQU87Q0FDM0IsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7Ozs7Ozs7OztDQVMvQixDQUFBO0FBRUQsU0FBUyxRQUFRLENBQUMsS0FBSzs7SUFDbkIsT0FBTyxv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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const react_column_resizer_1 = __webpack_require__(/*! react-column-resizer */ "react-column-resizer");
// import { ColumnResizer } from "./ColumnResizer"
const canvas_1 = __webpack_require__(/*! ./canvas */ "./code/canvas.tsx");
const canvas_2 = __webpack_require__(/*! ./canvas */ "./code/canvas.tsx");
const IDETabs2_1 = __webpack_require__(/*! ./IDETabs2 */ "./code/IDETabs2.tsx");
const LeftTree_1 = __webpack_require__(/*! ./LeftTree */ "./code/LeftTree.tsx");
const canvas_3 = __webpack_require__(/*! ./canvas */ "./code/canvas.tsx");
const DataView_1 = __webpack_require__(/*! ./DataView */ "./code/DataView.tsx");
const Layers_1 = __webpack_require__(/*! ./Layers */ "./code/Layers.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const IconBtn_1 = __webpack_require__(/*! ./IconBtn */ "./code/IconBtn.tsx");
const table = {
    width: "100%",
    height: "100%",
    padding: "0px",
    margin: "0px",
    border: "0px",
    borderSpacing: "0px",
};
const td = {
    height: "100%",
    verticalAlign: "top",
    padding: "0px",
    border: "0px",
    margin: "0px",
    background: "white",
};
const td1 = {
    height: "100%",
    verticalAlign: "top",
    padding: "0px",
    border: "0px",
    margin: "0px",
    background: "white",
    minWidth: "56px",
    maxWidth: "56px",
    backgroundColor: "white",
};
const Resizer = styled_components_1.default(CResizer) `
  background: transparent;
  width:3px;
  height:100%;
  border-right:1px solid #DEDEDE;
  transition: background 0.5s ease-out;
  &:hover{
      background: #DEDEDE;
  }
`;
function CResizer(props) {
    window["__checkBudget__"]();
    return React.createElement(react_column_resizer_1.default, { className: props.className });
}
class Grid2 extends React.Component {
    constructor(props) {
        super(props);
        this.setActive = v => {
            window["__checkBudget__"]();
            this.setState({ active: v });
        };
        this.setPanel = st => {
            window["__checkBudget__"]();
            if (st === "code") {
                return React.createElement(LeftTree_1.LeftTree, null);
            }
            else if (st === "database") {
                return React.createElement(DataView_1.DataView, null);
            }
            else if (st === "layers") {
                return React.createElement(Layers_1.Layers, null);
            }
        };
        this.applyLayout = ly => {
            window["__checkBudget__"]();
            switch (ly) {
                case "stage": {
                    return (React.createElement("tr", null,
                        React.createElement("td", { width: "100%", style: td },
                            React.createElement(canvas_1.Stage, { width: "100%", height: "100%" }))));
                    break;
                }
                case "ide": {
                    return (React.createElement("tr", null,
                        React.createElement("td", { style: td1 },
                            React.createElement(framer_1.Stack, { direction: "vertical", padding: 0, width: 56, gap: -1 },
                                React.createElement(IconBtn_1.IconBtn, { icon: "code", set: "feather", width: this.props.iconSize, height: this.props.iconSize, callback: this.setActive, activeTab: this.state["active"] }),
                                React.createElement(IconBtn_1.IconBtn, { icon: "database", set: "feather", width: this.props.iconSize, height: this.props.iconSize, callback: this.setActive, activeTab: this.state["active"] }),
                                React.createElement(IconBtn_1.IconBtn, { icon: "layers", set: "feather", width: this.props.iconSize, height: this.props.iconSize, callback: this.setActive, activeTab: this.state["active"] }))),
                        React.createElement("td", { width: "13%", style: td }, this.setPanel(this.state["active"])),
                        React.createElement(Resizer, null),
                        React.createElement("td", { width: "30%", style: td },
                            React.createElement(IDETabs2_1.IDETabs2, { data: this.props.IDETabs, onTabFocusChange: this.props.onTabFocusChange, setLayout: this.props.setLayout }),
                            React.createElement(framer_1.Frame, { width: "100%", height: "100%", background: "transparent" },
                                React.createElement(canvas_3.IDE, null))),
                        React.createElement(Resizer, null),
                        React.createElement("td", { width: "56%", style: td },
                            React.createElement(framer_1.Frame, { style: {
                                    position: "relative",
                                    height: "48px",
                                    width: "auto",
                                } },
                                React.createElement(canvas_2.MiniTools, { style: { width: "100%" } })),
                            React.createElement(canvas_1.Stage, { height: "100%", width: "100%", style: { position: "relative" } }))));
                }
                case "fullIDE": {
                    return (React.createElement("tr", null,
                        React.createElement("td", { style: td1 },
                            React.createElement(framer_1.Stack, { direction: "vertical", padding: 0, width: 56, gap: -1 },
                                React.createElement(IconBtn_1.IconBtn, { icon: "code", set: "feather", width: this.props.iconSize, height: this.props.iconSize, callback: this.setActive, activeTab: this.state["active"] }),
                                React.createElement(IconBtn_1.IconBtn, { icon: "database", set: "feather", width: this.props.iconSize, height: this.props.iconSize, callback: this.setActive, activeTab: this.state["active"] }),
                                React.createElement(IconBtn_1.IconBtn, { icon: "layers", set: "feather", width: this.props.iconSize, height: this.props.iconSize, callback: this.setActive, activeTab: this.state["active"] }))),
                        React.createElement("td", { width: "13%", style: td }, this.setPanel(this.state["active"])),
                        React.createElement(Resizer, null),
                        React.createElement("td", { width: "87%", style: td },
                            React.createElement(IDETabs2_1.IDETabs2, { data: this.props.IDETabs, onTabFocusChange: this.props.onTabFocusChange, setLayout: this.props.setLayout }),
                            React.createElement(framer_1.Frame, { width: "100%", height: "100%", background: "transparent" },
                                React.createElement(canvas_3.IDE, null)))));
                }
            }
        };
        window["__checkBudget__"]();
        this.state = {
            active: "code",
            layout: "stage",
        };
    }
    render() {
        window["__checkBudget__"]();
        return (React.createElement(framer_1.Frame, { width: "100%", height: "100%", background: "#F4F4F4" },
            React.createElement("table", { style: table },
                React.createElement("tbody", null, this.applyLayout(this.props.layout)))));
    }
}
exports.Grid2 = Grid2;
Grid2.defaultProps = {
    layout: "stage",
    onTabFocusChange: (x, y, z) => { window["__checkBudget__"](); },
    setLayout: ly => { window["__checkBudget__"](); },
    iconSize: 20,
};
exports.__info__ = [{ "name": "Grid2", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/HeaderButton.tsx":
/*!*******************************!*\
  !*** ./code/HeaderButton.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9IZWFkZXJCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFvRTtBQUNwRSx5REFBeUQ7QUFXekQsTUFBTSxPQUFPLEdBQUc7SUFDWixlQUFlLEVBQUUsU0FBUztJQUMxQixVQUFVLEVBQUUsU0FBUztJQUNyQixLQUFLLEVBQUUsU0FBUztJQUNoQixTQUFTLEVBQUUsU0FBUztDQUN2QixDQUFBO0FBRUQsTUFBTSxTQUFTLEdBQUc7SUFDZCxlQUFlLEVBQUUsU0FBUztJQUMxQixVQUFVLEVBQUUsU0FBUztJQUNyQixLQUFLLEVBQUUsU0FBUztJQUNoQixTQUFTLEVBQUUsU0FBUztDQUN2QixDQUFBO0FBRUQsTUFBTSxlQUFlLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7YUFhckIsQ0FBQyxDQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUs7cUJBQzVCLENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVk7d0JBQ2xDLENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs0QkFFMUMsQ0FBQyxDQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVU7aUJBQ3BELENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTOztDQUV4RCxDQUFBO0FBRUQsTUFBYSxZQUFhLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBbUJwRCxNQUFNOztRQUNGLE9BQU8sQ0FDSCxvQkFBQyxpQ0FBYSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkMsb0JBQUMsY0FBSyxJQUFDLFNBQVMsRUFBQyxPQUFPO2dCQUNwQixvQkFBQyxlQUFlLElBQ1osT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUMzQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBRXBDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNGLENBQ2QsQ0FDSSxDQUNuQixDQUFBO0tBQ0o7O0FBaENMLG9DQWlDQztBQWhDVSx5QkFBWSxHQUFHO0lBQ2xCLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLGNBQWM7SUFDcEIsWUFBWSxFQUFFLENBQUM7SUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLGlDQUFHO0NBQ3BCLENBQUE7QUFFTSw2QkFBZ0IsR0FBcUI7SUFDeEMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDakQsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDM0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFDakMsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQztLQUN6QztDQUNKLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const Primary = {
    backgroundColor: "#3899EC",
    hoverColor: "#4EB7F5",
    color: "#ffffff",
    fontHover: "#ffffff",
};
const Secondery = {
    backgroundColor: "#ffffff",
    hoverColor: "#ffffff",
    color: "#162D3D",
    fontHover: "#3899EC",
};
const ButtonContainer = styled_components_1.default.div `
    position: relative;
    width:auto;
    padding-right:24px;
    padding-left:24px;
    height: 48px;
    font-family:HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, "Helvetica Neue", Helvetica, Arial, メイリオ, meiryo, "ヒラギノ角ゴ pro w3", "hiragino kaku gothic pro", sans-serif;
    font-size:14px;
    line-height:18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${(p) => p.theme.color};
    border-radius: ${(p) => p.borderRadius}px;
    background-color: ${(p) => p.theme.backgroundColor};
    &:hover {
        background-color: ${(p) => p.theme.hoverColor};
        color: ${(p) => p.theme.fontHover};
    }
`;
class HeaderButton extends React.Component {
    render() {
        window["__checkBudget__"]();
        return (React.createElement(styled_components_1.ThemeProvider, { theme: eval(this.props.type) },
            React.createElement(framer_1.Stack, { alignment: "start" },
                React.createElement(ButtonContainer, { onClick: this.props.onClick, borderRadius: this.props.borderRadius }, this.props.text))));
    }
}
exports.HeaderButton = HeaderButton;
HeaderButton.defaultProps = {
    type: "Primary",
    text: "Hello World!",
    borderRadius: 0,
    onClick: () => { window["__checkBudget__"](); },
};
HeaderButton.propertyControls = {
    text: { type: framer_1.ControlType.String, title: "Text" },
    borderRadius: { type: framer_1.ControlType.Number, title: "Radius" },
    type: {
        type: framer_1.ControlType.Enum,
        title: "Type",
        options: ["Primary", "Secondery"],
        optionTitles: ["Primary", "Secondery"],
    },
};
exports.__info__ = [{ "name": "HeaderButton", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/IDETabs2.tsx":
/*!***************************!*\
  !*** ./code/IDETabs2.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSURFVGFiczIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0lERVRhYnMyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBd0M7QUFDeEMsNkRBQWdEO0FBQ2hELGlDQUE2QjtBQVE3QixNQUFhLFFBQVMsU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFBcEQ7O1FBd0JJLFVBQUssR0FBRztZQUNKLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDckIsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQTtRQUVELFlBQU8sR0FBRyxHQUFHLEVBQUU7O1lBQ1gsTUFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLEdBQUcsRUFBRSxXQUFXLEdBQUcsRUFBRTtvQkFDckIsU0FBUyxFQUFFLENBQ1A7O3dCQUNnQyxHQUFHO3dCQUM5QixFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDN0IsQ0FDVDtvQkFDRCxFQUFFLEVBQUUsRUFBRTtvQkFDTixTQUFTLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQztnQkFDRixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTthQUN0QyxDQUFDLENBQUE7U0FDTCxDQUFBO1FBQ0QsVUFBSyxHQUFHLEdBQUcsRUFBRTs7WUFDVCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQTtZQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1NBQ3RDLENBQUE7SUEyQ0wsQ0FBQztJQTFDRyxNQUFNOztRQUNGLE9BQU8sQ0FDSDtZQUNJLG9CQUFDLDRCQUFhLElBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNyQixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFDdkMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFOztvQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUN6Qjt3QkFDRCxXQUFXLEVBQUUsUUFBUTtxQkFDeEIsQ0FBQyxDQUFBO2lCQUNMLEVBQ0QsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUN0QjtZQUNqQixvQkFBQyxjQUFLLElBQ0YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQ2pCLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixLQUFLLEVBQUU7b0JBQ0gsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLEtBQUssRUFBRSxPQUFPO29CQUNkLE1BQU0sRUFBRSxTQUFTO29CQUNqQixVQUFVLEVBQUUsYUFBYTtvQkFDekIsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLEdBQUcsRUFBRSxPQUFPO2lCQUNmO2dCQUVELG9CQUFDLFdBQUksSUFDRCxHQUFHLEVBQUUsVUFBVSxFQUNmLElBQUksRUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBRXZELEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsU0FBUyxHQUNsQixDQUNFLENBQ04sQ0FDVCxDQUFBO0tBQ0o7O0FBN0ZMLDRCQThGQztBQTdGVSxxQkFBWSxHQUFHO0lBQ2xCLElBQUksRUFBRTtRQUNGO1lBQ0ksR0FBRyxFQUFFLFNBQVM7WUFDZCxTQUFTLEVBQUUsc0RBQTZCO1lBQ3hDLEVBQUUsRUFBRSxDQUFDO1lBQ0wsU0FBUyxFQUFFLElBQUk7U0FDbEI7UUFDRDtZQUNJLEdBQUcsRUFBRSxZQUFZO1lBQ2pCLFNBQVMsRUFBRSxzREFBNkI7WUFDeEMsRUFBRSxFQUFFLENBQUM7WUFDTCxTQUFTLEVBQUUsSUFBSTtTQUNsQjtRQUNEO1lBQ0ksR0FBRyxFQUFFLFNBQVM7WUFDZCxTQUFTLEVBQUUsc0RBQTZCO1lBQ3hDLEVBQUUsRUFBRSxDQUFDO1lBQ0wsU0FBUyxFQUFFLElBQUk7U0FDbEI7S0FDSjtDQUNKLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const ReactCloseableTabs_1 = __webpack_require__(/*! ./ReactCloseableTabs */ "./code/ReactCloseableTabs.tsx");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
class IDETabs2 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            data: this.props.data,
            fullWidth: false,
        };
        this.addItem = () => {
            window["__checkBudget__"]();
            const id = new Date().valueOf();
            this.setState({
                data: this.state.data.concat({
                    tab: "New item " + id,
                    component: (React.createElement("div", null,
                        "Your new component data for",
                        " ",
                        id.toString().substring(6, 10))),
                    id: id,
                    closeable: true,
                }),
                activeIndex: this.state.data.length,
            });
        };
        this.onTap = () => {
            window["__checkBudget__"]();
            let wdth = this.state.fullWidth;
            let layout = wdth ? "ide" : "fullIDE";
            this.props.setLayout(layout);
            this.setState({ fullWidth: !wdth });
        };
    }
    render() {
        window["__checkBudget__"]();
        return (React.createElement("div", null,
            React.createElement(ReactCloseableTabs_1.default, { data: this.state.data, onTabClick: this.props.onTabFocusChange, onCloseTab: (id, newIndex) => {
                    window["__checkBudget__"]();
                    this.setState({
                        data: this.state.data.filter(item => item.id !== id),
                        activeIndex: newIndex,
                    });
                }, activeIndex: this.state.activeIndex }),
            React.createElement(framer_1.Frame, { onTap: this.onTap, width: 26, height: 26, style: {
                    position: "relative",
                    float: "right",
                    cursor: "pointer",
                    background: "transparent",
                    padding: "4px 4px",
                    top: "-30px",
                } },
                React.createElement(Icon_1.Icon, { set: "material", icon: this.state.fullWidth ? "arrow_left" : "arrow_right", width: "20px", height: "20px", color: "#4D4D4D" }))));
    }
}
exports.IDETabs2 = IDETabs2;
IDETabs2.defaultProps = {
    data: [
        {
            tab: "Home.js",
            component: React.createElement("div", null, "Item details for 1"),
            id: 1,
            closeable: true,
        },
        {
            tab: "Gallery.js",
            component: React.createElement("div", null, "Item details for 2"),
            id: 2,
            closeable: true,
        },
        {
            tab: "Item.js",
            component: React.createElement("div", null, "Item details for 3"),
            id: 3,
            closeable: true,
        },
    ],
};
exports.__info__ = [{ "name": "IDETabs2", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Icon.tsx":
/*!***********************!*\
  !*** ./code/Icon.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXNEO0FBQ3RELDZEQUE2QztBQUM3QywrREFBK0M7QUFZL0MsTUFBYSxJQUFLLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBdUI1QyxNQUFNOztRQUNGLElBQUksVUFBVSxHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFOztZQUN4QyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUE7WUFDN0MsSUFBSSxNQUFNLEdBQ04sSUFBSTtnQkFDSixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDNUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtZQUVsQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUN6QixPQUFPLENBQ0gsb0JBQUMsNkJBQVcsSUFDUixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQ3pCLENBQ0wsQ0FBQTthQUNKO1lBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFVBQVUsRUFBRTtnQkFDMUIsT0FBTyxDQUNILG9CQUFDLDhCQUFZLElBQ1QsSUFBSSxFQUFFLElBQUksRUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FDekIsQ0FDTCxDQUFBO2FBQ0o7U0FDSixDQUFBO1FBRUQsT0FBTyxDQUNIO1lBQ0ksb0JBQUMsVUFBVSxJQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBSSxDQUNqQyxDQUNULENBQUE7S0FDSjs7QUF6REwsb0JBMERDO0FBekRHLHlCQUF5QjtBQUNsQixpQkFBWSxHQUFHO0lBQ2xCLElBQUksRUFBRSxTQUFTO0lBQ2YsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxNQUFNO0lBQ2IsR0FBRyxFQUFFLFVBQVU7SUFDZixPQUFPLEVBQUUsSUFBSTtDQUNoQixDQUFBO0FBRUQsZ0NBQWdDO0FBQ3pCLHFCQUFnQixHQUFxQjtJQUN4QyxHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxLQUFLO1FBQ1osT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztRQUNoQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0tBQ3hDO0lBQ0QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDakQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7Q0FDckQsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const feather_icons_react_1 = __webpack_require__(/*! feather-icons-react */ "feather-icons-react");
const material_icons_react_1 = __webpack_require__(/*! material-icons-react */ "material-icons-react");
class Icon extends React.Component {
    render() {
        window["__checkBudget__"]();
        let RenderIcon = (props) => {
            window["__checkBudget__"]();
            let name = `${this.props.icon.toLowerCase()}`;
            let faName = "fa" +
                `${this.props.icon.charAt(0).toUpperCase()}` +
                `${this.props.icon.substr(1)}`;
            if (props.set === "feather") {
                return (React.createElement(feather_icons_react_1.default, { icon: name, width: this.props.width, height: this.props.height, color: this.props.color }));
            }
            if (props.set === "material") {
                return (React.createElement(material_icons_react_1.default, { icon: name, size: this.props.width, color: this.props.color }));
            }
        };
        return (React.createElement("div", null,
            React.createElement(RenderIcon, { set: this.props.set })));
    }
}
exports.Icon = Icon;
// Set default properties
Icon.defaultProps = {
    icon: "add_box",
    width: 24,
    height: 24,
    color: "#000",
    set: "material",
    visible: true,
};
// Items shown in property panel
Icon.propertyControls = {
    set: {
        type: framer_1.ControlType.Enum,
        title: "Set",
        options: ["feather", "material"],
        optionTitles: ["Feather", "Material"],
    },
    icon: { type: framer_1.ControlType.String, title: "Icon" },
    color: { type: framer_1.ControlType.Color, title: "Color" },
};
exports.__info__ = [{ "name": "Icon", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/IconBtn.tsx":
/*!**************************!*\
  !*** ./code/IconBtn.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbkJ0bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbkJ0bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXVFO0FBQ3ZFLGlDQUE2QjtBQUU3Qix5QkFBeUI7QUFDekIsNENBQTRDO0FBRTVDLFNBQWdCLE9BQU8sQ0FBQyxLQUFLOztJQUN6QixNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEQsNkRBQTZEO0lBRTdELE1BQU0sU0FBUyxHQUNYLEtBQUssQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtJQUUzRSxNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7O1FBQ2YsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDL0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQ3RCO1FBQ0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDN0IsQ0FBQTtJQUNELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztRQUM3QixvQkFBQyxXQUFJLElBQ0QsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQzFCLEtBQUssRUFBRSxTQUFTLEVBQ2hCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FDdEIsQ0FDRSxDQUNYLENBQUE7Q0FDSjtBQXhCRCwwQkF3QkM7QUFFRCxTQUFnQixRQUFRLENBQUMsSUFBSTs7SUFDekIsUUFBUSxJQUFJLEVBQUU7UUFDVixLQUFLLFdBQVcsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxTQUFTLENBQUE7WUFDaEIsTUFBSztTQUNSO1FBQ0QsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNWLE9BQU8sY0FBYyxDQUFBO1lBQ3JCLE1BQUs7U0FDUjtRQUNELEtBQUssWUFBWSxDQUFDLENBQUM7WUFDZixPQUFPLGVBQWUsQ0FBQTtZQUN0QixNQUFLO1NBQ1I7UUFDRCxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1YsT0FBTyxhQUFhLENBQUE7WUFDcEIsTUFBSztTQUNSO1FBQ0QsS0FBSyxRQUFRLENBQUMsQ0FBQztZQUNYLE9BQU8sUUFBUSxDQUFBO1lBQ2YsTUFBSztTQUNSO1FBQ0QsS0FBSyxNQUFNLENBQUMsQ0FBQztZQUNULE9BQU8sU0FBUyxDQUFBO1lBQ2hCLE1BQUs7U0FDUjtRQUNELEtBQUssTUFBTSxDQUFDLENBQUM7WUFDVCxPQUFPLE1BQU0sQ0FBQTtZQUNiLE1BQUs7U0FDUjtRQUNELEtBQUssVUFBVSxDQUFDLENBQUM7WUFDYixPQUFPLFVBQVUsQ0FBQTtZQUNqQixNQUFLO1NBQ1I7UUFDRCxLQUFLLFlBQVksQ0FBQyxDQUFDO1lBQ2YsT0FBTyxhQUFhLENBQUE7WUFDcEIsTUFBSztTQUNSO0tBQ0o7Q0FDSjtBQXZDRCw0QkF1Q0M7QUFFRCxNQUFNLEtBQUssR0FBd0I7SUFDL0IsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFdBQVcsRUFBRSxtQkFBbUI7SUFFaEMsVUFBVSxFQUFFLE9BQU87SUFDbkIsT0FBTyxFQUFFLE1BQU07SUFDZixVQUFVLEVBQUUsUUFBUTtJQUNwQixjQUFjLEVBQUUsUUFBUTtJQUN4QixhQUFhLEVBQUUsUUFBUTtJQUN2QixNQUFNLEVBQUUsU0FBUztDQUNwQixDQUFBO0FBRUQsNEJBQW1CLENBQUMsT0FBTyxFQUFFO0lBQ3pCLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0NBQ3BELENBQUMsQ0FBQTtBQUVGLE9BQU8sQ0FBQyxZQUFZLEdBQUc7SUFDbkIsS0FBSyxFQUFFLE1BQU07SUFDYixHQUFHLEVBQUUsVUFBVTtJQUNmLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7Q0FDYixDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function IconBtn(props) {
    window["__checkBudget__"]();
    const [color, setColor] = React.useState("#000");
    // console.log("props", JSON.stringify(props.hover, null, 2))
    const iconColor = props.activeTab === props.icon && color === "#000" ? "#3899EC" : "#000";
    const onTap = () => {
        window["__checkBudget__"]();
        if (props.activeTab != props.icon) {
            setColor(iconColor);
        }
        props.callback(props.icon);
    };
    return (React.createElement(framer_1.Frame, { style: style, onTap: onTap },
        React.createElement(Icon_1.Icon, { icon: findIcon(props.icon), color: iconColor, set: props.set, width: props.width, height: props.height })));
}
exports.IconBtn = IconBtn;
function findIcon(icon) {
    window["__checkBudget__"]();
    switch (icon) {
        case "add panel": {
            return "add_box";
            break;
        }
        case "media": {
            return "cloud_upload";
            break;
        }
        case "app market": {
            return "view_carousel";
            break;
        }
        case "pages": {
            return "description";
            break;
        }
        case "layers": {
            return "layers";
            break;
        }
        case "data": {
            return "storage";
            break;
        }
        case "code": {
            return "code";
            break;
        }
        case "database": {
            return "database";
            break;
        }
        case "collection": {
            return "credit-card";
            break;
        }
    }
}
exports.findIcon = findIcon;
const style = {
    width: "56px",
    height: "47px",
    marginTop: "1px",
    borderRight: "solid 1px #E4E4E4",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
};
framer_1.addPropertyControls(IconBtn, {
    icon: { type: framer_1.ControlType.String, title: "Icon" },
});
IconBtn.defaultProps = {
    color: "#000",
    set: "material",
    width: 24,
    height: 24,
};
exports.__info__ = [{ "name": "IconBtn", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Input.tsx":
/*!************************!*\
  !*** ./code/Input.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBc0Q7QUFDdEQseURBQXNDO0FBOEJ0QyxNQUFhLEtBQU0sU0FBUSxLQUFLLENBQUMsU0FBZ0M7SUFBakU7O1FBK0RJLFVBQUssR0FBRztZQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDL0IsY0FBYyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSztTQUMzQyxDQUFBO1FBU0QsYUFBUSxHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFOztZQUNwQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ2hDLENBQUMsQ0FBRSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQThCO2dCQUNuRCxDQUFDLENBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUEyQixDQUFBO1lBRXBELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7WUFFM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFFeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDbEM7U0FDSixDQUFBO1FBRUQsZ0JBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDOUIsQ0FBQyxDQUFDLDJCQUFNLENBQUMsUUFBUSxDQUFBOztvQ0FFVyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7Y0FDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVOztPQUU1QjtZQUNDLENBQUMsQ0FBQywyQkFBTSxDQUFDLEtBQUssQ0FBQTs7b0NBRWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO2NBQzVDLElBQUksQ0FB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: Input.defaultProps.value,
            valueFromProps: Input.defaultProps.value,
        };
        this.onChange = (event) => {
            window["__checkBudget__"]();
            const element = this.props.multiLine
                ? event.nativeEvent.target
                : event.nativeEvent.target;
            const value = element.value;
            this.setState({ value });
            if (this.props.onValueChange) {
                this.props.onValueChange(value);
            }
        };
        this.StyledInput = this.props.multiLine
            ? styled_components_1.default.textarea `
        &:focus {
          box-shadow: inset 0 0 0 ${this.props.borderWidth}px
            ${this.props.focusColor} !important;
        }
      `
            : styled_components_1.default.input `
        &:focus {
          box-shadow: inset 0 0 0 ${this.props.borderWidth}px
            ${this.props.focusColor} !important;
        }
      `;
    }
    // Allow setting the Value from within the property panel.
    static getDerivedStateFromProps(props, state) {
        window["__checkBudget__"]();
        if (props.value !== state.valueFromProps) {
            return { value: props.value, valueFromProps: props.value };
        }
    }
    render() {
        window["__checkBudget__"]();
        const { placeholder, backgroundColor, textColor, fontSize, radius, paddingPerSide, padding, paddingTop, paddingRight, paddingBottom, paddingLeft, border, borderWidth, password, } = this.props;
        const { value } = this.state;
        const paddingValue = paddingPerSide
            ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
            : padding;
        return (React.createElement(this.StyledInput, { onChange: this.onChange, value: value, placeholder: placeholder, style: Object.assign(Object.assign({}, style), { backgroundColor, color: textColor, fontSize: fontSize, borderRadius: radius, padding: paddingValue, boxShadow: `inset 0 0 0 ${borderWidth}px ${border}` }), type: password ? "password" : "text" }));
    }
}
exports.Input = Input;
Input.defaultProps = {
    value: "",
    placeholder: "Type something…",
    width: 300,
    height: 50,
    backgroundColor: "#FFF",
    textColor: "#000",
    focusColor: "#09F",
    fontSize: 15,
    radius: 10,
    padding: 15,
    paddingPerSide: false,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    border: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    multiLine: false,
    password: false,
};
Input.propertyControls = {
    value: { type: framer_1.ControlType.String, title: "Value" },
    placeholder: { type: framer_1.ControlType.String, title: "Default" },
    textColor: { type: framer_1.ControlType.Color, title: "Text" },
    backgroundColor: { type: framer_1.ControlType.Color, title: "Fill" },
    border: { type: framer_1.ControlType.Color, title: "Border" },
    borderWidth: {
        type: framer_1.ControlType.Number,
        title: " ",
        min: 1,
        max: 5,
        displayStepper: true,
    },
    focusColor: { type: framer_1.ControlType.Color, title: "Focus" },
    padding: {
        type: framer_1.ControlType.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["All Sides", "Per Side"],
        valueKeys: [
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding",
    },
    radius: { type: framer_1.ControlType.Number, title: "Radius" },
    fontSize: {
        type: framer_1.ControlType.Number,
        title: "Font Size",
        min: 5,
        max: 25,
    },
    multiLine: { type: framer_1.ControlType.Boolean, title: "Text Area" },
    password: { type: framer_1.ControlType.Boolean, title: "Password" },
};
const style = {
    border: "none",
    width: "100%",
    paddingLeft: 12,
    paddingRight: 12,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    outline: "none",
    resize: "none",
};
exports.__info__ = [{ "name": "Input", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Layers.tsx":
/*!*************************!*\
  !*** ./code/Layers.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9MYXllcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUErQztBQUMvQyxpQ0FBNkI7QUFDN0IseURBQXlEO0FBQ3pELHlCQUF5QjtBQUN6Qiw0Q0FBNEM7QUFDNUMsU0FBZ0IsT0FBTyxDQUFDLEtBQUs7O0lBQ3pCLE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQ0YsTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsTUFBTSxFQUNiLFFBQVEsRUFBRSxVQUFVLEVBQ3BCLFVBQVUsRUFBRSxhQUFhLEVBQ3pCLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsRUFDN0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBRXRCLG9CQUFDLFdBQUksSUFDRCxJQUFJLEVBQUUsaUJBQWlCLEVBQ3ZCLEdBQUcsRUFBRSxTQUFTLEVBQ2QsTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsTUFBTSxFQUNiLEtBQUssRUFBRSxTQUFTLEdBQ2xCLENBQ0UsQ0FDWCxDQUFBO0NBQ0o7QUFuQkQsMEJBbUJDO0FBRUQsU0FBZ0IsSUFBSSxDQUFDLEtBQUs7O0lBQ3RCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVqRCxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTs7UUFDbEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNoQixDQUFBO0lBQ0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O1FBQ2pCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDakIsQ0FBQTtJQUNELE9BQU8sQ0FDSCxvQkFBQyxpQ0FBYSxJ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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function MenuBtn(props) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, { height: "14px", width: "14px", position: "relative", background: "transparent", style: { marginRight: "5px" }, visible: props.visible },
        React.createElement(Icon_1.Icon, { icon: "more-horizontal", set: "feather", height: "14px", width: "14px", color: "#404040" })));
}
exports.MenuBtn = MenuBtn;
function Item(props) {
    window["__checkBudget__"]();
    const [showMenu, setMenu] = React.useState(false);
    const MouseOver = e => {
        window["__checkBudget__"]();
        e.stopPropagation();
        setMenu(true);
    };
    const MouseOut = e => {
        window["__checkBudget__"]();
        e.stopPropagation();
        setMenu(false);
    };
    return (React.createElement(styled_components_1.ThemeProvider, { theme: props.theme },
        React.createElement(Section, { onClick: props.onTap, onMouseOver: MouseOver, onMouseLeave: MouseOut },
            React.createElement(Icon_1.Icon, { icon: props.icon, set: props.set, height: "14px", width: "14px", color: "#162D3D" }),
            React.createElement(framer_1.Frame, { style: labelStyle }, props.label),
            React.createElement(MenuBtn, { visible: showMenu }))));
}
exports.Item = Item;
function Layers(props) {
    window["__checkBudget__"]();
    let tree = props.tree;
    return (React.createElement("div", { style: treeStyle },
        React.createElement(framer_1.Frame, { width: "100%", height: "36px", style: HeaderStyle }, "Layers"),
        tree.map((item, i) => {
            window["__checkBudget__"]();
            return (React.createElement(Folder, { section: item.section, files: item.items, key: i }));
        })));
}
exports.Layers = Layers;
function Folder(props) {
    window["__checkBudget__"]();
    let files = props.files;
    const [open, setOpen] = React.useState(true);
    const onTap = () => {
        window["__checkBudget__"]();
        const folderState = !open;
        setOpen(folderState);
    };
    return (React.createElement("div", null,
        React.createElement(Item, { theme: ul, onTap: onTap, icon: "square", label: props.section }),
        open
            ? files.map((file, index) => (React.createElement(Item, { key: index, icon: file.icon, set: file.set, label: file.label, li: true, theme: list })))
            : null));
}
exports.Folder = Folder;
const treeStyle = {
    position: "relative",
    flexDirection: "column",
    justifyContent: "start",
    width: "100%",
    height: "100%",
    background: "#F4F4F4",
};
const HeaderStyle = {
    fontFamily: "HelveticaNeueW01-55Ligh, HelveticaNeueW02-55Ligh, HelveticaNeueW10-55Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "14px",
    textAlign: "left",
    background: "#F4F4F4",
    justifyContent: "left",
    paddingLeft: "10px",
    color: "#162D3D",
    borderBottom: "1px solid #DEDEDE",
    position: "relative",
};
const labelStyle = {
    marginLeft: "5px",
    background: "transparent",
    fontFamily: "HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    justifyContent: "left",
    paddingLeft: "20px",
};
const Section = styled_components_1.default.div `
    text-align: left;
    background: #F4F4F4;
    color: #162D3D;
    width: 100%;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content:space-between;
    cursor: pointer;
    padding-left: ${props => props.theme.paddingLeft};
    &:hover{
        background: #E6E6E6;
    }
`;
const ul = {
    paddingLeft: "5px",
};
const list = {
    paddingLeft: "30px",
};
const lineStyle = {
    background: "#DEDEDE",
    height: "36px",
    width: "1px",
    left: "12px",
    top: "0px",
};
const li = {
    paddingLeft: "30px",
};
Layers.defaultProps = {
    tree: [
        {
            section: "#Strip1",
            items: [
                { label: "#image1", icon: "image", set: "feather" },
                { label: "#text1", icon: "type", set: "feather" },
                { label: "#button1", icon: "crop_7_5", set: "material" },
            ],
        },
    ],
};
Folder.defaultProps = {
    files: ["file1", "file2", "file3"],
    section: "Folder",
};
MenuBtn.defaultProps = {
    visible: false,
};
Item.defaultProps = {
    onTap: () => { window["__checkBudget__"](); },
    label: "Label",
    icon: "type",
    set: "feather",
    theme: ul,
};
exports.__info__ = [{ "name": "MenuBtn", "children": false, "type": "component" }, { "name": "Item", "children": false, "type": "component" }, { "name": "Layers", "children": false, "type": "component" }, { "name": "Folder", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/LeftTree.tsx":
/*!***************************!*\
  !*** ./code/LeftTree.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVmdFRyZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0xlZnRUcmVlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBK0M7QUFDL0MsaUNBQTZCO0FBQzdCLHlEQUFzQztBQUN0Qyx5QkFBeUI7QUFDekIsNENBQTRDO0FBRTVDLFNBQWdCLFFBQVEsQ0FBQyxLQUFLOztJQUMxQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO0lBRXJCLE9BQU8sQ0FDSCw2QkFBSyxLQUFLLEVBQUUsU0FBUztRQUNqQixvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXO1lBQ3BELG9CQUFDLGNBQUssSUFDRixTQUFTLEVBQUMsWUFBWSxFQUN0QixPQUFPLEVBQUUsRUFBRSxFQUNYLE1BQU0sRUFBRSxFQUFFLEVBQ1YsS0FBSyxFQUFFLE1BQU0sRUFDYixHQUFHLEVBQUUsRUFBRSxFQUNQLFlBQVksRUFBQyxlQUFlO2dCQUU1QixvQkFBQyxjQUFLLElBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLGlCQUUvQztnQkFDUixvQkFBQyxXQUFJLElBQ0QsSUFBSSxFQUFFLFFBQVEsRUFDZCxHQUFHLEVBQUUsU0FBUyxFQUNkLE1BQU0sRUFBRSxNQUFNLEVBQ2QsS0FBSyxFQUFFLE1BQU0sR0FDVCxDQUNKLENBQ0o7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUNsQixPQUFPLENBQ0gsb0JBQUMsTUFBTSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FDL0QsQ0FBQTtTQUNKLENBQUMsQ0FDQSxD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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function LeftTree(props) {
    window["__checkBudget__"]();
    let tree = props.tree;
    return (React.createElement("div", { style: treeStyle },
        React.createElement(framer_1.Frame, { width: "100%", height: "36px", style: HeaderStyle },
            React.createElement(framer_1.Stack, { direction: "horizontal", padding: 10, height: 36, width: "100%", gap: 10, distribution: "space-between" },
                React.createElement(framer_1.Frame, { height: 36, width: 70, background: "transparent" }, "Code Files"),
                React.createElement(Icon_1.Icon, { icon: "search", set: "feather", height: "16px", width: "16px" }))),
        tree.map((item, i) => {
            window["__checkBudget__"]();
            return (React.createElement(Folder, { section: item.section, files: item.items, key: i }));
        })));
}
exports.LeftTree = LeftTree;
function Folder(props) {
    window["__checkBudget__"]();
    let files = props.files;
    const [open, setOpen] = React.useState(true);
    const onTap = () => {
        window["__checkBudget__"]();
        const folderState = !open;
        setOpen(folderState);
    };
    return (React.createElement("div", null,
        React.createElement(Section, { onClick: onTap },
            React.createElement(Icon_1.Icon, { icon: open ? "keyboard_arrow_down" : "keyboard_arrow_right", height: "18px", width: "18px", color: "#162D3D" }),
            React.createElement(framer_1.Frame, { style: labelStyle }, props.section)),
        open
            ? files.map((file, index) => (React.createElement(File, { key: index },
                React.createElement(framer_1.Frame, { style: lineStyle }),
                file)))
            : null));
}
exports.Folder = Folder;
const treeStyle = {
    position: "relative",
    flexDirection: "column",
    justifyContent: "start",
    width: "100%",
    height: "100%",
    background: "#F4F4F4",
};
const HeaderStyle = {
    fontFamily: "HelveticaNeueW01-55Ligh, HelveticaNeueW02-55Ligh, HelveticaNeueW10-55Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "14px",
    textAlign: "left",
    background: "#F4F4F4",
    justifyContent: "left",
    color: "#162D3D",
    borderBottom: "1px solid #DEDEDE",
    position: "relative",
};
const labelStyle = {
    marginLeft: "5px",
    background: "transparent",
    fontFamily: "HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    justifyContent: "left",
    paddingLeft: "20px",
};
const Section = styled_components_1.default.div `
    text-align: left;
    background: #F4F4F4;
    color: #162D3D;
    width: 100%;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 5px;
    &:hover{
        background: #E6E6E6;
    }
`;
const File = styled_components_1.default.div `
    position: relative;
    width:100%;
    padding-left:30px;
    height: 30px;
    font-family:HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:12px;
    color: #162D3D;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    background: #F4F4F4;
    &:hover{
        background: #E6E6E6;
    }
`;
const lineStyle = {
    background: "#DEDEDE",
    height: "36px",
    width: "1px",
    left: "12px",
    top: "0px",
};
LeftTree.defaultProps = {
    tree: [
        {
            section: "Pages",
            items: ["Home.js", "Gallery.js", "About.js"],
        },
        {
            section: "Public",
            items: ["utils.js"],
        },
        {
            section: "Backend",
            items: ["routers.js"],
        },
    ],
};
Folder.defaultProps = {
    files: ["file1", "file2", "file3"],
    section: "Folder",
};
exports.__info__ = [{ "name": "LeftTree", "children": false, "type": "component" }, { "name": "Folder", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Panels.tsx":
/*!*************************!*\
  !*** ./code/Panels.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFuZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9QYW5lbHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQU1lO0FBRWYsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUVyQyxTQUFnQixNQUFNLENBQUMsS0FBSzs7SUFDeEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFBO0lBRXJCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7O1FBQzNDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTtZQUNqQyxNQUFNLFNBQVMsR0FDWCxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsTUFBTTtnQkFDMUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ0osQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUE7WUFFckQsVUFBVSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxnQ0FDakMsTUFBTSxFQUFFLE1BQU0sSUFDWCxTQUFTLEtBQ1osVUFBVSxFQUFFLFNBQVMsSUFDdkIsQ0FBQTtTQUNMO0tBQ0osQ0FBQyxDQUFBO0lBRUYsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsSUFDdkQsVUFBVSxDQUNQLENBQ1gsQ0FBQTtDQUNKO0FBdkJELHdCQXVCQztBQUVELDRCQUFtQixDQUFDLE1BQU0sRUFBRTtJQUN4QixRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLGVBQWUsRUFBRTtZQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLGlCQUFpQjtTQUN0QztLQUNKO0NBQ0osQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLFlBQVksR0FBRztJQUNsQixJQUFJLEVBQUUsTUFBTTtDQUNmLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// Open Preview: Command + P
// Learn more: https://framer.com/api
function Panels(props) {
    window["__checkBudget__"]();
    let activeView = null;
    React.Children.forEach(props.children, child => {
        window["__checkBudget__"]();
        if (child.props.name === props.view) {
            const animation = framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas
                ? {}
                : { animate: { x: 0 }, initial: { x: -200 } };
            activeView = React.cloneElement(child, Object.assign(Object.assign({ height: "100%" }, animation), { transition: "easeOut" }));
        }
    });
    return (React.createElement(framer_1.Frame, { width: 320, height: "100%", background: "transparent" }, activeView));
}
exports.Panels = Panels;
framer_1.addPropertyControls(Panels, {
    children: {
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
        },
    },
});
Panels.defaultProps = {
    view: "view",
};
exports.__info__ = [{ "name": "Panels", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/PropertiesPanel.tsx":
/*!**********************************!*\
  !*** ./code/PropertiesPanel.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydGllc1BhbmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Qcm9wZXJ0aWVzUGFuZWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF1RTtBQUN2RSxxQ0FBbUM7QUFDbkMsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUVyQyxTQUFnQixlQUFlLENBQUMsS0FBSzs7SUFDakMsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFBQyxVQUFVLEVBQUMsYUFBYTtRQUMzQixvQkFBQyxjQUFLLElBQ0YsTUFBTSxFQUFDLG1CQUFtQixFQUMxQixDQUFDLEVBQUUsRUFBRSxFQUNMLEtBQUssRUFBRTtnQkFDSCxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUUsRUFBRTtnQkFDWixVQUFVLEVBQUUsR0FBRztnQkFDZixVQUFVLEVBQUUsT0FBTztnQkFDbkIsWUFBWSxFQUFFLEtBQUs7YUFDdEIsR0FDSTtRQUNULG9CQUFDLGlCQUFRLElBQUMsTUFBTSxFQUFDLEdBQUcsR0FBRyxDQUNuQixDQUNYLENBQUE7Q0FDSjtBQWpCRCwwQ0FpQkM7QUFFRCxlQUFlLENBQUMsWUFBWSxHQUFHO0lBQzNCLE1BQU0sRUFBRSxHQUFHO0lBQ1gsS0FBSyxFQUFFLEdBQUc7SUFDVixPQUFPLEVBQUUsSUFBSTtDQUNoQixDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas_1 = __webpack_require__(/*! ./canvas */ "./code/canvas.tsx");
// Open Preview: Command + P
// Learn more: https://framer.com/api
function PropertiesPanel(props) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, { background: "transparent" },
        React.createElement(framer_1.Frame, { shadow: "0px 0px 5px black", y: 15, style: {
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                background: "white",
                borderRadius: "3px",
            } }),
        React.createElement(canvas_1.Triangle, { center: "x" })));
}
exports.PropertiesPanel = PropertiesPanel;
PropertiesPanel.defaultProps = {
    height: 128,
    width: 240,
    visible: true,
};
exports.__info__ = [{ "name": "PropertiesPanel", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/ReactCloseableTabs.tsx":
/*!*************************************!*\
  !*** ./code/ReactCloseableTabs.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RDbG9zZWFibGVUYWJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9SZWFjdENsb3NlYWJsZVRhYnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLHlEQUF5RDtBQUV6RCxNQUFNLGFBQWEsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQTs7Ozs7Ozs7Q0FRL0IsQ0FBQTtBQUNELE1BQU0sVUFBVSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7O0NBSTVCLENBQUE7QUFDRCxNQUFNLFFBQVEsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQTtnQkFDWCxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksU0FBUzs7OztDQUl4RCxDQUFBO0FBQ0QsTUFBTSxHQUFHLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1RHJCLENBQUE7QUFlRCxNQUFNLGtCQUFtQixTQUFRLEtBQUssQ0FBQyxTQUFnQjtJQUF2RDs7UUF3QkksVUFBSyxHQUFHO1lBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksQ0FBQztZQUN4QyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSTtTQUM1QyxDQUFBO1FBY0QsbUJBQWMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTs7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const styled_components_1 = __webpack_require__(/*! styled-components */ "styled-components");
const CloseableTabs = styled_components_1.default.div `
  margin: 0px;
  width:100%;
  position:relative;
  height: 36px;
  overflow:hidden;
  background:#F4F4F4;
  display:inline-block;
`;
const TabContent = styled_components_1.default.div `
  padding: 0px;
  display: inline-block;

`;
const TabPanel = styled_components_1.default.div `
  background: ${props => props.tabPanelColor || "#F4F4F4"};
  width: auto;
  display: inline-block;
  
`;
const Tab = styled_components_1.default.div `
    border: none;
    background: none;
    display: inline-flex;
    vertical-align: middle;
    padding: 4px 4px 4px 15px;
    width: auto;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    font-family: HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, 'Helvetica Neue', Helvetica,   Arial, メイリオ, meiryo, sans-serif;
  font-size: 12px;
  color:#50585E;
  line-height:24px;
  height:36px;
  .closeTab {
      width: 20px;
      background: none;
      height: 20px;
      margin-top: 3px;
      margin-left:8px;
      display: block;
      vertical-align: middle;
      position:relative;
      font-size: 0;
      border-radius: 30px;
      opacity: .0;
      &:after,
      &:before {
        content: '';
        display: block;
        width: 12px;
        height: 1px;
        position: absolute;
        left: 4px;
        top: 8px;
        background: #333;
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
            }
        }
    &.active {
      background:#fff;
      color:#162D3D;
    }
    &:hover {
    .closeTab{
        opacity:.8
    }
    
    }
`;
class ReactCloseableTabs extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            data: this.props.data,
            activeIndex: this.props.activeIndex || 0,
            identifier: this.props.identifier || "id",
        };
        this.handleTabClick = (id, index) => {
            window["__checkBudget__"]();
            this.props.onBeforeTabClick &&
                this.props.onBeforeTabClick(id, index, this.state.activeIndex);
            this.setState({ activeIndex: index }, () => {
                window["__checkBudget__"]();
                this.props.onTabClick &&
                    this.props.onTabClick(id, index, this.state.activeIndex);
            });
        };
        this.closeTab = (e, id) => {
            window["__checkBudget__"]();
            e.stopPropagation();
            const activeId = this.state.data[this.state.activeIndex][this.state.identifier];
            const newIndex = activeId === id
                ? this.state.activeIndex - 1
                : this.state.activeIndex;
            this.props.onCloseTab && this.props.onCloseTab(id, newIndex);
            this.setState({
                data: this.state.data.filter(item => item.id !== id),
                activeIndex: newIndex,
            });
        };
    }
    componentWillReceiveProps(nextProps) {
        window["__checkBudget__"]();
        if (nextProps.data) {
            const newState = {
                data: nextProps.data,
            };
            if (Number.isInteger(nextProps.activeIndex)) {
                newState.activeIndex = nextProps.activeIndex;
            }
            this.setState(newState);
        }
    }
    render() {
        window["__checkBudget__"]();
        let noTabUnmount = this.props;
        let data = this.state.data;
        let activeIndex = this.state.activeIndex;
        return (React.createElement(CloseableTabs, { className: this.props.mainClassName || "" },
            React.createElement(TabPanel, { tabPanelColor: this.props.tabPanelColor, className: this.props.tabPanelClass || "" }, data.map((item, i) => {
                window["__checkBudget__"]();
                return (React.createElement(Tab, { className: `tab ${i === activeIndex ? "active" : ""}`, onClick: () => this.handleTabClick(item.id, i), key: item.id || i },
                    item.tab,
                    item.closeable && (React.createElement("a", { className: "closeTab", onClick: e => data.length > 1
                            ? this.closeTab(e, item.id)
                            : null }))));
            })),
            React.createElement(TabContent, { className: this.props.tabContentClass || "" }, noTabUnmount
                ? data.map((item, index) => (React.createElement("div", { key: item.id || index, style: {
                        display: index === activeIndex
                            ? "block"
                            : "none",
                    } })))
                : data[activeIndex]
                    ? data[activeIndex].component
                    : null)));
    }
}
ReactCloseableTabs.defaultProps = {
    data: [
        {
            tab: "Home.js",
            component: React.createElement("div", null, "Item details for 1"),
            id: 1,
            closeable: true,
        },
        {
            tab: "Gallery.js",
            component: React.createElement("div", null, "Item details for 2"),
            id: 2,
            closeable: true,
        },
        {
            tab: "Item.js",
            component: React.createElement("div", null, "Item details for 3"),
            id: 3,
            closeable: true,
        },
    ],
};
exports.default = ReactCloseableTabs;
exports.__info__ = [{ "name": "ReactCloseableTabs", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Tabbar.tsx":
/*!*************************!*\
  !*** ./code/Tabbar.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9UYWJiYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQU1lO0FBRWYsU0FBUyxTQUFTLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7O0lBQ2pELE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO0lBRXBELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQ0YsSUFBSSxFQUFFLEVBQUUsRUFDUixLQUFLLEVBQUUsS0FBSyxFQUNaLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFDMUIsVUFBVSxFQUFFLEtBQUssRUFDakIsWUFBWSxFQUFFLENBQUMsSUFFZCxLQUFLLENBQ0YsQ0FDWCxDQUFBO0NBQ0o7QUFFRCxTQUFnQixNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUU7O0lBQy9CLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RDLE9BQU8sb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBQyxNQUFNLHdCQUEwQixDQUFBO0tBQ3REO0lBRUQsU0FBUyxPQUFPLENBQUMsS0FBSzs7UUFDbEIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO1NBQzFCO1FBRUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFFZCxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVDLEtBQUssRUFBRSxDQUFBO1lBRVAsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsT0FBTyxPQUFPLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQTthQUM1QjtTQUNKO1FBRUQsT0FBTyxNQUFNLENBQUE7S0FDaEI7SUFDRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLFlBQVksTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUVoRCxTQUFTLFNBQVMsQ0FBQyxLQUFLOztRQUNwQixPQUFPO1lBQ0gsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxHQUFHLEVBQUU7O2dCQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNuQjtTQUNKLENBQUE7S0FDSjtJQUVELElBQUksVUFBVSxHQUFHLG9CQUFDLGNBQUssSUFBQyxNQUFNLDhCQUEwQixDQUFBO0lBRXhELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRTs7UUFDckMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQzNCLE1BQU0sU0FBUyxHQUNYLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxNQUFNO2dCQUMxQyxDQUFDLENBQUMsRUFBRTtnQkFDSixDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUE7WUFDNUQsVUFBVSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxrQkFDakMsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsTUFBTSxJQUNYLFNBQVMsRUFDZCxDQUFBO1NBQ0w7S0FDSixDQUFDLENBQUE7SUFFRixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7O1FBQ2pELE9BQU8sb0JBQUMsU0FBUyxvQkFBSyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUksQ0FBQTtLQUN0RCxDQUFDLENBQUE7SUFFRixPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBQyxNQUFNO1FBQ2IsVUFBVTtRQUNYLG9CQUFDLGNBQUssSUFDRixNQUFNLEVBQUUsQ0FBQyxFQUNULEtBQUssRUFBQyxNQUFNLEVBQ1osTUFBTSxFQUFFLEdBQUcsRUFDWCxVQUFVLEVBQUMseUJBQXlCLEVBQ3BDLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLFlBQVksRUFBQyxRQUFRLElBRXBCLE9BQU8sQ0FDSixDQUNKLENBQ1gsQ0FBQTtDQUNKO0FBeEVELHdCQXdFQztBQUVELDRCQUFtQixDQUFDLE1BQU0sRUFBRTtJQUN4QixRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLGVBQWUsRUFBRTtZQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLGlCQUFpQjtTQUN0QztLQUNKO0NBQ0osQ0FBQyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function TabButton({ title = "Title", onTap, active }) {
    window["__checkBudget__"]();
    const color = active === title ? "#1199EE" : "white";
    return (React.createElement(framer_1.Frame, { size: 60, onTap: onTap, whileHover: { scale: 1.1 }, background: color, borderRadius: 8 }, title));
}
function TabBar({ children }) {
    window["__checkBudget__"]();
    if (React.Children.count(children) === 0) {
        return React.createElement(framer_1.Frame, { size: "100%" }, "Add some children");
    }
    function nameFor(child) {
        window["__checkBudget__"]();
        if (child.props.name) {
            return child.props.name;
        }
        let count = -1;
        for (let c of React.Children.toArray(children)) {
            count++;
            if (child.props.id === c.props.id) {
                return `Tab ${count + 1}`;
            }
        }
        return "Huh?";
    }
    const first = nameFor(children[0]);
    const [active, setActive] = React.useState(first);
    console.log(`first: ${first} active: ${active}`);
    function makeProps(title) {
        window["__checkBudget__"]();
        return {
            title: title,
            active: active,
            onTap: () => {
                window["__checkBudget__"]();
                setActive(title);
            },
        };
    }
    let activeView = React.createElement(framer_1.Frame, { center: true }, "Add some children");
    React.Children.forEach(children, child => {
        window["__checkBudget__"]();
        if (nameFor(child) === active) {
            const animation = framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas
                ? {}
                : { animate: { scale: 1 }, initial: { scale: 1.1 } };
            activeView = React.cloneElement(child, Object.assign({ width: "100%", height: "100%" }, animation));
        }
    });
    const buttons = React.Children.map(children, child => {
        window["__checkBudget__"]();
        return React.createElement(TabButton, Object.assign({}, makeProps(nameFor(child))));
    });
    return (React.createElement(framer_1.Frame, { size: "100%" },
        activeView,
        React.createElement(framer_1.Stack, { bottom: 0, width: "100%", height: 100, background: "rgba(255, 255, 255, .2)", direction: "horizontal", distribution: "center" }, buttons)));
}
exports.TabBar = TabBar;
framer_1.addPropertyControls(TabBar, {
    children: {
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
        },
    },
});
exports.__info__ = [{ "name": "TabBar", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/Tabs.tsx":
/*!***********************!*\
  !*** ./code/Tabs.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVGFicy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBTWU7QUFDZix1Q0FBbUM7QUFDbkMseUJBQXlCO0FBQ3pCLDRDQUE0QztBQUU1QyxTQUFnQixJQUFJLENBQUMsS0FBSzs7SUFDdEIsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFDLE9BQU8sSUFDbEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM3QixvQkFBQyxpQkFBTyxJQUNKLEdBQUcsRUFBRSxDQUFDLEVBQ04sSUFBSSxFQUFFLE9BQU8sRUFDYixRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFDekIsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQ3pCLENBQ0wsQ0FBQyxDQUNFLENBQ1gsQ0FBQTtDQUNKO0FBYkQsb0JBYUM7QUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHO0lBQ2hCLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQ3pFLFNBQVMsRUFBRSxHQUFHLEVBQUUsaUNBQUc7SUFDbkIsTUFBTSxFQUFFLElBQUk7Q0FDZixDQUFBO0FBRUQsNEJBQW1CLENBQUMsSUFBSSxFQUFFO0lBQ3RCLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsZUFBZSxFQUFFO1lBQ2IsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtTQUMzQjtLQUNKO0NBQ0osQ0FBQyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const IconBtn_1 = __webpack_require__(/*! ./IconBtn */ "./code/IconBtn.tsx");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function Tabs(props) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Stack, { direction: "horizontal", gap: 0, alignment: "start" }, props.icons.map((iconBtn, i) => (React.createElement(IconBtn_1.IconBtn, { key: i, icon: iconBtn, callback: props.setActive, activeTab: props.active })))));
}
exports.Tabs = Tabs;
Tabs.defaultProps = {
    icons: ["add panel", "media", "view_carousel", "pages", "layers", "data"],
    setActive: () => { window["__checkBudget__"](); },
    active: null,
};
framer_1.addPropertyControls(Tabs, {
    icons: {
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.String,
        },
    },
});
exports.__info__ = [{ "name": "Tabs", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Test.tsx":
/*!***********************!*\
  !*** ./code/Test.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVGVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXdDO0FBRXhDLHlCQUF5QjtBQUN6Qiw0Q0FBNEM7QUFFNUMsU0FBZ0IsSUFBSTs7SUFDaEIsT0FBTyxvQkFBQyxjQUFLLE9BQUcsQ0FBQTtDQUNuQjtBQUZELG9CQUVDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function Test() {
    window["__checkBudget__"]();
    return React.createElement(framer_1.Frame, null);
}
exports.Test = Test;
exports.__info__ = [{ "name": "Test", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Test_1.tsx":
/*!*************************!*\
  !*** ./code/Test_1.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdF8xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9UZXN0XzEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF3QztBQUV4Qyx5QkFBeUI7QUFDekIsNENBQTRDO0FBRTVDLFNBQWdCLElBQUk7O0lBQ2hCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsaUJBQVEsQ0FDM0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDekIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FDM0IsQ0FBQTtJQUVELE9BQU8sb0JBQUMsY0FBSyxzQkFBb0IsQ0FBQTtDQUNwQztBQVBELG9CQU9DIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function Test() {
    window["__checkBudget__"]();
    const [twist, cycle] = framer_1.useCycle({ scale: 0.5, rotate: 0 }, { scale: 1, rotate: 90 });
    return React.createElement(framer_1.Frame, null, "Hello world");
}
exports.Test = Test;
exports.__info__ = [{ "name": "Test", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});
exports.Content1 = framer_1.createDesignComponent(canvas, "id_Z4DOlncgU", {}, 472, 163);
exports.Content2 = framer_1.createDesignComponent(canvas, "id_Ft7KqOoFO", {}, 313, 241);
exports.IDE = framer_1.createDesignComponent(canvas, "id_IDjoR3U8v", {}, 440, 492);
exports.MiniTools = framer_1.createDesignComponent(canvas, "id_ido9HhbCx", {}, 1336, 48);
exports.Page = framer_1.createDesignComponent(canvas, "id_DndhyTo70", { H: "string", HOME: "string" }, 320, 64);
exports.Popup = framer_1.createDesignComponent(canvas, "id_h7DNVCYav", {}, 569, 315);
exports.Stage = framer_1.createDesignComponent(canvas, "id_Ixyetc5wu", {}, 1336, 706);
exports.SwitchButton = framer_1.createDesignComponent(canvas, "id_azSU8LqlQ", { State: "string" }, 105, 28);
exports.Tools = framer_1.createDesignComponent(canvas, "id_ZyQROW4wN", {}, "100%", 48);
exports.Triangle = framer_1.createDesignComponent(canvas, "id_yuIcBTuOt", {}, 25, 18);
exports.colors = Object.freeze({
    /** #ECEDF1 */
    "grayborder": "var(--token-37b48e03-1f23-41f4-b06e-7c479cee86d1, rgb(236, 237, 241))",
    /** #1F77FF */
    "blue": "var(--token-25677501-55f2-4899-91ce-bbeef5f68193, rgb(31, 119, 255))",
    /** #162D3D */
    "dark blue": "var(--token-4b84b4c2-bce0-4087-8d6f-1210f8a5c2d1, rgb(22, 45, 61))",
    /** #3F8DCF */
    "ide blue": "var(--token-58bf7c61-d87c-4a8a-8dc2-efb62ffb984e, rgb(63, 141, 207))",
    /** #B05CCC */
    "ide purple": "var(--token-5637b681-b28e-4762-9b1e-a5c26355425d, rgb(176, 92, 204))",
});
exports.__info__ = [];


/***/ }),

/***/ "./code/snippets.tsx":
/*!***************************!*\
  !*** ./code/snippets.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {


//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25pcHBldHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3NuaXBwZXRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=


/***/ }),

/***/ "./code/styles.css":
/*!*************************!*\
  !*** ./code/styles.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./styles.css */ "../../../.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/css-loader/dist/cjs.js!./code/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../.npm/_npx/59294/lib/node_modules/framer-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template
designs["@framer/benjamin.input"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 140,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 2,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              },
              {
                "__class" : "BoxShadow",
                "blur" : 4,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 2
              },
              {
                "__class" : "BoxShadow",
                "blur" : 8,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 4
              },
              {
                "__class" : "BoxShadow",
                "blur" : 16,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 8
              },
              {
                "__class" : "BoxShadow",
                "blur" : 32,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 16
              },
              {
                "__class" : "BoxShadow",
                "blur" : 64,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 32
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [
              {
                "__class" : "FrameNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : 72,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.64886363636363631,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : null,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.15151515151515152,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Input.tsx_Input",
                    "codeComponentProps" : {
                      "backgroundColor" : "#FFF",
                      "border" : "rgba(0,0,0,0.1)",
                      "borderWidth" : 1,
                      "focusColor" : "rgba(34, 204, 222, 1.00)",
                      "fontSize" : 15,
                      "multiLine" : false,
                      "padding" : 15,
                      "paddingBottom" : 15,
                      "paddingLeft" : 15,
                      "paddingPerSide" : false,
                      "paddingRight" : 15,
                      "paddingTop" : 15,
                      "password" : false,
                      "placeholder" : "Email",
                      "radius" : 8,
                      "textColor" : "#000",
                      "value" : ""
                    },
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImageOriginalName" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 50,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "CJKuj30VZ",
                    "intrinsicHeight" : 50,
                    "intrinsicWidth" : 300,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "hum18Giq4",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : 0,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : null,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : 55,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.51515151515151514,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Input.tsx_Input",
                    "codeComponentProps" : {
                      "backgroundColor" : "#FFF",
                      "border" : "rgba(0,0,0,0.1)",
                      "borderWidth" : 1,
                      "focusColor" : "rgba(34, 204, 222, 1.00)",
                      "fontSize" : 15,
                      "multiLine" : false,
                      "padding" : 15,
                      "paddingBottom" : 15,
                      "paddingLeft" : 15,
                      "paddingPerSide" : false,
                      "paddingRight" : 15,
                      "paddingTop" : 15,
                      "password" : true,
                      "placeholder" : "Password",
                      "radius" : 8,
                      "textColor" : "#000",
                      "value" : ""
                    },
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImageOriginalName" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 50,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "WpLAhe2NQ",
                    "intrinsicHeight" : 50,
                    "intrinsicWidth" : 300,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "hum18Giq4",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  },
                  {
                    "__class" : "FrameNode",
                    "aspectRatio" : null,
                    "blendingEnabled" : 0,
                    "blendingMode" : "normal",
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "hsla(0, 0%, 13%, 0.1)",
                    "borderEnabled" : 1,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : 0,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.86363636363636365,
                    "children" : [
                      {
                        "__class" : "TextNode",
                        "autoSize" : true,
                        "blur" : 12,
                        "blurEnabled" : 0,
                        "blurType" : "layer",
                        "bottom" : null,
                        "brightness" : 100,
                        "brightnessEnabled" : 0,
                        "centerAnchorX" : 0.5,
                        "centerAnchorY" : 0.51111111111111107,
                        "codeOverrideEnabled" : false,
                        "constraintsLocked" : false,
                        "contrast" : 100,
                        "contrastEnabled" : 0,
                        "exportOptions" : [

                        ],
                        "grayscale" : 0,
                        "grayScaleEnabled" : 0,
                        "height" : 18,
                        "heightType" : 0,
                        "hueRotate" : 0,
                        "hueRotateEnabled" : 0,
                        "id" : "Ta37qeNis",
                        "invert" : 0,
                        "invertEnabled" : 0,
                        "isTarget" : false,
                        "left" : null,
                        "locked" : false,
                        "name" : null,
                        "opacity" : 1,
                        "originalid" : null,
                        "parentid" : "p99fy2p_7",
                        "right" : null,
                        "rotation" : 0,
                        "saturate" : 100,
                        "saturateEnabled" : 0,
                        "sepia" : 0,
                        "sepiaEnabled" : 0,
                        "shadows" : [

                        ],
                        "styledText" : {
                          "__class" : "StyledTextDraft",
                          "blocks" : [
                            {
                              "data" : {
                                "emptyStyle" : [
                                  "LETTERSPACING:0",
                                  "LINEHEIGHT:1.2",
                                  "ALIGN:center",
                                  "FONT:SFUIText-Bold",
                                  "COLOR:rgba(255, 255, 255, 1.00)",
                                  "SIZE:15"
                                ]
                              },
                              "depth" : 0,
                              "entityRanges" : [

                              ],
                              "inlineStyleRanges" : [
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "LETTERSPACING:0"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "LINEHEIGHT:1.2"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "ALIGN:center"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "FONT:SFUIText-Bold"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "COLOR:rgba(255, 255, 255, 1.00)"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "SIZE:15"
                                }
                              ],
                              "key" : "1ah8p",
                              "text" : "SUBMIT",
                              "type" : "unstyled"
                            }
                          ],
                          "cached" : {
                            "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"1ah8p-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"1ah8p-0-0\" style=\"tab-size:4;font-family:&quot;SFUIText-Bold&quot;, &quot;SF UI Text&quot;, sans-serif;-webkit-text-fill-color:rgba(255, 255, 255, 1.00);font-size:15px;letter-spacing:0px;line-height:1.2;font-weight:700\"><span data-text=\"true\">SUBMIT<\/span><\/span><\/div><\/div>",
                            "os" : "macos 10_15 framerx",
                            "size" : {
                              "height" : 18,
                              "width" : 62
                            },
                            "width" : 0
                          },
                          "entityMap" : {

                          }
                        },
                        "top" : null,
                        "visible" : true,
                        "width" : 62,
                        "widthType" : 0
                      }
                    ],
                    "clip" : false,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(34, 204, 222, 1.00)",
                    "fillEnabled" : true,
                    "fillImage" : null,
                    "fillImageOriginalName" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "guidesX" : [

                    ],
                    "guidesY" : [

                    ],
                    "height" : 45,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "p99fy2p_7",
                    "intrinsicHeight" : null,
                    "intrinsicWidth" : null,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isExternalMaster" : null,
                    "isMaster" : false,
                    "isTarget" : false,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "navigationTarget" : null,
                    "navigationTransition" : "push",
                    "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                    "navigationTransitionDirection" : "left",
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "hum18Giq4",
                    "previewSettings" : null,
                    "radius" : 8,
                    "radiusBottomLeft" : 8,
                    "radiusBottomRight" : 8,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 8,
                    "radiusTopRight" : 8,
                    "replicaInfo" : null,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  }
                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImageOriginalName" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 165,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "hum18Giq4",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 72,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "oLt6jivrw",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 72,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 296,
                "widthType" : 0
              },
              {
                "__class" : "FrameNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.24204545454545454,
                "children" : [
                  {
                    "__class" : "TextNode",
                    "autoSize" : true,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "bottom" : null,
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.29222972972972971,
                    "centerAnchorY" : 0.20289855072463769,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "mBhKwhnSu",
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isTarget" : false,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "K7KOcPQtx",
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "shadows" : [

                    ],
                    "styledText" : {
                      "__class" : "StyledTextDraft",
                      "blocks" : [
                        {
                          "data" : {
                            "emptyStyle" : [
                              "COLOR:rgb(0, 0, 0)",
                              "LINEHEIGHT:1.2",
                              "SIZE:40",
                              "FONT:__SF-UI-Display-Heavy__",
                              "LETTERSPACING:-0.6",
                              "ALIGN:left"
                            ]
                          },
                          "depth" : 0,
                          "entityRanges" : [

                          ],
                          "inlineStyleRanges" : [
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "COLOR:rgb(0, 0, 0)"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LINEHEIGHT:1.2"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "SIZE:40"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "FONT:__SF-UI-Display-Heavy__"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LETTERSPACING:-0.6"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "ALIGN:left"
                            }
                          ],
                          "key" : "4bf3q",
                          "text" : "Welcome",
                          "type" : "unstyled"
                        }
                      ],
                      "cached" : {
                        "html" : "<div class='DraftEditor-alignLeft'><div data-offset-key=\"4bf3q-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"4bf3q-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Heavy&quot;, &quot;SFProDisplay-Heavy&quot;, &quot;SFUIDisplay-Heavy&quot;, &quot;.SFUIDisplay-Heavy&quot;, &quot;SF Pro Display&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:40px;letter-spacing:-0.6px;line-height:1.2;font-weight:799\"><span data-text=\"true\">Welcome<\/span><\/span><\/div><\/div>",
                        "os" : "macos 10_15 framerx",
                        "size" : {
                          "height" : 48,
                          "width" : 173
                        },
                        "width" : 0
                      },
                      "entityMap" : {

                      }
                    },
                    "top" : -10,
                    "visible" : true,
                    "width" : 173,
                    "widthType" : 0
                  },
                  {
                    "__class" : "TextNode",
                    "autoSize" : true,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "bottom" : -8,
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.24155405405405406,
                    "centerAnchorY" : 0.76811594202898548,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "eHREXF2a3",
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isTarget" : true,
                    "left" : 0,
                    "locked" : false,
                    "name" : "posts",
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "K7KOcPQtx",
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "shadows" : [

                    ],
                    "styledText" : {
                      "__class" : "StyledTextDraft",
                      "blocks" : [
                        {
                          "data" : {
                            "emptyStyle" : [
                              "LINEHEIGHT:1.2",
                              "SIZE:40",
                              "FONT:__SF-UI-Display-Heavy__",
                              "LETTERSPACING:-0.6",
                              "COLOR:#22CCDD",
                              "ALIGN:left"
                            ]
                          },
                          "depth" : 0,
                          "entityRanges" : [

                          ],
                          "inlineStyleRanges" : [
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LINEHEIGHT:1.2"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "SIZE:40"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "FONT:__SF-UI-Display-Heavy__"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LETTERSPACING:-0.6"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "COLOR:#22CCDD"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "ALIGN:left"
                            }
                          ],
                          "key" : "4bf3q",
                          "text" : "Sign Up",
                          "type" : "unstyled"
                        }
                      ],
                      "cached" : {
                        "html" : "<div class='DraftEditor-alignLeft'><div data-offset-key=\"4bf3q-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"4bf3q-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Heavy&quot;, &quot;SFProDisplay-Heavy&quot;, &quot;SFUIDisplay-Heavy&quot;, &quot;.SFUIDisplay-Heavy&quot;, &quot;SF Pro Display&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#22CCDD;font-size:40px;letter-spacing:-0.6px;line-height:1.2;font-weight:799\"><span data-text=\"true\">Sign Up<\/span><\/span><\/div><\/div>",
                        "os" : "macos 10_15 framerx",
                        "size" : {
                          "height" : 48,
                          "width" : 143
                        },
                        "width" : 0
                      },
                      "entityMap" : {

                      }
                    },
                    "top" : null,
                    "visible" : true,
                    "width" : 143,
                    "widthType" : 0
                  }
                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImageOriginalName" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 69,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "K7KOcPQtx",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 72,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "oLt6jivrw",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 72,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : 72,
                "visible" : true,
                "width" : 296,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 440,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "oLt6jivrw",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "ErIyzDpvZ",
            "previewSettings" : null,
            "radius" : 20,
            "radiusBottomLeft" : 20,
            "radiusBottomRight" : 20,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 20,
            "radiusTopRight" : 20,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 140,
            "visible" : true,
            "width" : 440,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : "framer\/FramerAppleMacBook",
        "exportOptions" : [

        ],
        "fillColor" : "rgba(34, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 720,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "ErIyzDpvZ",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 970,
        "locked" : false,
        "name" : null,
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleMacBook",
          "responsive" : false,
          "rotate" : false,
          "touch" : false,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 1152,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 80,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 2,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              },
              {
                "__class" : "BoxShadow",
                "blur" : 4,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 2
              },
              {
                "__class" : "BoxShadow",
                "blur" : 8,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 4
              },
              {
                "__class" : "BoxShadow",
                "blur" : 16,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 8
              },
              {
                "__class" : "BoxShadow",
                "blur" : 32,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 16
              },
              {
                "__class" : "BoxShadow",
                "blur" : 64,
                "color" : "hsla(0, 0%, 0%, 0.05)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 32
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [
              {
                "__class" : "FrameNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : 72,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.64886363636363631,
                "children" : [
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : null,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : null,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.15151515151515152,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Input.tsx_Input",
                    "codeComponentProps" : {
                      "backgroundColor" : "#FFF",
                      "border" : "rgba(0,0,0,0.1)",
                      "borderWidth" : 1,
                      "focusColor" : "rgba(34, 204, 222, 1.00)",
                      "fontSize" : 15,
                      "multiLine" : false,
                      "padding" : 15,
                      "paddingBottom" : 15,
                      "paddingLeft" : 15,
                      "paddingPerSide" : false,
                      "paddingRight" : 15,
                      "paddingTop" : 15,
                      "password" : false,
                      "placeholder" : "Email",
                      "radius" : 8,
                      "textColor" : "#000",
                      "value" : ""
                    },
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImageOriginalName" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 50,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "ir2hJMFNU",
                    "intrinsicHeight" : 50,
                    "intrinsicWidth" : 300,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "btGKCmU0n",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : 0,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  },
                  {
                    "__class" : "CodeComponentNode",
                    "aspectRatio" : null,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "#222",
                    "borderEnabled" : 0,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : 55,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.51515151515151514,
                    "children" : [

                    ],
                    "clip" : true,
                    "codeComponentIdentifier" : ".\/Input.tsx_Input",
                    "codeComponentProps" : {
                      "backgroundColor" : "#FFF",
                      "border" : "rgba(0,0,0,0.1)",
                      "borderWidth" : 1,
                      "focusColor" : "rgba(34, 204, 222, 1.00)",
                      "fontSize" : 15,
                      "multiLine" : false,
                      "padding" : 15,
                      "paddingBottom" : 15,
                      "paddingLeft" : 15,
                      "paddingPerSide" : false,
                      "paddingRight" : 15,
                      "paddingTop" : 15,
                      "password" : true,
                      "placeholder" : "Password",
                      "radius" : 8,
                      "textColor" : "#000",
                      "value" : ""
                    },
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(255,255,255,1)",
                    "fillEnabled" : false,
                    "fillImage" : null,
                    "fillImageOriginalName" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 50,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "K7ipwUuGJ",
                    "intrinsicHeight" : 50,
                    "intrinsicWidth" : 300,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "btGKCmU0n",
                    "previewSettings" : null,
                    "radius" : 0,
                    "radiusBottomLeft" : 0,
                    "radiusBottomRight" : 0,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 0,
                    "radiusTopRight" : 0,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  },
                  {
                    "__class" : "FrameNode",
                    "aspectRatio" : null,
                    "blendingEnabled" : 0,
                    "blendingMode" : "normal",
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "borderBottom" : 1,
                    "borderColor" : "hsla(0, 0%, 13%, 0.1)",
                    "borderEnabled" : 1,
                    "borderLeft" : 1,
                    "borderPerSide" : false,
                    "borderRight" : 1,
                    "borderStyle" : "solid",
                    "borderTop" : 1,
                    "borderWidth" : 1,
                    "bottom" : 0,
                    "boxShadows" : [

                    ],
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.5,
                    "centerAnchorY" : 0.86363636363636365,
                    "children" : [
                      {
                        "__class" : "TextNode",
                        "autoSize" : true,
                        "blur" : 12,
                        "blurEnabled" : 0,
                        "blurType" : "layer",
                        "bottom" : null,
                        "brightness" : 100,
                        "brightnessEnabled" : 0,
                        "centerAnchorX" : 0.5,
                        "centerAnchorY" : 0.51111111111111107,
                        "codeOverrideEnabled" : false,
                        "constraintsLocked" : false,
                        "contrast" : 100,
                        "contrastEnabled" : 0,
                        "exportOptions" : [

                        ],
                        "grayscale" : 0,
                        "grayScaleEnabled" : 0,
                        "height" : 16,
                        "heightType" : 0,
                        "hueRotate" : 0,
                        "hueRotateEnabled" : 0,
                        "id" : "YGTstaBKR",
                        "invert" : 0,
                        "invertEnabled" : 0,
                        "isTarget" : false,
                        "left" : null,
                        "locked" : false,
                        "name" : null,
                        "opacity" : 1,
                        "originalid" : null,
                        "parentid" : "CjIyUsWP6",
                        "right" : null,
                        "rotation" : 0,
                        "saturate" : 100,
                        "saturateEnabled" : 0,
                        "sepia" : 0,
                        "sepiaEnabled" : 0,
                        "shadows" : [

                        ],
                        "styledText" : {
                          "__class" : "StyledTextDraft",
                          "blocks" : [
                            {
                              "data" : {
                                "emptyStyle" : [
                                  "LETTERSPACING:0",
                                  "LINEHEIGHT:1.2",
                                  "ALIGN:center",
                                  "FONT:SFUIText-Bold",
                                  "COLOR:rgba(255, 255, 255, 1.00)",
                                  "SIZE:14"
                                ]
                              },
                              "depth" : 0,
                              "entityRanges" : [

                              ],
                              "inlineStyleRanges" : [
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "LETTERSPACING:0"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "LINEHEIGHT:1.2"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "ALIGN:center"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "FONT:SFUIText-Bold"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "COLOR:rgba(255, 255, 255, 1.00)"
                                },
                                {
                                  "length" : 6,
                                  "offset" : 0,
                                  "style" : "SIZE:14"
                                }
                              ],
                              "key" : "1ah8p",
                              "text" : "SUBMIT",
                              "type" : "unstyled"
                            }
                          ],
                          "cached" : {
                            "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"1ah8p-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"1ah8p-0-0\" style=\"tab-size:4;font-family:&quot;SFUIText-Bold&quot;, &quot;SF UI Text&quot;, sans-serif;-webkit-text-fill-color:rgba(255, 255, 255, 1.00);font-size:14px;letter-spacing:0px;line-height:1.2;font-weight:700\"><span data-text=\"true\">SUBMIT<\/span><\/span><\/div><\/div>",
                            "os" : "macos 10_15 framerx",
                            "size" : {
                              "height" : 16,
                              "width" : 58
                            },
                            "width" : 0
                          },
                          "entityMap" : {

                          }
                        },
                        "top" : null,
                        "visible" : true,
                        "width" : 58,
                        "widthType" : 0
                      }
                    ],
                    "clip" : false,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "deviceType" : null,
                    "exportOptions" : [

                    ],
                    "fillColor" : "rgba(34, 204, 222, 1.00)",
                    "fillEnabled" : true,
                    "fillImage" : null,
                    "fillImageOriginalName" : null,
                    "fillImagePixelHeight" : null,
                    "fillImagePixelWidth" : null,
                    "fillImageResize" : "fill",
                    "fillLinearGradient" : {
                      "__class" : "LinearGradient",
                      "alpha" : 1,
                      "angle" : 180,
                      "stops" : [
                        {
                          "__class" : "GradientColorStop",
                          "position" : 0,
                          "value" : "rgba(0,0,0,0)"
                        },
                        {
                          "__class" : "GradientColorStop",
                          "position" : 1,
                          "value" : "black"
                        }
                      ]
                    },
                    "fillType" : "color",
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "guidesX" : [

                    ],
                    "guidesY" : [

                    ],
                    "height" : 45,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "CjIyUsWP6",
                    "intrinsicHeight" : null,
                    "intrinsicWidth" : null,
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isExternalMaster" : null,
                    "isMaster" : false,
                    "isTarget" : false,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "navigationTarget" : null,
                    "navigationTransition" : "push",
                    "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                    "navigationTransitionDirection" : "left",
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "btGKCmU0n",
                    "previewSettings" : null,
                    "radius" : 8,
                    "radiusBottomLeft" : 8,
                    "radiusBottomRight" : 8,
                    "radiusIsRelative" : false,
                    "radiusPerCorner" : false,
                    "radiusTopLeft" : 8,
                    "radiusTopRight" : 8,
                    "replicaInfo" : null,
                    "right" : 0,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "top" : null,
                    "visible" : true,
                    "width" : 327,
                    "widthType" : 0
                  }
                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImageOriginalName" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 165,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "btGKCmU0n",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 72,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "ax7DfQjtB",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 72,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 296,
                "widthType" : 0
              },
              {
                "__class" : "FrameNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : null,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.24204545454545454,
                "children" : [
                  {
                    "__class" : "TextNode",
                    "autoSize" : true,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "bottom" : null,
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.29222972972972971,
                    "centerAnchorY" : 0.20289855072463769,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "XBodO9eb8",
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isTarget" : false,
                    "left" : 0,
                    "locked" : false,
                    "name" : null,
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "MuBafEzJ1",
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "shadows" : [

                    ],
                    "styledText" : {
                      "__class" : "StyledTextDraft",
                      "blocks" : [
                        {
                          "data" : {
                            "emptyStyle" : [
                              "COLOR:rgb(0, 0, 0)",
                              "LINEHEIGHT:1.2",
                              "SIZE:40",
                              "FONT:__SF-UI-Display-Heavy__",
                              "LETTERSPACING:-0.6",
                              "ALIGN:left"
                            ]
                          },
                          "depth" : 0,
                          "entityRanges" : [

                          ],
                          "inlineStyleRanges" : [
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "COLOR:rgb(0, 0, 0)"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LINEHEIGHT:1.2"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "SIZE:40"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "FONT:__SF-UI-Display-Heavy__"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LETTERSPACING:-0.6"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "ALIGN:left"
                            }
                          ],
                          "key" : "4bf3q",
                          "text" : "Welcome",
                          "type" : "unstyled"
                        }
                      ],
                      "cached" : {
                        "html" : "<div class='DraftEditor-alignLeft'><div data-offset-key=\"4bf3q-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"4bf3q-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Heavy&quot;, &quot;SFProDisplay-Heavy&quot;, &quot;SFUIDisplay-Heavy&quot;, &quot;.SFUIDisplay-Heavy&quot;, &quot;SF Pro Display&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:40px;letter-spacing:-0.6px;line-height:1.2;font-weight:799\"><span data-text=\"true\">Welcome<\/span><\/span><\/div><\/div>",
                        "os" : "macos 10_15 framerx",
                        "size" : {
                          "height" : 48,
                          "width" : 173
                        },
                        "width" : 0
                      },
                      "entityMap" : {

                      }
                    },
                    "top" : -10,
                    "visible" : true,
                    "width" : 173,
                    "widthType" : 0
                  },
                  {
                    "__class" : "TextNode",
                    "autoSize" : true,
                    "blur" : 12,
                    "blurEnabled" : 0,
                    "blurType" : "layer",
                    "bottom" : -8,
                    "brightness" : 100,
                    "brightnessEnabled" : 0,
                    "centerAnchorX" : 0.24155405405405406,
                    "centerAnchorY" : 0.76811594202898548,
                    "codeOverrideEnabled" : false,
                    "constraintsLocked" : false,
                    "contrast" : 100,
                    "contrastEnabled" : 0,
                    "exportOptions" : [

                    ],
                    "grayscale" : 0,
                    "grayScaleEnabled" : 0,
                    "height" : 48,
                    "heightType" : 0,
                    "hueRotate" : 0,
                    "hueRotateEnabled" : 0,
                    "id" : "jlTcwwm0v",
                    "invert" : 0,
                    "invertEnabled" : 0,
                    "isTarget" : true,
                    "left" : 0,
                    "locked" : false,
                    "name" : "posts",
                    "opacity" : 1,
                    "originalid" : null,
                    "parentid" : "MuBafEzJ1",
                    "right" : null,
                    "rotation" : 0,
                    "saturate" : 100,
                    "saturateEnabled" : 0,
                    "sepia" : 0,
                    "sepiaEnabled" : 0,
                    "shadows" : [

                    ],
                    "styledText" : {
                      "__class" : "StyledTextDraft",
                      "blocks" : [
                        {
                          "data" : {
                            "emptyStyle" : [
                              "LINEHEIGHT:1.2",
                              "SIZE:40",
                              "FONT:__SF-UI-Display-Heavy__",
                              "LETTERSPACING:-0.6",
                              "COLOR:#22CCDD",
                              "ALIGN:left"
                            ]
                          },
                          "depth" : 0,
                          "entityRanges" : [

                          ],
                          "inlineStyleRanges" : [
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LINEHEIGHT:1.2"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "SIZE:40"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "FONT:__SF-UI-Display-Heavy__"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "LETTERSPACING:-0.6"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "COLOR:#22CCDD"
                            },
                            {
                              "length" : 7,
                              "offset" : 0,
                              "style" : "ALIGN:left"
                            }
                          ],
                          "key" : "4bf3q",
                          "text" : "Sign Up",
                          "type" : "unstyled"
                        }
                      ],
                      "cached" : {
                        "html" : "<div class='DraftEditor-alignLeft'><div data-offset-key=\"4bf3q-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"4bf3q-0-0\" style=\"tab-size:4;font-family:&quot;.SFNSDisplay-Heavy&quot;, &quot;SFProDisplay-Heavy&quot;, &quot;SFUIDisplay-Heavy&quot;, &quot;.SFUIDisplay-Heavy&quot;, &quot;SF Pro Display&quot;, &quot;-apple-system&quot;, &quot;BlinkMacSystemFont&quot;, sans-serif;-webkit-text-fill-color:#22CCDD;font-size:40px;letter-spacing:-0.6px;line-height:1.2;font-weight:799\"><span data-text=\"true\">Sign Up<\/span><\/span><\/div><\/div>",
                        "os" : "macos 10_15 framerx",
                        "size" : {
                          "height" : 48,
                          "width" : 143
                        },
                        "width" : 0
                      },
                      "entityMap" : {

                      }
                    },
                    "top" : null,
                    "visible" : true,
                    "width" : 143,
                    "widthType" : 0
                  }
                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : false,
                "fillImage" : null,
                "fillImageOriginalName" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 69,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "MuBafEzJ1",
                "intrinsicHeight" : null,
                "intrinsicWidth" : null,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 72,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "ax7DfQjtB",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 72,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : 72,
                "visible" : true,
                "width" : 296,
                "widthType" : 0
              },
              {
                "__class" : "FrameNode",
                "aspectRatio" : 4.7101449275362315,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "borderBottom" : 1,
                "borderColor" : "#222",
                "borderEnabled" : 0,
                "borderLeft" : 1,
                "borderPerSide" : false,
                "borderRight" : 1,
                "borderStyle" : "solid",
                "borderTop" : 1,
                "borderWidth" : 1,
                "bottom" : 181,
                "boxShadows" : [

                ],
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.49204545454545456,
                "centerAnchorY" : 0.51022727272727275,
                "children" : [

                ],
                "clip" : false,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "deviceType" : null,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(255,255,255,1)",
                "fillEnabled" : true,
                "fillImage" : "d1Hxvudu0Z086BRET3TIfyM4w.png",
                "fillImageOriginalName" : null,
                "fillImagePixelHeight" : 138,
                "fillImagePixelWidth" : 650,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "image",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "guidesX" : [

                ],
                "guidesY" : [

                ],
                "height" : 69,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "Acqnt_Pcr",
                "intrinsicHeight" : 69,
                "intrinsicWidth" : 325,
                "invert" : 0,
                "invertEnabled" : 0,
                "isExternalMaster" : null,
                "isMaster" : false,
                "isTarget" : false,
                "left" : 54,
                "locked" : false,
                "name" : null,
                "navigationTarget" : null,
                "navigationTransition" : "push",
                "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
                "navigationTransitionDirection" : "left",
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "ax7DfQjtB",
                "previewSettings" : null,
                "radius" : 0,
                "radiusBottomLeft" : 0,
                "radiusBottomRight" : 0,
                "radiusIsRelative" : false,
                "radiusPerCorner" : false,
                "radiusTopLeft" : 0,
                "radiusTopRight" : 0,
                "replicaInfo" : null,
                "right" : 61,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "top" : null,
                "visible" : true,
                "width" : 325,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 440,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "ax7DfQjtB",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "kHtLUpBDz",
            "previewSettings" : null,
            "radius" : 20,
            "radiusBottomLeft" : 20,
            "radiusBottomRight" : 20,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 20,
            "radiusTopRight" : 20,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 80,
            "visible" : true,
            "width" : 440,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(34, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 600,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "kHtLUpBDz",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 2222,
        "locked" : false,
        "name" : "artwork",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleMacBook",
          "responsive" : false,
          "rotate" : false,
          "touch" : false,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 800,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.00875,
        "centerAnchorY" : 0.31166666666666665,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 4,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "wM85zLpGI",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "C6uRexxRp",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 26,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.34000000000000002,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 4,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "vK6k8qN6f",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "C6uRexxRp",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 15,
            "visible" : true,
            "width" : 14,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 15,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.66000000000000003,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 4,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "p5bT4_cfS",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "C6uRexxRp",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 14,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(35, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 234,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "hsl(46, 100%, 50%)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "hsl(338, 100%, 50%)"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 50,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "C6uRexxRp",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 3045,
        "locked" : false,
        "name" : "icon",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 50,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.00875,
        "centerAnchorY" : 0.31166666666666665,
        "children" : [
          {
            "__class" : "ShapeContainerNode",
            "autoSize" : true,
            "bottom" : null,
            "centerAnchorX" : 0,
            "centerAnchorY" : 0,
            "children" : [

            ],
            "constraintsLocked" : false,
            "deviceType" : null,
            "exportIncludesBackground" : false,
            "exportOptions" : [

            ],
            "fillColor" : "#FFF",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "height" : 50,
            "heightType" : 0,
            "id" : "qKQdw8Xhe",
            "left" : 0,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "sizeToFit" : false,
            "top" : 0,
            "visible" : true,
            "width" : 50,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.42999999999999999,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "CYdpHeNNB",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 20,
            "visible" : true,
            "width" : 24,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.28999999999999998,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "X3hpG_4ie",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 13,
            "visible" : true,
            "width" : 10,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 20,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.56999999999999995,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "ITyMqLTAy",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 24,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 13,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.70999999999999996,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "dwGhQ6sZj",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Xl8DlmAY1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 10,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(35, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 234,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "hsl(46, 100%, 50%)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "hsl(338, 100%, 50%)"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 50,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "Xl8DlmAY1",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 3130,
        "locked" : false,
        "name" : "icon",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 50,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "hsl(186, 100%, 41%)",
            "borderEnabled" : -1,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.44624999999999998,
            "centerAnchorY" : 0.41666666666666669,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : true,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.14464285714285716,
                "centerAnchorY" : 0.51000000000000001,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 19,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "ojRhGY0Ul",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 19,
                "locked" : false,
                "name" : null,
                "opacity" : 0.20000000000000001,
                "originalid" : null,
                "parentid" : "FMOT28LYU",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "COLOR:rgb(0, 0, 0)",
                          "SIZE:16",
                          "LETTERSPACING:0",
                          "LINEHEIGHT:1.2",
                          "FONT:Colfax-Regular"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "COLOR:rgb(0, 0, 0)"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "SIZE:16"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "LETTERSPACING:0"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "FONT:Colfax-Regular"
                        }
                      ],
                      "key" : "fa3ni",
                      "text" : "Email",
                      "type" : "unstyled"
                    }
                  ],
                  "cached" : {
                    "html" : "<div data-offset-key=\"fa3ni-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"fa3ni-0-0\" style=\"tab-size:4;font-family:&quot;Colfax-Regular&quot;, &quot;Colfax&quot;, serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:16px;letter-spacing:0px;line-height:1.2;font-weight:400\"><span data-text=\"true\">Email<\/span><\/span><\/div>",
                    "os" : "macos 10_15 framerx",
                    "size" : {
                      "height" : 19,
                      "width" : 43
                    },
                    "width" : 0
                  },
                  "entityMap" : {

                  }
                },
                "top" : null,
                "visible" : true,
                "width" : 43,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 50,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "FMOT28LYU",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : 217,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "xZBRcakmD",
            "previewSettings" : null,
            "radius" : 8,
            "radiusBottomLeft" : 8,
            "radiusBottomRight" : 8,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 8,
            "radiusTopRight" : 8,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 225,
            "visible" : true,
            "width" : 280,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 225,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.55500000000000005,
            "centerAnchorY" : 0.58333333333333337,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 50,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "hRcLjqfEZ",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "xZBRcakmD",
            "previewSettings" : null,
            "radius" : 8,
            "radiusBottomLeft" : 8,
            "radiusBottomRight" : 8,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 8,
            "radiusTopRight" : 8,
            "replicaInfo" : null,
            "right" : 216,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 280,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.67500000000000004,
            "centerAnchorY" : 0.25,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 270,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(255,255,255,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "#FFFFFF"
                }
              ]
            },
            "fillType" : "linear-gradient",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 50,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "c_c6PQgIY",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 0.29999999999999999,
            "originalid" : null,
            "parentid" : "xZBRcakmD",
            "previewSettings" : null,
            "radius" : 8,
            "radiusBottomLeft" : 8,
            "radiusBottomRight" : 8,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 8,
            "radiusTopRight" : 8,
            "replicaInfo" : null,
            "right" : 120,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 125,
            "visible" : true,
            "width" : 280,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 125,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.32500000000000001,
            "centerAnchorY" : 0.75,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 90,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(255,255,255,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "#FFFFFF"
                }
              ]
            },
            "fillType" : "linear-gradient",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 50,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "UheRCOBt3",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : 120,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 0.29999999999999999,
            "originalid" : null,
            "parentid" : "xZBRcakmD",
            "previewSettings" : null,
            "radius" : 8,
            "radiusBottomLeft" : 8,
            "radiusBottomRight" : 8,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 8,
            "radiusTopRight" : 8,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 280,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(34, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 600,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "xZBRcakmD",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 3280,
        "locked" : false,
        "name" : "artwork",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : {
          "__class" : "PreviewSettings",
          "bezel" : false,
          "deviceType" : "framer\/FramerAppleMacBook",
          "responsive" : false,
          "rotate" : false,
          "touch" : false,
          "zoom" : -1
        },
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 800,
        "widthType" : 0
      },
      {
        "__class" : "CodeComponentNode",
        "aspectRatio" : null,
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeComponentIdentifier" : ".\/Input.tsx_Input",
        "codeComponentProps" : {
          "backgroundColor" : "#FFF",
          "border" : "rgba(0,0,0,0.1)",
          "borderWidth" : 1,
          "focusColor" : "#09F",
          "fontSize" : 15,
          "multiLine" : false,
          "padding" : 15,
          "paddingBottom" : 15,
          "paddingLeft" : 15,
          "paddingPerSide" : false,
          "paddingRight" : 15,
          "paddingTop" : 15,
          "password" : false,
          "placeholder" : "Type something…",
          "radius" : 10,
          "textColor" : "#000",
          "value" : ""
        },
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : false,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "height" : 50,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "CGkFkhJuf",
        "intrinsicHeight" : 50,
        "intrinsicWidth" : 300,
        "invert" : 0,
        "invertEnabled" : 0,
        "left" : 1661,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 154,
        "visible" : true,
        "width" : 300,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 12,
        "blurEnabled" : 0,
        "blurType" : "layer",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 1.00875,
        "centerAnchorY" : 0.31166666666666665,
        "children" : [
          {
            "__class" : "ShapeContainerNode",
            "autoSize" : true,
            "bottom" : null,
            "centerAnchorX" : 0,
            "centerAnchorY" : 0,
            "children" : [

            ],
            "constraintsLocked" : false,
            "deviceType" : null,
            "exportIncludesBackground" : false,
            "exportOptions" : [

            ],
            "fillColor" : "#FFF",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "height" : 50,
            "heightType" : 0,
            "id" : "oa7fqZEuP",
            "left" : 0,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "sizeToFit" : false,
            "top" : 0,
            "visible" : true,
            "width" : 50,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.42999999999999999,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "un5qsqs7e",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 20,
            "visible" : true,
            "width" : 24,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.28999999999999998,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "j5tTX7uxN",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 13,
            "visible" : true,
            "width" : 10,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 20,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.56999999999999995,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "dH7GG3Nzq",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 24,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : 13,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.70999999999999996,
            "children" : [

            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255, 255, 255, 1.00)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 3,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "RrGOcbAkj",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "diWGr7LM1",
            "previewSettings" : null,
            "radius" : 10,
            "radiusBottomLeft" : 10,
            "radiusBottomRight" : 10,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 10,
            "radiusTopRight" : 10,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 10,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : false,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [
          {
            "__class" : "ExportOptions",
            "enabled" : true,
            "nameExtension" : "",
            "nameExtensionMode" : "Suffix",
            "scale" : 2,
            "type" : "png"
          }
        ],
        "fillColor" : "rgba(35, 204, 222, 1.00)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 234,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "hsl(46, 100%, 50%)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "hsl(338, 100%, 50%)"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 50,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "diWGr7LM1",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 4180,
        "locked" : false,
        "name" : "icon",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 271,
        "visible" : true,
        "width" : 50,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "blur" : 20,
        "blurEnabled" : 1,
        "blurType" : "background",
        "borderBottom" : 1,
        "borderColor" : "#222",
        "borderEnabled" : 0,
        "borderLeft" : 1,
        "borderPerSide" : false,
        "borderRight" : 1,
        "borderStyle" : "solid",
        "borderTop" : 1,
        "borderWidth" : 1,
        "bottom" : null,
        "boxShadows" : [

        ],
        "brightness" : 100,
        "brightnessEnabled" : 0,
        "centerAnchorX" : 0.36861111111111111,
        "centerAnchorY" : 0.17532467532467533,
        "children" : [
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.94533333333333336,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-j6EEiuh5L",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Ax4TtJzKL",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "P",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Ax4TtJzKL",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.15333333333333332,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-ksyu1Igva",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-MDnIF6nCU",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "W",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-MDnIF6nCU",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.84666666666666668,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-q5RAnLN1p",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-bPmWoEV9S",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "O",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-bPmWoEV9S",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.748,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-BATfdqZyu",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-eR8DGU0UG",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "I",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-eR8DGU0UG",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.64933333333333332,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QaEdVEJIr",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-akqJenAaJ",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "U",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-akqJenAaJ",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.55066666666666664,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-GmsqVsWEg",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-jeg6TJ0F5",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "Y",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-jeg6TJ0F5",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.44933333333333331,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-AVzdiktZa",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Y9EDNvQTe",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "T",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Y9EDNvQTe",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.35066666666666668,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-JCJI8UCGK",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-wJRXSjoR8",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "R",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-wJRXSjoR8",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.252,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-xacYideO0",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N_3p6HgAz",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "E",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N_3p6HgAz",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.054666666666666669,
            "centerAnchorY" : 0.14351851851851852,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-sjbt25Gst",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-rsiWH9kVt",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "Q",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-rsiWH9kVt",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.89466666666666672,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-M1oJOho_c",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-hnHrJiAad",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "L",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-hnHrJiAad",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.10533333333333333,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-SMmIj7nW2",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-PpjQEDAKQ",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "A",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-PpjQEDAKQ",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.20133333333333334,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N1roBHRly",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-vreNq0Q4_",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "S",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-vreNq0Q4_",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.29999999999999999,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QVA4Y8vTI",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-lKXJKrkWW",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "D",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-lKXJKrkWW",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.40133333333333332,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-CwjSDgafu",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-yJn7UkDXP",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "F",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-yJn7UkDXP",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.50266666666666671,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-K9Ie3LWJ6",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-DnJfepPc1",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "G",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-DnJfepPc1",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.60399999999999998,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-EQc7GPXXZ",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-yvY_TefX1",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "H",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-yvY_TefX1",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.70266666666666666,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-ZuY7UC5_x",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RKEcrPRhZ",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "J",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RKEcrPRhZ",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.79866666666666664,
            "centerAnchorY" : 0.3888888888888889,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.51666666666666672,
                "centerAnchorY" : 0.5,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-HsntJGLW6",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-mw5sFTZEh",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LINEHEIGHT:1.2",
                          "FONT:__SF-UI-Display-Regular__",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:23",
                          "LETTERSPACING:-0.55"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "K",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-mw5sFTZEh",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.19866666666666666,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-roREOECXI",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-t2Rd_LaLy",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "Z",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-t2Rd_LaLy",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.39866666666666667,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-Zg3XTuS2W",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RYbeQuXu4",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "C",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RYbeQuXu4",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.50266666666666671,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-fxrieTNWr",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QxDTvFch3",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "V",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QxDTvFch3",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.60133333333333339,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-sGoAmVYLm",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-ROttcHKVG",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "B",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-ROttcHKVG",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.70266666666666666,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-FgjSIi4QU",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-dMdlkIhVr",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "N",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-dMdlkIhVr",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.80133333333333334,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-QGIeCb0IX",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-U4vi2stuY",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "M",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-U4vi2stuY",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.06933333333333333,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "SVGNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.51190476190476186,
                "centerAnchorY" : 0.5,
                "children" : [

                ],
                "colorable" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(0,0,0,1)",
                "fillImage" : null,
                "fillImageOriginalName" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 16,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-RzLBP8zNX",
                "intrinsicHeight" : 15.586,
                "intrinsicWidth" : 17.175999999999998,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : null,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalFilename" : "",
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-L09HOyT5S",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "svg" : "<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"17.176\" height=\"15.586\"><path d=\"M 13.088 15.586 L 4.088 15.586 L 4.088 9.586 L 1.002 9.586 C 0.111 9.586 -0.335 8.509 0.295 7.879 L 7.881 0.293 C 8.271 -0.098 8.904 -0.098 9.295 0.293 L 16.881 7.879 C 17.511 8.509 17.064 9.586 16.174 9.586 L 13.088 9.586 Z\" fill=\"rgba(0, 0, 0, 1.00)\"><\/path><\/svg>",
                "top" : null,
                "visible" : true,
                "width" : 17,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-L09HOyT5S",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 42,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.06933333333333333,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.51190476190476186,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 19,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-GrGMJWQoS",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-YjOtE0vUm",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "COLOR:#000000",
                          "LINEHEIGHT:1.2",
                          "SIZE:16",
                          "LETTERSPACING:-0.32",
                          "FONT:__SF-UI-Text-Regular__",
                          "ALIGN:center"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "SIZE:16"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.32"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Text-Regular__"
                        },
                        {
                          "length" : 3,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        }
                      ],
                      "key" : "ejiju",
                      "text" : "123",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : null,
                "visible" : true,
                "width" : 42,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsla(240, 58%, 4%, 0.2)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-YjOtE0vUm",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 42,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.192,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "SVGNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "children" : [

                ],
                "colorable" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(0,0,0,1)",
                "fillImage" : null,
                "fillImageOriginalName" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 20,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-PSBnDtaS9",
                "intrinsicHeight" : 19.5,
                "intrinsicWidth" : 19.5,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : null,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalFilename" : "",
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-GyIE4Prmg",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "svg" : "<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"19.5\" height=\"19.5\"><path d=\"M 9.75 19.5 C 4.365 19.5 0 15.135 0 9.75 C 0 4.365 4.365 0 9.75 0 C 15.135 0 19.5 4.365 19.5 9.75 C 19.5 15.135 15.135 19.5 9.75 19.5 Z M 9.75 18.5 C 14.582 18.5 18.5 14.582 18.5 9.75 C 18.5 4.918 14.582 1 9.75 1 C 4.918 1 1 4.918 1 9.75 C 1 14.582 4.918 18.5 9.75 18.5 Z M 6.75 8 C 6.06 8 5.5 7.44 5.5 6.75 C 5.5 6.06 6.06 5.5 6.75 5.5 C 7.44 5.5 8 6.06 8 6.75 C 8 7.44 7.44 8 6.75 8 Z M 9.75 16.5 C 6.022 16.5 3 13.076 3 11 C 3 9.059 6.022 11 9.75 11 C 13.478 11 16.5 9.096 16.5 11 C 16.5 13.022 13.478 16.5 9.75 16.5 Z M 12.75 8 C 12.06 8 11.5 7.44 11.5 6.75 C 11.5 6.06 12.06 5.5 12.75 5.5 C 13.44 5.5 14 6.06 14 6.75 C 14 7.44 13.44 8 12.75 8 Z M 4.5 11.5 C 4.5 11.768 4.658 12.149 4.852 12.333 C 4.852 12.333 5.547 13.5 9.795 13.5 C 14.043 13.5 14.648 12.348 14.648 12.348 C 14.85 12.172 15 11.776 15 11.5 C 15 11.232 14.793 11.084 14.537 11.188 C 14.537 11.188 12.88 12 9.863 12 C 6.846 12 4.965 11.174 4.965 11.174 C 4.699 11.078 4.5 11.224 4.5 11.5 Z\" fill=\"rgb(0,0,0)\"><\/path><\/svg>",
                "top" : null,
                "visible" : true,
                "width" : 20,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsla(240, 58%, 4%, 0.2)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-GyIE4Prmg",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 42,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.29999999999999999,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : 7,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.484375,
                "centerAnchorY" : 0.48809523809523808,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 28,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-nuE2oHPxK",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N2wGz9NVN",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "ALIGN:center",
                          "COLOR:#000000",
                          "FONT:__SF-UI-Display-Regular__",
                          "LETTERSPACING:-0.55",
                          "LINEHEIGHT:1.2",
                          "SIZE:23"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Display-Regular__"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LETTERSPACING:-0.55"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 1,
                          "offset" : 0,
                          "style" : "SIZE:23"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "X",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : 7,
                "visible" : true,
                "width" : 31,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-N2wGz9NVN",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.30533333333333335,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "SVGNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "children" : [

                ],
                "colorable" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(0,0,0,1)",
                "fillImage" : null,
                "fillImageOriginalName" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 20,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-sbciiMPnh",
                "intrinsicHeight" : 20,
                "intrinsicWidth" : 11,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : null,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalFilename" : "",
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-iob8awZhF",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "svg" : "<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"11\" height=\"20\"><path d=\"M 2 19 L 5 19 L 5 15.978 C 2.197 15.725 0 13.369 0 10.5 L 0 7 L 1 7 L 1 10.5 C 1 12.985 3.015 15 5.5 15 C 7.985 15 10 12.985 10 10.5 L 10 7 L 11 7 L 11 10.5 C 11 13.369 8.803 15.725 6 15.978 L 6 19 L 9 19 L 9 20 L 2 20 Z M 2 3.5 C 2 1.567 3.567 0 5.5 0 C 7.433 0 9 1.567 9 3.5 L 9 10.5 C 9 12.433 7.433 14 5.5 14 C 3.567 14 2 12.433 2 10.5 Z M 3 10.5 C 3 11.881 4.119 13 5.5 13 C 6.881 13 8 11.881 8 10.5 L 8 3.5 C 8 2.119 6.881 1 5.5 1 C 4.119 1 3 2.119 3 3.5 Z\" fill=\"hsl(0, 0%, 0%)\"><\/path><\/svg>",
                "top" : null,
                "visible" : true,
                "width" : 11,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-iob8awZhF",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 31,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.93066666666666664,
            "centerAnchorY" : 0.6342592592592593,
            "children" : [
              {
                "__class" : "SVGNode",
                "aspectRatio" : null,
                "blendingEnabled" : 0,
                "blendingMode" : "normal",
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.48809523809523808,
                "centerAnchorY" : 0.51190476190476186,
                "children" : [

                ],
                "colorable" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "fillColor" : "rgba(0,0,0,1)",
                "fillImage" : null,
                "fillImageOriginalName" : null,
                "fillImagePixelHeight" : null,
                "fillImagePixelWidth" : null,
                "fillImageResize" : "fill",
                "fillLinearGradient" : {
                  "__class" : "LinearGradient",
                  "alpha" : 1,
                  "angle" : 180,
                  "stops" : [
                    {
                      "__class" : "GradientColorStop",
                      "position" : 0,
                      "value" : "rgba(0,0,0,0)"
                    },
                    {
                      "__class" : "GradientColorStop",
                      "position" : 1,
                      "value" : "black"
                    }
                  ]
                },
                "fillType" : "color",
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 17,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-oihKzOsfn",
                "intrinsicHeight" : 17,
                "intrinsicWidth" : 22.5,
                "invert" : 0,
                "invertEnabled" : 0,
                "left" : null,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalFilename" : "",
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-VcmbU9EJB",
                "right" : null,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "svg" : "<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"22.5\" height=\"17\"><path d=\"M 7.751 14.832 C 8.162 15.2 8.949 15.5 9.502 15.5 L 18.999 15.5 C 20.101 15.5 21 14.605 21 13.502 L 21 3.498 C 21 2.397 20.104 1.5 18.999 1.5 L 9.502 1.5 C 8.945 1.5 8.168 1.796 7.758 2.162 C 7.758 2.162 1.5 7.673 1.5 8.5 C 1.5 9.327 7.751 14.832 7.751 14.832 Z M 13.25 7.439 L 10.776 4.966 C 10.48 4.669 10.007 4.672 9.714 4.964 C 9.42 5.259 9.422 5.733 9.716 6.026 L 12.189 8.5 L 9.716 10.974 C 9.419 11.27 9.422 11.743 9.714 12.036 C 10.009 12.33 10.483 12.328 10.776 12.034 L 13.25 9.561 L 15.724 12.034 C 16.02 12.331 16.493 12.328 16.786 12.036 C 17.08 11.741 17.078 11.267 16.784 10.974 L 14.311 8.5 L 16.784 6.026 C 17.081 5.73 17.078 5.257 16.786 4.964 C 16.491 4.67 16.017 4.672 15.724 4.966 Z M 3.211 4.3 C 3.337 4.179 3.466 4.056 3.597 3.932 C 4.291 3.274 5.033 2.592 5.775 1.922 C 6.034 1.688 6.275 1.472 6.491 1.28 C 6.622 1.164 6.715 1.081 6.76 1.042 C 7.446 0.43 8.579 0 9.502 0 L 18.999 0 C 20.931 0 22.5 1.568 22.5 3.498 L 22.5 13.502 C 22.5 15.434 20.93 17 18.999 17 L 9.502 17 C 8.58 17 7.438 16.565 6.759 15.958 C 6.709 15.913 6.615 15.831 6.485 15.715 C 6.269 15.522 6.028 15.307 5.769 15.073 C 5.028 14.404 4.287 13.722 3.594 13.065 C 3.462 12.941 3.334 12.818 3.208 12.697 C 0.764 10.355 0 9.513 0 8.5 C 0 7.487 0.764 6.645 3.211 4.3 Z\" fill=\"rgb(0,0,0)\"><\/path><\/svg>",
                "top" : null,
                "visible" : true,
                "width" : 23,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsla(240, 58%, 4%, 0.2)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-VcmbU9EJB",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 42,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.55466666666666664,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.5,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 20,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-PnMgDSE2c",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-rhF7m3h7i",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LETTERSPACING:0.07",
                          "LINEHEIGHT:1.2",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:16",
                          "FONT:__SF-UI-Text-Regular__"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "LETTERSPACING:0.07"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "SIZE:16"
                        },
                        {
                          "length" : 5,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Text-Regular__"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "space",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : null,
                "visible" : true,
                "width" : 144,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsl(0, 0%, 100%)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-rhF7m3h7i",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 144,
            "widthType" : 0
          },
          {
            "__class" : "FrameNode",
            "aspectRatio" : null,
            "blendingEnabled" : 0,
            "blendingMode" : "normal",
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [
              {
                "__class" : "BoxShadow",
                "blur" : 0,
                "color" : "hsla(240, 58%, 4%, 0.36)",
                "enabled" : true,
                "inset" : false,
                "spread" : 0,
                "x" : 0,
                "y" : 1
              }
            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.872,
            "centerAnchorY" : 0.8842592592592593,
            "children" : [
              {
                "__class" : "TextNode",
                "autoSize" : false,
                "blur" : 12,
                "blurEnabled" : 0,
                "blurType" : "layer",
                "bottom" : null,
                "brightness" : 100,
                "brightnessEnabled" : 0,
                "centerAnchorX" : 0.5,
                "centerAnchorY" : 0.47619047619047616,
                "codeOverrideEnabled" : false,
                "constraintsLocked" : false,
                "contrast" : 100,
                "contrastEnabled" : 0,
                "exportOptions" : [

                ],
                "grayscale" : 0,
                "grayScaleEnabled" : 0,
                "height" : 20,
                "heightType" : 0,
                "hueRotate" : 0,
                "hueRotateEnabled" : 0,
                "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-S3ciKMtmu",
                "invert" : 0,
                "invertEnabled" : 0,
                "isTarget" : false,
                "left" : 0,
                "locked" : false,
                "name" : null,
                "opacity" : 1,
                "originalid" : null,
                "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D-gIg3TGrkV",
                "right" : 0,
                "rotation" : 0,
                "saturate" : 100,
                "saturateEnabled" : 0,
                "sepia" : 0,
                "sepiaEnabled" : 0,
                "shadows" : [

                ],
                "styledText" : {
                  "__class" : "StyledTextDraft",
                  "blocks" : [
                    {
                      "data" : {
                        "emptyStyle" : [
                          "LETTERSPACING:0.07",
                          "LINEHEIGHT:1.2",
                          "COLOR:#000000",
                          "ALIGN:center",
                          "SIZE:16",
                          "FONT:__SF-UI-Text-Regular__"
                        ]
                      },
                      "depth" : 0,
                      "entityRanges" : [

                      ],
                      "inlineStyleRanges" : [
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "LETTERSPACING:0.07"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "LINEHEIGHT:1.2"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "COLOR:#000000"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "ALIGN:center"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "SIZE:16"
                        },
                        {
                          "length" : 6,
                          "offset" : 0,
                          "style" : "FONT:__SF-UI-Text-Regular__"
                        }
                      ],
                      "key" : "6dgir",
                      "text" : "return",
                      "type" : "unstyled"
                    }
                  ],
                  "entityMap" : {

                  }
                },
                "top" : null,
                "visible" : true,
                "width" : 86,
                "widthType" : 0
              }
            ],
            "clip" : false,
            "codeOverrideEnabled" : false,
            "codeOverrideFile" : null,
            "codeOverrideIdentifier" : null,
            "codeOverrideName" : null,
            "constraintsLocked" : true,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "hsla(240, 58%, 4%, 0.2)",
            "fillEnabled" : true,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillLinearGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 180,
              "stops" : [
                {
                  "__class" : "GradientColorStop",
                  "position" : 0,
                  "value" : "rgba(0,0,0,0)"
                },
                {
                  "__class" : "GradientColorStop",
                  "position" : 1,
                  "value" : "black"
                }
              ]
            },
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "guidesX" : [

            ],
            "guidesY" : [

            ],
            "height" : 42,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D-gIg3TGrkV",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "isExternalMaster" : null,
            "isMaster" : false,
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : "key",
            "navigationTarget" : null,
            "navigationTransition" : "push",
            "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
            "navigationTransitionDirection" : "left",
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
            "previewSettings" : null,
            "radius" : 5,
            "radiusBottomLeft" : 5,
            "radiusBottomRight" : 5,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 5,
            "radiusTopRight" : 5,
            "replicaInfo" : null,
            "right" : null,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : null,
            "visible" : true,
            "width" : 86,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "codeOverrideFile" : null,
        "codeOverrideIdentifier" : null,
        "codeOverrideName" : null,
        "constraintsLocked" : true,
        "contrast" : 100,
        "contrastEnabled" : 0,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(204, 206, 211, 0.76)",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillLinearGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 180,
          "stops" : [
            {
              "__class" : "GradientColorStop",
              "position" : 0,
              "value" : "rgba(0,0,0,0)"
            },
            {
              "__class" : "GradientColorStop",
              "position" : 1,
              "value" : "black"
            }
          ]
        },
        "fillType" : "color",
        "grayscale" : 0,
        "grayScaleEnabled" : 0,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 216,
        "heightType" : 0,
        "hueRotate" : 0,
        "hueRotateEnabled" : 0,
        "id" : "@framer\/edoardo.ios-kit-x2vUZx_1D",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "invert" : 0,
        "invertEnabled" : 0,
        "isExternalMaster" : "@framer\/edoardo.ios-kit",
        "isMaster" : true,
        "isTarget" : false,
        "left" : 0,
        "locked" : false,
        "name" : "Keyboards \/ Light \/ Alphabetic Uppercase",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "saturate" : 100,
        "saturateEnabled" : 0,
        "sepia" : 0,
        "sepiaEnabled" : 0,
        "top" : 0,
        "visible" : true,
        "width" : 375,
        "widthType" : 0
      },
      {
        "__class" : "CodeComponentNode",
        "aspectRatio" : null,
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeComponentIdentifier" : ".\/Input.tsx_Input",
        "codeComponentProps" : {
          "backgroundColor" : "#FFF",
          "border" : "rgba(0,0,0,0.1)",
          "borderWidth" : 1,
          "focusColor" : "#09F",
          "fontSize" : 15,
          "multiLine" : false,
          "padding" : 15,
          "paddingBottom" : 15,
          "paddingLeft" : 15,
          "paddingPerSide" : false,
          "paddingRight" : 15,
          "paddingTop" : 15,
          "password" : false,
          "placeholder" : "Type something…",
          "radius" : 10,
          "textColor" : "#000",
          "value" : ""
        },
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : false,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 50,
        "heightType" : 0,
        "id" : "hK6eZdGHI",
        "intrinsicHeight" : 50,
        "intrinsicWidth" : 300,
        "left" : 1846,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "pp8wH1ime",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "right" : null,
        "rotation" : 0,
        "top" : -154,
        "visible" : true,
        "width" : 300,
        "widthType" : 0
      }
    ],
    "guidesX" : [

    ],
    "guidesY" : [
      -1597
    ],
    "id" : "pp8wH1ime",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "tokens" : {

    },
    "tokensIndex" : [

    ],
    "visible" : false
  },
  "version" : 55
}
designs["@framer/koenbok.tab-bar"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "TextNode",
            "autoSize" : true,
            "bottom" : null,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "exportOptions" : [

            ],
            "height" : 57,
            "heightType" : 0,
            "id" : "bbTVtNSig",
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "SSvLrGhby",
            "right" : null,
            "rotation" : 0,
            "styledText" : {
              "__class" : "StyledTextDraft",
              "blocks" : [
                {
                  "data" : {
                    "emptyStyle" : [
                      "FONT:__SF-UI-Text-Regular__",
                      "LETTERSPACING:0",
                      "LINEHEIGHT:1.2",
                      "COLOR:rgba(255, 255, 255, 1.00)",
                      "BOLD",
                      "ALIGN:center",
                      "SIZE:48"
                    ]
                  },
                  "depth" : 0,
                  "entityRanges" : [

                  ],
                  "inlineStyleRanges" : [
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "FONT:__SF-UI-Text-Regular__"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "LETTERSPACING:0"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "LINEHEIGHT:1.2"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "COLOR:rgba(255, 255, 255, 1.00)"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "BOLD"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "ALIGN:center"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "SIZE:48"
                    }
                  ],
                  "key" : "7rgir",
                  "text" : "Home",
                  "type" : "unstyled"
                }
              ],
              "cached" : {
                "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"7rgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"7rgir-0-0\" style=\"font-weight:bold;tab-size:4;font-family:&quot;.SFNSText&quot;, &quot;SFProText-Regular&quot;, &quot;SFUIText-Regular&quot;, &quot;.SFUIText&quot;, sans-serif;-webkit-text-fill-color:rgba(255, 255, 255, 1.00);font-size:48px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Home<\/span><\/span><\/div><\/div>",
                "os" : "10_14",
                "size" : {
                  "height" : 57,
                  "width" : 142
                },
                "width" : 0
              },
              "entityMap" : {

              }
            },
            "top" : null,
            "visible" : true,
            "width" : 142,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : "framer\/FramerAppleIPhone8",
        "exportOptions" : [

        ],
        "fillColor" : "#FF88AA",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 667,
        "heightType" : 0,
        "id" : "SSvLrGhby",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : -1497,
        "locked" : false,
        "name" : "Home",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "se_jcKkrs",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -163,
        "visible" : true,
        "width" : 375,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "TextNode",
            "autoSize" : true,
            "bottom" : null,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "exportOptions" : [

            ],
            "height" : 57,
            "heightType" : 0,
            "id" : "TD77_Lnw7",
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "dPC2yc74L",
            "right" : null,
            "rotation" : 0,
            "styledText" : {
              "__class" : "StyledTextDraft",
              "blocks" : [
                {
                  "data" : {
                    "emptyStyle" : [
                      "FONT:__SF-UI-Text-Regular__",
                      "LETTERSPACING:0",
                      "LINEHEIGHT:1.2",
                      "COLOR:rgba(255, 255, 255, 1.00)",
                      "BOLD",
                      "ALIGN:center",
                      "SIZE:48"
                    ]
                  },
                  "depth" : 0,
                  "entityRanges" : [

                  ],
                  "inlineStyleRanges" : [
                    {
                      "length" : 8,
                      "offset" : 0,
                      "style" : "FONT:__SF-UI-Text-Regular__"
                    },
                    {
                      "length" : 8,
                      "offset" : 0,
                      "style" : "LETTERSPACING:0"
                    },
                    {
                      "length" : 8,
                      "offset" : 0,
                      "style" : "LINEHEIGHT:1.2"
                    },
                    {
                      "length" : 8,
                      "offset" : 0,
                      "style" : "COLOR:rgba(255, 255, 255, 1.00)"
                    },
                    {
                      "length" : 8,
                      "offset" : 0,
                      "style" : "BOLD"
                    },
                    {
                      "length" : 8,
                      "offset" : 0,
                      "style" : "ALIGN:center"
                    },
                    {
                      "length" : 8,
                      "offset" : 0,
                      "style" : "SIZE:48"
                    }
                  ],
                  "key" : "7rgir",
                  "text" : "Settings",
                  "type" : "unstyled"
                }
              ],
              "cached" : {
                "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"7rgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"7rgir-0-0\" style=\"font-weight:bold;tab-size:4;font-family:&quot;.SFNSText&quot;, &quot;SFProText-Regular&quot;, &quot;SFUIText-Regular&quot;, &quot;.SFUIText&quot;, sans-serif;-webkit-text-fill-color:rgba(255, 255, 255, 1.00);font-size:48px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Settings<\/span><\/span><\/div><\/div>",
                "os" : "10_14",
                "size" : {
                  "height" : 57,
                  "width" : 205
                },
                "width" : 0
              },
              "entityMap" : {

              }
            },
            "top" : null,
            "visible" : true,
            "width" : 205,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : "framer\/FramerAppleIPhone8",
        "exportOptions" : [

        ],
        "fillColor" : "#BB66CC",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 667,
        "heightType" : 0,
        "id" : "dPC2yc74L",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : -1022,
        "locked" : false,
        "name" : "Settings",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "se_jcKkrs",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -163,
        "visible" : true,
        "width" : 375,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "TextNode",
            "autoSize" : true,
            "bottom" : null,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "exportOptions" : [

            ],
            "height" : 57,
            "heightType" : 0,
            "id" : "owoaIZUm7",
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "lVx5V1EpG",
            "right" : null,
            "rotation" : 0,
            "styledText" : {
              "__class" : "StyledTextDraft",
              "blocks" : [
                {
                  "data" : {
                    "emptyStyle" : [
                      "FONT:__SF-UI-Text-Regular__",
                      "LETTERSPACING:0",
                      "LINEHEIGHT:1.2",
                      "COLOR:rgba(255, 255, 255, 1.00)",
                      "BOLD",
                      "ALIGN:center",
                      "SIZE:48"
                    ]
                  },
                  "depth" : 0,
                  "entityRanges" : [

                  ],
                  "inlineStyleRanges" : [
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "FONT:__SF-UI-Text-Regular__"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "LETTERSPACING:0"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "LINEHEIGHT:1.2"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "COLOR:rgba(255, 255, 255, 1.00)"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "BOLD"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "ALIGN:center"
                    },
                    {
                      "length" : 4,
                      "offset" : 0,
                      "style" : "SIZE:48"
                    }
                  ],
                  "key" : "7rgir",
                  "text" : "Feed",
                  "type" : "unstyled"
                }
              ],
              "cached" : {
                "html" : "<div class='DraftEditor-alignCenter'><div data-offset-key=\"7rgir-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"7rgir-0-0\" style=\"font-weight:bold;tab-size:4;font-family:&quot;.SFNSText&quot;, &quot;SFProText-Regular&quot;, &quot;SFUIText-Regular&quot;, &quot;.SFUIText&quot;, sans-serif;-webkit-text-fill-color:rgba(255, 255, 255, 1.00);font-size:48px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">Feed<\/span><\/span><\/div><\/div>",
                "os" : "10_14",
                "size" : {
                  "height" : 57,
                  "width" : 119
                },
                "width" : 0
              },
              "entityMap" : {

              }
            },
            "top" : null,
            "visible" : true,
            "width" : 119,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : "framer\/FramerAppleIPhone8",
        "exportOptions" : [

        ],
        "fillColor" : "#7755CC",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 667,
        "heightType" : 0,
        "id" : "lVx5V1EpG",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : -547,
        "locked" : false,
        "name" : "Feed",
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "se_jcKkrs",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -163,
        "visible" : true,
        "width" : 375,
        "widthType" : 0
      },
      {
        "__class" : "CodeComponentNode",
        "aspectRatio" : null,
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeComponentIdentifier" : ".\/TabBar.tsx_TabBar",
        "codeComponentProps" : {
          "children" : [
            {
              "enabled" : true,
              "type" : "componentinstance",
              "value" : "SSvLrGhby"
            },
            {
              "enabled" : true,
              "type" : "componentinstance",
              "value" : "dPC2yc74L"
            },
            {
              "enabled" : true,
              "type" : "componentinstance",
              "value" : "lVx5V1EpG"
            }
          ]
        },
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : false,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 772,
        "heightType" : 0,
        "id" : "hrKH2kK0p",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "left" : -2735,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "se_jcKkrs",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "right" : null,
        "rotation" : 0,
        "top" : -341,
        "visible" : true,
        "width" : 581,
        "widthType" : 0
      }
    ],
    "id" : "se_jcKkrs",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "tokens" : {

    },
    "tokensIndex" : [

    ],
    "visible" : false
  },
  "version" : 50
}

module.exports = designs


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["@framer/benjamin.input"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/benjamin.input */ "framer-package-loader!@framer/benjamin.input")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/benjamin.input"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16"},"peerDependencies":{"framer":"^0.9.5 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"f39b105e-588c-479a-aa1e-30973cfe2f5e","displayName":"Input"},"author":"Benjamin den Boer","dependencies":{"styled-components":"^4.0.3"},"keywords":["input","form","textarea","web"],"name":"@framer/benjamin.input","version":"1.4.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/koenbok.tab-bar"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/koenbok.tab-bar */ "framer-package-loader!@framer/koenbok.tab-bar")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/koenbok.tab-bar"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"e81b70cc-d26d-4f38-9046-208afb8d92cd","displayName":"Tab Bar"},"author":"Koen Bok","name":"@framer/koenbok.tab-bar","version":"1.3.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: license, main, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"license\":\"MIT\",\"main\":\"dist/index.js\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"displayName\":\"\"},\"author\":\"Udi Gindi\",\"dependencies\":{\"@framer/benjamin.input\":\"^1.4.0\",\"@framer/koenbok.tab-bar\":\"^1.3.0\",\"feather-icons-react\":\"^0.3.2\",\"material-icons-react\":\"^1.0.4\",\"react-closeable-tabs\":\"^1.1.1\",\"react-column-resizer\":\"^1.1.9\",\"styled-components\":\"^4.3.2\"},\"name\":\"\",\"version\":\"1.0.0\"}");

/***/ }),

/***/ "feather-icons-react":
/*!**************************************!*\
  !*** external "feather-icons-react" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_feather_icons_react__;

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/benjamin.input":
/*!***************************************************************!*\
  !*** external "framer-package-loader!@framer/benjamin.input" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_input__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/benjamin.input'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_benjamin_input__;

/***/ }),

/***/ "framer-package-loader!@framer/koenbok.tab-bar":
/*!****************************************************************!*\
  !*** external "framer-package-loader!@framer/koenbok.tab-bar" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_koenbok_tab_bar__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/koenbok.tab-bar'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_koenbok_tab_bar__;

/***/ }),

/***/ "material-icons-react":
/*!***************************************!*\
  !*** external "material-icons-react" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_material_icons_react__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-column-resizer":
/*!***************************************!*\
  !*** external "react-column-resizer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_column_resizer__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});