const inputElement = document.querySelector('#name-input');
const outInputElement = document.querySelector('#name-output');
const spanElement = document.querySelector('#name-output');

// console.log(inputElement);
// console.log(outInputElement);

inputElement.addEventListener('input', addInputElementText);
function addInputElementText(e) {
    e.currentTarget.value.trim() !== '' ? outInputElement.textContent = e.currentTarget.value : outInputElement.textContent = 'Anonymous';
};
