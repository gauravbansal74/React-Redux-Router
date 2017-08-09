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
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var _foundation = __webpack_require__(1);

var _foundation2 = __webpack_require__(43);

_foundation.Foundation.plugin(_foundation2.AccordionMenu, 'AccordionMenu');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = {Plugin: window.Foundation.Plugin};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = {rtl: window.Foundation.rtl, GetYoDigits: window.Foundation.GetYoDigits, transitionend: window.Foundation.transitionend};

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = {Keyboard: window.Foundation.Keyboard};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _foundationUtil = __webpack_require__(4);

var _foundationUtil2 = __webpack_require__(8);

var _foundationUtil3 = __webpack_require__(3);

var _foundation = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */

var AccordionMenu = function (_Plugin) {
  _inherits(AccordionMenu, _Plugin);

  function AccordionMenu() {
    _classCallCheck(this, AccordionMenu);

    return _possibleConstructorReturn(this, (AccordionMenu.__proto__ || Object.getPrototypeOf(AccordionMenu)).apply(this, arguments));
  }

  _createClass(AccordionMenu, [{
    key: '_setup',

    /**
     * Creates a new instance of an accordion menu.
     * @class
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function () {
      function _setup(element, options) {
        this.$element = element;
        this.options = _jquery2['default'].extend({}, AccordionMenu.defaults, this.$element.data(), options);

        _foundationUtil2.Nest.Feather(this.$element, 'accordion');

        this._init();

        _foundationUtil.Keyboard.register('AccordionMenu', {
          'ENTER': 'toggle',
          'SPACE': 'toggle',
          'ARROW_RIGHT': 'open',
          'ARROW_UP': 'up',
          'ARROW_DOWN': 'down',
          'ARROW_LEFT': 'close',
          'ESCAPE': 'closeAll'
        });
      }

      return _setup;
    }()

    /**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */

  }, {
    key: '_init',
    value: function () {
      function _init() {
        this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');
        this.$element.attr({
          'role': 'menu',
          'aria-multiselectable': this.options.multiOpen
        });

        this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
        this.$menuLinks.each(function () {
          var linkId = this.id || (0, _foundationUtil3.GetYoDigits)(6, 'acc-menu-link'),
              $elem = (0, _jquery2['default'])(this),
              $sub = $elem.children('[data-submenu]'),
              subId = $sub[0].id || (0, _foundationUtil3.GetYoDigits)(6, 'acc-menu'),
              isActive = $sub.hasClass('is-active');
          $elem.attr({
            'aria-controls': subId,
            'aria-expanded': isActive,
            'role': 'menuitem',
            'id': linkId
          });
          $sub.attr({
            'aria-labelledby': linkId,
            'aria-hidden': !isActive,
            'role': 'menu',
            'id': subId
          });
        });
        var initPanes = this.$element.find('.is-active');
        if (initPanes.length) {
          var _this = this;
          initPanes.each(function () {
            _this.down((0, _jquery2['default'])(this));
          });
        }
        this._events();
      }

      return _init;
    }()

    /**
     * Adds event handlers for items within the menu.
     * @private
     */

  }, {
    key: '_events',
    value: function () {
      function _events() {
        var _this = this;

        this.$element.find('li').each(function () {
          var $submenu = (0, _jquery2['default'])(this).children('[data-submenu]');

          if ($submenu.length) {
            (0, _jquery2['default'])(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
              e.preventDefault();

              _this.toggle($submenu);
            });
          }
        }).on('keydown.zf.accordionmenu', function (e) {
          var $element = (0, _jquery2['default'])(this),
              $elements = $element.parent('ul').children('li'),
              $prevElement,
              $nextElement,
              $target = $element.children('[data-submenu]');

          $elements.each(function (i) {
            if ((0, _jquery2['default'])(this).is($element)) {
              $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

              if ((0, _jquery2['default'])(this).children('[data-submenu]:visible').length) {
                // has open sub menu
                $nextElement = $element.find('li:first-child').find('a').first();
              }
              if ((0, _jquery2['default'])(this).is(':first-child')) {
                // is first element of sub menu
                $prevElement = $element.parents('li').first().find('a').first();
              } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
                // if previous element has open sub menu
                $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
              }
              if ((0, _jquery2['default'])(this).is(':last-child')) {
                // is last element of sub menu
                $nextElement = $element.parents('li').first().next('li').find('a').first();
              }

              return;
            }
          });

          _foundationUtil.Keyboard.handleKey(e, 'AccordionMenu', {
            open: function () {
              function open() {
                if ($target.is(':hidden')) {
                  _this.down($target);
                  $target.find('li').first().find('a').first().focus();
                }
              }

              return open;
            }(),
            close: function () {
              function close() {
                if ($target.length && !$target.is(':hidden')) {
                  // close active sub of this item
                  _this.up($target);
                } else if ($element.parent('[data-submenu]').length) {
                  // close currently open sub
                  _this.up($element.parent('[data-submenu]'));
                  $element.parents('li').first().find('a').first().focus();
                }
              }

              return close;
            }(),
            up: function () {
              function up() {
                $prevElement.focus();
                return true;
              }

              return up;
            }(),
            down: function () {
              function down() {
                $nextElement.focus();
                return true;
              }

              return down;
            }(),
            toggle: function () {
              function toggle() {
                if ($element.children('[data-submenu]').length) {
                  _this.toggle($element.children('[data-submenu]'));
                  return true;
                }
              }

              return toggle;
            }(),
            closeAll: function () {
              function closeAll() {
                _this.hideAll();
              }

              return closeAll;
            }(),
            handled: function () {
              function handled(preventDefault) {
                if (preventDefault) {
                  e.preventDefault();
                }
                e.stopImmediatePropagation();
              }

              return handled;
            }()
          });
        }); //.attr('tabindex', 0);
      }

      return _events;
    }()

    /**
     * Closes all panes of the menu.
     * @function
     */

  }, {
    key: 'hideAll',
    value: function () {
      function hideAll() {
        this.up(this.$element.find('[data-submenu]'));
      }

      return hideAll;
    }()

    /**
     * Opens all panes of the menu.
     * @function
     */

  }, {
    key: 'showAll',
    value: function () {
      function showAll() {
        this.down(this.$element.find('[data-submenu]'));
      }

      return showAll;
    }()

    /**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */

  }, {
    key: 'toggle',
    value: function () {
      function toggle($target) {
        if (!$target.is(':animated')) {
          if (!$target.is(':hidden')) {
            this.up($target);
          } else {
            this.down($target);
          }
        }
      }

      return toggle;
    }()

    /**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */

  }, {
    key: 'down',
    value: function () {
      function down($target) {
        var _this = this;

        if (!this.options.multiOpen) {
          this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
        }

        $target.addClass('is-active').attr({ 'aria-hidden': false }).parent('.is-accordion-submenu-parent').attr({ 'aria-expanded': true });

        $target.slideDown(_this.options.slideSpeed, function () {
          /**
           * Fires when the menu is done opening.
           * @event AccordionMenu#down
           */
          _this.$element.trigger('down.zf.accordionMenu', [$target]);
        });
      }

      return down;
    }()

    /**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */

  }, {
    key: 'up',
    value: function () {
      function up($target) {
        var _this = this;
        $target.slideUp(_this.options.slideSpeed, function () {
          /**
           * Fires when the menu is done collapsing up.
           * @event AccordionMenu#up
           */
          _this.$element.trigger('up.zf.accordionMenu', [$target]);
        });

        var $menus = $target.find('[data-submenu]').slideUp(0).addBack().attr('aria-hidden', true);

        $menus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
      }

      return up;
    }()

    /**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */

  }, {
    key: '_destroy',
    value: function () {
      function _destroy() {
        this.$element.find('[data-submenu]').slideDown(0).css('display', '');
        this.$element.find('a').off('click.zf.accordionMenu');

        _foundationUtil2.Nest.Burn(this.$element, 'accordion');
      }

      return _destroy;
    }()
  }]);

  return AccordionMenu;
}(_foundation.Plugin);

AccordionMenu.defaults = {
  /**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
  slideSpeed: 250,
  /**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
  multiOpen: true
};

exports.AccordionMenu = AccordionMenu;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AccordionMenu, 'AccordionMenu', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.accordionMenu.js');
}();

;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = {Nest: window.Foundation.Nest};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ })

/******/ });