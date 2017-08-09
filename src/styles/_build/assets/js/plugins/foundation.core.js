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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Core Foundation Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function rtl() {
  return $('html').attr('dir') === 'rtl';
}

/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */
function GetYoDigits(length, namespace) {
  length = length || 6;
  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + String(namespace) : '');
}

function transitionend($elem) {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  };
  var elem = document.createElement('div'),
      end;

  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      end = transitions[t];
    }
  }
  if (end) {
    return end;
  } else {
    end = setTimeout(function () {
      $elem.triggerHandler('transitionend', [$elem]);
    }, 1);
    return 'transitionend';
  }
}

exports.rtl = rtl;
exports.GetYoDigits = GetYoDigits;
exports.transitionend = transitionend;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rtl, 'rtl', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.util.core.js');

  __REACT_HOT_LOADER__.register(GetYoDigits, 'GetYoDigits', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.util.core.js');

  __REACT_HOT_LOADER__.register(transitionend, 'transitionend', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.util.core.js');
}();

;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _foundation = __webpack_require__(3);

var _foundationUtil = __webpack_require__(0);

var _foundation2 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_foundation.Foundation.addToJquery(_jquery2['default']);

// These are now separated out, but historically were a part of this module,
// and since this is here for backwards compatibility we include them in
// this entry.

_foundation.Foundation.rtl = _foundationUtil.rtl;
_foundation.Foundation.GetYoDigits = _foundationUtil.GetYoDigits;
_foundation.Foundation.transitionend = _foundationUtil.transitionend;

// Every plugin depends on plugin now, we can include that on the core for the
// script inclusion path.

_foundation.Foundation.Plugin = _foundation2.Plugin;

window.Foundation = _foundation.Foundation;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Foundation = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _foundationUtil = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FOUNDATION_VERSION = '6.3.1';

// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
var Foundation = {
  version: FOUNDATION_VERSION,

  /**
   * Stores initialized plugins.
   */
  _plugins: {},

  /**
   * Stores generated unique ids for plugin instances
   */
  _uuids: [],

  /**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
  plugin: function () {
    function plugin(_plugin, name) {
      // Object key to use when adding to global Foundation object
      // Examples: Foundation.Reveal, Foundation.OffCanvas
      var className = name || functionName(_plugin);
      // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
      // Examples: data-reveal, data-off-canvas
      var attrName = hyphenate(className);

      // Add to the Foundation object and the plugins list (for reflowing)
      this._plugins[attrName] = this[className] = _plugin;
    }

    return plugin;
  }(),
  /**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
  registerPlugin: function () {
    function registerPlugin(plugin, name) {
      var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
      plugin.uuid = (0, _foundationUtil.GetYoDigits)(6, pluginName);

      if (!plugin.$element.attr('data-' + String(pluginName))) {
        plugin.$element.attr('data-' + String(pluginName), plugin.uuid);
      }
      if (!plugin.$element.data('zfPlugin')) {
        plugin.$element.data('zfPlugin', plugin);
      }
      /**
       * Fires when the plugin has initialized.
       * @event Plugin#init
       */
      plugin.$element.trigger('init.zf.' + String(pluginName));

      this._uuids.push(plugin.uuid);

      return;
    }

    return registerPlugin;
  }(),
  /**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
  unregisterPlugin: function () {
    function unregisterPlugin(plugin) {
      var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

      this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
      plugin.$element.removeAttr('data-' + String(pluginName)).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      .trigger('destroyed.zf.' + String(pluginName));
      for (var prop in plugin) {
        plugin[prop] = null; //clean up script to prep for garbage collection.
      }
      return;
    }

    return unregisterPlugin;
  }(),

  /**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
  reInit: function () {
    function reInit(plugins) {
      var isJQ = plugins instanceof _jquery2['default'];
      try {
        if (isJQ) {
          plugins.each(function () {
            (0, _jquery2['default'])(this).data('zfPlugin')._init();
          });
        } else {
          var type = typeof plugins === 'undefined' ? 'undefined' : _typeof(plugins),
              _this = this,
              fns = {
            'object': function () {
              function object(plgs) {
                plgs.forEach(function (p) {
                  p = hyphenate(p);
                  (0, _jquery2['default'])('[data-' + p + ']').foundation('_init');
                });
              }

              return object;
            }(),
            'string': function () {
              function string() {
                plugins = hyphenate(plugins);
                (0, _jquery2['default'])('[data-' + plugins + ']').foundation('_init');
              }

              return string;
            }(),
            'undefined': function () {
              function undefined() {
                this['object'](Object.keys(_this._plugins));
              }

              return undefined;
            }()
          };
          fns[type](plugins);
        }
      } catch (err) {
        console.error(err);
      } finally {
        return plugins;
      }
    }

    return reInit;
  }(),

  /**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
  reflow: function () {
    function reflow(elem, plugins) {

      // If plugins is undefined, just grab everything
      if (typeof plugins === 'undefined') {
        plugins = Object.keys(this._plugins);
      }
      // If plugins is a string, convert it to an array with one item
      else if (typeof plugins === 'string') {
          plugins = [plugins];
        }

      var _this = this;

      // Iterate through each plugin
      _jquery2['default'].each(plugins, function (i, name) {
        // Get the current plugin
        var plugin = _this._plugins[name];

        // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
        var $elem = (0, _jquery2['default'])(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');

        // For each plugin found, initialize it
        $elem.each(function () {
          var $el = (0, _jquery2['default'])(this),
              opts = {};
          // Don't double-dip on plugins
          if ($el.data('zfPlugin')) {
            console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
            return;
          }

          if ($el.attr('data-options')) {
            var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
              var opt = e.split(':').map(function (el) {
                return el.trim();
              });
              if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
            });
          }
          try {
            $el.data('zfPlugin', new plugin((0, _jquery2['default'])(this), opts));
          } catch (er) {
            console.error(er);
          } finally {
            return;
          }
        });
      });
    }

    return reflow;
  }(),
  getFnName: functionName,

  addToJquery: function () {
    function addToJquery($) {
      // TODO: consider not making this a jQuery function
      // TODO: need way to reflow vs. re-initialize
      /**
       * The Foundation jQuery method.
       * @param {String|Array} method - An action to perform on the current jQuery object.
       */
      var foundation = function () {
        function foundation(method) {
          var type = typeof method === 'undefined' ? 'undefined' : _typeof(method),
              $meta = $('meta.foundation-mq'),
              $noJS = $('.no-js');

          if (!$meta.length) {
            $('<meta class="foundation-mq">').appendTo(document.head);
          }
          if ($noJS.length) {
            $noJS.removeClass('no-js');
          }

          if (type === 'undefined') {
            //needs to initialize the Foundation object, or an individual plugin.
            Foundation.MediaQuery._init();
            Foundation.reflow(this);
          } else if (type === 'string') {
            //an individual method to invoke on a plugin or group of plugins
            var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
            var plugClass = this.data('zfPlugin'); //determine the class of plugin

            if (plugClass !== undefined && plugClass[method] !== undefined) {
              //make sure both the class and method exist
              if (this.length === 1) {
                //if there's only one, call it directly.
                plugClass[method].apply(plugClass, args);
              } else {
                this.each(function (i, el) {
                  //otherwise loop through the jQuery collection and invoke the method on each
                  plugClass[method].apply($(el).data('zfPlugin'), args);
                });
              }
            } else {
              //error for no class or no method
              throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
            }
          } else {
            //error for invalid argument type
            throw new TypeError('We\'re sorry, ' + String(type) + ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
          }
          return this;
        }

        return foundation;
      }();
      $.fn.foundation = foundation;
      return $;
    }

    return addToJquery;
  }()
};

