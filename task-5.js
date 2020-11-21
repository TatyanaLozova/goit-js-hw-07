// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой, в спане
// должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
//     <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
// ________________________
// const nameInput= document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");

// nameInput.addEventListener("input", (event) => {
//   hello.textContent =
//     event.target.value === "" ? "незнайомець" : event.target.value;
// });


const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', event => {
  if (event.currentTarget.value !== '') {
    nameOutputRef.textContent = event.currentTarget.value;
  } else {
    nameOutputRef.textContent = 'незнакомец';
  }
});