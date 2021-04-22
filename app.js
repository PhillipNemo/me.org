let ourButton = document.querySelector('button');
let writeUp = document.querySelector('.write-up');
let isWriteUpOpen = false;

ourButton.addEventListener('click', function () {
    if (isWriteUpOpen === true) {
        writeUp.style.height ="auto";
        isWriteUpOpen = false;
    } else {
        writeUp.style.height = '0'
        isWriteUpOpen = true;
    }
});