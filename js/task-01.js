const allCategoriesRef = document.querySelector('#categories');
console.log(`В списке ${allCategoriesRef.children.length} категории.`);

const array = [...allCategoriesRef.children]
array.forEach(element => console.log(`Категория: ${element.firstElementChild.innerHTML} Количество элементов: ${element.lastElementChild.children.length}`));
