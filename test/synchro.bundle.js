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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _js_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _js_analytics_facebook_pixel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _js_analytics_kissmetrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _js_AnalyticsIntegration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _js_gradient_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _js_svg_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _js_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _js_goldCapBenefits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var _js_goldCapBenefits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_goldCapBenefits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_floatingPurchaseOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _js_experiments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var _js_hero_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);

//import BuyButton from './js/ShopifyBuyButton/buy_button';












// import susanEffects from './js/susan/effects'; "Disabling this for now so we can see if anything stops working... should be redudant."

console.log(`release_tag: ${process.env.RELEASE_TAG}`)

const lpEffectsObj = new _js_effects__WEBPACK_IMPORTED_MODULE_0__["default"]();
const fbPixelObj = new _js_analytics_facebook_pixel__WEBPACK_IMPORTED_MODULE_1__["default"]();
const gradientObj = new _js_gradient_effect__WEBPACK_IMPORTED_MODULE_4__["default"]();
const svgObj = new _js_svg_loader__WEBPACK_IMPORTED_MODULE_5__["default"]();
const toggle = new _js_toggle__WEBPACK_IMPORTED_MODULE_6__["default"]();
const tabs = new _js_tabs__WEBPACK_IMPORTED_MODULE_7__["default"]();
const analyticsObj = new _js_AnalyticsIntegration__WEBPACK_IMPORTED_MODULE_3__["default"]();
const goldCapBenefits = new _js_goldCapBenefits__WEBPACK_IMPORTED_MODULE_9___default.a();
const slider = Object(_js_slider__WEBPACK_IMPORTED_MODULE_8__["default"])('.slides');

//susanEffects();

$(document).ready(() => {
  gradientObj.startEffect();
})

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LPEffects; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'video.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'wowjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _events_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);




