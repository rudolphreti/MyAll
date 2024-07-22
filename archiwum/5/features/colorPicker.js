const lettersPicker = new JSColor('#highlight-color');

lettersPicker.option({
    value: '#00b33c',
});

const digraphsPicker = new JSColor('#digraphs-highlight-color');

digraphsPicker.option({
    value: '#004080',
});

const pickerHide = () => {
    lettersPicker.hide();
    digraphsPicker.hide();
};

mainDiv.addEventListener('click', pickerHide);
mainDiv.addEventListener('mousemove', pickerHide);
mainDiv.addEventListener('touchstart', pickerHide);