console.log('hello, world');

console.log("select h1's", document.querySelector('h1'));
console.dir(document.querySelector('h1'));

document.querySelector('explanation');
console.log('select id', document.querySelector('#explanation'));
console.dir(document.querySelector('#explanation'));

document.querySelector('.hint');
console.log('select class', document.querySelector('.hint'));
console.dir(document.querySelector('.hint'));

document.querySelectorAll('p');
console.log('select all p elements', document.querySelectorAll('p'));

document.querySelectorAll('.example-link');
console.log('select all p elements', document.querySelectorAll('.example-link'));