class LPEffects extends _events_base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super();
    new !(function webpackMissingModule() { var e = new Error("Cannot find module 'wowjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().init();

    this._lastScroll = 0;
    if($('.parallax')) {
      this._initialParallaxBackgroundPosition = $('.parallax').css('background-position-y');
    }

    this._appendthis =  ("<div class='modal-overlay js-modal-close'></div>");
  }

  events() {
    return {
      'click .main-navigation__hamburger': 'toggleNav',
      'click .main-navigation__item': 'toggleNav',
      'click .main-navigation__cta': 'toggleNav',
      'click .vjs-big-play-button': 'hideBenefitsText',
      'click a[href*="#"]:not([href="#"])': 'parallaxScroll',
      'scroll window': 'navMenuTransition',
      'scroll window': 'expandedNavMenuTransition',
      'click a[data-modal-id]': 'openModal',
      'click .js-modal-close': 'closeModal',
      'keyup window': 'closeModal',
      'click .modal-overlay': 'closeModal',
      'click .vjs-big-play-button': 'hideBenefitsText',
      'click .product-card__ingredients': 'toggleInfoText',  // On Keto-Bundle page  TODO -- Refactor front-end build by page somehow...
      'click .product-card__nutrition': 'toggleInfoText', // Same ^^
      'click .kcp-timeline__event-box': 'toggleTimelineText',
      'click .how-it-works__icon': 'toggleHowItWorks',
      'click .weight-loss__icon': 'toggleWeightLoss',
      'click .toggle-single-view': 'toggleSingleView', // Only ONE element is visible at one time. Use this toggle event for this element globally.
      'click .toggle-multiple-view': 'toggleMultipleView', // MULTIPLE element are visible at one time. Use this toggle event for this element globally.
      'click .purchase-2__options': 'goldCapsulePurchaseSwap',
    }
  }

  goldCapsulePurchaseSwap(target) {
    $('.purchase-2__options').each(function() { $(this).removeClass('selected') })
    $(target).addClass('selected')
    $("div[class*='option-'],p[class*='option-']").each(function() { $(this).removeClass('active') })
    $("input[class*='option-']").each(function() { $(this).prop('checked', false) })
    let targetClasses = $(target).attr('class').split(/\s+/)
    $.each(targetClasses, function(index, item) {
      if(item.includes('option-')) {
        $(`div[class*='${item}'],p[class*='${item}']`).each(function() { $(this).addClass('active') })
        $(`input[class*='${item}']`).prop('checked', true)
      }
    })
  }

  toggleMultipleView(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).parent().removeClass('active');
      $(target).children().removeClass('active');
      $(target).parent().siblings().removeClass('active');
      $(target).parent().siblings().find('.toggle-multiple-view').removeClass('active');
      $(target).parent().siblings().find('.toggle-multiple-view').children().removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).parent().addClass('active');
      $(target).children().addClass('active');
    }
  }

  toggleSingleView(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).parent().removeClass('active');
      $(target).children().removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).parent().addClass('active');
      $(target).children().addClass('active');
      $(target).parent().siblings().removeClass('active');
      $(target).parent().siblings().find('.toggle-single-view').removeClass('active');
      $(target).parent().siblings().find('.toggle-single-view').children().removeClass('active');
    }
  }

  toggleWeightLoss(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).siblings('.weight-loss__text').removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).siblings('.weight-loss__text').addClass('active');
    }
  }

  toggleHowItWorks(target) {
    if($(target).is('.active')) {
      $('.how-it-works .icon-learn-more').removeClass('active');
      $('.how-it-works__text').removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).siblings('.how-it-works__text').addClass('active');
    }
  }

  toggleTimelineText(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).siblings('div').removeClass('active');
      $(target).find('.kcp-timeline__event').removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).siblings('div').addClass('active');
      $(target).find('.kcp-timeline__event').addClass('active');
    }
  }

  toggleInfoText(target) {
    if($(target).is('.active')) {
      $(target).removeClass('active');
      $(target).find('span').removeClass('active');
    } else {
      $(target).addClass('active');
      $(target).find('span').addClass('active');
    }
  }

  toggleNav() {
    if($('.main-navigation').is('.expanded')) {
      $('.main-navigation').removeClass('expanded');
      $('.main-navigation__hamburger').removeClass('expanded');
    } else {
      $('.main-navigation').addClass('expanded');
      $('.main-navigation__hamburger').addClass('expanded');
    }
  }

  hideBenefitsText() {
    if($(this).closest('#popup-video').length === 0) {
      $('.gold-atf__uvp').addClass('hidden');
    }
  }

  parallaxScroll(clickTarget) {
    if (location.pathname.replace(/^\//,'') == clickTarget.pathname.replace(/^\//,'') && location.hostname == clickTarget.hostname) {
      var target = $(clickTarget.hash);
      target = target.length ? target : $('[name=' + clickTarget.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }

  parallaxBackgroundScroll() {
    if(!$('.parallax')) {
      return;
    }

    let scroll = $(window).scrollTop();
    let scrollDelta = scroll - this._lastScroll;
    let currentBackgroundPosition = parseInt($('.parallax').css('background-position-y'), 10);
    let newBackgroundPosition = currentBackgroundPosition - (scrollDelta / 2);

    if(newBackgroundPosition > 0) {
      newBackgroundPosition = 0;
    }

    $('.parallax').css('background-position-y', newBackgroundPosition + 'px');

    this._lastScroll = scroll;
  }

  navMenuTransition() {
    let navbar = $('.main-header');
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let maxScroll = 100;
    let scrollAtBannerBackgroundBottom = $('.main-header').attr('data-header-transition')
    if(scrollAtBannerBackgroundBottom == 'background') {
      maxScroll = $('.main-banner__background').height() - $('.main-header').outerHeight();
    }

    // TODO -- Man this is janky... Feels like the nav menu should really become its own
    // self-contained/reusable/configurable component instead of just trying to force it into
    // here and then hack it to work for all our various implementations.
    let navGradientLayer = $('.main-header>.gradient-layer');

    if(scrollTop > maxScroll && !navbar.is('.floated')) {
      navbar.addClass('floated');
      if(navGradientLayer) {
        navGradientLayer.addClass('show');
      }
    } else if(scrollTop < maxScroll && navbar.is('.floated')) {
      navbar.removeClass('floated');
      if(navGradientLayer) {
        navGradientLayer.removeClass('show');
      }
    }

    this.parallaxBackgroundScroll();
  }

  expandedNavMenuTransition() {
    let navbar = $('.expanded-header');
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let maxScroll = 50;
    let scrollAtBannerBackgroundBottom = $('.expanded-header').attr('data-header-transition')
    if(scrollAtBannerBackgroundBottom == 'background') {
      maxScroll = $('.expanded-banner__background').height() - $('.expanded-header').outerHeight();
    }

    // TODO -- Man this is janky... Feels like the nav menu should really become its own
    // self-contained/reusable/configurable component instead of just trying to force it into
    // here and then hack it to work for all our various implementations.
    let navGradientLayer = $('.expanded-header>.gradient-layer');

    if(scrollTop > maxScroll && !navbar.is('.floated')) {
      navbar.addClass('floated');
      if(navGradientLayer) {
        navGradientLayer.addClass('show');
      }
    } else if(scrollTop < maxScroll && navbar.is('.floated')) {
      navbar.removeClass('floated');
      if(navGradientLayer) {
        navGradientLayer.removeClass('show');
      }
    }

    this.parallaxBackgroundScroll();
  }

  openModal(target, e) {
    e.preventDefault();
    !(function webpackMissingModule() { var e = new Error("Cannot find module 'video.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('my-video').play();
    $("body").append(this._appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(target).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(target).data());
  }

  closeModal(target, e) {
    if(e.which != 27) return;
    !(function webpackMissingModule() { var e = new Error("Cannot find module 'video.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('my-video').pause();
    $(".modal-box, .modal-overlay").fadeOut(500, function() {
      $(".modal-overlay").remove();
    });
  }
}

$(".video-modal").click(function () {
  var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&cc_load_policy=1&showinfo=0&html5=1&autoplay=1";
  $(theModal + ' iframe').attr('src', videoSRCauto);
  $(theModal).on('hidden.bs.modal', function () {
    $(theModal + ' iframe').attr('src', videoSRC);
  });
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsBase; });
let entries = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'object.entries'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

class EventsBase {
  constructor() {
    this._specialSelectors = {
      'window': window,
      'document': document
    }
    this.bindEvents();
  }

  bindEvents() {
    for(let [key, value] of entries(this.events())) {
      let [event, selector] = key.split(' '); 
      if($.inArray(selector, Object.keys(this._specialSelectors)) >= 0) {
        selector = this._specialSelectors[selector];
      }
      $(selector).on(event, (e) => this[value](e.currentTarget, e))
    }
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FaceBookPixel; });
/* harmony import */ var _events_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);




class FaceBookPixel extends _events_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this.fb_fired = false;
  }

  events() {
    return {
      'click .carthook-buy-button': 'fireFBQ'
    }
  }
  
  sendPixel(target) {
    return new Promise((resolve, reject) => {
      let price = $(target).closest('.purchase__item').find('.shopify-buy__product__actual-price').html()
      price = price.replace(/\$/g, ''); 
      price = price.match(/(.*)\.[0-9][0-9]/); 
      let contentName = $(target).closest('.purchase__item').find('.shopify-buy__product__title').html() + $(target).closest('.purchase__item').find('.shopify-buy__product__variant-title').html();
      let content_ids = [$(target).closest('.purchase__item').attr('data-product-id')];
      let property = $(target).closest('.purchase').attr('data-fb-property');

      fbq('track', 'AddToCart', {
        property: property,
        content_name: contentName,
        content_ids: content_ids,
        content_type: 'product_group',
        value: price,
        currency: 'USD'
      });

      resolve();
    })
  }

  fireFBQ(target, e) {
    if(!this.fb_fired) {
      e.preventDefault();
      this.sendPixel(target).then(() => {
        this.fb_fired = true;
        $(target).trigger('click'); 
      })
    } else {
      window.location.href = $(target).find('.a--cta').attr('href');
    }
  }
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Kissmetrics; });
/* harmony import */ var _events_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);



class Kissmetrics extends _events_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    _kmq.push(['identify', 'anonymous']);
    this.KMPromise = new Promise((resolve, reject) => {
      _kmq.push(() => {
        resolve(KM.i()); 
      });    
    }); 

    // TODO -- O GOD REFACTOR ME
    this.gaNames = {
      'GLD01': {
        'name': 'Synchro Gold - One Bottle (16oz)',
        'variant': 'One Bottle (16oz)'
      },
      'GLD02': {
        'name': 'Synchro Gold - Two Bottles',
        'variant': 'Two Bottles'
      }, 
      'GLD03': {
        'name': 'Synchro Gold - Four Bottles',
        'variant': 'Four Bottles'
      },
      'GEN01': {
        'name': 'Synchro Genesis - One Bag (454g)',
        'variant': 'One Bag (12 Servings)'
      }, 
      'GEN02': {
        'name': 'Synchro Genesis - 2 Bags',
        'variant': 'Two Pack'
      }, 
      'GEN03': {
        'name': 'Synchro Genesis - 5 Bags',
        'variant': 'Five Pack'
      }
    };
  }

  events() {
    return {
      'click .shopify-buy__btn': 'fireKM'
    }
  }

  fireKM(target) {
    let price = $(target).closest('.shopify-buy-frame').find('.shopify-buy__product__actual-price').html();
    price = price.replace(/\$/g, ''); 
    price = price.match(/(.*)\.[0-9][0-9]/); 
    let SKU = $(target).closest('.shopify-buy-frame').find('.pID').html(); 

    _kmq.push(['record', 'added to cart', {
      'Added Product Name': this.gaNames[SKU].name,
      'Added Product Price': price[0],
      'Added Product Quantity': 1,
      'Added Product SKU': SKU,
      'Added Product Variant': this.gaNames[SKU].variant
    }]); 

    ga('ec:addProduct', { 
      'id': SKU,
      'name': this.gaNames[SKU].name,
      'variant': this.gaNames[SKU].variant,
      'price': price[0],
      'category': 'Nutritional',
      'quantity': 1
    });
    ga('ec:setAction', 'add');
    ga('send', 'event', 'EnhancedEcommerce', 'Added to Cart', 'add to cart');
  }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);




class AnalyticsIntegration extends _events_base__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor() {
    super();
    this.has_fired = false;
  }

  events() {
    return {
      'click .purchase__item > a': 'handleClick'
    }
  }

  handleClick(target, e) {
    console.log("Clicked!");
    let queryParams = this.parseQueryString(window.location.search.substring(1))
    if(!this.has_fired && 'gclid' in queryParams) {
      console.log("Preventing default...");
      e.preventDefault()
      console.log("We got an AdWords click!")
      this.saveGCLID(queryParams).then(() => {
        this.has_fired = true
        $(target).trigger('click');
      })
    } else {
      let href = $(target).find('a').attr('href');
      if(href) {
        window.location.href = href;        
      }
    }
  }

  saveGCLID(gclidParams) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: '/api/adwords_idents',
        data: JSON.stringify(gclidParams),
        success: () => resolve(),
        error: (XMLHttpRequest, textStatus, errorThrown) => resolve()
      });
    })
  }

  parseQueryString(queryString) {
    let params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AnalyticsIntegration);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientBase", function() { return GradientBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GradientEffect; });
