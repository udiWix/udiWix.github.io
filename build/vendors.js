(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./node_modules/material-icons-react/dist/index.css":
/*!***************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./node_modules/material-icons-react/dist/index.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js */ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*@import url('https://fonts.googleapis.com/css?family=Material+Icons');*/\n\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.eot); /* For IE6-8 */\n  src: local('Material Icons'),\n    local('MaterialIcons-Regular'),\n    url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.woff2) format('woff2'),\n    url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.woff) format('woff'),\n    url(https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/fonts/Material-Design-Iconic-Font.ttf) format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n}\n\n/* Rules for sizing the icon. */\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }\n.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n/* Toggle icon display \n.material-icons.show { display: block }\n.material-icons.show { display: none }\n*/", ""]);


/***/ }),

/***/ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************/
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
        return "@media ".concat(item[2], "{").concat(content, "}");
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

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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

/***/ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/process/browser.js":
/*!********************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/process/browser.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*******************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*******************************************************************************************************************************/
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

/***/ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template
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

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/feather-icons-react/build/IconInner.js":
/*!*************************************************************!*\
  !*** ./node_modules/feather-icons-react/build/IconInner.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _icons = _interopRequireDefault(__webpack_require__(/*! ./icons.json */ "./node_modules/feather-icons-react/build/icons.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IconInner =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(IconInner, _PureComponent);

  function IconInner() {
    _classCallCheck(this, IconInner);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconInner).apply(this, arguments));
  }

  _createClass(IconInner, [{
    key: "createMarkup",
    value: function createMarkup(markup) {
      // we dont sanitize markup 
      // since icons.json is maintained within the package before build
      // do the weird thing for dangerouslySetInnerHTML
      return {
        __html: markup
      };
    }
  }, {
    key: "render",
    value: function render() {
      // <g> is just a wrapper it does nothing except let me use valid JSX markup
      // icons are based on generated icons.json from feather lib
      var icon = this.props.icon;
      var iconMarkup = _icons.default[icon];

      if (iconMarkup) {
        // i didnt want to use dangerouslySetInnerHTML
        // but this way I can just use the JSON to spit out SVG.
        // another possible option is to use the feather lib functions
        // which create the SVG files, then an SVG loader could be used.
        // i am open to this for a future version.
        return _react.default.createElement("g", {
          dangerouslySetInnerHTML: this.createMarkup(iconMarkup)
        });
      }

      return null;
    }
  }]);

  return IconInner;
}(_react.PureComponent);

IconInner.propTypes = {
  icon: _propTypes.default.string.isRequired
};
var _default = IconInner;
exports.default = _default;

/***/ }),

