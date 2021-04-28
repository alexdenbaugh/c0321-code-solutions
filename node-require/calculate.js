const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let [, , x, operation, y] = process.argv;

x = Number(x);
y = Number(y);

if (operation === 'plus') {
  console.log('result:', add(x, y));
} else if (operation === 'minus') {
  console.log('result:', subtract(x, y));
} else if (operation === 'times') {
  console.log('result:', multiply(x, y));
} else if (operation === 'over') {
  console.log('result:', divide(x, y));
}
