// Напиши скрипт, который для каждого элемента массива
// ingredients создаст отдельный li, после чего вставит все li
// за одну операцию в список ul.ingredients.Для создания DOM -
// узлов используй document.createElement().

// Ingredients array
const ingredients = ["Картошка","Грибы","Чеснок","Помидоры","Зелень","Приправы",];


const ingredientsList = document.getElementById("ingredients");
console.log(ingredientsList);

const ingredientsItems = ingredients.map((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  return item;
});

// Добавление лишек в узел ul
ingredientsList.append(...ingredientsItems);