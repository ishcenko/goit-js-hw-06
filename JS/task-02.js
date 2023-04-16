const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsAll = document.querySelector('#ingredients');
const ingredientsItem = ingredients.reduce((markup, ingredients) => markup + `<li class='item>${ingredients}</li>`, '');
ingredientsAll.insertAdjacentHTML('afterbegin', ingredientsItem);

console.log(ingredientsAll);