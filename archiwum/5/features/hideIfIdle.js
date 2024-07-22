const iconBar = document.getElementById('icon-bar');

let timer;
let currSeconds = 0;
//dlaczego taki dziwny zapis?
const hideIfIdle = new(function() {
    this.nav = function(a, b, d, e, f, g) {
        //poprawić
        iconBar.style.display = f;
    };
    this.resetTimer = function(a, b, d, e, f, g, navCallback) {
        navCallback(a, b, d, e, f, g);
        clearInterval(timer);
        currSeconds = 0;
        timer = setInterval(hideIfIdle.startTimer, 1000);
    };
    this.startTimer = function() {
        currSeconds += 1;
        if (currSeconds === 5) {
            hideIfIdle.nav('none', 'none', 'none', 'none', 'none', 'none');
        }
    };
    this.wholeNav = ['flex', 'flex', 'grab', 'grab', 'flex', 'flex', this.nav];
})();

const hideIfidleEvListener = () => {
    hideIfIdle.resetTimer.apply(this, hideIfIdle.wholeNav);
};

window.addEventListener('DOMContentLoaded', hideIfidleEvListener);
window.addEventListener('click', hideIfidleEvListener);
window.addEventListener('mousemove', hideIfidleEvListener);
window.addEventListener('mousedown', hideIfidleEvListener);