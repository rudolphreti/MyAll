//https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {
        type: contentType,
    });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
};

document.getElementById('save-list').addEventListener('click', () => {
    const txtToSave = document.getElementById('txt-edit-area').value;

    downloadToFile(
        txtToSave,
        `a list created by Myall (myall.freuciv.com).txt`,
        'txt/plain'
    );
});