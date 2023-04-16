const inputElement = document.querySelector('#font-size-control');
const spanElementText = document.querySelector('#text');

inputElement.addEventListener('input', incrementFontSize);

function incrementFontSize() {
    const fontSizeControl = inputElement.value;


    spanElementText.style.fontSize = `${fontSizeControl}px`;
};