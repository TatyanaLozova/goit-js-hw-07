// Напиши скрипт, который выполнит следующие операции:

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// Получится 'В списке 3 категории.'


const allCategories = document.querySelectorAll(".item");
console.log(`В списке ${allCategories.length} категории`);



// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например, для первой категории получится:
// Категория: Животные
// Количество элементов: 

allCategories.forEach((el) => {
  const titleCategories = el.querySelector("h2").textContent;
  const listCategories = el.querySelectorAll("li");

  console.log(`Категория: ${titleCategories}`);
  console.log(`Количество элементов: ${listCategories.length}`);
});