/* harmony import */ var _events_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class GradientBase extends _events_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._colors = [
      [161,96,181], // Chichi's Purple
      [64,147,218], // Chichi's Blue
      [0,0,255], // Super Blue
      [180,0,180], // Pretty purple
    ];
    this._step = 0;
    this._colorIndices = [0,1,2,3];
    this.upperBound, this.lowerBound = false; 


    this._gradientSpeed = 0.002;
    this._gradientAngle = -30; 

    this._lastMouseX = 0;
    this._lastMouseY = 0; 
  }

  getNextColors() {
    let c0_0 = this._colors[this._colorIndices[0]];
    let c0_1 = this._colors[this._colorIndices[1]];
    let c1_0 = this._colors[this._colorIndices[2]];
    let c1_1 = this._colors[this._colorIndices[3]];

    let istep = 1 - this._step;
    let r1 = Math.round(istep * c0_0[0] + this._step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + this._step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + this._step * c0_1[2]);
    let color1 = "rgb("+r1+","+g1+","+b1+")";

    let r2 = Math.round(istep * c1_0[0] + this._step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + this._step * c1_1[1]);
    let b2 = Math.round(istep * c1_0[2] + this._step * c1_1[2]);
    let color2 = "rgb("+r2+","+g2+","+b2+")";

    return [color1, color2]
  }

  nextStep() {
    this._step += this._gradientSpeed;

    if ( this._step >= 1 || this._step <= 0) {
      this._gradientSpeed *= -1;
      if(this._step >= 1) {
        this.upperBound = true;
      } 
      if(this._step <= 0) {
        this.lowerBound = true; 
      }
    }
  }

  getColorSequence() {
    let startColors = [];
    let endColors = []; 
    let hex1, hex2, color1, color2

    while(!this.upperBound && !this.lowerBound) {
      [color1, color2] = this.getNextColors();
      hex1 = this.rgb2hex(color1);
      hex2 = this.rgb2hex(color2); 
      startColors.push(hex1);
      endColors.push(hex2); 
      this.nextStep(); 
    }

    return [startColors, endColors]; 
  }

  rgb2hex(rgb){
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }
}

