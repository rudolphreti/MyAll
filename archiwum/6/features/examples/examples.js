viewExample = (x) => {
    fetch(x).then(function(response) {
        response.text().then(function(text) {
            storedText = text;
            done();
        });
    });

    function done() {
        textarea.value = storedText;
    }
    setTimeout(() => {
        displayList();
    }, 500);
};

function hash() {
    var hash = location.hash;

    switch (hash) {
        case '#listformyson':
            viewExample('lists/lista.txt');
            break;
        default:
            break;
    }
}

hash();

var storedText;