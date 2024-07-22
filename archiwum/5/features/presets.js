function presets(x) {
    values = (a, b, c, d, e, f) => {
        speakCheckbox.checked = a;
        speakWordsCheckbox.checked = b;
        autoplayDelay.value = c;
        autoplayDelayImg.value = d;
        if (speakCheckbox.checked === true) {
            typingSpeedSpLetters.value = e;
        } else {
            typingSpeedEl.value = e;
        }
        playAudioDuringAutoplay.checked = f;
    };
    //teraz trzeba zabezpieczyć się przed sytuacją gdy zostanie wpisane e < 500 if speakCheckbox.checked === true
    // o co chodzi w tym komentarzu?
    if (x.value === 'simple') {
        values(false, false, 4000, 8000, 1000, false);
    }
    if (x.value === 'simple-quick') {
        values(false, false, 2000, 2000, 50, false);
    }
    if (x.value === 'full') {
        values(true, true, 4000, 8000, 600, true);
    }
    if (x.value === 'full-quick') {
        values(true, true, 2000, 2000, 500, true);
    }
    if (x.value === 'with speaking letters and words') {
        values(true, true, 4000, 8000, 600, false);
    }
    if (x.value === 'with speaking letters') {
        values(true, false, 4000, 8000, 600, false);
    }
    if (x.value === 'with speaking words') {
        values(false, true, 4000, 8000, 600, false);
    }

    document.querySelectorAll('input[type="number"]').forEach((el) => {
        sideNav.inputsCorelation(el.nextElementSibling, el.value);
    });
}