/***/ "./node_modules/feather-icons-react/build/icons.json":
/*!***********************************************************!*\
  !*** ./node_modules/feather-icons-react/build/icons.json ***!
  \***********************************************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, download-cloud, download, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, home, image, inbox, info, instagram, italic, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, trash-2, trash, trending-down, trending-up, triangle, truck, tv, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"activity\":\"<polyline points=\\\"22 12 18 12 15 21 9 3 6 12 2 12\\\"></polyline>\",\"airplay\":\"<path d=\\\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\\\"></path><polygon points=\\\"12 15 17 21 7 21 12 15\\\"></polygon>\",\"alert-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line>\",\"alert-octagon\":\"<polygon points=\\\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\\\"></polygon><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line>\",\"alert-triangle\":\"<path d=\\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\\"></path><line x1=\\\"12\\\" y1=\\\"9\\\" x2=\\\"12\\\" y2=\\\"13\\\"></line><line x1=\\\"12\\\" y1=\\\"17\\\" x2=\\\"12\\\" y2=\\\"17\\\"></line>\",\"align-center\":\"<line x1=\\\"18\\\" y1=\\\"10\\\" x2=\\\"6\\\" y2=\\\"10\\\"></line><line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\"></line><line x1=\\\"18\\\" y1=\\\"18\\\" x2=\\\"6\\\" y2=\\\"18\\\"></line>\",\"align-justify\":\"<line x1=\\\"21\\\" y1=\\\"10\\\" x2=\\\"3\\\" y2=\\\"10\\\"></line><line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line>\",\"align-left\":\"<line x1=\\\"17\\\" y1=\\\"10\\\" x2=\\\"3\\\" y2=\\\"10\\\"></line><line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\"></line><line x1=\\\"17\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line>\",\"align-right\":\"<line x1=\\\"21\\\" y1=\\\"10\\\" x2=\\\"7\\\" y2=\\\"10\\\"></line><line x1=\\\"21\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"21\\\" y1=\\\"14\\\" x2=\\\"3\\\" y2=\\\"14\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"7\\\" y2=\\\"18\\\"></line>\",\"anchor\":\"<circle cx=\\\"12\\\" cy=\\\"5\\\" r=\\\"3\\\"></circle><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"8\\\"></line><path d=\\\"M5 12H2a10 10 0 0 0 20 0h-3\\\"></path>\",\"aperture\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"14.31\\\" y1=\\\"8\\\" x2=\\\"20.05\\\" y2=\\\"17.94\\\"></line><line x1=\\\"9.69\\\" y1=\\\"8\\\" x2=\\\"21.17\\\" y2=\\\"8\\\"></line><line x1=\\\"7.38\\\" y1=\\\"12\\\" x2=\\\"13.12\\\" y2=\\\"2.06\\\"></line><line x1=\\\"9.69\\\" y1=\\\"16\\\" x2=\\\"3.95\\\" y2=\\\"6.06\\\"></line><line x1=\\\"14.31\\\" y1=\\\"16\\\" x2=\\\"2.83\\\" y2=\\\"16\\\"></line><line x1=\\\"16.62\\\" y1=\\\"12\\\" x2=\\\"10.88\\\" y2=\\\"21.94\\\"></line>\",\"archive\":\"<polyline points=\\\"21 8 21 21 3 21 3 8\\\"></polyline><rect x=\\\"1\\\" y=\\\"3\\\" width=\\\"22\\\" height=\\\"5\\\"></rect><line x1=\\\"10\\\" y1=\\\"12\\\" x2=\\\"14\\\" y2=\\\"12\\\"></line>\",\"arrow-down-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"8 12 12 16 16 12\\\"></polyline><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line>\",\"arrow-down-left\":\"<line x1=\\\"17\\\" y1=\\\"7\\\" x2=\\\"7\\\" y2=\\\"17\\\"></line><polyline points=\\\"17 17 7 17 7 7\\\"></polyline>\",\"arrow-down-right\":\"<line x1=\\\"7\\\" y1=\\\"7\\\" x2=\\\"17\\\" y2=\\\"17\\\"></line><polyline points=\\\"17 7 17 17 7 17\\\"></polyline>\",\"arrow-down\":\"<line x1=\\\"12\\\" y1=\\\"5\\\" x2=\\\"12\\\" y2=\\\"19\\\"></line><polyline points=\\\"19 12 12 19 5 12\\\"></polyline>\",\"arrow-left-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"12 8 8 12 12 16\\\"></polyline><line x1=\\\"16\\\" y1=\\\"12\\\" x2=\\\"8\\\" y2=\\\"12\\\"></line>\",\"arrow-left\":\"<line x1=\\\"19\\\" y1=\\\"12\\\" x2=\\\"5\\\" y2=\\\"12\\\"></line><polyline points=\\\"12 19 5 12 12 5\\\"></polyline>\",\"arrow-right-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"12 16 16 12 12 8\\\"></polyline><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"arrow-right\":\"<line x1=\\\"5\\\" y1=\\\"12\\\" x2=\\\"19\\\" y2=\\\"12\\\"></line><polyline points=\\\"12 5 19 12 12 19\\\"></polyline>\",\"arrow-up-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"16 12 12 8 8 12\\\"></polyline><line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"8\\\"></line>\",\"arrow-up-left\":\"<line x1=\\\"17\\\" y1=\\\"17\\\" x2=\\\"7\\\" y2=\\\"7\\\"></line><polyline points=\\\"7 17 7 7 17 7\\\"></polyline>\",\"arrow-up-right\":\"<line x1=\\\"7\\\" y1=\\\"17\\\" x2=\\\"17\\\" y2=\\\"7\\\"></line><polyline points=\\\"7 7 17 7 17 17\\\"></polyline>\",\"arrow-up\":\"<line x1=\\\"12\\\" y1=\\\"19\\\" x2=\\\"12\\\" y2=\\\"5\\\"></line><polyline points=\\\"5 12 12 5 19 12\\\"></polyline>\",\"at-sign\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\"></circle><path d=\\\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\\\"></path>\",\"award\":\"<circle cx=\\\"12\\\" cy=\\\"8\\\" r=\\\"7\\\"></circle><polyline points=\\\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\\\"></polyline>\",\"bar-chart-2\":\"<line x1=\\\"18\\\" y1=\\\"20\\\" x2=\\\"18\\\" y2=\\\"10\\\"></line><line x1=\\\"12\\\" y1=\\\"20\\\" x2=\\\"12\\\" y2=\\\"4\\\"></line><line x1=\\\"6\\\" y1=\\\"20\\\" x2=\\\"6\\\" y2=\\\"14\\\"></line>\",\"bar-chart\":\"<line x1=\\\"12\\\" y1=\\\"20\\\" x2=\\\"12\\\" y2=\\\"10\\\"></line><line x1=\\\"18\\\" y1=\\\"20\\\" x2=\\\"18\\\" y2=\\\"4\\\"></line><line x1=\\\"6\\\" y1=\\\"20\\\" x2=\\\"6\\\" y2=\\\"16\\\"></line>\",\"battery-charging\":\"<path d=\\\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\\\"></path><line x1=\\\"23\\\" y1=\\\"13\\\" x2=\\\"23\\\" y2=\\\"11\\\"></line><polyline points=\\\"11 6 7 12 13 12 9 18\\\"></polyline>\",\"battery\":\"<rect x=\\\"1\\\" y=\\\"6\\\" width=\\\"18\\\" height=\\\"12\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"23\\\" y1=\\\"13\\\" x2=\\\"23\\\" y2=\\\"11\\\"></line>\",\"bell-off\":\"<path d=\\\"M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"bell\":\"<path d=\\\"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0\\\"></path>\",\"bluetooth\":\"<polyline points=\\\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\\\"></polyline>\",\"bold\":\"<path d=\\\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\\\"></path><path d=\\\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\\\"></path>\",\"book-open\":\"<path d=\\\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\\\"></path><path d=\\\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\\\"></path>\",\"book\":\"<path d=\\\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\\\"></path><path d=\\\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\\\"></path>\",\"bookmark\":\"<path d=\\\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\\\"></path>\",\"box\":\"<path d=\\\"M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z\\\"></path><polyline points=\\\"2.32 6.16 12 11 21.68 6.16\\\"></polyline><line x1=\\\"12\\\" y1=\\\"22.76\\\" x2=\\\"12\\\" y2=\\\"11\\\"></line>\",\"briefcase\":\"<rect x=\\\"2\\\" y=\\\"7\\\" width=\\\"20\\\" height=\\\"14\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><path d=\\\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\\\"></path>\",\"calendar\":\"<rect x=\\\"3\\\" y=\\\"4\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"16\\\" y1=\\\"2\\\" x2=\\\"16\\\" y2=\\\"6\\\"></line><line x1=\\\"8\\\" y1=\\\"2\\\" x2=\\\"8\\\" y2=\\\"6\\\"></line><line x1=\\\"3\\\" y1=\\\"10\\\" x2=\\\"21\\\" y2=\\\"10\\\"></line>\",\"camera-off\":\"<line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line><path d=\\\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\\\"></path>\",\"camera\":\"<path d=\\\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\\\"></path><circle cx=\\\"12\\\" cy=\\\"13\\\" r=\\\"4\\\"></circle>\",\"cast\":\"<path d=\\\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\\\"></path><line x1=\\\"2\\\" y1=\\\"20\\\" x2=\\\"2\\\" y2=\\\"20\\\"></line>\",\"check-circle\":\"<path d=\\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\\"></path><polyline points=\\\"22 4 12 14.01 9 11.01\\\"></polyline>\",\"check-square\":\"<polyline points=\\\"9 11 12 14 22 4\\\"></polyline><path d=\\\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\\\"></path>\",\"check\":\"<polyline points=\\\"20 6 9 17 4 12\\\"></polyline>\",\"chevron-down\":\"<polyline points=\\\"6 9 12 15 18 9\\\"></polyline>\",\"chevron-left\":\"<polyline points=\\\"15 18 9 12 15 6\\\"></polyline>\",\"chevron-right\":\"<polyline points=\\\"9 18 15 12 9 6\\\"></polyline>\",\"chevron-up\":\"<polyline points=\\\"18 15 12 9 6 15\\\"></polyline>\",\"chevrons-down\":\"<polyline points=\\\"7 13 12 18 17 13\\\"></polyline><polyline points=\\\"7 6 12 11 17 6\\\"></polyline>\",\"chevrons-left\":\"<polyline points=\\\"11 17 6 12 11 7\\\"></polyline><polyline points=\\\"18 17 13 12 18 7\\\"></polyline>\",\"chevrons-right\":\"<polyline points=\\\"13 17 18 12 13 7\\\"></polyline><polyline points=\\\"6 17 11 12 6 7\\\"></polyline>\",\"chevrons-up\":\"<polyline points=\\\"17 11 12 6 7 11\\\"></polyline><polyline points=\\\"17 18 12 13 7 18\\\"></polyline>\",\"chrome\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\"></circle><line x1=\\\"21.17\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"8\\\"></line><line x1=\\\"3.95\\\" y1=\\\"6.06\\\" x2=\\\"8.54\\\" y2=\\\"14\\\"></line><line x1=\\\"10.88\\\" y1=\\\"21.94\\\" x2=\\\"15.46\\\" y2=\\\"14\\\"></line>\",\"circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle>\",\"clipboard\":\"<path d=\\\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\\\"></path><rect x=\\\"8\\\" y=\\\"2\\\" width=\\\"8\\\" height=\\\"4\\\" rx=\\\"1\\\" ry=\\\"1\\\"></rect>\",\"clock\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polyline points=\\\"12 6 12 12 16 14\\\"></polyline>\",\"cloud-drizzle\":\"<line x1=\\\"8\\\" y1=\\\"19\\\" x2=\\\"8\\\" y2=\\\"21\\\"></line><line x1=\\\"8\\\" y1=\\\"13\\\" x2=\\\"8\\\" y2=\\\"15\\\"></line><line x1=\\\"16\\\" y1=\\\"19\\\" x2=\\\"16\\\" y2=\\\"21\\\"></line><line x1=\\\"16\\\" y1=\\\"13\\\" x2=\\\"16\\\" y2=\\\"15\\\"></line><line x1=\\\"12\\\" y1=\\\"21\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><line x1=\\\"12\\\" y1=\\\"15\\\" x2=\\\"12\\\" y2=\\\"17\\\"></line><path d=\\\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\\"></path>\",\"cloud-lightning\":\"<path d=\\\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\\\"></path><polyline points=\\\"13 11 9 17 15 17 11 23\\\"></polyline>\",\"cloud-off\":\"<path d=\\\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"cloud-rain\":\"<line x1=\\\"16\\\" y1=\\\"13\\\" x2=\\\"16\\\" y2=\\\"21\\\"></line><line x1=\\\"8\\\" y1=\\\"13\\\" x2=\\\"8\\\" y2=\\\"21\\\"></line><line x1=\\\"12\\\" y1=\\\"15\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><path d=\\\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\\"></path>\",\"cloud-snow\":\"<path d=\\\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\\\"></path><line x1=\\\"8\\\" y1=\\\"16\\\" x2=\\\"8\\\" y2=\\\"16\\\"></line><line x1=\\\"8\\\" y1=\\\"20\\\" x2=\\\"8\\\" y2=\\\"20\\\"></line><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"18\\\"></line><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"22\\\"></line><line x1=\\\"16\\\" y1=\\\"16\\\" x2=\\\"16\\\" y2=\\\"16\\\"></line><line x1=\\\"16\\\" y1=\\\"20\\\" x2=\\\"16\\\" y2=\\\"20\\\"></line>\",\"cloud\":\"<path d=\\\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\\\"></path>\",\"code\":\"<polyline points=\\\"16 18 22 12 16 6\\\"></polyline><polyline points=\\\"8 6 2 12 8 18\\\"></polyline>\",\"codepen\":\"<polygon points=\\\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\\\"></polygon><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"15.5\\\"></line><polyline points=\\\"22 8.5 12 15.5 2 8.5\\\"></polyline><polyline points=\\\"2 15.5 12 8.5 22 15.5\\\"></polyline><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"8.5\\\"></line>\",\"command\":\"<path d=\\\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\\\"></path>\",\"compass\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polygon points=\\\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\\\"></polygon>\",\"copy\":\"<rect x=\\\"9\\\" y=\\\"9\\\" width=\\\"13\\\" height=\\\"13\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><path d=\\\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\\\"></path>\",\"corner-down-left\":\"<polyline points=\\\"9 10 4 15 9 20\\\"></polyline><path d=\\\"M20 4v7a4 4 0 0 1-4 4H4\\\"></path>\",\"corner-down-right\":\"<polyline points=\\\"15 10 20 15 15 20\\\"></polyline><path d=\\\"M4 4v7a4 4 0 0 0 4 4h12\\\"></path>\",\"corner-left-down\":\"<polyline points=\\\"14 15 9 20 4 15\\\"></polyline><path d=\\\"M20 4h-7a4 4 0 0 0-4 4v12\\\"></path>\",\"corner-left-up\":\"<polyline points=\\\"14 9 9 4 4 9\\\"></polyline><path d=\\\"M20 20h-7a4 4 0 0 1-4-4V4\\\"></path>\",\"corner-right-down\":\"<polyline points=\\\"10 15 15 20 20 15\\\"></polyline><path d=\\\"M4 4h7a4 4 0 0 1 4 4v12\\\"></path>\",\"corner-right-up\":\"<polyline points=\\\"10 9 15 4 20 9\\\"></polyline><path d=\\\"M4 20h7a4 4 0 0 0 4-4V4\\\"></path>\",\"corner-up-left\":\"<polyline points=\\\"9 14 4 9 9 4\\\"></polyline><path d=\\\"M20 20v-7a4 4 0 0 0-4-4H4\\\"></path>\",\"corner-up-right\":\"<polyline points=\\\"15 14 20 9 15 4\\\"></polyline><path d=\\\"M4 20v-7a4 4 0 0 1 4-4h12\\\"></path>\",\"cpu\":\"<rect x=\\\"4\\\" y=\\\"4\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><rect x=\\\"9\\\" y=\\\"9\\\" width=\\\"6\\\" height=\\\"6\\\"></rect><line x1=\\\"9\\\" y1=\\\"1\\\" x2=\\\"9\\\" y2=\\\"4\\\"></line><line x1=\\\"15\\\" y1=\\\"1\\\" x2=\\\"15\\\" y2=\\\"4\\\"></line><line x1=\\\"9\\\" y1=\\\"20\\\" x2=\\\"9\\\" y2=\\\"23\\\"></line><line x1=\\\"15\\\" y1=\\\"20\\\" x2=\\\"15\\\" y2=\\\"23\\\"></line><line x1=\\\"20\\\" y1=\\\"9\\\" x2=\\\"23\\\" y2=\\\"9\\\"></line><line x1=\\\"20\\\" y1=\\\"14\\\" x2=\\\"23\\\" y2=\\\"14\\\"></line><line x1=\\\"1\\\" y1=\\\"9\\\" x2=\\\"4\\\" y2=\\\"9\\\"></line><line x1=\\\"1\\\" y1=\\\"14\\\" x2=\\\"4\\\" y2=\\\"14\\\"></line>\",\"credit-card\":\"<rect x=\\\"1\\\" y=\\\"4\\\" width=\\\"22\\\" height=\\\"16\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"1\\\" y1=\\\"10\\\" x2=\\\"23\\\" y2=\\\"10\\\"></line>\",\"crop\":\"<path d=\\\"M6.13 1L6 16a2 2 0 0 0 2 2h15\\\"></path><path d=\\\"M1 6.13L16 6a2 2 0 0 1 2 2v15\\\"></path>\",\"crosshair\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"22\\\" y1=\\\"12\\\" x2=\\\"18\\\" y2=\\\"12\\\"></line><line x1=\\\"6\\\" y1=\\\"12\\\" x2=\\\"2\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"6\\\" x2=\\\"12\\\" y2=\\\"2\\\"></line><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"18\\\"></line>\",\"database\":\"<ellipse cx=\\\"12\\\" cy=\\\"5\\\" rx=\\\"9\\\" ry=\\\"3\\\"></ellipse><path d=\\\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\\\"></path><path d=\\\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\\\"></path>\",\"delete\":\"<path d=\\\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\\\"></path><line x1=\\\"18\\\" y1=\\\"9\\\" x2=\\\"12\\\" y2=\\\"15\\\"></line><line x1=\\\"12\\\" y1=\\\"9\\\" x2=\\\"18\\\" y2=\\\"15\\\"></line>\",\"disc\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle>\",\"dollar-sign\":\"<line x1=\\\"12\\\" y1=\\\"1\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><path d=\\\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\\\"></path>\",\"download-cloud\":\"<polyline points=\\\"8 17 12 21 16 17\\\"></polyline><line x1=\\\"12\\\" y1=\\\"12\\\" x2=\\\"12\\\" y2=\\\"21\\\"></line><path d=\\\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\\\"></path>\",\"download\":\"<path d=\\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\\"></path><polyline points=\\\"7 10 12 15 17 10\\\"></polyline><line x1=\\\"12\\\" y1=\\\"15\\\" x2=\\\"12\\\" y2=\\\"3\\\"></line>\",\"droplet\":\"<path d=\\\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\\\"></path>\",\"edit-2\":\"<polygon points=\\\"16 3 21 8 8 21 3 21 3 16 16 3\\\"></polygon>\",\"edit-3\":\"<polygon points=\\\"14 2 18 6 7 17 3 17 3 13 14 2\\\"></polygon><line x1=\\\"3\\\" y1=\\\"22\\\" x2=\\\"21\\\" y2=\\\"22\\\"></line>\",\"edit\":\"<path d=\\\"M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34\\\"></path><polygon points=\\\"18 2 22 6 12 16 8 16 8 12 18 2\\\"></polygon>\",\"external-link\":\"<path d=\\\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\\\"></path><polyline points=\\\"15 3 21 3 21 9\\\"></polyline><line x1=\\\"10\\\" y1=\\\"14\\\" x2=\\\"21\\\" y2=\\\"3\\\"></line>\",\"eye-off\":\"<path d=\\\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"eye\":\"<path d=\\\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\\\"></path><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle>\",\"facebook\":\"<path d=\\\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\\\"></path>\",\"fast-forward\":\"<polygon points=\\\"13 19 22 12 13 5 13 19\\\"></polygon><polygon points=\\\"2 19 11 12 2 5 2 19\\\"></polygon>\",\"feather\":\"<path d=\\\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\\\"></path><line x1=\\\"16\\\" y1=\\\"8\\\" x2=\\\"2\\\" y2=\\\"22\\\"></line><line x1=\\\"17\\\" y1=\\\"15\\\" x2=\\\"9\\\" y2=\\\"15\\\"></line>\",\"file-minus\":\"<path d=\\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\\"></path><polyline points=\\\"14 2 14 8 20 8\\\"></polyline><line x1=\\\"9\\\" y1=\\\"15\\\" x2=\\\"15\\\" y2=\\\"15\\\"></line>\",\"file-plus\":\"<path d=\\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\\"></path><polyline points=\\\"14 2 14 8 20 8\\\"></polyline><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"9\\\" y1=\\\"15\\\" x2=\\\"15\\\" y2=\\\"15\\\"></line>\",\"file-text\":\"<path d=\\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\\"></path><polyline points=\\\"14 2 14 8 20 8\\\"></polyline><line x1=\\\"16\\\" y1=\\\"13\\\" x2=\\\"8\\\" y2=\\\"13\\\"></line><line x1=\\\"16\\\" y1=\\\"17\\\" x2=\\\"8\\\" y2=\\\"17\\\"></line><polyline points=\\\"10 9 9 9 8 9\\\"></polyline>\",\"file\":\"<path d=\\\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\\\"></path><polyline points=\\\"13 2 13 9 20 9\\\"></polyline>\",\"film\":\"<rect x=\\\"2\\\" y=\\\"2\\\" width=\\\"20\\\" height=\\\"20\\\" rx=\\\"2.18\\\" ry=\\\"2.18\\\"></rect><line x1=\\\"7\\\" y1=\\\"2\\\" x2=\\\"7\\\" y2=\\\"22\\\"></line><line x1=\\\"17\\\" y1=\\\"2\\\" x2=\\\"17\\\" y2=\\\"22\\\"></line><line x1=\\\"2\\\" y1=\\\"12\\\" x2=\\\"22\\\" y2=\\\"12\\\"></line><line x1=\\\"2\\\" y1=\\\"7\\\" x2=\\\"7\\\" y2=\\\"7\\\"></line><line x1=\\\"2\\\" y1=\\\"17\\\" x2=\\\"7\\\" y2=\\\"17\\\"></line><line x1=\\\"17\\\" y1=\\\"17\\\" x2=\\\"22\\\" y2=\\\"17\\\"></line><line x1=\\\"17\\\" y1=\\\"7\\\" x2=\\\"22\\\" y2=\\\"7\\\"></line>\",\"filter\":\"<polygon points=\\\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\\\"></polygon>\",\"flag\":\"<path d=\\\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\\\"></path><line x1=\\\"4\\\" y1=\\\"22\\\" x2=\\\"4\\\" y2=\\\"15\\\"></line>\",\"folder-minus\":\"<path d=\\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\\"></path><line x1=\\\"9\\\" y1=\\\"14\\\" x2=\\\"15\\\" y2=\\\"14\\\"></line>\",\"folder-plus\":\"<path d=\\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\\"></path><line x1=\\\"12\\\" y1=\\\"11\\\" x2=\\\"12\\\" y2=\\\"17\\\"></line><line x1=\\\"9\\\" y1=\\\"14\\\" x2=\\\"15\\\" y2=\\\"14\\\"></line>\",\"folder\":\"<path d=\\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\\"></path>\",\"gift\":\"<polyline points=\\\"20 12 20 22 4 22 4 12\\\"></polyline><rect x=\\\"2\\\" y=\\\"7\\\" width=\\\"20\\\" height=\\\"5\\\"></rect><line x1=\\\"12\\\" y1=\\\"22\\\" x2=\\\"12\\\" y2=\\\"7\\\"></line><path d=\\\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\\\"></path><path d=\\\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\\\"></path>\",\"git-branch\":\"<line x1=\\\"6\\\" y1=\\\"3\\\" x2=\\\"6\\\" y2=\\\"15\\\"></line><circle cx=\\\"18\\\" cy=\\\"6\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"18\\\" r=\\\"3\\\"></circle><path d=\\\"M18 9a9 9 0 0 1-9 9\\\"></path>\",\"git-commit\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\"></circle><line x1=\\\"1.05\\\" y1=\\\"12\\\" x2=\\\"7\\\" y2=\\\"12\\\"></line><line x1=\\\"17.01\\\" y1=\\\"12\\\" x2=\\\"22.96\\\" y2=\\\"12\\\"></line>\",\"git-merge\":\"<circle cx=\\\"18\\\" cy=\\\"18\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"6\\\" r=\\\"3\\\"></circle><path d=\\\"M6 21V9a9 9 0 0 0 9 9\\\"></path>\",\"git-pull-request\":\"<circle cx=\\\"18\\\" cy=\\\"18\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"6\\\" r=\\\"3\\\"></circle><path d=\\\"M13 6h3a2 2 0 0 1 2 2v7\\\"></path><line x1=\\\"6\\\" y1=\\\"9\\\" x2=\\\"6\\\" y2=\\\"21\\\"></line>\",\"github\":\"<path d=\\\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\\\"></path>\",\"gitlab\":\"<path d=\\\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\\\"></path>\",\"globe\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"2\\\" y1=\\\"12\\\" x2=\\\"22\\\" y2=\\\"12\\\"></line><path d=\\\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\\\"></path>\",\"grid\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"7\\\" height=\\\"7\\\"></rect><rect x=\\\"14\\\" y=\\\"3\\\" width=\\\"7\\\" height=\\\"7\\\"></rect><rect x=\\\"14\\\" y=\\\"14\\\" width=\\\"7\\\" height=\\\"7\\\"></rect><rect x=\\\"3\\\" y=\\\"14\\\" width=\\\"7\\\" height=\\\"7\\\"></rect>\",\"hard-drive\":\"<line x1=\\\"22\\\" y1=\\\"12\\\" x2=\\\"2\\\" y2=\\\"12\\\"></line><path d=\\\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\\\"></path><line x1=\\\"6\\\" y1=\\\"16\\\" x2=\\\"6\\\" y2=\\\"16\\\"></line><line x1=\\\"10\\\" y1=\\\"16\\\" x2=\\\"10\\\" y2=\\\"16\\\"></line>\",\"hash\":\"<line x1=\\\"4\\\" y1=\\\"9\\\" x2=\\\"20\\\" y2=\\\"9\\\"></line><line x1=\\\"4\\\" y1=\\\"15\\\" x2=\\\"20\\\" y2=\\\"15\\\"></line><line x1=\\\"10\\\" y1=\\\"3\\\" x2=\\\"8\\\" y2=\\\"21\\\"></line><line x1=\\\"16\\\" y1=\\\"3\\\" x2=\\\"14\\\" y2=\\\"21\\\"></line>\",\"headphones\":\"<path d=\\\"M3 18v-6a9 9 0 0 1 18 0v6\\\"></path><path d=\\\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\\\"></path>\",\"heart\":\"<path d=\\\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\\\"></path>\",\"help-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><path d=\\\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\\\"></path><line x1=\\\"12\\\" y1=\\\"17\\\" x2=\\\"12\\\" y2=\\\"17\\\"></line>\",\"home\":\"<path d=\\\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\\\"></path><polyline points=\\\"9 22 9 12 15 12 15 22\\\"></polyline>\",\"image\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><circle cx=\\\"8.5\\\" cy=\\\"8.5\\\" r=\\\"1.5\\\"></circle><polyline points=\\\"21 15 16 10 5 21\\\"></polyline>\",\"inbox\":\"<polyline points=\\\"22 12 16 12 14 15 10 15 8 12 2 12\\\"></polyline><path d=\\\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\\\"></path>\",\"info\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"8\\\"></line>\",\"instagram\":\"<rect x=\\\"2\\\" y=\\\"2\\\" width=\\\"20\\\" height=\\\"20\\\" rx=\\\"5\\\" ry=\\\"5\\\"></rect><path d=\\\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\\\"></path><line x1=\\\"17.5\\\" y1=\\\"6.5\\\" x2=\\\"17.5\\\" y2=\\\"6.5\\\"></line>\",\"italic\":\"<line x1=\\\"19\\\" y1=\\\"4\\\" x2=\\\"10\\\" y2=\\\"4\\\"></line><line x1=\\\"14\\\" y1=\\\"20\\\" x2=\\\"5\\\" y2=\\\"20\\\"></line><line x1=\\\"15\\\" y1=\\\"4\\\" x2=\\\"9\\\" y2=\\\"20\\\"></line>\",\"layers\":\"<polygon points=\\\"12 2 2 7 12 12 22 7 12 2\\\"></polygon><polyline points=\\\"2 17 12 22 22 17\\\"></polyline><polyline points=\\\"2 12 12 17 22 12\\\"></polyline>\",\"layout\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"3\\\" y1=\\\"9\\\" x2=\\\"21\\\" y2=\\\"9\\\"></line><line x1=\\\"9\\\" y1=\\\"21\\\" x2=\\\"9\\\" y2=\\\"9\\\"></line>\",\"life-buoy\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"4\\\"></circle><line x1=\\\"4.93\\\" y1=\\\"4.93\\\" x2=\\\"9.17\\\" y2=\\\"9.17\\\"></line><line x1=\\\"14.83\\\" y1=\\\"14.83\\\" x2=\\\"19.07\\\" y2=\\\"19.07\\\"></line><line x1=\\\"14.83\\\" y1=\\\"9.17\\\" x2=\\\"19.07\\\" y2=\\\"4.93\\\"></line><line x1=\\\"14.83\\\" y1=\\\"9.17\\\" x2=\\\"18.36\\\" y2=\\\"5.64\\\"></line><line x1=\\\"4.93\\\" y1=\\\"19.07\\\" x2=\\\"9.17\\\" y2=\\\"14.83\\\"></line>\",\"link-2\":\"<path d=\\\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\\\"></path><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"link\":\"<path d=\\\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\\\"></path><path d=\\\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\\\"></path>\",\"linkedin\":\"<path d=\\\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\\\"></path><rect x=\\\"2\\\" y=\\\"9\\\" width=\\\"4\\\" height=\\\"12\\\"></rect><circle cx=\\\"4\\\" cy=\\\"4\\\" r=\\\"2\\\"></circle>\",\"list\":\"<line x1=\\\"8\\\" y1=\\\"6\\\" x2=\\\"21\\\" y2=\\\"6\\\"></line><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"21\\\" y2=\\\"12\\\"></line><line x1=\\\"8\\\" y1=\\\"18\\\" x2=\\\"21\\\" y2=\\\"18\\\"></line><line x1=\\\"3\\\" y1=\\\"6\\\" x2=\\\"3\\\" y2=\\\"6\\\"></line><line x1=\\\"3\\\" y1=\\\"12\\\" x2=\\\"3\\\" y2=\\\"12\\\"></line><line x1=\\\"3\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line>\",\"loader\":\"<line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"6\\\"></line><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"22\\\"></line><line x1=\\\"4.93\\\" y1=\\\"4.93\\\" x2=\\\"7.76\\\" y2=\\\"7.76\\\"></line><line x1=\\\"16.24\\\" y1=\\\"16.24\\\" x2=\\\"19.07\\\" y2=\\\"19.07\\\"></line><line x1=\\\"2\\\" y1=\\\"12\\\" x2=\\\"6\\\" y2=\\\"12\\\"></line><line x1=\\\"18\\\" y1=\\\"12\\\" x2=\\\"22\\\" y2=\\\"12\\\"></line><line x1=\\\"4.93\\\" y1=\\\"19.07\\\" x2=\\\"7.76\\\" y2=\\\"16.24\\\"></line><line x1=\\\"16.24\\\" y1=\\\"7.76\\\" x2=\\\"19.07\\\" y2=\\\"4.93\\\"></line>\",\"lock\":\"<rect x=\\\"3\\\" y=\\\"11\\\" width=\\\"18\\\" height=\\\"11\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><path d=\\\"M7 11V7a5 5 0 0 1 10 0v4\\\"></path>\",\"log-in\":\"<path d=\\\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\\\"></path><polyline points=\\\"10 17 15 12 10 7\\\"></polyline><line x1=\\\"15\\\" y1=\\\"12\\\" x2=\\\"3\\\" y2=\\\"12\\\"></line>\",\"log-out\":\"<path d=\\\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\\\"></path><polyline points=\\\"16 17 21 12 16 7\\\"></polyline><line x1=\\\"21\\\" y1=\\\"12\\\" x2=\\\"9\\\" y2=\\\"12\\\"></line>\",\"mail\":\"<path d=\\\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\\\"></path><polyline points=\\\"22,6 12,13 2,6\\\"></polyline>\",\"map-pin\":\"<path d=\\\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\\\"></path><circle cx=\\\"12\\\" cy=\\\"10\\\" r=\\\"3\\\"></circle>\",\"map\":\"<polygon points=\\\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\\\"></polygon><line x1=\\\"8\\\" y1=\\\"2\\\" x2=\\\"8\\\" y2=\\\"18\\\"></line><line x1=\\\"16\\\" y1=\\\"6\\\" x2=\\\"16\\\" y2=\\\"22\\\"></line>\",\"maximize-2\":\"<polyline points=\\\"15 3 21 3 21 9\\\"></polyline><polyline points=\\\"9 21 3 21 3 15\\\"></polyline><line x1=\\\"21\\\" y1=\\\"3\\\" x2=\\\"14\\\" y2=\\\"10\\\"></line><line x1=\\\"3\\\" y1=\\\"21\\\" x2=\\\"10\\\" y2=\\\"14\\\"></line>\",\"maximize\":\"<path d=\\\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\\\"></path>\",\"menu\":\"<line x1=\\\"3\\\" y1=\\\"12\\\" x2=\\\"21\\\" y2=\\\"12\\\"></line><line x1=\\\"3\\\" y1=\\\"6\\\" x2=\\\"21\\\" y2=\\\"6\\\"></line><line x1=\\\"3\\\" y1=\\\"18\\\" x2=\\\"21\\\" y2=\\\"18\\\"></line>\",\"message-circle\":\"<path d=\\\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\\\"></path>\",\"message-square\":\"<path d=\\\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\\\"></path>\",\"mic-off\":\"<line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line><path d=\\\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\\\"></path><path d=\\\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\\\"></path><line x1=\\\"12\\\" y1=\\\"19\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><line x1=\\\"8\\\" y1=\\\"23\\\" x2=\\\"16\\\" y2=\\\"23\\\"></line>\",\"mic\":\"<path d=\\\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\\\"></path><path d=\\\"M19 10v2a7 7 0 0 1-14 0v-2\\\"></path><line x1=\\\"12\\\" y1=\\\"19\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><line x1=\\\"8\\\" y1=\\\"23\\\" x2=\\\"16\\\" y2=\\\"23\\\"></line>\",\"minimize-2\":\"<polyline points=\\\"4 14 10 14 10 20\\\"></polyline><polyline points=\\\"20 10 14 10 14 4\\\"></polyline><line x1=\\\"14\\\" y1=\\\"10\\\" x2=\\\"21\\\" y2=\\\"3\\\"></line><line x1=\\\"3\\\" y1=\\\"21\\\" x2=\\\"10\\\" y2=\\\"14\\\"></line>\",\"minimize\":\"<path d=\\\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\\\"></path>\",\"minus-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"minus-square\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"minus\":\"<line x1=\\\"5\\\" y1=\\\"12\\\" x2=\\\"19\\\" y2=\\\"12\\\"></line>\",\"monitor\":\"<rect x=\\\"2\\\" y=\\\"3\\\" width=\\\"20\\\" height=\\\"14\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"8\\\" y1=\\\"21\\\" x2=\\\"16\\\" y2=\\\"21\\\"></line><line x1=\\\"12\\\" y1=\\\"17\\\" x2=\\\"12\\\" y2=\\\"21\\\"></line>\",\"moon\":\"<path d=\\\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\\\"></path>\",\"more-horizontal\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"1\\\"></circle><circle cx=\\\"19\\\" cy=\\\"12\\\" r=\\\"1\\\"></circle><circle cx=\\\"5\\\" cy=\\\"12\\\" r=\\\"1\\\"></circle>\",\"more-vertical\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"1\\\"></circle><circle cx=\\\"12\\\" cy=\\\"5\\\" r=\\\"1\\\"></circle><circle cx=\\\"12\\\" cy=\\\"19\\\" r=\\\"1\\\"></circle>\",\"move\":\"<polyline points=\\\"5 9 2 12 5 15\\\"></polyline><polyline points=\\\"9 5 12 2 15 5\\\"></polyline><polyline points=\\\"15 19 12 22 9 19\\\"></polyline><polyline points=\\\"19 9 22 12 19 15\\\"></polyline><line x1=\\\"2\\\" y1=\\\"12\\\" x2=\\\"22\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"22\\\"></line>\",\"music\":\"<path d=\\\"M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z\\\"></path><polyline points=\\\"9 17 9 5 21 3 21 15\\\"></polyline>\",\"navigation-2\":\"<polygon points=\\\"12 2 19 21 12 17 5 21 12 2\\\"></polygon>\",\"navigation\":\"<polygon points=\\\"3 11 22 2 13 21 11 13 3 11\\\"></polygon>\",\"octagon\":\"<polygon points=\\\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\\\"></polygon>\",\"package\":\"<path d=\\\"M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z\\\"></path><polyline points=\\\"2.32 6.16 12 11 21.68 6.16\\\"></polyline><line x1=\\\"12\\\" y1=\\\"22.76\\\" x2=\\\"12\\\" y2=\\\"11\\\"></line><line x1=\\\"7\\\" y1=\\\"3.5\\\" x2=\\\"17\\\" y2=\\\"8.5\\\"></line>\",\"paperclip\":\"<path d=\\\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\\\"></path>\",\"pause-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"10\\\" y1=\\\"15\\\" x2=\\\"10\\\" y2=\\\"9\\\"></line><line x1=\\\"14\\\" y1=\\\"15\\\" x2=\\\"14\\\" y2=\\\"9\\\"></line>\",\"pause\":\"<rect x=\\\"6\\\" y=\\\"4\\\" width=\\\"4\\\" height=\\\"16\\\"></rect><rect x=\\\"14\\\" y=\\\"4\\\" width=\\\"4\\\" height=\\\"16\\\"></rect>\",\"percent\":\"<line x1=\\\"19\\\" y1=\\\"5\\\" x2=\\\"5\\\" y2=\\\"19\\\"></line><circle cx=\\\"6.5\\\" cy=\\\"6.5\\\" r=\\\"2.5\\\"></circle><circle cx=\\\"17.5\\\" cy=\\\"17.5\\\" r=\\\"2.5\\\"></circle>\",\"phone-call\":\"<path d=\\\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone-forwarded\":\"<polyline points=\\\"19 1 23 5 19 9\\\"></polyline><line x1=\\\"15\\\" y1=\\\"5\\\" x2=\\\"23\\\" y2=\\\"5\\\"></line><path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone-incoming\":\"<polyline points=\\\"16 2 16 8 22 8\\\"></polyline><line x1=\\\"23\\\" y1=\\\"1\\\" x2=\\\"16\\\" y2=\\\"8\\\"></line><path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone-missed\":\"<line x1=\\\"23\\\" y1=\\\"1\\\" x2=\\\"17\\\" y2=\\\"7\\\"></line><line x1=\\\"17\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"7\\\"></line><path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone-off\":\"<path d=\\\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\\\"></path><line x1=\\\"23\\\" y1=\\\"1\\\" x2=\\\"1\\\" y2=\\\"23\\\"></line>\",\"phone-outgoing\":\"<polyline points=\\\"23 7 23 1 17 1\\\"></polyline><line x1=\\\"16\\\" y1=\\\"8\\\" x2=\\\"23\\\" y2=\\\"1\\\"></line><path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"phone\":\"<path d=\\\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\\"></path>\",\"pie-chart\":\"<path d=\\\"M21.21 15.89A10 10 0 1 1 8 2.83\\\"></path><path d=\\\"M22 12A10 10 0 0 0 12 2v10z\\\"></path>\",\"play-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><polygon points=\\\"10 8 16 12 10 16 10 8\\\"></polygon>\",\"play\":\"<polygon points=\\\"5 3 19 12 5 21 5 3\\\"></polygon>\",\"plus-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"plus-square\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"16\\\"></line><line x1=\\\"8\\\" y1=\\\"12\\\" x2=\\\"16\\\" y2=\\\"12\\\"></line>\",\"plus\":\"<line x1=\\\"12\\\" y1=\\\"5\\\" x2=\\\"12\\\" y2=\\\"19\\\"></line><line x1=\\\"5\\\" y1=\\\"12\\\" x2=\\\"19\\\" y2=\\\"12\\\"></line>\",\"pocket\":\"<path d=\\\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\\\"></path><polyline points=\\\"8 10 12 14 16 10\\\"></polyline>\",\"power\":\"<path d=\\\"M18.36 6.64a9 9 0 1 1-12.73 0\\\"></path><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line>\",\"printer\":\"<polyline points=\\\"6 9 6 2 18 2 18 9\\\"></polyline><path d=\\\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\\\"></path><rect x=\\\"6\\\" y=\\\"14\\\" width=\\\"12\\\" height=\\\"8\\\"></rect>\",\"radio\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"2\\\"></circle><path d=\\\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\\\"></path>\",\"refresh-ccw\":\"<polyline points=\\\"1 4 1 10 7 10\\\"></polyline><polyline points=\\\"23 20 23 14 17 14\\\"></polyline><path d=\\\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\\\"></path>\",\"refresh-cw\":\"<polyline points=\\\"23 4 23 10 17 10\\\"></polyline><polyline points=\\\"1 20 1 14 7 14\\\"></polyline><path d=\\\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\\\"></path>\",\"repeat\":\"<polyline points=\\\"17 1 21 5 17 9\\\"></polyline><path d=\\\"M3 11V9a4 4 0 0 1 4-4h14\\\"></path><polyline points=\\\"7 23 3 19 7 15\\\"></polyline><path d=\\\"M21 13v2a4 4 0 0 1-4 4H3\\\"></path>\",\"rewind\":\"<polygon points=\\\"11 19 2 12 11 5 11 19\\\"></polygon><polygon points=\\\"22 19 13 12 22 5 22 19\\\"></polygon>\",\"rotate-ccw\":\"<polyline points=\\\"1 4 1 10 7 10\\\"></polyline><path d=\\\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\\\"></path>\",\"rotate-cw\":\"<polyline points=\\\"23 4 23 10 17 10\\\"></polyline><path d=\\\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\\\"></path>\",\"rss\":\"<path d=\\\"M4 11a9 9 0 0 1 9 9\\\"></path><path d=\\\"M4 4a16 16 0 0 1 16 16\\\"></path><circle cx=\\\"5\\\" cy=\\\"19\\\" r=\\\"1\\\"></circle>\",\"save\":\"<path d=\\\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\\\"></path><polyline points=\\\"17 21 17 13 7 13 7 21\\\"></polyline><polyline points=\\\"7 3 7 8 15 8\\\"></polyline>\",\"scissors\":\"<circle cx=\\\"6\\\" cy=\\\"6\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"18\\\" r=\\\"3\\\"></circle><line x1=\\\"20\\\" y1=\\\"4\\\" x2=\\\"8.12\\\" y2=\\\"15.88\\\"></line><line x1=\\\"14.47\\\" y1=\\\"14.48\\\" x2=\\\"20\\\" y2=\\\"20\\\"></line><line x1=\\\"8.12\\\" y1=\\\"8.12\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line>\",\"search\":\"<circle cx=\\\"11\\\" cy=\\\"11\\\" r=\\\"8\\\"></circle><line x1=\\\"21\\\" y1=\\\"21\\\" x2=\\\"16.65\\\" y2=\\\"16.65\\\"></line>\",\"send\":\"<line x1=\\\"22\\\" y1=\\\"2\\\" x2=\\\"11\\\" y2=\\\"13\\\"></line><polygon points=\\\"22 2 15 22 11 13 2 9 22 2\\\"></polygon>\",\"server\":\"<rect x=\\\"2\\\" y=\\\"2\\\" width=\\\"20\\\" height=\\\"8\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><rect x=\\\"2\\\" y=\\\"14\\\" width=\\\"20\\\" height=\\\"8\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"6\\\" y1=\\\"6\\\" x2=\\\"6\\\" y2=\\\"6\\\"></line><line x1=\\\"6\\\" y1=\\\"18\\\" x2=\\\"6\\\" y2=\\\"18\\\"></line>\",\"settings\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle><path d=\\\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\\\"></path>\",\"share-2\":\"<circle cx=\\\"18\\\" cy=\\\"5\\\" r=\\\"3\\\"></circle><circle cx=\\\"6\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle><circle cx=\\\"18\\\" cy=\\\"19\\\" r=\\\"3\\\"></circle><line x1=\\\"8.59\\\" y1=\\\"13.51\\\" x2=\\\"15.42\\\" y2=\\\"17.49\\\"></line><line x1=\\\"15.41\\\" y1=\\\"6.51\\\" x2=\\\"8.59\\\" y2=\\\"10.49\\\"></line>\",\"share\":\"<path d=\\\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\\\"></path><polyline points=\\\"16 6 12 2 8 6\\\"></polyline><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"15\\\"></line>\",\"shield-off\":\"<path d=\\\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\\\"></path><path d=\\\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"shield\":\"<path d=\\\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\\\"></path>\",\"shopping-bag\":\"<path d=\\\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\\\"></path><line x1=\\\"3\\\" y1=\\\"6\\\" x2=\\\"21\\\" y2=\\\"6\\\"></line><path d=\\\"M16 10a4 4 0 0 1-8 0\\\"></path>\",\"shopping-cart\":\"<circle cx=\\\"9\\\" cy=\\\"21\\\" r=\\\"1\\\"></circle><circle cx=\\\"20\\\" cy=\\\"21\\\" r=\\\"1\\\"></circle><path d=\\\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\\\"></path>\",\"shuffle\":\"<polyline points=\\\"16 3 21 3 21 8\\\"></polyline><line x1=\\\"4\\\" y1=\\\"20\\\" x2=\\\"21\\\" y2=\\\"3\\\"></line><polyline points=\\\"21 16 21 21 16 21\\\"></polyline><line x1=\\\"15\\\" y1=\\\"15\\\" x2=\\\"21\\\" y2=\\\"21\\\"></line><line x1=\\\"4\\\" y1=\\\"4\\\" x2=\\\"9\\\" y2=\\\"9\\\"></line>\",\"sidebar\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"9\\\" y1=\\\"3\\\" x2=\\\"9\\\" y2=\\\"21\\\"></line>\",\"skip-back\":\"<polygon points=\\\"19 20 9 12 19 4 19 20\\\"></polygon><line x1=\\\"5\\\" y1=\\\"19\\\" x2=\\\"5\\\" y2=\\\"5\\\"></line>\",\"skip-forward\":\"<polygon points=\\\"5 4 15 12 5 20 5 4\\\"></polygon><line x1=\\\"19\\\" y1=\\\"5\\\" x2=\\\"19\\\" y2=\\\"19\\\"></line>\",\"slack\":\"<path d=\\\"M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z\\\"></path><line x1=\\\"12.57\\\" y1=\\\"5.99\\\" x2=\\\"16.15\\\" y2=\\\"16.39\\\"></line><line x1=\\\"7.85\\\" y1=\\\"7.61\\\" x2=\\\"11.43\\\" y2=\\\"18.01\\\"></line><line x1=\\\"16.39\\\" y1=\\\"7.85\\\" x2=\\\"5.99\\\" y2=\\\"11.43\\\"></line><line x1=\\\"18.01\\\" y1=\\\"12.57\\\" x2=\\\"7.61\\\" y2=\\\"16.15\\\"></line>\",\"slash\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"4.93\\\" y1=\\\"4.93\\\" x2=\\\"19.07\\\" y2=\\\"19.07\\\"></line>\",\"sliders\":\"<line x1=\\\"4\\\" y1=\\\"21\\\" x2=\\\"4\\\" y2=\\\"14\\\"></line><line x1=\\\"4\\\" y1=\\\"10\\\" x2=\\\"4\\\" y2=\\\"3\\\"></line><line x1=\\\"12\\\" y1=\\\"21\\\" x2=\\\"12\\\" y2=\\\"12\\\"></line><line x1=\\\"12\\\" y1=\\\"8\\\" x2=\\\"12\\\" y2=\\\"3\\\"></line><line x1=\\\"20\\\" y1=\\\"21\\\" x2=\\\"20\\\" y2=\\\"16\\\"></line><line x1=\\\"20\\\" y1=\\\"12\\\" x2=\\\"20\\\" y2=\\\"3\\\"></line><line x1=\\\"1\\\" y1=\\\"14\\\" x2=\\\"7\\\" y2=\\\"14\\\"></line><line x1=\\\"9\\\" y1=\\\"8\\\" x2=\\\"15\\\" y2=\\\"8\\\"></line><line x1=\\\"17\\\" y1=\\\"16\\\" x2=\\\"23\\\" y2=\\\"16\\\"></line>\",\"smartphone\":\"<rect x=\\\"5\\\" y=\\\"2\\\" width=\\\"14\\\" height=\\\"20\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"18\\\"></line>\",\"speaker\":\"<rect x=\\\"4\\\" y=\\\"2\\\" width=\\\"16\\\" height=\\\"20\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><circle cx=\\\"12\\\" cy=\\\"14\\\" r=\\\"4\\\"></circle><line x1=\\\"12\\\" y1=\\\"6\\\" x2=\\\"12\\\" y2=\\\"6\\\"></line>\",\"square\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect>\",\"star\":\"<polygon points=\\\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\\\"></polygon>\",\"stop-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><rect x=\\\"9\\\" y=\\\"9\\\" width=\\\"6\\\" height=\\\"6\\\"></rect>\",\"sun\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"5\\\"></circle><line x1=\\\"12\\\" y1=\\\"1\\\" x2=\\\"12\\\" y2=\\\"3\\\"></line><line x1=\\\"12\\\" y1=\\\"21\\\" x2=\\\"12\\\" y2=\\\"23\\\"></line><line x1=\\\"4.22\\\" y1=\\\"4.22\\\" x2=\\\"5.64\\\" y2=\\\"5.64\\\"></line><line x1=\\\"18.36\\\" y1=\\\"18.36\\\" x2=\\\"19.78\\\" y2=\\\"19.78\\\"></line><line x1=\\\"1\\\" y1=\\\"12\\\" x2=\\\"3\\\" y2=\\\"12\\\"></line><line x1=\\\"21\\\" y1=\\\"12\\\" x2=\\\"23\\\" y2=\\\"12\\\"></line><line x1=\\\"4.22\\\" y1=\\\"19.78\\\" x2=\\\"5.64\\\" y2=\\\"18.36\\\"></line><line x1=\\\"18.36\\\" y1=\\\"5.64\\\" x2=\\\"19.78\\\" y2=\\\"4.22\\\"></line>\",\"sunrise\":\"<path d=\\\"M17 18a5 5 0 0 0-10 0\\\"></path><line x1=\\\"12\\\" y1=\\\"2\\\" x2=\\\"12\\\" y2=\\\"9\\\"></line><line x1=\\\"4.22\\\" y1=\\\"10.22\\\" x2=\\\"5.64\\\" y2=\\\"11.64\\\"></line><line x1=\\\"1\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"23\\\" y2=\\\"18\\\"></line><line x1=\\\"18.36\\\" y1=\\\"11.64\\\" x2=\\\"19.78\\\" y2=\\\"10.22\\\"></line><line x1=\\\"23\\\" y1=\\\"22\\\" x2=\\\"1\\\" y2=\\\"22\\\"></line><polyline points=\\\"8 6 12 2 16 6\\\"></polyline>\",\"sunset\":\"<path d=\\\"M17 18a5 5 0 0 0-10 0\\\"></path><line x1=\\\"12\\\" y1=\\\"9\\\" x2=\\\"12\\\" y2=\\\"2\\\"></line><line x1=\\\"4.22\\\" y1=\\\"10.22\\\" x2=\\\"5.64\\\" y2=\\\"11.64\\\"></line><line x1=\\\"1\\\" y1=\\\"18\\\" x2=\\\"3\\\" y2=\\\"18\\\"></line><line x1=\\\"21\\\" y1=\\\"18\\\" x2=\\\"23\\\" y2=\\\"18\\\"></line><line x1=\\\"18.36\\\" y1=\\\"11.64\\\" x2=\\\"19.78\\\" y2=\\\"10.22\\\"></line><line x1=\\\"23\\\" y1=\\\"22\\\" x2=\\\"1\\\" y2=\\\"22\\\"></line><polyline points=\\\"16 5 12 9 8 5\\\"></polyline>\",\"tablet\":\"<rect x=\\\"4\\\" y=\\\"2\\\" width=\\\"16\\\" height=\\\"20\\\" rx=\\\"2\\\" ry=\\\"2\\\" transform=\\\"rotate(180 12 12)\\\"></rect><line x1=\\\"12\\\" y1=\\\"18\\\" x2=\\\"12\\\" y2=\\\"18\\\"></line>\",\"tag\":\"<path d=\\\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\\\"></path><line x1=\\\"7\\\" y1=\\\"7\\\" x2=\\\"7\\\" y2=\\\"7\\\"></line>\",\"target\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"6\\\"></circle><circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"2\\\"></circle>\",\"terminal\":\"<polyline points=\\\"4 17 10 11 4 5\\\"></polyline><line x1=\\\"12\\\" y1=\\\"19\\\" x2=\\\"20\\\" y2=\\\"19\\\"></line>\",\"thermometer\":\"<path d=\\\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\\\"></path>\",\"thumbs-down\":\"<path d=\\\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\\\"></path>\",\"thumbs-up\":\"<path d=\\\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\\\"></path>\",\"toggle-left\":\"<rect x=\\\"1\\\" y=\\\"5\\\" width=\\\"22\\\" height=\\\"14\\\" rx=\\\"7\\\" ry=\\\"7\\\"></rect><circle cx=\\\"8\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle>\",\"toggle-right\":\"<rect x=\\\"1\\\" y=\\\"5\\\" width=\\\"22\\\" height=\\\"14\\\" rx=\\\"7\\\" ry=\\\"7\\\"></rect><circle cx=\\\"16\\\" cy=\\\"12\\\" r=\\\"3\\\"></circle>\",\"trash-2\":\"<polyline points=\\\"3 6 5 6 21 6\\\"></polyline><path d=\\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\\"></path><line x1=\\\"10\\\" y1=\\\"11\\\" x2=\\\"10\\\" y2=\\\"17\\\"></line><line x1=\\\"14\\\" y1=\\\"11\\\" x2=\\\"14\\\" y2=\\\"17\\\"></line>\",\"trash\":\"<polyline points=\\\"3 6 5 6 21 6\\\"></polyline><path d=\\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\\"></path>\",\"trending-down\":\"<polyline points=\\\"23 18 13.5 8.5 8.5 13.5 1 6\\\"></polyline><polyline points=\\\"17 18 23 18 23 12\\\"></polyline>\",\"trending-up\":\"<polyline points=\\\"23 6 13.5 15.5 8.5 10.5 1 18\\\"></polyline><polyline points=\\\"17 6 23 6 23 12\\\"></polyline>\",\"triangle\":\"<path d=\\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\\"></path>\",\"truck\":\"<rect x=\\\"1\\\" y=\\\"3\\\" width=\\\"15\\\" height=\\\"13\\\"></rect><polygon points=\\\"16 8 20 8 23 11 23 16 16 16 16 8\\\"></polygon><circle cx=\\\"5.5\\\" cy=\\\"18.5\\\" r=\\\"2.5\\\"></circle><circle cx=\\\"18.5\\\" cy=\\\"18.5\\\" r=\\\"2.5\\\"></circle>\",\"tv\":\"<rect x=\\\"2\\\" y=\\\"7\\\" width=\\\"20\\\" height=\\\"15\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><polyline points=\\\"17 2 12 7 7 2\\\"></polyline>\",\"twitter\":\"<path d=\\\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\\\"></path>\",\"type\":\"<polyline points=\\\"4 7 4 4 20 4 20 7\\\"></polyline><line x1=\\\"9\\\" y1=\\\"20\\\" x2=\\\"15\\\" y2=\\\"20\\\"></line><line x1=\\\"12\\\" y1=\\\"4\\\" x2=\\\"12\\\" y2=\\\"20\\\"></line>\",\"umbrella\":\"<path d=\\\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\\\"></path>\",\"underline\":\"<path d=\\\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\\\"></path><line x1=\\\"4\\\" y1=\\\"21\\\" x2=\\\"20\\\" y2=\\\"21\\\"></line>\",\"unlock\":\"<rect x=\\\"3\\\" y=\\\"11\\\" width=\\\"18\\\" height=\\\"11\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><path d=\\\"M7 11V7a5 5 0 0 1 9.9-1\\\"></path>\",\"upload-cloud\":\"<polyline points=\\\"16 16 12 12 8 16\\\"></polyline><line x1=\\\"12\\\" y1=\\\"12\\\" x2=\\\"12\\\" y2=\\\"21\\\"></line><path d=\\\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\\\"></path><polyline points=\\\"16 16 12 12 8 16\\\"></polyline>\",\"upload\":\"<path d=\\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\\"></path><polyline points=\\\"17 8 12 3 7 8\\\"></polyline><line x1=\\\"12\\\" y1=\\\"3\\\" x2=\\\"12\\\" y2=\\\"15\\\"></line>\",\"user-check\":\"<path d=\\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"8.5\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><polyline points=\\\"17 11 19 13 23 9\\\"></polyline>\",\"user-minus\":\"<path d=\\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"8.5\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><line x1=\\\"23\\\" y1=\\\"11\\\" x2=\\\"17\\\" y2=\\\"11\\\"></line>\",\"user-plus\":\"<path d=\\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"8.5\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><line x1=\\\"20\\\" y1=\\\"8\\\" x2=\\\"20\\\" y2=\\\"14\\\"></line><line x1=\\\"23\\\" y1=\\\"11\\\" x2=\\\"17\\\" y2=\\\"11\\\"></line>\",\"user-x\":\"<path d=\\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"8.5\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><line x1=\\\"18\\\" y1=\\\"8\\\" x2=\\\"23\\\" y2=\\\"13\\\"></line><line x1=\\\"23\\\" y1=\\\"8\\\" x2=\\\"18\\\" y2=\\\"13\\\"></line>\",\"user\":\"<path d=\\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"12\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle>\",\"users\":\"<path d=\\\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\\"></path><circle cx=\\\"9\\\" cy=\\\"7\\\" r=\\\"4\\\"></circle><path d=\\\"M23 21v-2a4 4 0 0 0-3-3.87\\\"></path><path d=\\\"M16 3.13a4 4 0 0 1 0 7.75\\\"></path>\",\"video-off\":\"<path d=\\\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\\\"></path><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"video\":\"<polygon points=\\\"23 7 16 12 23 17 23 7\\\"></polygon><rect x=\\\"1\\\" y=\\\"5\\\" width=\\\"15\\\" height=\\\"14\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect>\",\"voicemail\":\"<circle cx=\\\"5.5\\\" cy=\\\"11.5\\\" r=\\\"4.5\\\"></circle><circle cx=\\\"18.5\\\" cy=\\\"11.5\\\" r=\\\"4.5\\\"></circle><line x1=\\\"5.5\\\" y1=\\\"16\\\" x2=\\\"18.5\\\" y2=\\\"16\\\"></line>\",\"volume-1\":\"<polygon points=\\\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\\\"></polygon><path d=\\\"M15.54 8.46a5 5 0 0 1 0 7.07\\\"></path>\",\"volume-2\":\"<polygon points=\\\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\\\"></polygon><path d=\\\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\\\"></path>\",\"volume-x\":\"<polygon points=\\\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\\\"></polygon><line x1=\\\"23\\\" y1=\\\"9\\\" x2=\\\"17\\\" y2=\\\"15\\\"></line><line x1=\\\"17\\\" y1=\\\"9\\\" x2=\\\"23\\\" y2=\\\"15\\\"></line>\",\"volume\":\"<polygon points=\\\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\\\"></polygon>\",\"watch\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"7\\\"></circle><polyline points=\\\"12 9 12 12 13.5 13.5\\\"></polyline><path d=\\\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\\\"></path>\",\"wifi-off\":\"<line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line><path d=\\\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\\\"></path><path d=\\\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\\\"></path><path d=\\\"M10.71 5.05A16 16 0 0 1 22.58 9\\\"></path><path d=\\\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\\\"></path><path d=\\\"M8.53 16.11a6 6 0 0 1 6.95 0\\\"></path><line x1=\\\"12\\\" y1=\\\"20\\\" x2=\\\"12\\\" y2=\\\"20\\\"></line>\",\"wifi\":\"<path d=\\\"M5 12.55a11 11 0 0 1 14.08 0\\\"></path><path d=\\\"M1.42 9a16 16 0 0 1 21.16 0\\\"></path><path d=\\\"M8.53 16.11a6 6 0 0 1 6.95 0\\\"></path><line x1=\\\"12\\\" y1=\\\"20\\\" x2=\\\"12\\\" y2=\\\"20\\\"></line>\",\"wind\":\"<path d=\\\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\\\"></path>\",\"x-circle\":\"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\"></circle><line x1=\\\"15\\\" y1=\\\"9\\\" x2=\\\"9\\\" y2=\\\"15\\\"></line><line x1=\\\"9\\\" y1=\\\"9\\\" x2=\\\"15\\\" y2=\\\"15\\\"></line>\",\"x-square\":\"<rect x=\\\"3\\\" y=\\\"3\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" ry=\\\"2\\\"></rect><line x1=\\\"9\\\" y1=\\\"9\\\" x2=\\\"15\\\" y2=\\\"15\\\"></line><line x1=\\\"15\\\" y1=\\\"9\\\" x2=\\\"9\\\" y2=\\\"15\\\"></line>\",\"x\":\"<line x1=\\\"18\\\" y1=\\\"6\\\" x2=\\\"6\\\" y2=\\\"18\\\"></line><line x1=\\\"6\\\" y1=\\\"6\\\" x2=\\\"18\\\" y2=\\\"18\\\"></line>\",\"youtube\":\"<path d=\\\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\\\"></path><polygon points=\\\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\\\"></polygon>\",\"zap-off\":\"<polyline points=\\\"12.41 6.75 13 2 10.57 4.92\\\"></polyline><polyline points=\\\"18.57 12.91 21 10 15.66 10\\\"></polyline><polyline points=\\\"8 8 3 14 12 14 11 22 16 16\\\"></polyline><line x1=\\\"1\\\" y1=\\\"1\\\" x2=\\\"23\\\" y2=\\\"23\\\"></line>\",\"zap\":\"<polygon points=\\\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\\\"></polygon>\",\"zoom-in\":\"<circle cx=\\\"11\\\" cy=\\\"11\\\" r=\\\"8\\\"></circle><line x1=\\\"21\\\" y1=\\\"21\\\" x2=\\\"16.65\\\" y2=\\\"16.65\\\"></line><line x1=\\\"11\\\" y1=\\\"8\\\" x2=\\\"11\\\" y2=\\\"14\\\"></line><line x1=\\\"8\\\" y1=\\\"11\\\" x2=\\\"14\\\" y2=\\\"11\\\"></line>\",\"zoom-out\":\"<circle cx=\\\"11\\\" cy=\\\"11\\\" r=\\\"8\\\"></circle><line x1=\\\"21\\\" y1=\\\"21\\\" x2=\\\"16.65\\\" y2=\\\"16.65\\\"></line><line x1=\\\"8\\\" y1=\\\"11\\\" x2=\\\"14\\\" y2=\\\"11\\\"></line>\"}");

/***/ }),

