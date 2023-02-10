const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Пошук списку
const list = document.querySelector("#ingredients");

// Створимо пустий масив для додавання елемнтів списку
const listItemsArray = [];

// Перебиремо кожний елемент через forEach
ingredients.forEach((ingredient) => {
  
  // Створимо елемент списку в розмітці
  const listItem = document.createElement("li");

  // Додамо текстовий контент до кожного елементу
  listItem.textContent = ingredient;

  // Додамо клас до кожного елементу
  listItem.classList.add("item");

  // Додавання елемента в масив
  listItemsArray.push(listItem);
});

// Додамо масив з елементами в середину списка
list.append(...listItemsArray);