"use strict"

function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(a, b, operator) {
  return operator(a, b)
}

const displayValueArray = [];
const digits = document.querySelectorAll(".btn");
const displayValue = document.querySelector(".screen h1");
digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    displayValueArray.push(digit.innerHTML);
    displayValue.textContent = displayValueArray.join("");
  });
});
