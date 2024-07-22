function noBreak() {
    let x = document.querySelector('div.facetwp-type-checkboxes');
    const y = x.childNodes;
    y.forEach(function(el) {
        if (el.tagName == 'H4') {
            let z = el.nextSibling;
            let newItem = document.createElement('div');
            x.insertBefore(newItem, el);
            newItem.classList.add('no-break-div');
            newItem.appendChild(el);
            newItem.appendChild(z);
            let newItemNextSibling = newItem.nextSibling;
            if (newItemNextSibling !== null) {
                if (newItemNextSibling.classList.contains('facetwp-depth')) {
                    newItem.appendChild(newItemNextSibling);
                }
            }
        }
    });
}

// document.querySelectorAll('#list-from-txt h3').forEach((el) => {
//     var newItem = document.createel("div")
//     newItem.classList.add("no-break-div")
//     var elSibling = el.parentElement.nextElementSibling
//     document.getElementById('list-from-txt').insertBefore(newItem,el)
//         newItem.appendChild(el)
//         newItem.appendChild(elSibling)
//   })

function noBreak() {
    let x = document.getElementById('list-from-txt');
    const y = x.childNodes;
    y.forEach(function(el) {
        if (el.childNodes[0].tagName === 'H3') {
            let z = el.nextSibling;
            let newItem = document.createElement('div');
            x.insertBefore(newItem, el);
            newItem.classList.add('no-break-div');
            newItem.appendChild(el);
            newItem.appendChild(z);
        }
    });
}

//   ------------------------

function noBreak() {
    let x = document.getElementById('list-from-txt');
    const y = x.querySelectorAll('h3');
    y.forEach((el) => {
        if (el.parentNode.style.display !== 'none') {
            //console.log(el);
            let z = el.nextSibling;
            let newItem = document.createElement('div');
            x.insertBefore(newItem, el);
            newItem.classList.add('no-break-div');
            newItem.appendChild(el);
            newItem.appendChild(z);
        }
    });
}

noBreak();

// ---------------------

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