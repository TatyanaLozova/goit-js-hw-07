// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса




const oneBtn = document.querySelector('[data-action="decrement"]');
const twoBtn = document.querySelector('[data-action="increment"]');
const counter = document.getElementById("value");

let counterValue = 0;
counter.textContent = counterValue;

twoBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
oneBtn.addEventListener("click", () => {
  counterValue > 0 ? (counterValue -= 1) : counterValue;
  counter.textContent = counterValue;
});