Foundation.util = {
  /**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
  throttle: function () {
    function throttle(func, delay) {
      var timer = null;

      return function () {
        var context = this,
            args = arguments;

        if (timer === null) {
          timer = setTimeout(function () {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    }

    return throttle;
  }()
};

window.Foundation = Foundation;

// Polyfill for requestAnimationFrame
(function () {
  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
    return new Date().getTime();
  };

  var vendors = ['webkit', 'moz'];
  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
  }
  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
  /**
   * Polyfill for performance.now, required by rAF
   */
  if (!window.performance || !window.performance.now) {
    window.performance = {
      start: Date.now(),
      now: function () {
        function now() {
          return Date.now() - this.start;
        }

        return now;
      }()
    };
  }
})();
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function fNOP() {},
        fBound = function fBound() {
      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    if (this.prototype) {
      // native functions don't have a prototype
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
// Polyfill to get the name of a function in IE9
function functionName(fn) {
  if (Function.prototype.name === undefined) {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = funcNameRegex.exec(fn.toString());
    return results && results.length > 1 ? results[1].trim() : "";
  } else if (fn.prototype === undefined) {
    return fn.constructor.name;
  } else {
    return fn.prototype.constructor.name;
  }
}
function parseValue(str) {
  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
}
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

exports.Foundation = Foundation;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FOUNDATION_VERSION, 'FOUNDATION_VERSION', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.core.js');

  __REACT_HOT_LOADER__.register(Foundation, 'Foundation', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.core.js');

  __REACT_HOT_LOADER__.register(functionName, 'functionName', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.core.js');

  __REACT_HOT_LOADER__.register(parseValue, 'parseValue', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.core.js');

  __REACT_HOT_LOADER__.register(hyphenate, 'hyphenate', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.core.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _foundationUtil = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)
var Plugin = function () {
  function Plugin(element, options) {
    _classCallCheck(this, Plugin);

    this._setup(element, options);
    var pluginName = hyphenate(this.constructor.name);
    this.uuid = (0, _foundationUtil.GetYoDigits)(6, pluginName);

    if (!this.$element.attr('data-' + String(pluginName))) {
      this.$element.attr('data-' + String(pluginName), this.uuid);
    }
    if (!this.$element.data('zfPlugin')) {
      this.$element.data('zfPlugin', this);
    }
    /**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */
    this.$element.trigger('init.zf.' + String(pluginName));
  }

  _createClass(Plugin, [{
    key: 'destroy',
    value: function () {
      function destroy() {
        this._destroy();
        var pluginName = hyphenate(this.constructor.name);
        this.$element.removeAttr('data-' + String(pluginName)).removeData('zfPlugin')
        /**
         * Fires when the plugin has been destroyed.
         * @event Plugin#destroyed
         */
        .trigger('destroyed.zf.' + String(pluginName));
        for (var prop in this) {
          this[prop] = null; //clean up script to prep for garbage collection.
        }
      }

      return destroy;
    }()
  }]);

  return Plugin;
}();

// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580


function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

exports.Plugin = Plugin;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Plugin, 'Plugin', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.plugin.js');

  __REACT_HOT_LOADER__.register(hyphenate, 'hyphenate', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.plugin.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);