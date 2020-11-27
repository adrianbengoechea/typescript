'use strict';

var field1 = document.getElementById('first')! as HTMLInputElement;
var field2 = document.getElementById('second')! as HTMLInputElement;
var submit = document.getElementById('submit');

var add = (p1: number, p2: number) => {
  return  p1 + p2;
}

submit.addEventListener('click', e => {
  console.log(add(+field1.value, +field2.value));
});