class GradientEffect extends GradientBase {
  constructor() {
    super();

    this.updateGradient = this.updateGradient.bind(this);
  }

  events() {
    return {
    }
  }

  updateGradient() {  
    let [color1, color2] = this.getNextColors(); 

    $.each($('[id^=gradient-]'), (index, element) => {
      $(element).css({
        background: "-webkit-linear-gradient("+this._gradientAngle+"deg, "+color1+", "+color2+")"}).css({
        background: "-moz-linear-gradient("+this._gradientAngle+"deg, left, "+color1+" 0%, "+color2+" 100%)"}
      );
    });
      
    this.nextStep();
  }


  changeGradientParams(target, e) {
    let deltaX = e.pageX - this.lastMouseX;
    let deltaY = e.pageY - this.lastMouseY; 
    let deltaXPercent = deltaX / screen.width;
    let deltaYPercent = deltaY / screen.height;

    // 270 is the max range of degrees it makes sense to specify as the gradient angle, -90 to 180
    if(deltaXPercent * 270) {
      if(this._gradientAngle <= -90) {
        this._gradientAngle = 180; 
      } else if (this._gradientAngle >= 180) {
        this._gradientAngle = 0;
      }
      this._gradientAngle += deltaXPercent * 270;
    }

    this.lastMouseX = e.pageX;
    this.lastMouseY = e.pageY;
  }

