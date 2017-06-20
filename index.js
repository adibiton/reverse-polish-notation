'use strict';
const bigInt = require('big-integer');

const opFunction = {
  '-': (a, b) => a - b,
  '+': (a, b) => bigInt(a + b),
  '*': (a, b) => bigInt(a * b),
  '/': (a, b) => Math.floor(a / b),
}
function calculate(s) {
  let stack = [];
  breakToTokens(s).map(c => {
    
    if (/[-+*/]/.test(c)) {
      c = c.trim();
      //console.log(opFunction[c]);
      let x = stack.pop();
      let y = stack.pop();
//      console.log(`op ${c}, first ${y}, second ${x}`);
      stack.push(opFunction[c](y, x));
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
//calculate(process.argv[2]);
