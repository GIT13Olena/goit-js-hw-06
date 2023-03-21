/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані 
повинен відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/
document.querySelector("body").style.backgroundColor = "#cfd1e1";

const inputNew = document.querySelector("#name-input");
const nameNew = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    nameNew.textContent = currentTarget.value.trim();
  } else {
    nameNew.textContent = "Anonymous";
  }
};

inputNew.addEventListener("input", getInputValue);
