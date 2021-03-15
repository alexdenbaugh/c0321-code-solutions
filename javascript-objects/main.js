var student = {
  firstName: 'Alex',
  lastName: 'Denbaugh',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('My name is:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Cru Field Staff Intern';
console.log('I live in Irvine:', student.livesInIrvine);
console.log('My previous occupation:', student.previousOccupation);

var vehicle = {
  make: 'Ford',
  model: 'F-150',
  year: 2002
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log("My car's color is:", vehicle['color']);
console.log('Convertible?', vehicle['isConvertible']);

console.log('My vehicle:', vehicle);

var pet = {
  name: 'tbd, we literally got a bird today',
  type: 'bird'
};

delete pet.name;
delete pet.type;
console.log('Value of Pet:', pet);
