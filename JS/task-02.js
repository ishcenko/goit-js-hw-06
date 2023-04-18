const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsAll = ingredients.map((ingredient) => {
  let elIngredients = document.createElement('li');
  elIngredients.textContent = ingredient;
  elIngredients.classList.add('item');
  console.log(elIngredients);
  return elIngredients
});

console.log(ingredientsAll);
const ingredientList = document.querySelector('#ingredients');
console.log(ingredientList);
ingredientList.append(...ingredientsAll);
