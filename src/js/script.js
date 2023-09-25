// Add target and rel to external links
const domain = document.domain;
const regexp = new RegExp(domain);
const links = document.getElementsByTagName('a');
for (let link of links) {
    if (!regexp.test(link.href)) {
        if (link.href.match(/^https:\/\//) || link.href.match(/\.pdf/)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener');
        }
    }
}

// Open global menu
const menuBtn = document.getElementById('js-menu-toggle');
const gnav = document.getElementById('js-global-menu');
const body = document.querySelector('body');
let scrollValue;


// Internal link
const menus = document.querySelectorAll('.global__menu > ul > li > a');
menus.forEach(menu => {
    menu.addEventListener('click', () => {
        if (body.classList.contains('open')) {
            body.classList.remove('open');
            gnav.classList.remove('open');
        }
    })
});

// Adjust link position
window.onload = () => {
    if (window.location.hash == "") {
        return;
    }
    document.getElementById(window.location.hash.slice(1)).scrollIntoView(true);
}

let y, num, num02;
const particleW = document.getElementById('js-particle-wrapper');
const particles = document.querySelectorAll('.particle');
const topParticle = () => {
    window.addEventListener('scroll', () => {
        y = window.scrollY;
        num = y / 500;
        num02 = y / 1000
        particleW.style.cssText = `
            opacity: ${1 - num};
            transform: scale3d( ${1.5 + num02}, ${1.5 + num02}, 1);
        `
        if(.5 >= particleW.style.opacity){
            particleW.style.opacity = .5;
        }
        if(1.5 + num02 >= 2){
            particleW.style.transform = scale3d( 2, 2, 1);
        }
    })
}
topParticle();