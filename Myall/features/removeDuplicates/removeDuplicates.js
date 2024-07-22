const removeDuplicatesBtn = document.getElementById('remove-duplicates-btn');
const removeDuplicatesMsg = document.getElementById(
    'remove-duplicates-message'
);
const removeDuplicatesCnt = document.getElementById(
    'remove-duplicates-message-container'
);
const removeDuplicatesMsgClose = document.getElementById(
    'remove-duplicates-message-closebtn'
);

removeDuplicates = () => {
    const yourArray = textarea.value.split('\n');
    const yourArrayWithoutDuplicates = [...new Set(yourArray)];
    let duplicates = [...yourArray];
    yourArrayWithoutDuplicates.forEach((item) => {
        const i = duplicates.indexOf(item);
        duplicates = duplicates
            .slice(0, i)
            .concat(duplicates.slice(i + 1, duplicates.length));
    });

    if (duplicates.length !== 0) {
        removeDuplicatesMsg.innerHTML = `All of these duplicates have been removed:
        <ul>
        <li>${duplicates.join('</li><li>')}</li></ul>`;
        removeDuplicatesCnt.style.display = 'block';
    } else {
        if (textarea.value === '') {
            removeDuplicatesMsg.innerHTML = 'Text area is empty.';
            removeDuplicatesCnt.style.display = 'block';
        } else {
            removeDuplicatesMsg.innerHTML = 'There is no duplicates in this list.';
            removeDuplicatesCnt.style.display = 'block';
        }
    }

    list.querySelectorAll('li').forEach((el) => {
        if (duplicates.includes(el.innerHTML)) {
            el.remove();
        }
    });

    textarea.value = yourArrayWithoutDuplicates.join('\n');
};

removeDuplicatesMsgCloseFn = () => {
    removeDuplicatesCnt.style.display = 'none';
};

removeDuplicatesBtn.addEventListener('click', removeDuplicates);
removeDuplicatesMsgClose.addEventListener('click', removeDuplicatesMsgCloseFn);