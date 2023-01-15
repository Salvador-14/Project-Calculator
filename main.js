function add(a, b) {
   total = a + b;
} 

function subtract(a, b) {
  total = a - b;
}

function multiply(a, b) {
  total = a * b;
}

function divide(a, b) {
  if (b === 0) {
    display.value = 'bruh';
    return;
  }
  total = a / b;
}

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);

  if (operator === '+') add(a, b);
  if (operator === '-') subtract(a, b);
  if (operator === 'x') multiply(a, b);
  if (operator === '/') divide(a, b);

}

function clearData() {
  display.value = '';
  operation = [];
  noExtraSigns = '';
  total = '';
}

function spliceArray(array) {
  let currentOp;

  let x = 0;
  while (array.length > 0) {

    if (x === 0) {
      currentOp = array.splice(0, 3)
      operate(currentOp[0], currentOp[1], currentOp[2]);
    }

    currentOp = array.splice(0, 2)
    operate(total, currentOp[0], currentOp[1])

    x++;
  }
}