const sideNavSecCont = document.getElementById('sideNav-second-container');
const secNav = document.getElementById('second-nav');
const secNavAbout = document.getElementById('about');
const secNavMain = document.getElementById('second-nav-main');
const secNavContact = document.getElementById('contact');
const secNavAboutBtn = document.getElementById('about-btn');
const secNavMainBtn = document.getElementById('second-nav-main-btn');
const secNavContactBtn = document.getElementById('contact-btn');
const gdpr = document.getElementById('gdpr');
const gdprBtn = document.getElementById('gdpr-btn');

function secondNav(a, b) {
    Array.from(secNav.children).forEach((el) => {
        el.style.backgroundColor = 'transparent';
        el.style.color = 'white';
    });
    a.style.backgroundColor = 'white';
    a.style.color = '#003900ff';

    Array.from(sideNavSecCont.children).forEach((el) => {
        el.style.display = 'none';
    });
    b.style.display = 'flex';
}

secNavMainBtn.addEventListener('click', function() {
    secondNav(this, secNavMain);
});

secNavAboutBtn.addEventListener('click', function() {
    secondNav(this, secNavAbout);
});

secNavContactBtn.addEventListener('click', function() {
    secondNav(this, secNavContact);
});
gdprBtn.addEventListener('click', function() {
    secondNav(this, gdpr);
});

secondNav(secNavMainBtn, secNavMain);