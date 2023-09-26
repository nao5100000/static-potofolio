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
        if (.5 >= particleW.style.opacity) {
            particleW.style.opacity = .5;
        }
        if (1.5 + num02 >= 2) {
            particleW.style.transform = 'scale3d(2, 2, 1)';
        }

        horizontal[0].style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -${num03}, 0, 0, 1)`;
        horizontal[1].style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${num03}, 0, 0, 1)`;
    })
}
topParticle();

const ham = document.getElementById('js-ham');
window.addEventListener('scroll',()=>{
    y = window.scrollY;
    if(500 <= y){
        ham.classList.add('is_active');
    }else{
        ham.classList.remove('is_active');
    }
})

const mouseHover = () => {
    const pointerArea = document.querySelectorAll('.js-hover');
    const pointerElem = document.getElementById('js-pointer');
    const pointerHov = document.querySelectorAll('.js-hov-res');
    if (pointerArea.length === 0) {
        return;
    }
    for (let i = 0; i < pointerArea.length; i++) {
        pointerArea[i].addEventListener('mouseenter', () => {
            pointerElem.classList.add('is_active');
            pointerHov[i].classList.add('is_active');
        })
        pointerArea[i].addEventListener('mouseleave', () => {
            pointerElem.classList.remove('is_active');
            pointerHov[i].classList.remove('is_active');
        })
        pointerArea[i].addEventListener('mousemove', (e) => {
            pointerElem.style.top = `${e.clientY}px`;
            pointerElem.style.left = `${e.clientX}px`;
            pointerHov[i].style.top = `${e.clientY}px`;
            pointerHov[i].style.left = `${e.clientX}px`;
        })
    }
}
mouseHover();


// mouse 
let toX, toY, elemData;
const buttonSticerAddEvent =(trigger,target,num)=>{
    trigger.addEventListener("mouseenter", e => {
        elemData = target.getBoundingClientRect();
    })
    trigger.addEventListener('mousemove', e => {
        toX = ((e.clientX - (elemData.width / 2)) - elemData.left) * num;
        toY = ((e.clientY - (elemData.height / 2)) - elemData.top) * num;

        target.style.transform = `translate(${toX}px, ${toY}px)`;
    })

    trigger.addEventListener('mouseleave', () => {
        target.style.transform = `translate(0px,0px)`;
    })
}
const buttonHovSticker = () => {
    const hovLink = document.querySelectorAll('.js-stick-link');
    Array.from(hovLink).map((item) => {
        buttonSticerAddEvent(item,item,.5);
    })
}
buttonHovSticker();


const frontParticles = document.querySelectorAll('.particle-front');
const backParticles = document.querySelectorAll('.particle-back');
const topParticleSticker =()=>{
    buttonSticerAddEvent(particleW,particles);
    Array.from(frontParticles).map((frontParticle) => {
        buttonSticerAddEvent(particleW,frontParticle,.04);
    })
    Array.from(backParticles).map((backParticle) => {
        buttonSticerAddEvent(particleW,backParticle,.03);
    })
}
topParticleSticker();


const bodyHeight = document.body.clientHeight;
const windowHeight = window.innerHeight;
const bottomPoint = bodyHeight - windowHeight;
document.addEventListener('scroll', () => {
    let currentPos = window.scrollY;
    if(bottomPoint <= currentPos){
        console.log('true')
    }else{
        console.log('false')
    }
})