  startEffect() {
    if($('[id^=gradient-]')) {
      setInterval(this.updateGradient, 10);
    }
  }
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SVGLoader; });
/* harmony import */ var _gradient_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
let entries = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'object.entries'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


class SVGLoader extends _gradient_effect__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this.svgElements = $('svg.external');
    this.gradientLayers = {}; 
    this._gradientSpeed = .04;
    //[this.startColors, this.endColors] = this.getColorSequence();
    this._promises = [];

    // 
    this._cognosEffectsMethods = {
      'anti-inflammatory-actual': 'antiInflammatoryDrawing',
      'flow-actual': 'flowDrawing',
      'nutrient-delivery-actual': 'nutrientDrawing'
    };

    $.each(this.svgElements, (index, value) => {
      this._promises.push(
        this.loadSVG($(value).attr('data-src'), $(value).attr('id'), $(value).attr('data-stroke'))
      ); 
    });

    Promise.all(this._promises).then((promiseValue) => {
      for(let [index, componentId] of entries(promiseValue)) {
        if(componentId in this._cognosEffectsMethods) {
          this[this._cognosEffectsMethods[componentId]](componentId);          
        }
      }

    })

    this.updateGradient = this.updateGradient.bind(this);
    setInterval(this.updateGradient, 10); 
  }

  loadSVG(svgURL, svgId, stroke) {
    return new Promise((resolve, reject) => {
      d3.xml(svgURL, (error, xml) => {
        if (error) throw error;

        // 'xml' is the XML DOM tree
        let htmlSVG = document.getElementById(svgId);  // the svg-element in the DOM

        let svg = d3.select(htmlSVG);

        // get the svg-element from the original SVG file
        let xmlSVG = d3.select(xml.getElementsByTagName('svg')[0]);  
        if(stroke == "gradient") {
          this.applyGradientMask(xmlSVG, svgId); 
        } 

        xmlSVG.attr('id', svgId+'-actual');

        // copy its 'viewBox' attribute to the svg element in our HTML file
        svg.attr('viewBox', xmlSVG.attr('viewBox'));
        svg.node().appendChild(xmlSVG.node()); 
        resolve(xmlSVG.attr('id')); 
      });
    })
  }

  updateGradient() {
    let [color1, color2] = this.getNextColors();
    let color1Hex = this.rgb2hex(color1);
    let color2Hex = this.rgb2hex(color2); 
    
    for(let [svgId, gradientLayer] of entries(this.gradientLayers)) {
      gradientLayer.select('.start').attr('stop-color', color1Hex);
      gradientLayer.select('.end').attr('stop-color', color2Hex);  
    }

    this.nextStep(); 
  }

  applyGradientMask(xmlSVG, svgId) {
    this.initGradient(xmlSVG, svgId);

    let paths = xmlSVG.selectAll('g');
    paths.each(function() {
      d3.select(this).select('path').style('stroke', 'url(#'+svgId+'-gradient)');
    });
  }

  initGradient(xmlSVG, svgId) {
    let defs = xmlSVG.append('defs');

    this.gradientLayers[svgId] = defs.append('linearGradient')
      .attr('id', svgId+'-gradient')
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', '0%')
      .attr('y2', '100%');

    this.gradientLayers[svgId].append('stop')
      .attr('class', 'start')
      .attr('offset', '0%')
      .attr('stop-color', '#4093DA')
      .attr('stop-opacity', 1)
      //.append('animate')
      //.attr('attributeName', 'stop-color')
      //.attr('values', this.startColors.join(';'))
      //.attr('dur', '5s')
      //.attr('repeatCount', 'indefinite');


    this.gradientLayers[svgId].append('stop')
      .attr('class', 'end')
      .attr('offset', '100%')
      .attr('stop-color', '#A160B5')
      .attr('stop-opacity', 1)
      //.append('animate')
      //.attr('attributeName', 'stop-color')
      //.attr('values', this.endColors.join(';'))
      //.attr('dur', '5s')
      //.attr('repeatCount', 'indefinite');
  }

  antiInflammatoryDrawing(componentId) {
    return; 
  }

  flowDrawing(componentId) {
    let options = {
      duration: 100,
      start: 'autostart',
      type: 'sync',
      reverseStack: true
    }
    let vivus = new Vivus(componentId, options, () => {
      vivus.reset().play();
    });
  }

  nutrientDrawing(componentId) {
    let vivus = new Vivus(componentId, {duration: 200}, () => {
      vivus.finish();
    });
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Togglify; });
/* harmony import */ var _events_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Togglify extends _events_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(selector) {
    super();
    this.toggleIds = {}
  }

  events() {
    return { 
      'click [data-toggle-id]': 'toggleContentById'
    }
  }

  isToggleOpen(toggleId) {

    const isOpen = this.toggleIds[toggleId];

    if (typeof isOpen !== "boolean") {
      this.setToggleId(toggleId, false);
    }

    return this.toggleIds[toggleId];
  }

  toggleContentById(e) {
    const targetId = e.getAttribute('data-toggle-id');

    if (this.isToggleOpen(targetId)) {
      this.closeToggle(targetId);
    }
    else {
      this.openToggle(targetId);
    }

  }

  closeToggle(toggleId) {
    this.closeToggleContent(toggleId);
    this.setToggleId(toggleId, false);
    this.rotateToggleOff(toggleId);
  }

  openToggle(toggleId) {
    this.closeAllOtherToggles(toggleId);
    this.openToggleContent(toggleId);
    this.setToggleId(toggleId, true);
    this.rotateToggleOn(toggleId);
  }

  openToggleContent(toggleId) {
    const selector = this.getContentSelector(toggleId);
    $(selector).closest('.extended-content').addClass('open');
    setTimeout(() => $(selector).slideDown(1000), 0);
  }

  closeToggleContent(toggleId) {
    const selector = this.getContentSelector(toggleId);
    $(selector).slideUp(1000, () => 
      $(selector).closest('.extended-content').removeClass('open')
    );
  }

  closeAllOtherToggles(toggleId) {

    // Get all toogleIds
    const otherToggles = Object.entries(this.toggleIds)
      .filter(([key, value]) => 
        key !== toggleId
      )
      .forEach(([key, value]) => {
        if (value) this.closeToggle(key);
      });
  }

  rotateToggleOn(toggleId) {
    const selector = this.getToggleSelector(toggleId);
    $(selector).addClass('opened');
  }

  rotateToggleOff(toggleId) {
    const selector = this.getToggleSelector(toggleId);
    $(selector).removeClass('opened');
  }

  setToggleId(toggleId, value) {
    this.toggleIds[toggleId] = value
  }

  getContentSelector(toggleId) {
    return `[data-toggle-content='${toggleId}']`;
  }

  getToggleSelector(toggleId) {
    return `[data-toggle-id='${toggleId}']`;
  }

}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabbify; });
/* harmony import */ var _events_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Tabbify extends _events_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  events() {
    return { 
      'click .tab': 'onClick'
    }
  }

  onClick(element) {
    const {tabId, tabName} = getTabData(element);

    hideTabs(tabId);
    showTabs(tabId, tabName);

  }

}

