const googleFont = document.getElementById('google-font-family');
loadGoogleFont = (x) => {
    const googleFontLoadingStatus = document.getElementById(
        'google-font-loading-status'
    );
    WebFont.load({
        google: {
            families: [x],
        },
        active: () => {
            googleFontLoadingStatus.innerText = `${x} is successful loaded!`;
        },
        loading: () => {
            x === '' ?
                (googleFontLoadingStatus.innerText = '') :
                (googleFontLoadingStatus.innerText = `There is no '${x}' in database.`);
        },
    });
};
window.addEventListener('DOMContentLoaded', () => {
    loadGoogleFont(googleFont.value);
});