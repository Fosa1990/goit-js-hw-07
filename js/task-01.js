const allCategoriesRef = document.querySelector('#categories');
console.log(`В списке ${allCategoriesRef.children.length} категории.`);


// forEach
const array = [...allCategoriesRef.children]
array.forEach(element => console.log(`Категория: ${element.firstElementChild.innerHTML} Количество элементов: ${element.lastElementChild.children.length}`));

// // for...of
// for (let child of allCategoriesRef.children) {
//   console.log(`Категория: ${child.firstElementChild.innerHTML} Количество элементов: ${child.lastElementChild.children.length}`);
// }

// // HARDCODE XD
// //all titles
// const titleOfFirstSubListRef = document.querySelectorAll('.item')[0].firstElementChild.textContent;
// const titleOfSecondSubListRef = document.querySelectorAll('.item')[1].firstElementChild.textContent;
// const titleOfThirdSubListRef = document.querySelectorAll('.item')[2].firstElementChild.textContent;
// // all lengths
// const sumOfFirstSubCategoriesRef = document.querySelectorAll('.item')[0].lastElementChild.children.length;
// const sumOfSecondSubCategoriesRef = document.querySelectorAll('.item')[1].lastElementChild.children.length;
// const sumOfThirdSubCategoriesRef = document.querySelectorAll('.item')[2].lastElementChild.children.length;

// console.log(`Категория: ${titleOfFirstSubListRef} Количество элементов: ${sumOfFirstSubCategoriesRef}`);
// console.log(`Категория: ${titleOfSecondSubListRef} Количество элементов: ${sumOfSecondSubCategoriesRef}`);
// console.log(`Категория: ${titleOfThirdSubListRef} Количество элементов: ${sumOfThirdSubCategoriesRef}`);
