var num1 = 12;
var num2 = 7;
var num3 = -43;

var maximumValue = Math.max(num1, num2, num3);
console.log('Max value is:', maximumValue);

var heros = ['Spider-man', 'Hulk', 'Black Panther', 'The Flash'];
var randomNumber = Math.random();

randomNumber = randomNumber * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random Index is:', randomIndex);

var randomHero = heros[randomIndex];
console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis'
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'A Series of Unfortunate Events: The Reptile Room',
    author: 'Lemony Snicket'
  }
];

var lastBook = library.pop();
console.log('Last Book is:', lastBook);

var firstBook = library.shift();
console.log('First Book', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('New Library', library);

var fullName = 'Alex Denbaugh';
var firstAndLastName = fullName.split(' ');
console.log('First and Last Name:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say My Name:', sayMyName);
