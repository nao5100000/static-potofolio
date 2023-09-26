"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Add target and rel to external links
var domain = document.domain;
var regexp = new RegExp(domain);
var links = document.getElementsByTagName('a');

var _iterator = _createForOfIteratorHelper(links),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var link = _step.value;

    if (!regexp.test(link.href)) {
      if (link.href.match(/^https:\/\//) || link.href.match(/\.pdf/)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
      }
    }
  } // Open global menu

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var menuBtn = document.getElementById('js-menu-toggle');
var gnav = document.getElementById('js-global-menu');
var body = document.querySelector('body');
var scrollValue; // Internal link

var menus = document.querySelectorAll('.global__menu > ul > li > a');
menus.forEach(function (menu) {
  menu.addEventListener('click', function () {
    if (body.classList.contains('open')) {
      body.classList.remove('open');
      gnav.classList.remove('open');
    }
  });
}); // Adjust link position

window.onload = function () {
  if (window.location.hash == "") {
    return;
  }

  document.getElementById(window.location.hash.slice(1)).scrollIntoView(true);
};

var y, num, num02, num03;
var particleW = document.getElementById('js-particle-wrapper');
var particles = document.querySelectorAll('.particle');
var horizontal = document.querySelectorAll('.js-hor');

var topParticle = function topParticle() {
  window.addEventListener('scroll', function () {
    y = window.scrollY;
    num = y / 500;
    num02 = y / 1000;
    num03 = y / 10;
    particleW.style.cssText = "\n            opacity: ".concat(1 - num, ";\n            transform: scale3d( ").concat(1.5 + num02, ", ").concat(1.5 + num02, ", 1);\n        ");

    if (.5 >= particleW.style.opacity) {
      particleW.style.opacity = .5;
    }

    if (1.5 + num02 >= 2) {
      particleW.style.transform = 'scale3d(2, 2, 1)';
    }

    horizontal[0].style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -".concat(num03, ", 0, 0, 1)");
    horizontal[1].style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ".concat(num03, ", 0, 0, 1)");
  });
};

topParticle();
var ham = document.getElementById('js-ham');
window.addEventListener('scroll', function () {
  y = window.scrollY;

  if (500 <= y) {
    ham.classList.add('is_active');
  } else {
    ham.classList.remove('is_active');
  }
});

var mouseHover = function mouseHover() {
  var pointerArea = document.querySelectorAll('.js-hover');
  var pointerElem = document.getElementById('js-pointer');
  var pointerHov = document.querySelectorAll('.js-hov-res');

  if (pointerArea.length === 0) {
    return;
  }

  var _loop = function _loop(i) {
    pointerArea[i].addEventListener('mouseenter', function () {
      pointerElem.classList.add('is_active');
      pointerHov[i].classList.add('is_active');
    });
    pointerArea[i].addEventListener('mouseleave', function () {
      pointerElem.classList.remove('is_active');
      pointerHov[i].classList.remove('is_active');
    });
    pointerArea[i].addEventListener('mousemove', function (e) {
      pointerElem.style.top = "".concat(e.clientY, "px");
      pointerElem.style.left = "".concat(e.clientX, "px");
      pointerHov[i].style.top = "".concat(e.clientY, "px");
      pointerHov[i].style.left = "".concat(e.clientX, "px");
    });
  };

  for (var i = 0; i < pointerArea.length; i++) {
    _loop(i);
  }
};

mouseHover(); // mouse 

var toX, toY, elemData;

var buttonSticerAddEvent = function buttonSticerAddEvent(trigger, target, num) {
  trigger.addEventListener("mouseenter", function (e) {
    elemData = target.getBoundingClientRect();
  });
  trigger.addEventListener('mousemove', function (e) {
    toX = (e.clientX - elemData.width / 2 - elemData.left) * num;
    toY = (e.clientY - elemData.height / 2 - elemData.top) * num;
    target.style.transform = "translate(".concat(toX, "px, ").concat(toY, "px)");
  });
  trigger.addEventListener('mouseleave', function () {
    target.style.transform = "translate(0px,0px)";
  });
};

var buttonHovSticker = function buttonHovSticker() {
  var hovLink = document.querySelectorAll('.js-stick-link');
  Array.from(hovLink).map(function (item) {
    buttonSticerAddEvent(item, item, .5);
  });
};

buttonHovSticker();
var frontParticles = document.querySelectorAll('.particle-front');
var backParticles = document.querySelectorAll('.particle-back');

var topParticleSticker = function topParticleSticker() {
  buttonSticerAddEvent(particleW, particles);
  Array.from(frontParticles).map(function (frontParticle) {
    buttonSticerAddEvent(particleW, frontParticle, .04);
  });
  Array.from(backParticles).map(function (backParticle) {
    buttonSticerAddEvent(particleW, backParticle, .03);
  });
};

topParticleSticker();
var bodyHeight = document.body.clientHeight;
var windowHeight = window.innerHeight;
var bottomPoint = bodyHeight - windowHeight;
document.addEventListener('scroll', function () {
  var currentPos = window.scrollY;

  if (bottomPoint <= currentPos) {
    console.log('true');
  } else {
    console.log('false');
  }
});