/***/ "./node_modules/feather-icons-react/build/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/feather-icons-react/build/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _IconInner = _interopRequireDefault(__webpack_require__(/*! ./IconInner */ "./node_modules/feather-icons-react/build/IconInner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FeatherIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(FeatherIcon, _Component);

  function FeatherIcon() {
    _classCallCheck(this, FeatherIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(FeatherIcon).apply(this, arguments));
  }

  _createClass(FeatherIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          size = _this$props.size,
          className = _this$props.className,
          otherProps = _objectWithoutProperties(_this$props, ["icon", "size", "className"]);

      return _react.default.createElement("svg", _extends({
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-".concat(icon, " ").concat(className)
      }, otherProps), _react.default.createElement(_IconInner.default, {
        icon: icon
      }));
    }
  }]);

  return FeatherIcon;
}(_react.Component);

FeatherIcon.propTypes = {
  icon: _propTypes.default.string.isRequired,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  className: _propTypes.default.string
};
FeatherIcon.defaultProps = {
  size: 24,
  className: ''
};
var _default = FeatherIcon;
exports.default = _default;

/***/ }),

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: getType, isUndefined, isNull, isPlainObject, isObject, isAnyObject, isObjectLike, isFunction, isArray, isString, isFullString, isEmptyString, isNumber, isBoolean, isRegExp, isDate, isSymbol, isPrimitive, isType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyObject", function() { return isAnyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullString", function() { return isFullString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return (payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype);
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
function isFunction(payload) {
    return getType(payload) === 'Function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return (getType(payload) === 'Number' && !isNaN(payload));
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a date, and that the date is Valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return (getType(payload) === 'Date' && !isNaN(payload));
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is Symbol}
 */
function isSymbol(payload) {
    return (getType(payload) === 'Symbol');
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {*}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!type.hasOwnProperty('prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return (getType(payload) === name) || Boolean(payload && (payload.constructor === type));
}




/***/ }),

