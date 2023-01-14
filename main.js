function add(a, b) {
   total = a + b;
   console.log(total)

} 

function subtract(a, b) {
  total = a - b;
  console.log(total)

}

function multiply(a, b) {
  total = a * b;
  console.log(total)

}

function divide(a, b) {
  total = a / b;
  console.log(total)
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  if (operator === '/' && b === 0) {
    display.value = 'bruh';
    return;
  }
 
  if (operator === '+') add(a, b);
  if (operator === '-') subtract(a, b);
  if (operator === 'x') multiply(a, b);
  if (operator === '/') divide(a, b);

  currentValue = '';
  operator = '';
}


function splitString() {
  currentValue = currentValue.split(/\/|\x|\-|\+/);
  operate(operator, currentValue[0], currentValue[1]);
}

function clearData() {
  display.value = '';
  currentValue = '';
  operator = '';
  x = 0;
  total = '';
}