const getTabData = element => ({
  tabId: element.getAttribute('data-tabs'),
  tabName: element.getAttribute('id')
});

const hideTabs = tabId => {
  $(`.tab-pane[data-tabs=${tabId}]`).removeClass('active');

  $(`.tab-box[data-tabs=${tabId}]`).removeClass('active');

  $(`.tab[data-tabs=${tabId}]`).removeClass('active');
};

const showTabs = (tabId, tabName) => {
  $(`.tab-pane[data-tabs=${tabId}][id="${tabName}"]`).addClass('active');

  $(`.tab-box[data-tabs=${tabId}][id="${tabName}"]`).addClass('active');

  $(`.tab[data-tabs=${tabId}][id="${tabName}"]`).addClass('active');
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'slick-carousel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/* harmony default export */ __webpack_exports__["default"] = ((selector) => {
  if($(selector).length) {
    $(selector).slick({
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 14000,
      arrows: false
    });
    $(selector).on('afterChange', (event, slick, currentSlide, nextSlide) => {
      let speed = $(slick.$slides[currentSlide]).find('.slide').data('time')
      $(selector).slick('slickSetOption', 'autoplaySpeed', speed)
    })
  }
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (62:17)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|   }\n| \n>   scrollToAnchor = (e) => {\n|     let classes = $(e).attr('class').split(/\\s+/)\n|     let id = classes[0].split('__')[1]");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


$(window).scroll(function() {
  if ($(this).scrollTop() > 700) {
    $('.floating-buy-button').addClass('show-buy-button');
    $('.floating-purchase-options').addClass('show-purchase-options');
  } else {
    $('.floating-buy-button').removeClass('show-buy-button');
    $('.floating-purchase-options').removeClass('show-purchase-options');
  }
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHeroImg", function() { return loadHeroImg; });

const loadHeroImg = (
    src = 'https://storage.googleapis.com/synchro-assets/gold/susan/test.jpg',
    selector = '.bg-full-width'
  ) => {

    $('<img/>').attr({src}).on('load', function() {
       $(this).remove(); // prevent memory leaks as @benweet suggested
       $(selector)
         .css({
          'opacity': 0,
          'background-image': `url(${src})`
          })
         .animate({'opacity': 1}, 1000);
    });

  }
;



/***/ })
/******/ ]);