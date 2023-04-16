const inputElement = document.querySelector('input');
const inputTextElementLength = inputElement.getAttribute('data-length');

inputElement.addEventListener('click', () => {
    inputElement.focus();
});

inputElement.addEventListener('focus', () => {
    
});

inputElement.addEventListener('blur', () => {
    if (inputElement.value.length === Number(inputTextElementLength)) {
        
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');
    } else {
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }
});