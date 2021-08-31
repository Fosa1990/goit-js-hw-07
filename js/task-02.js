const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

// //Mapped
const addIngredient = (array) => array.map(element => {
  const itemOfListEl = document.createElement('li')
  itemOfListEl.textContent = element
  return itemOfListEl
});

ingredientsRef.append(...addIngredient(ingredients))

// //Reduced, easier like that :)
// const reducedArrayOfIngredients = ingredients.reduce((acc, elem) =>  acc + `<li>${elem}</li>` , '')

// IngredientsRef.insertAdjacentHTML('beforeend', reducedArrayOfIngredients)