/***/ "./node_modules/material-icons-react/dist/config/mappings.js":
/*!*******************************************************************!*\
  !*** ./node_modules/material-icons-react/dist/config/mappings.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var sizes = exports.sizes = {
        tiny: 'md-18',
        small: 'md-24',
        medium: 'md-36',
        large: 'md-48'
    };
    var light = exports.light = 'md-light';
    var dark = exports.dark = 'md-dark';
    var mdInactive = exports.mdInactive = 'md-inactive';
});

/***/ }),

/***/ "./node_modules/material-icons-react/dist/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/material-icons-react/dist/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./index.css */ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./node_modules/material-icons-react/dist/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/material-icons-react/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/material-icons-react/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./palette */ "./node_modules/material-icons-react/dist/palette.js"), __webpack_require__(/*! react */ "react"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js"), __webpack_require__(/*! ./config/mappings */ "./node_modules/material-icons-react/dist/config/mappings.js"), __webpack_require__(/*! ./index.css */ "./node_modules/material-icons-react/dist/index.css")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, _palette, _react, _propTypes, _webfontloader, _mappings) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.keys(_palette).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _palette[key];
            }
        });
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _webfontloader2 = _interopRequireDefault(_webfontloader);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var MaterialIcon = function (_Component) {
        _inherits(MaterialIcon, _Component);

        function MaterialIcon(props) {
            _classCallCheck(this, MaterialIcon);

            var _this = _possibleConstructorReturn(this, (MaterialIcon.__proto__ || Object.getPrototypeOf(MaterialIcon)).call(this, props));

            var preloader = _this.props.preloader;


            _this.state = {
                element: preloader
            };

            _this.onFontActive = _this.onFontActive.bind(_this);
            _this.processProps = _this.processProps.bind(_this);

            _webfontloader2.default.load({
                google: {
                    families: ['Material+Icons']
                },
                timeout: 5000,
                fontactive: _this.onFontActive
            });
            return _this;
        }

        _createClass(MaterialIcon, [{
            key: 'componentDidMount',
            value: function componentDidMount() {}
        }, {
            key: 'onFontActive',
            value: function onFontActive(fontFamily, fvd) {
                var _processProps = this.processProps(),
                    icon = _processProps.icon,
                    styleOverride = _processProps.styleOverride,
                    clsName = _processProps.clsName,
                    other = _objectWithoutProperties(_processProps, ['icon', 'styleOverride', 'clsName']);

                this.setState({ element: _react2.default.createElement(
                        'i',
                        _extends({}, other, { className: clsName, style: styleOverride }),
                        icon
                    ) });
            }
        }, {
            key: 'processProps',
            value: function processProps() {
                var _props = this.props,
                    size = _props.size,
                    invert = _props.invert,
                    inactive = _props.inactive,
                    style = _props.style,
                    className = _props.className,
                    color = _props.color,
                    icon = _props.icon,
                    other = _objectWithoutProperties(_props, ['size', 'invert', 'inactive', 'style', 'className', 'color', 'icon']);

                var sizeMapped = _mappings.sizes[size] || parseInt(size) || _mappings.sizes['small'];
                var defaultColor = invert && 'invert' ? _mappings.light : _mappings.dark;
                var inactiveColor = inactive && 'inactive' ? _mappings.mdInactive : '';
                var propStyle = style || {};
                var styleOverride = Object.assign(propStyle, { color: color ? color : '', fontSize: sizeMapped });
                var clsName = className || 'material-icons ' + sizeMapped + ' ' + defaultColor + ' ' + inactiveColor;

                return _extends({
                    icon: icon, styleOverride: styleOverride, clsName: clsName }, other);
            }
        }, {
            key: 'render',
            value: function render() {
                var _processProps2 = this.processProps(),
                    styleOverride = _processProps2.styleOverride,
                    clsName = _processProps2.clsName,
                    other = _objectWithoutProperties(_processProps2, ['styleOverride', 'clsName']);

                return this.state.element || _react2.default.createElement('i', _extends({}, other, { className: clsName, style: styleOverride }));
            }
        }]);

        return MaterialIcon;
    }(_react.Component);

    MaterialIcon.propTypes = {
        icon: _propTypes2.default.string.isRequired,
        size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
        invert: _propTypes2.default.bool,
        inactive: _propTypes2.default.bool
    };

    exports.default = MaterialIcon;
});

