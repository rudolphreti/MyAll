const fullscreenIcon = document.getElementById('fullscreen-icon');
const fullscreen = {
    open() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    },
    close() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    },
    toggle() {
        window.innerHeight !== screen.height ? this.open() : this.close();
    },
    imgToggle() {
        window.innerHeight !== screen.height ?
            (fullscreenIcon.src = 'myall_icons/expand.png') :
            (fullscreenIcon.src = 'myall_icons/exit.png');
    },
};
window.addEventListener('resize', function() {
    fullscreen.imgToggle();
});
fullscreenIcon.addEventListener('click', function() {
    fullscreen.toggle();
});