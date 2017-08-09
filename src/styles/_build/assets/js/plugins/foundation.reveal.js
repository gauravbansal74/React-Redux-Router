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
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
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

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var _foundation = __webpack_require__(1);

var _foundation2 = __webpack_require__(55);

_foundation.Foundation.plugin(_foundation2.Reveal, 'Reveal');
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

/***/ 5:
/***/ (function(module, exports) {

module.exports = {MediaQuery: window.Foundation.MediaQuery};

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reveal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _foundationUtil = __webpack_require__(4);

var _foundationUtil2 = __webpack_require__(5);

var _foundationUtil3 = __webpack_require__(6);

var _foundation = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */

var Reveal = function (_Plugin) {
  _inherits(Reveal, _Plugin);

  function Reveal() {
    _classCallCheck(this, Reveal);

    return _possibleConstructorReturn(this, (Reveal.__proto__ || Object.getPrototypeOf(Reveal)).apply(this, arguments));
  }

  _createClass(Reveal, [{
    key: '_setup',

    /**
     * Creates a new instance of Reveal.
     * @class
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
    value: function () {
      function _setup(element, options) {
        this.$element = element;
        this.options = _jquery2['default'].extend({}, Reveal.defaults, this.$element.data(), options);
        this._init();

        _foundationUtil.Keyboard.register('Reveal', {
          'ESCAPE': 'close'
        });
      }

      return _setup;
    }()

    /**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */

  }, {
    key: '_init',
    value: function () {
      function _init() {
        this.id = this.$element.attr('id');
        this.isActive = false;
        this.cached = { mq: _foundationUtil2.MediaQuery.current };
        this.isMobile = mobileSniff();

        this.$anchor = (0, _jquery2['default'])('[data-open="' + String(this.id) + '"]').length ? (0, _jquery2['default'])('[data-open="' + String(this.id) + '"]') : (0, _jquery2['default'])('[data-toggle="' + String(this.id) + '"]');
        this.$anchor.attr({
          'aria-controls': this.id,
          'aria-haspopup': true,
          'tabindex': 0
        });

        if (this.options.fullScreen || this.$element.hasClass('full')) {
          this.options.fullScreen = true;
          this.options.overlay = false;
        }
        if (this.options.overlay && !this.$overlay) {
          this.$overlay = this._makeOverlay(this.id);
        }

        this.$element.attr({
          'role': 'dialog',
          'aria-hidden': true,
          'data-yeti-box': this.id,
          'data-resize': this.id
        });

        if (this.$overlay) {
          this.$element.detach().appendTo(this.$overlay);
        } else {
          this.$element.detach().appendTo((0, _jquery2['default'])(this.options.appendTo));
          this.$element.addClass('without-overlay');
        }
        this._events();
        if (this.options.deepLink && window.location.hash === '#' + String(this.id)) {
          (0, _jquery2['default'])(window).one('load.zf.reveal', this.open.bind(this));
        }
      }

      return _init;
    }()

    /**
     * Creates an overlay div to display behind the modal.
     * @private
     */

  }, {
    key: '_makeOverlay',
    value: function () {
      function _makeOverlay() {
        var additionalOverlayClasses = '';

        if (this.options.additionalOverlayClasses) {
          additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
        }

        return (0, _jquery2['default'])('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
      }

      return _makeOverlay;
    }()

    /**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */

  }, {
    key: '_updatePosition',
    value: function () {
      function _updatePosition() {
        var width = this.$element.outerWidth();
        var outerWidth = (0, _jquery2['default'])(window).width();
        var height = this.$element.outerHeight();
        var outerHeight = (0, _jquery2['default'])(window).height();
        var left, top;
        if (this.options.hOffset === 'auto') {
          left = parseInt((outerWidth - width) / 2, 10);
        } else {
          left = parseInt(this.options.hOffset, 10);
        }
        if (this.options.vOffset === 'auto') {
          if (height > outerHeight) {
            top = parseInt(Math.min(100, outerHeight / 10), 10);
          } else {
            top = parseInt((outerHeight - height) / 4, 10);
          }
        } else {
          top = parseInt(this.options.vOffset, 10);
        }
        this.$element.css({ top: top + 'px' });
        // only worry about left if we don't have an overlay or we havea  horizontal offset,
        // otherwise we're perfectly in the middle
        if (!this.$overlay || this.options.hOffset !== 'auto') {
          this.$element.css({ left: left + 'px' });
          this.$element.css({ margin: '0px' });
        }
      }

      return _updatePosition;
    }()

    /**
     * Adds event handlers for the modal.
     * @private
     */

  }, {
    key: '_events',
    value: function () {
      function _events() {
        var _this3 = this;

        var _this = this;

        this.$element.on({
          'open.zf.trigger': this.open.bind(this),
          'close.zf.trigger': function () {
            function closeZfTrigger(event, $element) {
              if (event.target === _this.$element[0] || (0, _jquery2['default'])(event.target).parents('[data-closable]')[0] === $element) {
                // only close reveal when it's explicitly called
                return _this3.close.apply(_this3);
              }
            }

            return closeZfTrigger;
          }(),
          'toggle.zf.trigger': this.toggle.bind(this),
          'resizeme.zf.trigger': function () {
            function resizemeZfTrigger() {
              _this._updatePosition();
            }

            return resizemeZfTrigger;
          }()
        });

        if (this.$anchor.length) {
          this.$anchor.on('keydown.zf.reveal', function (e) {
            if (e.which === 13 || e.which === 32) {
              e.stopPropagation();
              e.preventDefault();
              _this.open();
            }
          });
        }

        if (this.options.closeOnClick && this.options.overlay) {
          this.$overlay.off('.zf.reveal').on('click.zf.reveal', function (e) {
            if (e.target === _this.$element[0] || _jquery2['default'].contains(_this.$element[0], e.target) || !_jquery2['default'].contains(document, e.target)) {
              return;
            }
            _this.close();
          });
        }
        if (this.options.deepLink) {
          (0, _jquery2['default'])(window).on('popstate.zf.reveal:' + String(this.id), this._handleState.bind(this));
        }
      }

      return _events;
    }()

    /**
     * Handles modal methods on back/forward button clicks or any other event that triggers popstate.
     * @private
     */

  }, {
    key: '_handleState',
    value: function () {
      function _handleState(e) {
        if (window.location.hash === '#' + this.id && !this.isActive) {
          this.open();
        } else {
          this.close();
        }
      }

      return _handleState;
    }()

    /**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */

  }, {
    key: 'open',
    value: function () {
      function open() {
        var _this4 = this;

        if (this.options.deepLink) {
          var hash = '#' + String(this.id);

          if (window.history.pushState) {
            window.history.pushState(null, null, hash);
          } else {
            window.location.hash = hash;
          }
        }

        this.isActive = true;

        // Make elements invisible, but remove display: none so we can get size and positioning
        this.$element.css({ 'visibility': 'hidden' }).show().scrollTop(0);
        if (this.options.overlay) {
          this.$overlay.css({ 'visibility': 'hidden' }).show();
        }

        this._updatePosition();

        this.$element.hide().css({ 'visibility': '' });

        if (this.$overlay) {
          this.$overlay.css({ 'visibility': '' }).hide();
          if (this.$element.hasClass('fast')) {
            this.$overlay.addClass('fast');
          } else if (this.$element.hasClass('slow')) {
            this.$overlay.addClass('slow');
          }
        }

        if (!this.options.multipleOpened) {
          /**
           * Fires immediately before the modal opens.
           * Closes any other modals that are currently open
           * @event Reveal#closeme
           */
          this.$element.trigger('closeme.zf.reveal', this.id);
        }

        var _this = this;

        function addRevealOpenClasses() {
          if (_this.isMobile) {
            if (!_this.originalScrollPos) {
              _this.originalScrollPos = window.pageYOffset;
            }
            (0, _jquery2['default'])('html, body').addClass('is-reveal-open');
          } else {
            (0, _jquery2['default'])('body').addClass('is-reveal-open');
          }
        }
        // Motion UI method of reveal
        if (this.options.animationIn) {
          var afterAnimation = function () {
            function afterAnimation() {
              _this.$element.attr({
                'aria-hidden': false,
                'tabindex': -1
              }).focus();
              addRevealOpenClasses();
              _foundationUtil.Keyboard.trapFocus(_this.$element);
            }

            return afterAnimation;
          }();

          if (this.options.overlay) {
            _foundationUtil3.Motion.animateIn(this.$overlay, 'fade-in');
          }
          _foundationUtil3.Motion.animateIn(this.$element, this.options.animationIn, function () {
            if (_this4.$element) {
              // protect against object having been removed
              _this4.focusableElements = _foundationUtil.Keyboard.findFocusable(_this4.$element);
              afterAnimation();
            }
          });
        }
        // jQuery method of reveal
        else {
            if (this.options.overlay) {
              this.$overlay.show(0);
            }
            this.$element.show(this.options.showDelay);
          }

        // handle accessibility
        this.$element.attr({
          'aria-hidden': false,
          'tabindex': -1
        }).focus();
        _foundationUtil.Keyboard.trapFocus(this.$element);

        addRevealOpenClasses();

        this._extraHandlers();

        /**
         * Fires when the modal has successfully opened.
         * @event Reveal#open
         */
        this.$element.trigger('open.zf.reveal');
      }

      return open;
    }()

    /**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */

  }, {
    key: '_extraHandlers',
    value: function () {
      function _extraHandlers() {
        var _this = this;
        if (!this.$element) {
          return;
        } // If we're in the middle of cleanup, don't freak out
        this.focusableElements = _foundationUtil.Keyboard.findFocusable(this.$element);

        if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
          (0, _jquery2['default'])('body').on('click.zf.reveal', function (e) {
            if (e.target === _this.$element[0] || _jquery2['default'].contains(_this.$element[0], e.target) || !_jquery2['default'].contains(document, e.target)) {
              return;
            }
            _this.close();
          });
        }

        if (this.options.closeOnEsc) {
          (0, _jquery2['default'])(window).on('keydown.zf.reveal', function (e) {
            _foundationUtil.Keyboard.handleKey(e, 'Reveal', {
              close: function () {
                function close() {
                  if (_this.options.closeOnEsc) {
                    _this.close();
                  }
                }

                return close;
              }()
            });
          });
        }
      }

      return _extraHandlers;
    }()

    /**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */

  }, {
    key: 'close',
    value: function () {
      function close() {
        if (!this.isActive || !this.$element.is(':visible')) {
          return false;
        }
        var _this = this;

        // Motion UI method of hiding
        if (this.options.animationOut) {
          if (this.options.overlay) {
            _foundationUtil3.Motion.animateOut(this.$overlay, 'fade-out');
          }

          _foundationUtil3.Motion.animateOut(this.$element, this.options.animationOut, finishUp);
        }
        // jQuery method of hiding
        else {
            this.$element.hide(this.options.hideDelay);

            if (this.options.overlay) {
              this.$overlay.hide(0, finishUp);
            } else {
              finishUp();
            }
          }

        // Conditionals to remove extra event listeners added on open
        if (this.options.closeOnEsc) {
          (0, _jquery2['default'])(window).off('keydown.zf.reveal');
        }

        if (!this.options.overlay && this.options.closeOnClick) {
          (0, _jquery2['default'])('body').off('click.zf.reveal');
        }

        this.$element.off('keydown.zf.reveal');

        function finishUp() {
          if (_this.isMobile) {
            if ((0, _jquery2['default'])('.reveal:visible').length === 0) {
              (0, _jquery2['default'])('html, body').removeClass('is-reveal-open');
            }
            if (_this.originalScrollPos) {
              (0, _jquery2['default'])('body').scrollTop(_this.originalScrollPos);
              _this.originalScrollPos = null;
            }
          } else {
            if ((0, _jquery2['default'])('.reveal:visible').length === 0) {
              (0, _jquery2['default'])('body').removeClass('is-reveal-open');
            }
          }

          _foundationUtil.Keyboard.releaseFocus(_this.$element);

          _this.$element.attr('aria-hidden', true);

          /**
          * Fires when the modal is done closing.
          * @event Reveal#closed
          */
          _this.$element.trigger('closed.zf.reveal');
        }

        /**
        * Resets the modal content
        * This prevents a running video to keep going in the background
        */
        if (this.options.resetOnClose) {
          this.$element.html(this.$element.html());
        }

        this.isActive = false;
        if (_this.options.deepLink) {
          if (window.history.replaceState) {
            window.history.replaceState('', document.title, window.location.href.replace('#' + String(this.id), ''));
          } else {
            window.location.hash = '';
          }
        }

        this.$anchor.focus();
      }

      return close;
    }()

    /**
     * Toggles the open/closed state of a modal.
     * @function
     */

  }, {
    key: 'toggle',
    value: function () {
      function toggle() {
        if (this.isActive) {
          this.close();
        } else {
          this.open();
        }
      }

      return toggle;
    }()
  }, {
    key: '_destroy',


    /**
     * Destroys an instance of a modal.
     * @function
     */
    value: function () {
      function _destroy() {
        if (this.options.overlay) {
          this.$element.appendTo((0, _jquery2['default'])(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()
          this.$overlay.hide().off().remove();
        }
        this.$element.hide().off();
        this.$anchor.off('.zf');
        (0, _jquery2['default'])(window).off('.zf.reveal:' + String(this.id));
      }

      return _destroy;
    }()
  }]);

  return Reveal;
}(_foundation.Plugin);

Reveal.defaults = {
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationIn: '',
  /**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
  animationOut: '',
  /**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  showDelay: 0,
  /**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
  hideDelay: 0,
  /**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnClick: true,
  /**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
  closeOnEsc: true,
  /**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
  multipleOpened: false,
  /**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  vOffset: 'auto',
  /**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
  hOffset: 'auto',
  /**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
  fullScreen: false,
  /**
   * Percentage of screen height the modal should push up from the bottom of the view.
   * @option
   * @type {number}
   * @default 10
   */
  btmOffsetPct: 10,
  /**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
  overlay: true,
  /**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
  resetOnClose: false,
  /**
   * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
   * @option
   * @type {boolean}
   * @default false
   */
  deepLink: false,
  /**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
  appendTo: "body",
  /**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
  additionalOverlayClasses: ''
};

function iPhoneSniff() {
  return (/iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
  );
}

function androidSniff() {
  return (/Android/.test(window.navigator.userAgent)
  );
}

function mobileSniff() {
  return iPhoneSniff() || androidSniff();
}

exports.Reveal = Reveal;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Reveal, 'Reveal', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.reveal.js');

  __REACT_HOT_LOADER__.register(iPhoneSniff, 'iPhoneSniff', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.reveal.js');

  __REACT_HOT_LOADER__.register(androidSniff, 'androidSniff', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.reveal.js');

  __REACT_HOT_LOADER__.register(mobileSniff, 'mobileSniff', '/Users/gaurav/Documents/work/src/github.com/gauravbansal74/main-app/src/styles/js/foundation.reveal.js');
}();

;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {Motion: window.Foundation.Motion, Move: window.Foundation.Move};

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ })

/******/ });