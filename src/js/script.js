// Add target and rel to external links
const domain = document.domain;
const regexp = new RegExp(domain);
const links = document.getElementsByTagName('a');
for(let link of links) {
    if(!regexp.test(link.href)) {
        if(link.href.match(/^https:\/\//) || link.href.match(/\.pdf/)) {
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