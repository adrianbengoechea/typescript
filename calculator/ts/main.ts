(function(){
  'use strict';

  /* GET ALL BUTTONS */
  let output = document.getElementById('calc-output-box') as HTMLButtonElement;
  let reset = document.querySelector('button.btn[data-value="reset"]') as HTMLButtonElement;
  let symbols = {
    dot: '.',
    add: '+',
    remove: '-',
    divide: '÷',
    invert: '+/-',
    multiply: 'x',
    percentage: '%',
    equal: '='
  }
  let numbers = {
    one: 1,
    two: 2,
    three: 3,
    fourth: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  }
  
  
  /* SET ALL EVENTS */
  Object.keys(symbols).forEach((key, value) => {
    let element = symbols.key
    .addEventListener('click', function(){
      writeNumberInOutput(value.toString());
    });
  });

  Object.keys(numbers).forEach((key, value) => {
    document.querySelector(`button.btn[data-value="${value}"]`).addEventListener('click', function(){
      writeNumberInOutput(value.toString());
    });
  });
  
  reset.addEventListener('click', () => {
    clearOutput();
  });
  
  
  /* DEFINE ALL FUNCTIONS */
  const writeInOperation = (p1: number) => {
  
  }
  
  const writeNumberInOutput = (p1: string) => {
    let content = output.textContent;
    output.textContent = content + p1;
    return; 
  };
  
  const clearOutput = () => {
    output.textContent = '';
  }
})();