/***/ }),

/***/ "./node_modules/material-icons-react/dist/palette.js":
/*!***********************************************************!*\
  !*** ./node_modules/material-icons-react/dist/palette.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var colorPalette = exports.colorPalette = {
        red: { default: '#f44336', _500: '#f44336', _50: '#ffebee', _100: '#ffcdd2', _200: '#ef9a9a', _300: '#e57373', _400: '#ef5350', _600: '#e53935', _700: '#d32f2f', _800: '#c62828', _900: '#b71c1c', A100: '#ff8a80', A200: '#ff5252', A400: '#ff1744', A700: '#d_50000' },
        pink: { default: '#E91E63', _500: '#E91E63', _50: '#FCE4EC', _100: '#F8BBD0', _200: '#F48FB1', _300: '#F06292', _400: '#EC407A', _600: '#D81B60', _700: '#C2185B', _800: '#AD1457', _900: '#880E4F', A100: '#FF80AB', A200: '#FF4081', A400: '#F_50057', A700: '#C51162' },
        purple: { default: '#9C27B0', _500: '#9C27B0', _50: '#F3E5F5', _100: '#E1BEE7', _200: '#CE93D8', _300: '#BA68C8', _400: '#AB47BC', _600: '#8E24AA', _700: '#7B1FA2', _800: '#6A1B9A', _900: '#4A148C', A100: '#EA80FC', A200: '#E040FB', A400: '#D_500F9', A700: '#AA00FF' },
        deepPurple: { default: '#673AB7', _500: '#673AB7', _50: '#EDE7F6', _100: '#D1C4E9', _200: '#B39DDB', _300: '#9575CD', _400: '#7E57C2', _600: '#5E35B1', _700: '#512DA8', _800: '#4527A0', _900: '#311B92', A100: '#B388FF', A200: '#7C4DFF', A400: '#651FFF', A700: '#6200EA' },
        indigo: { default: '#3F51B5', _500: '#3F51B5', _50: '#E8EAF6', _100: '#C5CAE9', _200: '#9FA8DA', _300: '#7986CB', _400: '#5C6BC0', _600: '#3949AB', _700: '#303F9F', _800: '#283593', _900: '#1A237E', A100: '#8C9EFF', A200: '#536DFE', A400: '#3D5AFE', A700: '#304FFE' },
        blue: { default: '#2196F3', _500: '#2196F3', _50: '#E3F2FD', _100: '#BBDEFB', _200: '#90CAF9', _300: '#64B5F6', _400: '#42A5F5', _600: '#1E88E5', _700: '#1976D2', _800: '#1565C0', _900: '#0D47A1', A100: '#82B1FF', A200: '#448AFF', A400: '#2979FF', A700: '#2962FF' },
        lightBlue: { default: '#03A9F4', _500: '#03A9F4', _50: '#E1F5FE', _100: '#B3E5FC', _200: '#81D4FA', _300: '#4FC3F7', _400: '#29B6F6', _600: '#039BE5', _700: '#0288D1', _800: '#0277BD', _900: '#01579B', A100: '#80D8FF', A200: '#40C4FF', A400: '#00B0FF', A700: '#0091EA' },
        cyan: { default: '#00BCD4', _500: '#00BCD4', _50: '#E0F7FA', _100: '#B2EBF2', _200: '#80DEEA', _300: '#4DD0E1', _400: '#26C6DA', _600: '#00ACC1', _700: '#0097A7', _800: '#00838F', _900: '#006064', A100: '#84FFFF', A200: '#18FFFF', A400: '#00E5FF', A700: '#00B8D4' },
        teal: { default: '#009688', _500: '#009688', _50: '#E0F2F1', _100: '#B2DFDB', _200: '#80CBC4', _300: '#4DB6AC', _400: '#26A69A', _600: '#00897B', _700: '#00796B', _800: '#00695C', _900: '#004D40', A100: '#A7FFEB', A200: '#64FFDA', A400: '#1DE9B6', A700: '#00BFA5' },
        green: { default: '#4CAF50', _500: '#4CAF50', _50: '#E8F5E9', _100: '#C8E6C9', _200: '#A5D6A7', _300: '#81C784', _400: '#66BB6A', _600: '#43A047', _700: '#388E3C', _800: '#2E7D32', _900: '#1B5E20', A100: '#B9F6CA', A200: '#69F0AE', A400: '#00E676', A700: '#00C853' },
        lightGreen: { default: '#8BC34A', _500: '#8BC34A', _50: '#F1F8E9', _100: '#DCEDC8', _200: '#C5E1A5', _300: '#AED581', _400: '#9CCC65', _600: '#7CB342', _700: '#689F38', _800: '#558B2F', _900: '#33691E', A100: '#CCFF90', A200: '#B2FF59', A400: '#76FF03', A700: '#64DD17' },
        lime: { default: '#CDDC39', _500: '#CDDC39', _50: '#F9FBE7', _100: '#F0F4C3', _200: '#E6EE9C', _300: '#DCE775', _400: '#D4E157', _600: '#C0CA33', _700: '#AFB42B', _800: '#9E9D24', _900: '#827717', A100: '#F4FF81', A200: '#EEFF41', A400: '#C6FF00', A700: '#AEEA00' },
        yellow: { default: '#FFEB3B', _500: '#FFEB3B', _50: '#FFFDE7', _100: '#FFF9C4', _200: '#FFF59D', _300: '#FFF176', _400: '#FFEE58', _600: '#FDD835', _700: '#FBC02D', _800: '#F9A825', _900: '#F57F17', A100: '#FFFF8D', A200: '#FFFF00', A400: '#FFEA00', A700: '#FFD600' },
        amber: { default: '#FFC107', _500: '#FFC107', _50: '#FFF8E1', _100: '#FFECB3', _200: '#FFE082', _300: '#FFD54F', _400: '#FFCA28', _600: '#FFB300', _700: '#FFA000', _800: '#FF8F00', _900: '#FF6F00', A100: '#FFE57F', A200: '#FFD740', A400: '#FFC400', A700: '#FFAB00' },
        orange: { default: '#FF9800', _500: '#FF9800', _50: '#FFF3E0', _100: '#FFE0B2', _200: '#FFCC80', _300: '#FFB74D', _400: '#FFA726', _600: '#FB8C00', _700: '#F57C00', _800: '#EF6C00', _900: '#E65100', A100: '#FFD180', A200: '#FFAB40', A400: '#FF9100', A700: '#FF6D00' },
        deepOrange: { default: '#FF5722', _500: '#FF5722', _50: '#FBE9E7', _100: '#FFCCBC', _200: '#FFAB91', _300: '#FF8A65', _400: '#FF7043', _600: '#F4511E', _700: '#E64A19', _800: '#D84315', _900: '#BF360C', A100: '#FF9E80', A200: '#FF6E40', A400: '#FF3D00', A700: '#DD2C00' },
        brown: { default: '#795548', _500: '#795548', _50: '#EFEBE9', _100: '#D7CCC8', _200: '#BCAAA4', _300: '#A1887F', _400: '#8D6E63', _600: '#6D4C41', _700: '#5D4037', _800: '#4E342E', _900: '#3E2723' },
        grey: { default: '#9E9E9E', _500: '#9E9E9E', _50: '#FAFAFA', _100: '#F5F5F5', _200: '#EEEEEE', _300: '#E0E0E0', _400: '#BDBDBD', _600: '#757575', _700: '#616161', _800: '#424242', _900: '#212121' },
        blueGrey: { default: '#607D8B', _500: '#607D8B', _50: '#ECEFF1', _100: '#CFD8DC', _200: '#B0BEC5', _300: '#90A4AE', _400: '#78909C', _600: '#546E7A', _700: '#455A64', _800: '#37474F', _900: '#263238' }
    };
});

/***/ }),

