const inputElement = document.querySelector('#font-size-control');
const spanElementText = document.querySelector('#text');


spanElementText.style.fontSize = inputElement.value + 'px';
console.log(inputElement.value);

inputElement.addEventListener('input', incrementFontSize)

function incrementFontSize(e) {
    spanElementText.style.fontSize = `${e.currentTarget.value}px`;
};