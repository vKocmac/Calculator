"use strict"

function add(a, b) {
  result = a + b;
  return result
}

function substract(a, b) {
  result = a - b;
  return result
}

function multiply(a, b) {
  result = a * b
  return result
}

function divide(a, b) {
  result = a / b
  return result
}

function sqrt(a) {
  result = Math.sqrt(a);
  return result
}

function operate(a, b, operator) {
  return operator(a, b)
  return result
}

let leftPart = 0;
let rightPart = 0;
let oper;
let functionOperator;
let result = 0;
let displayValueArray = [];
const digits = document.querySelectorAll(".btn");
const displayValue = document.querySelector(".screen h1");
const displayValuePast = document.querySelector(".screen h2");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
let index;

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    oper = operator.innerHTML;
    displayValueArray.push(operator.innerHTML);
    displayValue.textContent = displayValueArray.join("");
    const equation = displayValue.textContent;
    for (let i = 0; i <= displayValueArray.length; i++) {
      if (displayValueArray.includes("+")) {
        index = displayValueArray.indexOf("+")
        functionOperator = add;
      } else if (displayValueArray.includes("−")) {
        functionOperator = substract;
        index = displayValueArray.indexOf("−")
      } else if (displayValueArray.includes("÷")) {
        functionOperator = divide;
        index = displayValueArray.indexOf("÷")
      } else if (displayValueArray.includes("×")) {
        functionOperator = multiply;
        index = displayValueArray.indexOf("×")
      } else if (displayValueArray.includes("√")) {
        functionOperator = sqrt;
        index = displayValueArray.indexOf("√")
      }
    }


    leftPart = Number(equation.slice(0, index));
    console.log(leftPart);
    rightPart = Number(equation.slice(index + 1, -1));
    console.log(rightPart);
    console.log(index);
    if (displayValueArray.includes("=")) {
      // index = displayValueArray.indexOf("=")
      console.log(leftPart, rightPart)
      operate(leftPart, rightPart, functionOperator);
      displayValue.textContent = result;
      displayValuePast.textContent = displayValueArray.join("");
    }
  });
});

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    displayValueArray.push(digit.innerHTML);
    displayValue.textContent = displayValueArray.join("");
  });
});

clear.addEventListener("click",()=>{
  displayValueArray = [];
  displayValuePast.textContent = "";
  displayValue.textContent = 0;

})