/***/ "./node_modules/material-icons-react/index.js":
/*!****************************************************!*\
  !*** ./node_modules/material-icons-react/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/material-icons-react/dist/index.js");

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newComer)) {
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin))
        ? Object.keys(origin)
            .reduce(function (carry, key) {
            var targetVal = origin[key];
            // @ts-ignore
            if (!Object.keys(newComer).includes(key))
                carry[key] = targetVal;
            return carry;
        }, {})
        : {};
    return Object.keys(newComer)
        .reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin))
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // early return when targetVal === undefined
        if (targetVal === undefined) {
            carry[key] = newVal;
            return carry;
        }
        // When newVal is an object do the merge recursively
        if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newVal)) {
            carry[key] = mergeRecursively(targetVal, newVal, extensions);
            return carry;
        }
        // all the rest
        carry[key] = newVal;
        return carry;
    }, newObject);
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function index (origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-column-resizer/dist/column-resizer.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-column-resizer/dist/column-resizer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ColumnResizer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ColumnResizer, _React$Component);

  function ColumnResizer(props) {
    var _this;

    _classCallCheck(this, ColumnResizer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColumnResizer).call(this, props));
    _this.startDrag = _this.startDrag.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.endDrag = _this.endDrag.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (props.disabled) {
      return _possibleConstructorReturn(_this);
    }

    _this.dragging = false;
    _this.mouseX = 0;
    _this.startPos = 0;
    _this.startWidthPrev = 0;
    _this.startWidthNext = 0;
    return _this;
  }

  _createClass(ColumnResizer, [{
    key: "startDrag",
    value: function startDrag() {
      if (this.props.disabled) {
        return;
      }

      this.dragging = true;
      this.startPos = this.mouseX;
      this.startWidthPrev = 0;
      this.startWidthNext = 0;

      if (this.refs.ele) {
        var prevSibling = this.refs.ele.previousSibling;
        var nextSibling = this.refs.ele.nextSibling;

        if (prevSibling) {
          this.startWidthPrev = prevSibling.clientWidth;
        }

        if (nextSibling) {
          this.startWidthNext = nextSibling.clientWidth;
        }
      }
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      if (this.props.disabled) {
        return;
      }

      this.dragging = false;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      if (this.props.disabled) {
        return;
      }

      this.mouseX = e.touches ? e.touches[0].screenX : e.screenX;

      if (!this.dragging) {
        return;
      }

      var ele = this.refs.ele;
      var moveDiff = this.startPos - this.mouseX;
      var newPrev = this.startWidthPrev - moveDiff;
      var newNext = this.startWidthNext + moveDiff;

      if (newPrev < this.props.minWidth) {
        var offset = newPrev - this.props.minWidth;
        newPrev = this.props.minWidth;
        newNext += offset;
      } else if (newNext < this.props.minWidth) {
        var _offset = newNext - this.props.minWidth;

        newNext = this.props.minWidth;
        newPrev += _offset;
      }

      ele.previousSibling.style.width = newPrev + 'px';
      ele.nextSibling.style.width = newNext + 'px';
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.disabled) {
        return;
      }

      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.endDrag);
      document.addEventListener("touchmove", this.onMouseMove);
      document.addEventListener("touchend", this.endDrag);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.disabled) {
        return;
      }

      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.endDrag);
      document.removeEventListener('touchmove', this.onMouseMove);
      document.removeEventListener('touchend', this.endDrag);
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        userSelect: "none"
      };

      if (!this.props.disabled) {
        style.cursor = 'ew-resize';
      }

      if (this.props.className === "") {
        style.width = '6px';
        style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      }

      return _react.default.createElement("td", {
        ref: "ele",
        style: style,
        className: this.props.className,
        onMouseDown: !this.props.disabled && this.startDrag,
        onTouchStart: !this.props.disabled && this.startDrag
      });
    }
  }]);

  return ColumnResizer;
}(_react.default.Component);

exports.default = ColumnResizer;
ColumnResizer.defaultProps = {
  disabled: false,
  minWidth: 50,
  className: ""
};
ColumnResizer.propTypes = {
  disabled: _propTypes.bool,
  minWidth: _propTypes.number,
  className: _propTypes.string
};

/***/ }),

