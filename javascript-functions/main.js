function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('5 minutes is:', convertMinutesToSeconds(5), 'seconds.');

function greet(name) {
  return name + ', I am your father...';
}

console.log(greet('Luke'));

function getArea(width, height) {
  return width * height;
}

console.log('The area of the rectangle is', getArea(4, 3));

function getFirstName(person) {
  return person.firstName;
}

console.log('Person\'s first name is:', getFirstName({ firstName: 'James', lastName: 'Bond' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('The last element in the array is:', getLastElement(['propane', 'and', 'propane', 'accessories']));
