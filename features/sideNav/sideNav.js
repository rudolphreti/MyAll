const mySideNav = document.getElementById('mySidenav');
const sideNavOpenBtn = document.getElementById('sidenav-openbtn');
const sideNavCloseBtn = document.getElementById('sidenav-closebtn');
const windowMatchMediaMobile = window.matchMedia('(max-width: 700px)');
const listener = SwipeListener(mySideNav);

const sideNav = {
    openOrClose(a, b) {
        mySideNav.style.width = a;
        sideNavOpenBtn.style.display = b;
    },
    open() {
        this.navMaxWidthMobile(windowMatchMediaMobile);
        windowMatchMediaMobile.addListener(this.navMaxWidthMobile);
    },
    close() {
        this.openOrClose('0', 'block');
        windowMatchMediaMobile.removeListener(this.navMaxWidthMobile);
    },
    isClosed() {
        return mySideNav.style.width === '0px';
    },
    navMaxWidthMobile(x) {
        if (x.matches) {
            sideNav.openOrClose('100%', 'none');
        } else {
            sideNav.openOrClose('520px', 'none');
        }
    },
};

sideNavOpenBtn.addEventListener('click', () => {
    sideNav.open();
});
sideNavCloseBtn.addEventListener('click', () => {
    sideNav.close();
});

window.addEventListener('DOMContentLoaded', () => {
    alphabetNav.nextElementSibling.style.display = 'none';
});

mySideNav.addEventListener('swipe', function(e) {
    const condition = document.activeElement.type;
    if (condition !== 'textarea' && condition !== 'text') {
        const directions = e.detail.directions;
        if (directions.left) {
            sideNav.close();
        }
    }
});