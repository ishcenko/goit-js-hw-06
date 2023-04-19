const inputElementForm = document.querySelector('input');
const inputTextElementLength = inputElementForm.getAttribute('data-length');


inputElementForm.addEventListener('blur', () => {
    if (inputElementForm.value.length === Number(inputTextElementLength)) {
        
        inputElementForm.classList.add('valid');
        inputElementForm.classList.remove('invalid');
    } else {
        inputElementForm.classList.add('invalid');
        inputElementForm.classList.remove('valid');
    }
});