/***/ "./node_modules/react-column-resizer/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-column-resizer/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


//Author: Nik M
//https://github.com/nik-m2/react-column-resizer

module.exports = __webpack_require__(/*! ./dist/column-resizer.js */ "./node_modules/react-column-resizer/dist/column-resizer.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper (see https://www.styled-components.com/docs/api#css), which ensures the styles are injected correctly.\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.3.2");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.3.2" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.3.2", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.3.2" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

var isHMREnabled =  true && module.hot;

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children)
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.attrs, this.props);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, this.props.className, styledComponentId, this.attrs.className, generatedClassName).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ( true && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? Object(merge_anything__WEBPACK_IMPORTED_MODULE_8__["default"])(target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ( true && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/process/browser.js */ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/harmony-module.js */ "../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),

/***/ "framer-package-loader.js!./node_modules/@framer/koenbok.tab-bar/dist/index.js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/@framerjs/build-library/build/Compiler/loaders/framer-package-loader.js!./node_modules/@framer/koenbok.tab-bar/dist/index.js ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! framer */ "framer"), __webpack_require__(/*! react */ "react"));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./TabBar.tsx": "./code/TabBar.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
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

/***/ "./code/TabBar.tsx":
/*!*************************!*\
  !*** ./code/TabBar.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9UYWJCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQU1lO0FBRWYsU0FBUyxTQUFTLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7O0lBQ2pELE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO0lBRXBELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQ0YsSUFBSSxFQUFFLEVBQUUsRUFDUixLQUFLLEVBQUUsS0FBSyxFQUNaLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFDMUIsVUFBVSxFQUFFLEtBQUssRUFDakIsWUFBWSxFQUFFLENBQUMsSUFFZCxLQUFLLENBQ0YsQ0FDWCxDQUFBO0NBQ0o7QUFFRCxTQUFnQixNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUU7O0lBQy9CLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RDLE9BQU8sb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBQyxNQUFNLHdCQUEwQixDQUFBO0tBQ3REO0lBRUQsU0FBUyxPQUFPLENBQUMsS0FBSzs7UUFDbEIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO1NBQzFCO1FBRUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFFZCxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVDLEtBQUssRUFBRSxDQUFBO1lBRVAsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsT0FBTyxPQUFPLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQTthQUM1QjtTQUNKO1FBRUQsT0FBTyxNQUFNLENBQUE7S0FDaEI7SUFDRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLFlBQVksTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUVoRCxTQUFTLFNBQVMsQ0FBQyxLQUFLOztRQUNwQixPQUFPO1lBQ0gsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxHQUFHLEVBQUU7O2dCQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNuQjtTQUNKLENBQUE7S0FDSjtJQUVELElBQUksVUFBVSxHQUFHLG9CQUFDLGNBQUssSUFBQyxNQUFNLDhCQUEwQixDQUFBO0lBRXhELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRTs7UUFDckMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQzNCLE1BQU0sU0FBUyxHQUNYLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxNQUFNO2dCQUMxQyxDQUFDLENBQUMsRUFBRTtnQkFDSixDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUE7WUFDNUQsVUFBVSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxrQkFDakMsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsTUFBTSxJQUNYLFNBQVMsRUFDZCxDQUFBO1NBQ0w7S0FDSixDQUFDLENBQUE7SUFFRixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7O1FBQ2pELE9BQU8sb0JBQUMsU0FBUyxvQkFBSyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUksQ0FBQTtLQUN0RCxDQUFDLENBQUE7SUFFRixPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBQyxNQUFNO1FBQ2IsVUFBVTtRQUNYLG9CQUFDLGNBQUssSUFDRixNQUFNLEVBQUUsQ0FBQyxFQUNULEtBQUssRUFBQyxNQUFNLEVBQ1osTUFBTSxFQUFFLEdBQUcsRUFDWCxVQUFVLEVBQUMseUJBQXlCLEVBQ3BDLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLFlBQVksRUFBQyxRQUFRLElBRXBCLE9BQU8sQ0FDSixDQUNKLENBQ1gsQ0FBQTtDQUNKO0FBeEVELHdCQXdFQztBQUVELDRCQUFtQixDQUFDLE1BQU0sRUFBRTtJQUN4QixRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLGVBQWUsRUFBRTtZQUNiLElBQUksRUFBRSxvQkFBVyxDQUFDLGlCQUFpQjtTQUN0QztLQUNKO0NBQ0osQ0FBQyxDQUFBO0FBQ0YifQ==

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
exports.__info__ = [{ name: "TabBar", children: true, type: "component" }];


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


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-extractor":"^7.1.5","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.18.0","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"e81b70cc-d26d-4f38-9046-208afb8d92cd","displayName":"Tab Bar"},"author":"Koen Bok","name":"@framer/koenbok.tab-bar","version":"1.2.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});


/***/ })

}]);