function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElement = document.querySelector('button');
const bodyElement = document.body;
const spanElement = document.querySelector('span');


buttonElement.addEventListener('click', () => {
  bodyElement.style.backgroundColor = getRandomHexColor();
  spanElement.textContent = bodyElement.style.backgroundColor;
});