var booksArray = [
  {
    isbn: '12340987324734',
    title: 'The Best Book',
    author: 'Dwight K. Schrute'
  },
  {
    isbn: '97862340981234',
    title: 'The Better Best Book',
    author: 'Jim Halpert'
  },
  {
    isbn: '09872340982345',
    title: 'Dwights Book Sucks',
    author: 'Michael Scott'
  }
];

console.log('array of books:', booksArray, 'is of type:', typeof (booksArray));

var jsonString = JSON.stringify(booksArray);
console.log('json string:', jsonString, 'is of type:', typeof (jsonString));

var jsonStudent = '{"id":12,"name":"Alex"}';
console.log('json styled string of student:', jsonStudent, 'is type of:', typeof (jsonStudent));

var jsonObject = JSON.parse(jsonStudent);
console.log('json string parsed to object:', jsonObject, 'is type of:', typeof (jsonObject));
