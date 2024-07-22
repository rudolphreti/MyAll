const alphabet = '0123456789aäąbcćdeęfghijklłmnńoóöprsßśtuüvwyzźż';
const displayedAlphabet = alphabet.match(/\D/g);
const list = document.getElementById('list-from-txt');
let input = document.querySelector('input');
let textarea = document.querySelector('textarea');

input.addEventListener('change', () => {
    let files = input.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
        const arrayFromTxt = textarea.value.split('\n');
        arrayFromTxt.forEach((el) => {
            list.innerHTML += `<li>${el}</li>`;
        });
        displayedAlphabet.forEach((el, i) => {
            document.getElementById(
                'list-from-txt'
            ).innerHTML += `<li><h3 id="term${i}">${el.toUpperCase()}</h3></li>`;
        });
        sorting();
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});

displayedAlphabet.forEach((el, i) => {
    document.getElementById(
        'alphabet'
    ).innerHTML += `<li> <a href="#term${i}">${el.toUpperCase()}</a></li>`;
});

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

    let listForRemovingEmptyHeadings = document.querySelectorAll('.terms li');
    let h3IndexArray = [];

    listForRemovingEmptyHeadings.forEach(function(element, index) {
        if (element.querySelector('h3')) {
            h3IndexArray.push(index);
        }
    });

    //odnalezienie indeksów pustych liter-nagłówków;
    let indexDifference = 0;
    let newH3IndexArray = [];
    for (let i = 0; i < h3IndexArray.length; i++) {
        indexDifference = h3IndexArray[i + 1] - h3IndexArray[i];
        if (indexDifference == 1) {
            newH3IndexArray.push(h3IndexArray[i]);
        }
    }

    //usuwanie pustych liter-nagłówków;
    listForRemovingEmptyHeadings.forEach(function(element, index) {
        if (newH3IndexArray.includes(index)) {
            element.style.display = 'none';
        }
    });

    noBreak();
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