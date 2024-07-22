const mySideNav = document.getElementById('mySidenav');
const sideNavOpenBtn = document.getElementById('sidenav-openbtn');
const sideNavCloseBtn = document.getElementById('sidenav-closebtn');
const windowMatchMediaMobile = window.matchMedia('(max-width: 700px)');

const sideNav = {
    openOrClose(a, b) {
        mySideNav.style.width = a;
        sideNavOpenBtn.style.display = b;
    },
    open() {
        navMaxWidthMobile(windowMatchMediaMobile); // Call listener function at run time
        windowMatchMediaMobile.addListener(navMaxWidthMobile); // Attach listener function on state changes
    },
    close() {
        this.openOrClose('0', 'block');
        windowMatchMediaMobile.removeListener(navMaxWidthMobile);
    },
    isClosed() {
        return mySideNav.style.width === '0px';
    },
    closeIfOpen() {
        if (!this.isClosed()) {
            this.close();
        }
    },
    toggle() {
        this.isClosed() ? this.open() : this.close();
        hideIfIdle.resetTimer(
            'none',
            'none',
            'grab',
            'grab',
            'none',
            'none',
            hideIfIdle.nav
        );
    },
    inputsCorelation(a, b) {
        a.value = b; //tu chyba powinno być b.value
    },
    preventEmptyInputValue(x, y) {
        //koniecxnie zrobić porządną walidację
        if (x.value === '') {
            x.value = y.min;
            x.nextElementSibling.value = y;
        }
    },
};

sideNavOpenBtn.addEventListener('click', () => {
    //tutaj lepiej zrobić jakiś toggle
    sideNav.open();
});
sideNavCloseBtn.addEventListener('click', () => {
    //tutaj lepiej zrobić jakiś toggle
    sideNav.close();
});

window.addEventListener('DOMContentLoaded', () => {
    alphabetNav.nextElementSibling.style.display = 'none';
});

/*dlaczego nie może być tak: 
sideNavOpenBtn.addEventListener('click', sideNav.open);
*/

//Event listenery dodać tutaj i wywalić z HTML

function navMaxWidthMobile(x) {
    if (x.matches) {
        // If media query matches
        sideNav.openOrClose('100%', 'none');
    } else {
        sideNav.openOrClose('520px', 'none');
    }
}