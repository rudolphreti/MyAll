const alphabetInput = document.getElementById('alphabet-input');
const alphabetInputDefValue = '0123456789aäąbcćdeęfghijklłmnńoóöprsßśtuüvwyzźż';
const excludeInput = document.getElementById('exclude-input');
const excludeInputDefValue = '-0123456789ąęńß';
const list = document.getElementById('list-from-txt');
const alphabetNav = document.getElementById('alphabet');
const bgLogoContainer = document.getElementById('background-logo-container');
const txtEditBtn = document.getElementById('txt-edit-button');
const input = document.getElementById('browse');
const textarea = document.getElementById('txt-edit-area');
const lineSpacingInput = document.getElementById('line-spacing-input');
const fontSizeInput = document.getElementById('font-size-input');

const defaultLineSpacing = 15;
const defaultFontSize = 16;
let alphabet = alphabetInput.value;

const setLineSpacing = (spacing) => {
    const parsedSpacing = Number(spacing);
    const safeSpacing = Number.isNaN(parsedSpacing)
        ? defaultLineSpacing
        : Math.max(0, parsedSpacing);
    document.documentElement.style.setProperty('--terms-gap', `${safeSpacing}px`);
};

const setFontSize = (fontSize) => {
    const parsedFontSize = Number(fontSize);
    const safeFontSize = Number.isNaN(parsedFontSize)
        ? defaultFontSize
        : Math.max(1, parsedFontSize);
    document.documentElement.style.setProperty('--terms-font-size', `${safeFontSize}px`);
};

listReader = () => {
    const files = input.files;
    if (files.length == 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
        displayList();
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
};

displayList = () => {
    list.innerHTML = '';
    alphabetNav.innerHTML = '';
    bgLogoContainer.style.display = 'none';

    alphabet = alphabetInput.value;
    const regex = new RegExp(`[^${excludeInput.value}]`, 'g');
    const displayedAlphabet = alphabet.match(regex);
    const arrayFromTxt = textarea.value.split('\n');
    arrayFromTxt.forEach((el) => {
        list.innerHTML += `<li>${el}</li>`;
    });
    displayedAlphabet.forEach((el, i) => {
        list.innerHTML += `<li><h3 id="term${i}">${el.toUpperCase()}</h3></li>`;
    });
    sorting();
    alphabetNav.nextElementSibling.style.display = 'block';
    displayedAlphabet.forEach((el, i) => {
        alphabetNav.innerHTML += `<li> <a href="#term${i}">${el.toUpperCase()}</a></li>`;
    });
    list.style.display = 'block';
    alphabetNav.style.display = 'block';
};

removeUnneededH3 = () => {
    h3toRemove = [];
    list.querySelectorAll('li').forEach((el) => {
        if (
            el.querySelector('h3') !== null &&
            el.nextElementSibling !== null &&
            el.nextElementSibling.querySelector('h3') !== null
        ) {
            h3toRemove.push(el);
            el.style.display = 'none';
        }
        if (el.querySelector('h3') !== null && el.nextElementSibling === null) {
            h3toRemove.push(el);
            el.style.display = 'none';
        }
    });
};

noBreak = () => {
    list.childNodes.forEach((el, i) => {
        if (el.tagName === 'LI')
            if (el.style.display !== 'none') {
                if (el.querySelector('h3') !== null) {
                    const z = el.nextSibling;
                    const newItem = document.createElement('div');
                    list.insertBefore(newItem, list.childNodes[i]);
                    newItem.classList.add('no-break-div');
                    newItem.appendChild(el);
                    newItem.appendChild(z);
                }
            }
    });
};

sorting = () => {
    function letterSort(a, b) {
        b = b.innerText.trim().toLowerCase();
        a = a.innerText.trim().toLowerCase();
        let position = 0;
        while (a[position] === b[position]) {
            if (!a[position] && !b[position]) return 0;
            if (!a[position]) return 1;
            if (!b[position]) return -1;
            position++;
        }
        return alphabet.indexOf(a[position]) - alphabet.indexOf(b[position]);
    }

    function finallListSort() {
        let listForFinalSorting = document.querySelectorAll('ul li');
        listForFinalSorting = Array.prototype.slice.call(listForFinalSorting);
        listForFinalSorting.sort(letterSort);
        for (let i = 0; i < listForFinalSorting.length; i++) {
            listForFinalSorting[i].parentNode.appendChild(listForFinalSorting[i]);
        }
    }

    finallListSort();

    removeUnneededH3();

    noBreak();
};

alphabetInputDefValueFn = () => {
    alphabetInput.value = alphabetInputDefValue;
};

excludeInputDefValueFn = () => {
    excludeInput.value = excludeInputDefValue;
};

txtEditBtn.addEventListener('click', () => {
    if (textarea.value !== '') {
        displayList();
    }
});

lineSpacingInput.addEventListener('input', () => setLineSpacing(lineSpacingInput.value));
fontSizeInput.addEventListener('input', () => setFontSize(fontSizeInput.value));

setLineSpacing(lineSpacingInput.value);
setFontSize(fontSizeInput.value);

input.addEventListener('change', listReader);
