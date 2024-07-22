const iconBar = document.getElementById('icon-bar');

let timer;
let currSeconds = 0;
//posprzątać
const hideIfIdle = new(function() {
    this.nav = function(x) {
        iconBar.style.display = x;
    };
    this.resetTimer = function() {
        this.nav('flex');
        clearInterval(timer);
        currSeconds = 0;
        timer = setInterval(hideIfIdle.startTimer, 1000);
    };
    this.startTimer = function() {
        currSeconds += 1;
        if (currSeconds === 5) {
            hideIfIdle.nav('none');
        }
    };
})();

const hideIfidleEvListener = () => {
    hideIfIdle.resetTimer();
};

window.addEventListener('DOMContentLoaded', hideIfidleEvListener);
window.addEventListener('click', hideIfidleEvListener);
window.addEventListener('mousemove', hideIfidleEvListener);
window.addEventListener('mousedown', hideIfidleEvListener);