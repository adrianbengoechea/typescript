(function(){



'use strict';

/* GET ALL BUTTONS */
const output_actual = document.getElementById('calc-output-box').querySelector('.actual') as HTMLSpanElement;
const output_full = document.getElementById('calc-output-box').querySelector('.full') as HTMLElement;

const result = document.querySelector('[data-result="true"]') as HTMLButtonElement;
const clear = document.querySelector('[data-clear="true"]') as HTMLButtonElement;
const del = document.querySelector('[data-del="true"]') as HTMLButtonElement;

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');

clear.addEventListener('click', function(){
  ClearOutput();
  console.log('CLEAR');
});

/* SET EVENT LISTENERS */
del.addEventListener('click', function(){
  DelNumberInOutputActual();
  console.log('DEL');
});
result.addEventListener('click', function(){
  console.log('RESULT');
});
numbers.forEach(item => {
  item.addEventListener("click", function(){
    const value = this.getAttribute("data-number");
    writeNumberInOutputActual(value);
    console.log(value);
  })
});
operators.forEach(item => {
  item.addEventListener("click", function(){
    const value = this.getAttribute("data-operator");
    console.log(value);
  })
});




/* CREATE FUNCTIONS */
function writeNumberInOutputActual (p1: string) {
  const content = output_actual.textContent;
  output_actual.textContent = content + p1;
  return; 
};

function DelNumberInOutputActual () {
  const content = output_actual.textContent.slice(0, -1);
  output_actual.textContent = content;
  return; 
};

function ClearOutput () {
  output_actual.textContent = '';
  output_full.textContent = '';
  return; 
};



})();
