const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueButton = document.querySelector('#value');

incrementButton.addEventListener('click', addValueButton);
decrementButton.addEventListener('click', removeValueButton);

let counterNumber = 0;

function addValueButton(){
    counterNumber += 1;
    valueButton.textContent = counterNumber;
    console.log(`Збільшити значення ${counterNumber}`);
};

function removeValueButton() {
    counterNumber -= 1;
    valueButton.textContent = counterNumber;
    console.log(`Зменшити значення ${counterNumber}`);
};