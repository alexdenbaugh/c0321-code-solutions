const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((total, currentNum) => total + currentNum);
console.log('sum:', sum);

const product = numbers.reduce((total, currentNum) => total * currentNum);
console.log('product:', product);

const balance = account.reduce((total, currentNum) => {
  if (currentNum.type === 'deposit') {
    return total + currentNum.amount;
  } else {
    return total - currentNum.amount;
  }
}, 0);
console.log('balance:', balance);

const composite = traits.reduce((finObject, index) => {
  return Object.assign(finObject, index);
});
console.log('composite:', composite);
