const secNavAbout = document.getElementById('about');
const secNavMain = document.getElementById('second-nav-main');
const secNavContact = document.getElementById('contact');
const secNavAboutBtn = document.getElementById('about-btn');
const secNavMainBtn = document.getElementById('second-nav-main-btn');
const secNavContactBtn = document.getElementById('contact-btn');
const gdpr = document.getElementById('gdpr');
const gdprBtn = document.getElementById('gdpr-btn');

secondNav = (a, b, c, d, e, f, g, h, i, j, k, l, m) => {
    //wykorzytać tutaj this
    secNavAbout.style.display = a;
    secNavAboutBtn.style.backgroundColor = b;
    secNavAboutBtn.style.color = c;

    secNavMain.style.display = d;
    secNavMainBtn.style.backgroundColor = e;
    secNavMainBtn.style.color = f;

    secNavContact.style.display = g;
    secNavContactBtn.style.backgroundColor = h;
    secNavContactBtn.style.color = i;

    gdpr.style.display = j;
    gdprBtn.style.backgroundColor = k;
    gdprBtn.style.color = l;

    if (alphabetNav.innerHTML !== '') {
        alphabetNav.parentNode.style.display = m;
    }
};

secNavAboutBtn.addEventListener('click', () => {
    secondNav(
        'flex',
        'white',
        '#003900ff',
        'none',
        'transparent',
        'white',
        'none',
        'transparent',
        'white',
        'none',
        'transparent',
        'white',
        'none'
    );
});
secNavMainBtn.addEventListener('click', () => {
    secondNav(
        'none',
        'transparent',
        'white',
        'flex',
        'white',
        '#003900ff',
        'none',
        'transparent',
        'white',
        'none',
        'transparent',
        'white',
        'block'
    );
});
secNavContactBtn.addEventListener('click', () => {
    secondNav(
        'none',
        'transparent',
        'white',
        'none',
        'transparent',
        'white',
        'flex',
        'white',
        '#003900ff',
        'none',
        'transparent',
        'white',
        'none'
    );
});
gdprBtn.addEventListener('click', () => {
    secondNav(
        'none',
        'transparent',
        'white',
        'none',
        'transparent',
        'white',
        'none',
        'transparent',
        'white',
        'flex',
        'white',
        '#003900ff',
        'none'
    );
});

secondNav(
    'none',
    'transparent',
    'white',
    'flex',
    'white',
    '#003900ff',
    'none',
    'transparent',
    'white',
    'none',
    'transparent',
    'white',
    'none'
);