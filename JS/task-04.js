/*<div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div>*/

// const CounterNumber = function ({rootSelector, initilValue = 0, step = 1 }) {
//     this._rootSelector = rootSelector
//     this._value = initilValue;
//     this._step = step;

//     this.refs = this._getRefs(rootSelector);
//     this.bindEvents();
// };

// CounterNumber.prototype._getRefs = function (rootSelector) {
//     // console.log(rootSelector);

//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     // console.log(refs.container);

//     refs.decrementButton = refs.container.querySelector('[data-action]');
//     // console.log(refs.decrementButton);

//     refs.incrementButton = refs.container.querySelector('[data-action]');
//     // console.log(refs.incrementButton);

//     refs.value = refs.container.querySelector('#value');
//     // console.log(refs.value);

//     return refs;
// }

// CounterNumber.prototype.bindEvents = function () {
//     this.refs.incrementButton.addEventListener('click', () => {
//         this.increment();
//         this.updateNumber();
//     });

//     this.refs.decrementButton.addEventListener('click', () => {
//         this.decrement();
//     })
// };
// CounterNumber.prototype.updateNumber = function () {
//     this._refs.value.textContent = this._value;
// }
// CounterNumber.prototype.increment = function () {
//     this._value += this.step;
// };

// CounterNumber.prototype.increment = function () {
//     this._value -= this.step;
// };
//  new CounterNumber({rootSelector: '#counter', step: 1 });




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