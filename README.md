# reverse-polish-notation
### Algorithm
read more about the algorithm at [wiki](https://en.wikipedia.org/wiki/Reverse_Polish_notation)

### Getting Started
```
npm i rev-polish-notation -S
```

Then, call from your file:

```javascript
const reversePolishNotation = require('rev-polish-notation');

console.log(reversePolishNotation('25 20 * 10 /')  // 50
```

### Remark
since I'm using [big-integer](https://github.com/peterolson/BigInteger.js) numbers larger than 9007199254740992 and smaller than -9007199254740992 are not precisely
