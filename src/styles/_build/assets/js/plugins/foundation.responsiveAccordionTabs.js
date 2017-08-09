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
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = {Foundation: window.Foundation};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = {Plugin: window.Foundation.Plugin};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var _foundation = __webpack_require__(1);

var _foundation2 = __webpack_require__(52);

_foundation.Foundation.plugin(_foundation2.ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = {rtl: window.Foundation.rtl, GetYoDigits: window.Foundation.GetYoDigits, transitionend: window.Foundation.transitionend};

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {MediaQuery: window.Foundation.MediaQuery};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsiveAccordionTabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _foundationUtil = __webpack_require__(5);

var _foundationUtil2 = __webpack_require__(3);

var _foundation = __webpack_require__(2);

var _foundation2 = __webpack_require__(71);

var _foundation3 = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// The plugin matches the plugin classes with these plugin instances.
var MenuPlugins = {
  tabs: {
    cssClass: 'tabs',
    plugin: _foundation3.Tabs
  },
  accordion: {
    cssClass: 'accordion',
    plugin: _foundation2.Accordion
  }
};

/**
 * ResponsiveAccordionTabs module.
 * @module foundation.responsiveAccordionTabs
 * @requires foundation.util.motion
 * @requires foundation.accordion
 * @requires foundation.tabs
 */

var ResponsiveAccordionTabs = function (_Plugin) {
  _inherits(ResponsiveAccordionTabs, _Plugin);

  function ResponsiveAccordionTabs() {
    _classCallCheck(this, ResponsiveAccordionTabs);

    return _possibleConstructorReturn(this, (ResponsiveAccordionTabs.__proto__ || Object.getPrototypeOf(ResponsiveAccordionTabs)).apply(this, arguments));
  }

  _createClass(ResponsiveAccordionTabs, [{
    key: '_setup',

    /**
     * Creates a new instance of a responsive accordion tabs.
     * @class
     * @fires ResponsiveAccordionTabs#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function () {
      function _setup(element, options) {
        this.$element = (0, _jquery2['default'])(element);
        this.options = _jquery2['default'].extend({}, this.$element.data(), options);
        this.rules = this.$element.data('responsive-accordion-tabs');
        this.currentMq = null;
        this.currentPlugin = null;
        if (!this.$element.attr('id')) {
          this.$element.attr('id', (0, _foundationUtil2.GetYoDigits)(6, 'responsiveaccordiontabs'));
        };

        this._init();
        this._events();
      }

      return _setup;
    }()

    /**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */

  }, {
    key: '_init',
    value: function () {
      function _init() {
        // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
        if (typeof this.rules === 'string') {
          var rulesTree = {};

          // Parse rules from "classes" pulled from data attribute
          var rules = this.rules.split(' ');

          // Iterate through every rule found
          for (var i = 0; i < rules.length; i++) {
            var rule = rules[i].split('-');
            var ruleSize = rule.length > 1 ? rule[0] : 'small';
            var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

            if (MenuPlugins[rulePlugin] !== null) {
              rulesTree[ruleSize] = MenuPlugins[rulePlugin];
            }
          }

          this.rules = rulesTree;
        }

        this._getAllOptions();

        if (!_jquery2['default'].isEmptyObject(this.rules)) {
          this._checkMediaQueries();
        }
      }

      return _init;
    }()
  }, {
    key: '_getAllOptions',
    value: function () {
      function _getAllOptions() {
        //get all defaults and options
        var _this = this;
        _this.allOptions = {};
        for (var key in MenuPlugins) {
          if (MenuPlugins.hasOwnProperty(key)) {
            var obj = MenuPlugins[key];
            try {
              var dummyPlugin = (0, _jquery2['default'])('<ul></ul>');
              var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);
              for (var keyKey in tmpPlugin.options) {
                if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
                  var objObj = tmpPlugin.options[keyKey];
                  _this.allOptions[keyKey] = objObj;
                }
              }
              tmpPlugin.destroy();
            } catch (e) {}
          }
        }
      }

      return _getAllOptions;
    }()

    /**
     * Initializes events for the Menu.
     * @function
     * @private
     */

  }, {
    key: '_events',
    value: function () {
      function _events() {
        var _this = this;

        (0, _jquery2['default'])(window).on('changed.zf.mediaquery', function () {
          _this._checkMediaQueries();
        });
      }

      return _events;
    }()

    /**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */

  }, {
    key: '_checkMediaQueries',
    value: function () {
      function _checkMediaQueries() {
        var matchedMq,
            _this = this;
        // Iterate through each rule and find the last matching rule
        _jquery2['default'].each(this.rules, function (key) {
          if (_foundationUtil.MediaQuery.atLeast(key)) {
            matchedMq = key;
          }
        });

        // No match? No dice
        if (!matchedMq) return;

        // Plugin already initialized? We good
        if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;

        // Remove existing plugin-specific CSS classes
        _jquery2['default'].each(MenuPlugins, function (key, value) {
          _this.$element.removeClass(value.cssClass);
        });

        // Add the CSS class for the new plugin
        this.$element.addClass(this.rules[matchedMq].cssClass);

        // Create an instance of the new plugin
        if (this.currentPlugin) {
          //don't know why but on nested elements data zfPlugin get's lost
          if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);
          this.currentPlugin.destroy();
        }
        this._handleMarkup(this.rules[matchedMq].cssClass);
        this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
        this.storezfData = this.currentPlugin.$element.data('zfPlugin');
      }

      return _checkMediaQueries;
    }()
  }, {
    key: '_handleMarkup',
    value: function () {
      function _handleMarkup(toSet) {
        var _this = this,
            fromString = 'accordion';
        var $panels = (0, _jquery2['default'])('[data-tabs-content=' + this.$element.attr('id') + ']');
        if ($panels.length) fromString = 'tabs';
        if (fromString === toSet) {
          return;
        };

        var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';
        var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';

        this.$element.removeAttr('role');
        var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
        var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');

        if (fromString === 'tabs') {
          $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
          $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
        } else {
          $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
        };

        $panels.css({ display: '', visibility: '' });
        $liHeads.css({ display: '', visibility: '' });
        if (toSet === 'accordion') {
          $panels.each(function (key, value) {
            (0, _jquery2['default'])(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({ height: '' });
            (0, _jquery2['default'])('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id="tabs-placeholder-' + _this.$element.attr('id') + '"></div>').remove();
            $liHeads.addClass('accordion-item').attr('data-accordion-item', '');
            $liHeadsA.addClass('accordion-title');
          });
        } else if (toSet === 'tabs') {
          var $tabsContent = (0, _jquery2['default'])('[data-tabs-content=' + _this.$element.attr('id') + ']');
          var $placeholder = (0, _jquery2['default'])('#tabs-placeholder-' + _this.$element.attr('id'));
          if ($placeholder.length) {
            $tabsContent = (0, _jquery2['default'])('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));
            $placeholder.remove();
          } else {
            $tabsContent = (0, _jquery2['default'])('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));
          };
          $panels.each(function (key, value) {
            var tempValue = (0, _jquery2['default'])(value).appendTo($tabsContent).addClass(tabsPanel);
            var hash = $liHeadsA.get(key).hash.slice(1);
            var id = (0, _jquery2['default'])(value).attr('id') || (0, _foundationUtil2.GetYoDigits)(6, 'accordion');
            if (hash !== id) {
              if (hash !== '') {
                (0, _jquery2['default'])(value).attr('id', hash);
              } else {
                hash = id;
                (0, _jquery2['default'])(value).attr('id', hash);
                (0, _jquery2['default'])($liHeadsA.get(key)).attr('href', (0, _jquery2['default'])($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);
              };
            };
            var isActive = (0, _jquery2['default'])($liHeads.get(key)).hasClass('is-active');
            if (isActive) {
              tempValue.addClass('is-active');
            };
          });
          $liHeads.addClass(tabsTitle);
        };
      }

      return _handleMarkup;
    }()

    /**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */

  }, {
    key: '_destroy',
    value: function () {
      function _destroy() {
        if (this.currentPlugin) this.currentPlugin.destroy();
        (0, _jquery2['default'])(window).off('.zf.ResponsiveAccordionTabs');
      }

      return _destroy;
    }()
  }]);

  return ResponsiveAccordionTabs;
}(_foundation.Plugin);

ResponsiveAccordionTabs.defaults = {};

exports.ResponsiveAccordionTabs = ResponsiveAccordionTabs;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MenuPlugins, 'MenuPlugins', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.responsiveAccordionTabs.js');

  __REACT_HOT_LOADER__.register(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.responsiveAccordionTabs.js');
}();

;

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = {Accordion: window.Foundation.Accordion};

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = {Tabs: window.Foundation.Tabs};

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ })

/******/ });