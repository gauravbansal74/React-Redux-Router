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
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
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

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var _foundation = __webpack_require__(1);

var _foundation2 = __webpack_require__(59);

_foundation.Foundation.plugin(_foundation2.Tabs, 'Tabs');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = {Keyboard: window.Foundation.Keyboard};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _foundationUtil = __webpack_require__(4);

var _foundationUtil2 = __webpack_require__(9);

var _foundation = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */

var Tabs = function (_Plugin) {
  _inherits(Tabs, _Plugin);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: '_setup',

    /**
     * Creates a new instance of tabs.
     * @class
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    value: function () {
      function _setup(element, options) {
        this.$element = element;
        this.options = _jquery2['default'].extend({}, Tabs.defaults, this.$element.data(), options);

        this._init();
        _foundationUtil.Keyboard.register('Tabs', {
          'ENTER': 'open',
          'SPACE': 'open',
          'ARROW_RIGHT': 'next',
          'ARROW_UP': 'previous',
          'ARROW_DOWN': 'next',
          'ARROW_LEFT': 'previous'
          // 'TAB': 'next',
          // 'SHIFT_TAB': 'previous'
        });
      }

      return _setup;
    }()

    /**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */

  }, {
    key: '_init',
    value: function () {
      function _init() {
        var _this3 = this;

        var _this = this;

        this.$element.attr({ 'role': 'tablist' });
        this.$tabTitles = this.$element.find('.' + String(this.options.linkClass));
        this.$tabContent = (0, _jquery2['default'])('[data-tabs-content="' + String(this.$element[0].id) + '"]');

        this.$tabTitles.each(function () {
          var $elem = (0, _jquery2['default'])(this),
              $link = $elem.find('a'),
              isActive = $elem.hasClass('' + String(_this.options.linkActiveClass)),
              hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
              linkId = $link[0].id ? $link[0].id : String(hash) + '-label',
              $tabContent = (0, _jquery2['default'])('#' + String(hash));

          $elem.attr({ 'role': 'presentation' });

          $link.attr({
            'role': 'tab',
            'aria-controls': hash,
            'aria-selected': isActive,
            'id': linkId,
            'tabindex': isActive ? '0' : '-1'
          });

          $tabContent.attr({
            'role': 'tabpanel',
            'aria-labelledby': linkId
          });

          if (!isActive) {
            $tabContent.attr('aria-hidden', 'true');
          }

          if (isActive && _this.options.autoFocus) {
            (0, _jquery2['default'])(window).load(function () {
              (0, _jquery2['default'])('html, body').animate({ scrollTop: $elem.offset().top }, _this.options.deepLinkSmudgeDelay, function () {
                $link.focus();
              });
            });
          }
        });
        if (this.options.matchHeight) {
          var $images = this.$tabContent.find('img');

          if ($images.length) {
            (0, _foundationUtil2.onImagesLoaded)($images, this._setHeight.bind(this));
          } else {
            this._setHeight();
          }
        }

        //current context-bound function to open tabs on page load or history popstate
        this._checkDeepLink = function () {
          var anchor = window.location.hash;
          //need a hash and a relevant anchor in this tabset
          if (anchor.length) {
            var $link = _this3.$element.find('[href$="' + anchor + '"]');
            if ($link.length) {
              _this3.selectTab((0, _jquery2['default'])(anchor), true);

              //roll up a little to show the titles
              if (_this3.options.deepLinkSmudge) {
                var offset = _this3.$element.offset();
                (0, _jquery2['default'])('html, body').animate({ scrollTop: offset.top }, _this3.options.deepLinkSmudgeDelay);
              }

              /**
                * Fires when the zplugin has deeplinked at pageload
                * @event Tabs#deeplink
                */
              _this3.$element.trigger('deeplink.zf.tabs', [$link, (0, _jquery2['default'])(anchor)]);
            }
          }
        };

        //use browser to open a tab, if it exists in this tabset
        if (this.options.deepLink) {
          this._checkDeepLink();
        }

        this._events();
      }

      return _init;
    }()

    /**
     * Adds event handlers for items within the tabs.
     * @private
     */

  }, {
    key: '_events',
    value: function () {
      function _events() {
        this._addKeyHandler();
        this._addClickHandler();
        this._setHeightMqHandler = null;

        if (this.options.matchHeight) {
          this._setHeightMqHandler = this._setHeight.bind(this);

          (0, _jquery2['default'])(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
        }

        if (this.options.deepLink) {
          (0, _jquery2['default'])(window).on('popstate', this._checkDeepLink);
        }
      }

      return _events;
    }()

    /**
     * Adds click handlers for items within the tabs.
     * @private
     */

  }, {
    key: '_addClickHandler',
    value: function () {
      function _addClickHandler() {
        var _this = this;

        this.$element.off('click.zf.tabs').on('click.zf.tabs', '.' + String(this.options.linkClass), function (e) {
          e.preventDefault();
          e.stopPropagation();
          _this._handleTabChange((0, _jquery2['default'])(this));
        });
      }

      return _addClickHandler;
    }()

    /**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */

  }, {
    key: '_addKeyHandler',
    value: function () {
      function _addKeyHandler() {
        var _this = this;

        this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
          if (e.which === 9) return;

          var $element = (0, _jquery2['default'])(this),
              $elements = $element.parent('ul').children('li'),
              $prevElement,
              $nextElement;

          $elements.each(function (i) {
            if ((0, _jquery2['default'])(this).is($element)) {
              if (_this.options.wrapOnKeys) {
                $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
                $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
              } else {
                $prevElement = $elements.eq(Math.max(0, i - 1));
                $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
              }
              return;
            }
          });

          // handle keyboard event with keyboard util
          _foundationUtil.Keyboard.handleKey(e, 'Tabs', {
            open: function () {
              function open() {
                $element.find('[role="tab"]').focus();
                _this._handleTabChange($element);
              }

              return open;
            }(),
            previous: function () {
              function previous() {
                $prevElement.find('[role="tab"]').focus();
                _this._handleTabChange($prevElement);
              }

              return previous;
            }(),
            next: function () {
              function next() {
                $nextElement.find('[role="tab"]').focus();
                _this._handleTabChange($nextElement);
              }

              return next;
            }(),
            handled: function () {
              function handled() {
                e.stopPropagation();
                e.preventDefault();
              }

              return handled;
            }()
          });
        });
      }

      return _addKeyHandler;
    }()

    /**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */

  }, {
    key: '_handleTabChange',
    value: function () {
      function _handleTabChange($target, historyHandled) {

        /**
         * Check for active class on target. Collapse if exists.
         */
        if ($target.hasClass('' + String(this.options.linkActiveClass))) {
          if (this.options.activeCollapse) {
            this._collapseTab($target);

            /**
             * Fires when the zplugin has successfully collapsed tabs.
             * @event Tabs#collapse
             */
            this.$element.trigger('collapse.zf.tabs', [$target]);
          }
          return;
        }

        var $oldTab = this.$element.find('.' + String(this.options.linkClass) + '.' + String(this.options.linkActiveClass)),
            $tabLink = $target.find('[role="tab"]'),
            hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
            $targetContent = this.$tabContent.find('#' + String(hash));

        //close old tab
        this._collapseTab($oldTab);

        //open new tab
        this._openTab($target);

        //either replace or update browser history
        if (this.options.deepLink && !historyHandled) {
          var anchor = $target.find('a').attr('href');

          if (this.options.updateHistory) {
            history.pushState({}, '', anchor);
          } else {
            history.replaceState({}, '', anchor);
          }
        }

        /**
         * Fires when the plugin has successfully changed tabs.
         * @event Tabs#change
         */
        this.$element.trigger('change.zf.tabs', [$target, $targetContent]);

        //fire to children a mutation event
        $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
      }

      return _handleTabChange;
    }()

    /**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to Open.
     * @function
     */

  }, {
    key: '_openTab',
    value: function () {
      function _openTab($target) {
        var $tabLink = $target.find('[role="tab"]'),
            hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
            $targetContent = this.$tabContent.find('#' + String(hash));

        $target.addClass('' + String(this.options.linkActiveClass));

        $tabLink.attr({
          'aria-selected': 'true',
          'tabindex': '0'
        });

        $targetContent.addClass('' + String(this.options.panelActiveClass)).removeAttr('aria-hidden');
      }

      return _openTab;
    }()

    /**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to Open.
     * @function
     */

  }, {
    key: '_collapseTab',
    value: function () {
      function _collapseTab($target) {
        var $target_anchor = $target.removeClass('' + String(this.options.linkActiveClass)).find('[role="tab"]').attr({
          'aria-selected': 'false',
          'tabindex': -1
        });

        (0, _jquery2['default'])('#' + String($target_anchor.attr('aria-controls'))).removeClass('' + String(this.options.panelActiveClass)).attr({ 'aria-hidden': 'true' });
      }

      return _collapseTab;
    }()

    /**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */

  }, {
    key: 'selectTab',
    value: function () {
      function selectTab(elem, historyHandled) {
        var idStr;

        if ((typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) === 'object') {
          idStr = elem[0].id;
        } else {
          idStr = elem;
        }

        if (idStr.indexOf('#') < 0) {
          idStr = '#' + String(idStr);
        }

        var $target = this.$tabTitles.find('[href$="' + String(idStr) + '"]').parent('.' + String(this.options.linkClass));

        this._handleTabChange($target, historyHandled);
      }

      return selectTab;
    }()
  }, {
    key: '_setHeight',

    /**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with `data-match-height="true"`, tabs sets to equal height
     * @function
     * @private
     */
    value: function () {
      function _setHeight() {
        var max = 0,
            _this = this; // Lock down the `this` value for the root tabs object

        this.$tabContent.find('.' + String(this.options.panelClass)).css('height', '').each(function () {

          var panel = (0, _jquery2['default'])(this),
              isActive = panel.hasClass('' + String(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child

          if (!isActive) {
            panel.css({ 'visibility': 'hidden', 'display': 'block' });
          }

          var temp = this.getBoundingClientRect().height;

          if (!isActive) {
            panel.css({
              'visibility': '',
              'display': ''
            });
          }

          max = temp > max ? temp : max;
        }).css('height', max + 'px');
      }

      return _setHeight;
    }()

    /**
     * Destroys an instance of an tabs.
     * @fires Tabs#destroyed
     */

  }, {
    key: '_destroy',
    value: function () {
      function _destroy() {
        this.$element.find('.' + String(this.options.linkClass)).off('.zf.tabs').hide().end().find('.' + String(this.options.panelClass)).hide();

        if (this.options.matchHeight) {
          if (this._setHeightMqHandler != null) {
            (0, _jquery2['default'])(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
          }
        }

        if (this.options.deepLink) {
          (0, _jquery2['default'])(window).off('popstate', this._checkDeepLink);
        }
      }

      return _destroy;
    }()
  }]);

  return Tabs;
}(_foundation.Plugin);

Tabs.defaults = {
  /**
   * Allows the window to scroll to content of pane specified by hash anchor
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,

  /**
   * Adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
  deepLinkSmudge: false,

  /**
   * Animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
  deepLinkSmudgeDelay: 300,

  /**
   * Update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
  updateHistory: false,

  /**
   * Allows the window to scroll to content of active pane on load if set to true.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
  autoFocus: false,

  /**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
  wrapOnKeys: true,

  /**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
  matchHeight: false,

  /**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
  activeCollapse: false,

  /**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
  linkClass: 'tabs-title',

  /**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  linkActiveClass: 'is-active',

  /**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
  panelClass: 'tabs-panel',

  /**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
  panelActiveClass: 'is-active'
};

exports.Tabs = Tabs;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tabs, 'Tabs', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.tabs.js');
}();

;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = {onImagesLoaded: window.Foundation.onImagesLoaded};

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ })

/******/ });