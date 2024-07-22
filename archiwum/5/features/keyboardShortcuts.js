let keyboardShortcuts = (e) => {
    const condition = document.activeElement.type;
    if (
        condition !== 'number' &&
        condition !== 'text' &&
        condition !== 'textarea'
    ) {
        switch (e.keyCode) {
            case 70:
                fullscreen.toggle();
                break;
            case 77:
                sideNav.toggle();
                break;
            case 79:
                input.click();
            case 78:
                hideIfIdle.resetTimer.apply(this, hideIfIdle.wholeNav);
                break;
        }
    }
};

window.addEventListener('keydown', keyboardShortcuts);
window.addEventListener('keyup', (e) => {
    if (e.keyCode === 32) {
        e.preventDefault();
    }
});