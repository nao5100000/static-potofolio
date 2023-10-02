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

const nav = document.getElementById('js-nav');

const hamBg = document.getElementById('js-ham-bg');
const ham = document.getElementById('js-ham');
const topButton = document.getElementById('js-top-button');
ham.addEventListener('click', () => {
    hamBg.classList.contains('is_active') ? hamBg.classList.remove('is_active') : hamBg.classList.add('is_active')
    nav.classList.contains('is_active') ? nav.classList.remove('is_active') : nav.classList.add('is_active')
    ham.classList.contains('is_open') ? ham.classList.remove('is_open') : ham.classList.add('is_open')
})

window.addEventListener('scroll', () => {
    y = window.scrollY;
    if (500 <= y) {
        ham.classList.add('is_active');
        nav.classList.add('is_hidden');
        if (!(ham.classList.contains('is_open'))) nav.classList.remove('is_active');
    } else {
        ham.classList.remove('is_active')
        ham.classList.remove('is_open');
        nav.classList.remove('is_hidden');
        if (hamBg.classList.contains('is_active')) hamBg.classList.remove('is_active');
    }
    if (y <= 90) topButton.style.transform = `translate(0,${90 - y}px)`

})

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



let y, num, num02, num03;
const particleW = document.getElementById('js-particle-wrapper');
const particles = document.querySelectorAll('.particle');

const horizontal = document.querySelectorAll('.js-hor');

const topParticle = () => {
    window.addEventListener('scroll', () => {
        y = window.scrollY;
        num = y / 500;
        num02 = y / 1000
        num03 = y / 10
        particleW.style.cssText = `
            opacity: ${1 - num};
            transform: scale3d( ${1.5 + num02}, ${1.5 + num02}, 1);
        `
        if (.5 >= particleW.style.opacity) particleW.style.opacity = .5;
        if (1.5 + num02 >= 2) particleW.style.transform = 'scale3d(2, 2, 1)';

        horizontal[0].style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -${num03}, 0, 0, 1)`;
        horizontal[1].style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${num03}, 0, 0, 1)`;
    })
}
topParticle();



const mouseHover = () => {
    const pointerArea = document.querySelectorAll('.js-hover');
    const pointerElem = document.getElementById('js-pointer');
    document.addEventListener('mousemove', (e) => {
        pointerElem.style.top = `${e.clientY - 45}px`;
        pointerElem.style.left = `${e.clientX - 35}px`;
    })
    if (pointerArea.length === 0) return;
    for (let i = 0; i < pointerArea.length; i++) {
        pointerArea[i].addEventListener('mouseover', () => {
            pointerElem.classList.add('is_active');
        })
        pointerArea[i].addEventListener('mouseout', () => {
            pointerElem.classList.remove('is_active');
        })
    }
}
mouseHover();


// mouse 
let toX, toY, elemData;
var elemDataArray = [];
const buttonSticerAddEvent = (trigger, target, num) => {
    trigger.addEventListener("mouseenter", e => {
        if (target.length >= 2) {
            Array.from(target).map((t) => {
                elemDataArray.push(t.getBoundingClientRect());
            })
        } else {
            elemData = target.getBoundingClientRect();
        }
    })
    trigger.addEventListener('mousemove', e => {
        if (target.length >= 2) {
            Array.from(target).map((t, i) => {
                toX = ((e.clientX - (elemDataArray[i].width / 2)) - elemDataArray[i].left) * num;
                toY = ((e.clientY - (elemDataArray[i].height / 2)) - elemDataArray[i].top) * num;
                t.style.transform = `translate(${toX}px, ${toY}px)`;
            })
        } else {
            toX = ((e.clientX - (elemData.width / 2)) - elemData.left) * num;
            toY = ((e.clientY - (elemData.height / 2)) - elemData.top) * num;
            target.style.transform = `translate(${toX}px, ${toY}px)`;
        }
    })

    trigger.addEventListener('mouseleave', () => {
        if (target.length >= 2) {
            Array.from(target).map((t) => {
                t.style.transform = `translate(0px,0px)`;
            })
        } else {
            target.style.transform = `translate(0px,0px)`;
        }
    })
}
const buttonHovSticker = () => {
    const hovLink = document.querySelectorAll('.js-stick-link');
    Array.from(hovLink).map((item) => {
        buttonSticerAddEvent(item, item, .5);
    })
}
buttonHovSticker();


const frontParticles = document.querySelectorAll('.particle-front');
const backParticles = document.querySelectorAll('.particle-back');
const topParticleSticker = () => {
    buttonSticerAddEvent(particleW, particles);
    Array.from(frontParticles).map((frontParticle) => {
        buttonSticerAddEvent(particleW, frontParticle, .04);
    })
    Array.from(backParticles).map((backParticle) => {
        buttonSticerAddEvent(particleW, backParticle, .03);
    })
};
topParticleSticker();

gsap.utils.toArray('.js-parallax').forEach(wrap => {
    const y = wrap.getAttribute('data-y') || -100;
    gsap.to(wrap, {
        y: y,
        scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
        }
    })
});


const gsapFadeIn = (target, y, o, time) => {
    gsap.set(target, { y: y, opacity: o });
    for (let i = 0; i < target.length; i++) {
        gsap.to(target[i], {
            y: 0,
            opacity: 1,
            duration: time,
            scrollTrigger: {
                trigger: target[i],
                start: 'top 70%',
            }
        })
    }
}
const gsapFadeInTarget = document.querySelectorAll('.js-fadeIn .line_inner');
const gsapFadeInOpacity = document.querySelectorAll('.js-fadeIn-opacity');
gsapFadeIn(gsapFadeInTarget, 40, 1, 1.5);
gsapFadeIn(gsapFadeInOpacity, 60, 0, 2);



const bodyHeight = document.body.clientHeight;
const windowHeight = window.innerHeight;
const bottomPoint = bodyHeight - windowHeight;
document.addEventListener('scroll', () => {
    let currentPos = window.scrollY;
    if (bottomPoint <= currentPos) {
        console.log('true')
    } else {
        console.log('false')
    }
})



