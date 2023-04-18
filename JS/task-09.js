function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElement = document.querySelector('button');
const bodyElement = document.body;
const spanElement = document.querySelector('span');


buttonElement.addEventListener('click', clickButtonColor);

function clickButtonColor() {
  const colorСhange = getRandomHexColor();
  buttonElement.textContent = colorСhange;
  bodyElement.style.backgroundColor = colorСhange;
};
