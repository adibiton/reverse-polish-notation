'use strict';
const calcPolishNotation = require('../index');

test('for input: "3791905691 1062248446820767468 3272971095 * 3792601801 363382544536608763 * + *" expects 1.8409223420726106e+37', () => {
				const result = calcPolishNotation('3791905691 1062248446820767468 3272971095 * 3792601801 363382544536608763 * + *');
				expect(result).toBe(1.8409223420726106e+37);
});
test('for input: "1 1 +" expects 2', () => {
				const result = calcPolishNotation('1 1 +');
				expect(result).toBe(2);
});
test('for input: "30 30 * 10 /" expects 0', () => {
				const result = calcPolishNotation('30 30 * 10 /');
				expect(result).toBe(0);
});
test('for input: "3148929283 9401834 - 2325863608 *" expects 90', () => {
				const result = calcPolishNotation('3148929283 9401834 - 2325863608 *');
				expect(result).toBe(-7302112639946175000);
});
