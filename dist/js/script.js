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
var scrollValue;
var nav = document.getElementById('js-nav');
var hamBg = document.getElementById('js-ham-bg');
var ham = document.getElementById('js-ham');
var topButton = document.getElementById('js-top-button');
ham.addEventListener('click', function () {
  hamBg.classList.contains('is_active') ? hamBg.classList.remove('is_active') : hamBg.classList.add('is_active');
  nav.classList.contains('is_active') ? nav.classList.remove('is_active') : nav.classList.add('is_active');
  ham.classList.contains('is_open') ? ham.classList.remove('is_open') : ham.classList.add('is_open');
});
window.addEventListener('scroll', function () {
  y = window.scrollY;

  if (500 <= y) {
    ham.classList.add('is_active');
    nav.classList.add('is_hidden');
    if (!ham.classList.contains('is_open')) nav.classList.remove('is_active');
  } else {
    ham.classList.remove('is_active');
    ham.classList.remove('is_open');
    nav.classList.remove('is_hidden');
    if (hamBg.classList.contains('is_active')) hamBg.classList.remove('is_active');
  }

  if (y <= 90) topButton.style.transform = "translate(0,".concat(90 - y, "px)");
}); // Internal link

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
    if (.5 >= particleW.style.opacity) particleW.style.opacity = .5;
    if (1.5 + num02 >= 2) particleW.style.transform = 'scale3d(2, 2, 1)';
    horizontal[0].style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -".concat(num03, ", 0, 0, 1)");
    horizontal[1].style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ".concat(num03, ", 0, 0, 1)");
  });
};

topParticle();

var mouseHover = function mouseHover() {
  var pointerArea = document.querySelectorAll('.js-hover');
  var pointerElem = document.getElementById('js-pointer');
  document.addEventListener('mousemove', function (e) {
    pointerElem.style.top = "".concat(e.clientY - 45, "px");
    pointerElem.style.left = "".concat(e.clientX - 35, "px");
  });
  if (pointerArea.length === 0) return;

  for (var i = 0; i < pointerArea.length; i++) {
    pointerArea[i].addEventListener('mouseover', function () {
      pointerElem.classList.add('is_active');
    });
    pointerArea[i].addEventListener('mouseout', function () {
      pointerElem.classList.remove('is_active');
    });
  }
};

mouseHover(); // mouse 

var toX, toY, elemData;
var elemDataArray = [];

var buttonSticerAddEvent = function buttonSticerAddEvent(trigger, target, num) {
  trigger.addEventListener("mouseenter", function (e) {
    if (target.length >= 2) {
      Array.from(target).map(function (t) {
        elemDataArray.push(t.getBoundingClientRect());
      });
    } else {
      elemData = target.getBoundingClientRect();
    }
  });
  trigger.addEventListener('mousemove', function (e) {
    if (target.length >= 2) {
      Array.from(target).map(function (t, i) {
        toX = (e.clientX - elemDataArray[i].width / 2 - elemDataArray[i].left) * num;
        toY = (e.clientY - elemDataArray[i].height / 2 - elemDataArray[i].top) * num;
        t.style.transform = "translate(".concat(toX, "px, ").concat(toY, "px)");
      });
    } else {
      toX = (e.clientX - elemData.width / 2 - elemData.left) * num;
      toY = (e.clientY - elemData.height / 2 - elemData.top) * num;
      target.style.transform = "translate(".concat(toX, "px, ").concat(toY, "px)");
    }
  });
  trigger.addEventListener('mouseleave', function () {
    if (target.length >= 2) {
      Array.from(target).map(function (t) {
        t.style.transform = "translate(0px,0px)";
      });
    } else {
      target.style.transform = "translate(0px,0px)";
    }
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
gsap.utils.toArray('.js-parallax').forEach(function (wrap) {
  var y = wrap.getAttribute('data-y') || -100;
  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5
    }
  });
});

var gsapFadeIn = function gsapFadeIn(target, y, o, time) {
  gsap.set(target, {
    y: y,
    opacity: o
  });

  for (var i = 0; i < target.length; i++) {
    gsap.to(target[i], {
      y: 0,
      opacity: 1,
      duration: time,
      scrollTrigger: {
        trigger: target[i],
        start: 'top 70%'
      }
    });
  }
};

var gsapFadeInTarget = document.querySelectorAll('.js-fadeIn .line_inner');
var gsapFadeInOpacity = document.querySelectorAll('.js-fadeIn-opacity');
gsapFadeIn(gsapFadeInTarget, 40, 1, 1.5);
gsapFadeIn(gsapFadeInOpacity, 60, 0, 2);
var footer = document.querySelector('footer');
var footerCircle = document.getElementById('js-footer-circle');
gsap.to(footerCircle, {
  scaleY: 0,
  ease: 'Power1.easeOut',
  scrollTrigger: {
    trigger: '.pg-index-horizontal',
    start: 'top top',
    end: function end() {
      return innerHeight + ' top';
    },
    scrub: true
  }
});
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