const alphabet = '0123456789aäąbcćdeęfghijklłmnńoóöprsßśtuüvwyzźż';
const displayedAlphabet = alphabet.match(/\D/g);
console.log(displayedAlphabet);
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
        var arrayFromTxt = textarea.value.split('\n');
        console.log(arrayFromTxt);
        arrayFromTxt.forEach((el) => {
            document.getElementById('list-from-txt').innerHTML += `<li>${el}</li>`;
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

        // Find the first position were the strings do not match
        let position = 0;

        while (a[position] === b[position]) {
            // If both are the same don't swap
            if (!a[position] && !b[position]) return 0;

            // Otherwise the shorter one goes first
            if (!a[position]) return 1;
            if (!b[position]) return -1;

            position++;
        }

        // Then sort by the characters position
        return alphabet.indexOf(a[position]) - alphabet.indexOf(b[position]);
    }

    function finallListSort() {
        let list = document.querySelectorAll('ul li');
        list = Array.prototype.slice.call(list);
        list.sort(letterSort);

        for (var i = 0; i < list.length; i++) {
            list[i].parentNode.appendChild(list[i]);
        }
    }

    finallListSort();

    //removing empty letter-headings
    let list = document.querySelectorAll('.terms li');

    var h3IndexArray = [];

    list.forEach(function(element, index, array) {
        if (element.querySelector('h3')) {
            h3IndexArray.push(index);
        }
    });

    //odnalezienie indeksów pustych liter-nagłówków;
    var indexDifference = 0;
    var newH3IndexArray = [];
    for (var i = 0; i < h3IndexArray.length; i++) {
        var indexDifference = h3IndexArray[i + 1] - h3IndexArray[i];
        if (indexDifference == 1) {
            newH3IndexArray.push(h3IndexArray[i]);
        }
    }

    //usuwanie pustych liter-nagłówków;
    list.forEach(function(element, index, array) {
        if (newH3IndexArray.includes(index)) {
            element.style.display = 'none';
        }
    });

    noBreak();
};

noBreak = () => {
    var list = document.getElementById('list-from-txt');
    list.childNodes.forEach((el, i) => {
        if (el.tagName === 'LI')
            if (el.style.display !== 'none') {
                if (el.querySelector('h3') !== null) {
                    //console.log(el,i)

                    var z = el.nextSibling;
                    var newItem = document.createElement('div');
                    list.insertBefore(newItem, list.childNodes[i]);
                    newItem.classList.add('no-break-div');
                    newItem.appendChild(el);
                    newItem.appendChild(z);
                }
            }
    });
};