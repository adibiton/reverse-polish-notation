'use strict';
const bigInt = require('big-integer');

const opFunction = {
  '-': (a, b) => bigInt(a - b),
  '+': (a, b) => bigInt(a + b),
  '*': (a, b) => bigInt(a * b),
  '/': (a, b) => bigInt(Math.floor(a / b)),
}
function calculate(s) {
  let stack = [];
  breakToTokens(s).map(c => {
    
    if (/[-+*/]/.test(c)) {
      c = c.trim();
      let first = stack.pop();
      let second = stack.pop();
      stack.push(opFunction[c](second, first));
    } else {
      stack.push(bigInt(c));
    }
  });
  return Math.floor(stack[0]);
}

function breakToTokens(s) {
  return s.split(' ');
}

module.exports = calculate;
