// Add target and rel to external links
const elements = document.getElementsByTagName('a');
for(let element of elements) {
    let href = element.href;
    if(href.match(/^https:\/\//) || href.match(/\.pdf/)) {
        element.setAttribute('target', '_blank');
        element.setAttribute('rel', 'noopener');
    }
}

// Open global menu 
const menuBtn = document.getElementById('js-menu-toggle');
const gnav = document.getElementById('js-global-menu');
const body = document.querySelector('body');
let scrollValue;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    gnav.classList.toggle('open');
    body.classList.toggle('open');
    if(body.classList.contains('open')) {
        scrollValue = window.pageYOffset;
        body.style.top = -scrollValue + 'px';
    }else {
        body.style.removeProperty('top');
        window.scrollTo(0, scrollValue);
    }
});