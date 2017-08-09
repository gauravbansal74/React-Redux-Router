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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var _foundation = __webpack_require__(1);

var _foundation2 = __webpack_require__(46);

_foundation.Foundation.plugin(_foundation2.DropdownMenu, 'DropdownMenu');
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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _foundationUtil = __webpack_require__(4);

var _foundationUtil2 = __webpack_require__(8);

var _foundationUtil3 = __webpack_require__(7);

var _foundationUtil4 = __webpack_require__(3);

var _foundation = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */

var DropdownMenu = function (_Plugin) {
  _inherits(DropdownMenu, _Plugin);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: '_setup',

    /**
     * Creates a new instance of DropdownMenu.
     * @class
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function () {
      function _setup(element, options) {
        this.$element = element;
        this.options = _jquery2['default'].extend({}, DropdownMenu.defaults, this.$element.data(), options);

        _foundationUtil2.Nest.Feather(this.$element, 'dropdown');
        this._init();

        _foundationUtil.Keyboard.register('DropdownMenu', {
          'ENTER': 'open',
          'SPACE': 'open',
          'ARROW_RIGHT': 'next',
          'ARROW_UP': 'up',
          'ARROW_DOWN': 'down',
          'ARROW_LEFT': 'previous',
          'ESCAPE': 'close'
        });
      }

      return _setup;
    }()

    /**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */

  }, {
    key: '_init',
    value: function () {
      function _init() {
        var subs = this.$element.find('li.is-dropdown-submenu-parent');
        this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');

        this.$menuItems = this.$element.find('[role="menuitem"]');
        this.$tabs = this.$element.children('[role="menuitem"]');
        this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

        if (this.$element.hasClass(this.options.rightClass) || this.options.alignment === 'right' || (0, _foundationUtil4.rtl)() || this.$element.parents('.top-bar-right').is('*')) {
          this.options.alignment = 'right';
          subs.addClass('opens-left');
        } else {
          subs.addClass('opens-right');
        }
        this.changed = false;
        this._events();
      }

      return _init;
    }()
  }, {
    key: '_isVertical',
    value: function () {
      function _isVertical() {
        return this.$tabs.css('display') === 'block';
      }

      return _isVertical;
    }()

    /**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */

  }, {
    key: '_events',
    value: function () {
      function _events() {
        var _this = this,
            hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
            parClass = 'is-dropdown-submenu-parent';

        // used for onClick and in the keyboard handlers
        var handleClickFn = function () {
          function handleClickFn(e) {
            var $elem = (0, _jquery2['default'])(e.target).parentsUntil('ul', '.' + parClass),
                hasSub = $elem.hasClass(parClass),
                hasClicked = $elem.attr('data-is-click') === 'true',
                $sub = $elem.children('.is-dropdown-submenu');

            if (hasSub) {
              if (hasClicked) {
                if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
                  return;
                } else {
                  e.stopImmediatePropagation();
                  e.preventDefault();
                  _this._hide($elem);
                }
              } else {
                e.preventDefault();
                e.stopImmediatePropagation();
                _this._show($sub);
                $elem.add($elem.parentsUntil(_this.$element, '.' + parClass)).attr('data-is-click', true);
              }
            }
          }

          return handleClickFn;
        }();

        if (this.options.clickOpen || hasTouch) {
          this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);
        }

        // Handle Leaf element Clicks
        if (_this.options.closeOnClickInside) {
          this.$menuItems.on('click.zf.dropdownmenu', function (e) {
            var $elem = (0, _jquery2['default'])(this),
                hasSub = $elem.hasClass(parClass);
            if (!hasSub) {
              _this._hide();
            }
          });
        }

        if (!this.options.disableHover) {
          this.$menuItems.on('mouseenter.zf.dropdownmenu', function (e) {
            var $elem = (0, _jquery2['default'])(this),
                hasSub = $elem.hasClass(parClass);

            if (hasSub) {
              clearTimeout($elem.data('_delay'));
              $elem.data('_delay', setTimeout(function () {
                _this._show($elem.children('.is-dropdown-submenu'));
              }, _this.options.hoverDelay));
            }
          }).on('mouseleave.zf.dropdownmenu', function (e) {
            var $elem = (0, _jquery2['default'])(this),
                hasSub = $elem.hasClass(parClass);
            if (hasSub && _this.options.autoclose) {
              if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
                return false;
              }

              clearTimeout($elem.data('_delay'));
              $elem.data('_delay', setTimeout(function () {
                _this._hide($elem);
              }, _this.options.closingTime));
            }
          });
        }
        this.$menuItems.on('keydown.zf.dropdownmenu', function (e) {
          var $element = (0, _jquery2['default'])(e.target).parentsUntil('ul', '[role="menuitem"]'),
              isTab = _this.$tabs.index($element) > -1,
              $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
              $prevElement,
              $nextElement;

          $elements.each(function (i) {
            if ((0, _jquery2['default'])(this).is($element)) {
              $prevElement = $elements.eq(i - 1);
              $nextElement = $elements.eq(i + 1);
              return;
            }
          });

          var nextSibling = function () {
            function nextSibling() {
              if (!$element.is(':last-child')) {
                $nextElement.children('a:first').focus();
                e.preventDefault();
              }
            }

            return nextSibling;
          }(),
              prevSibling = function () {
            function prevSibling() {
              $prevElement.children('a:first').focus();
              e.preventDefault();
            }

            return prevSibling;
          }(),
              openSub = function () {
            function openSub() {
              var $sub = $element.children('ul.is-dropdown-submenu');
              if ($sub.length) {
                _this._show($sub);
                $element.find('li > a:first').focus();
                e.preventDefault();
              } else {
                return;
              }
            }

            return openSub;
          }(),
              closeSub = function () {
            function closeSub() {
              //if ($element.is(':first-child')) {
              var close = $element.parent('ul').parent('li');
              close.children('a:first').focus();
              _this._hide(close);
              e.preventDefault();
              //}
            }

            return closeSub;
          }();
          var functions = {
            open: openSub,
            close: function () {
              function close() {
                _this._hide(_this.$element);
                _this.$menuItems.eq(0).children('a').focus(); // focus to first element
                e.preventDefault();
              }

              return close;
            }(),
            handled: function () {
              function handled() {
                e.stopImmediatePropagation();
              }

              return handled;
            }()
          };

          if (isTab) {
            if (_this._isVertical()) {
              // vertical menu
              if ((0, _foundationUtil4.rtl)()) {
                // right aligned
                _jquery2['default'].extend(functions, {
                  down: nextSibling,
                  up: prevSibling,
                  next: closeSub,
                  previous: openSub
                });
              } else {
                // left aligned
                _jquery2['default'].extend(functions, {
                  down: nextSibling,
                  up: prevSibling,
                  next: openSub,
                  previous: closeSub
                });
              }
            } else {
              // horizontal menu
              if ((0, _foundationUtil4.rtl)()) {
                // right aligned
                _jquery2['default'].extend(functions, {
                  next: prevSibling,
                  previous: nextSibling,
                  down: openSub,
                  up: closeSub
                });
              } else {
                // left aligned
                _jquery2['default'].extend(functions, {
                  next: nextSibling,
                  previous: prevSibling,
                  down: openSub,
                  up: closeSub
                });
              }
            }
          } else {
            // not tabs -> one sub
            if ((0, _foundationUtil4.rtl)()) {
              // right aligned
              _jquery2['default'].extend(functions, {
                next: closeSub,
                previous: openSub,
                down: nextSibling,
                up: prevSibling
              });
            } else {
              // left aligned
              _jquery2['default'].extend(functions, {
                next: openSub,
                previous: closeSub,
                down: nextSibling,
                up: prevSibling
              });
            }
          }
          _foundationUtil.Keyboard.handleKey(e, 'DropdownMenu', functions);
        });
      }

      return _events;
    }()

    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */

  }, {
    key: '_addBodyHandler',
    value: function () {
      function _addBodyHandler() {
        var $body = (0, _jquery2['default'])(document.body),
            _this = this;
        $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function (e) {
          var $link = _this.$element.find(e.target);
          if ($link.length) {
            return;
          }

          _this._hide();
          $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
        });
      }

      return _addBodyHandler;
    }()

    /**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires DropdownMenu#show
     */

  }, {
    key: '_show',
    value: function () {
      function _show($sub) {
        var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
          return (0, _jquery2['default'])(el).find($sub).length > 0;
        }));
        var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');
        this._hide($sibs, idx);
        $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
        var clear = _foundationUtil3.Box.ImNotTouchingYou($sub, null, true);
        if (!clear) {
          var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
              $parentLi = $sub.parent('.is-dropdown-submenu-parent');
          $parentLi.removeClass('opens' + oldClass).addClass('opens-' + String(this.options.alignment));
          clear = _foundationUtil3.Box.ImNotTouchingYou($sub, null, true);
          if (!clear) {
            $parentLi.removeClass('opens-' + String(this.options.alignment)).addClass('opens-inner');
          }
          this.changed = true;
        }
        $sub.css('visibility', '');
        if (this.options.closeOnClick) {
          this._addBodyHandler();
        }
        /**
         * Fires when the new dropdown pane is visible.
         * @event DropdownMenu#show
         */
        this.$element.trigger('show.zf.dropdownmenu', [$sub]);
      }

      return _show;
    }()

    /**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @private
     */

  }, {
    key: '_hide',
    value: function () {
      function _hide($elem, idx) {
        var $toClose;
        if ($elem && $elem.length) {
          $toClose = $elem;
        } else if (idx !== undefined) {
          $toClose = this.$tabs.not(function (i, el) {
            return i === idx;
          });
        } else {
          $toClose = this.$element;
        }
        var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

        if (somethingToClose) {
          $toClose.find('li.is-active').add($toClose).attr({
            'data-is-click': false
          }).removeClass('is-active');

          $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

          if (this.changed || $toClose.find('opens-inner').length) {
            var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
            $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass('opens-inner opens-' + String(this.options.alignment)).addClass('opens-' + oldClass);
            this.changed = false;
          }
          /**
           * Fires when the open menus are closed.
           * @event DropdownMenu#hide
           */
          this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
        }
      }

      return _hide;
    }()

    /**
     * Destroys the plugin.
     * @function
     */

  }, {
    key: '_destroy',
    value: function () {
      function _destroy() {
        this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
        (0, _jquery2['default'])(document.body).off('.zf.dropdownmenu');
        _foundationUtil2.Nest.Burn(this.$element, 'dropdown');
      }

      return _destroy;
    }()
  }]);

  return DropdownMenu;
}(_foundation.Plugin);

/**
 * Default settings for plugin
 */


DropdownMenu.defaults = {
  /**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
  disableHover: false,
  /**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
  autoclose: true,
  /**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
  hoverDelay: 50,
  /**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
  clickOpen: false,
  /**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */

  closingTime: 500,
  /**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'left'
   */
  alignment: 'left',
  /**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,
  /**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClickInside: true,
  /**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
  verticalClass: 'vertical',
  /**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
  rightClass: 'align-right',
  /**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
  forceFollow: true
};

exports.DropdownMenu = DropdownMenu;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DropdownMenu, 'DropdownMenu', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.dropdownMenu.js');
}();

;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = {Box: window.Foundation.Box};

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = {Nest: window.Foundation.Nest};

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })

/******/ });