var width = 12;
var height = 7;

var area = width * height;
console.log('Area is:', area);
console.log('Area is type:', typeof area);

var bill = 450;
var payment = 550;

var change = payment - bill;
console.log('Change is:', change);
console.log('Change is type:', typeof change);

var quizzes = 50;
var midterm = 98;
var final = 195;

var grade = (quizzes + midterm + final) / 3;
console.log('Grade is:', grade);
console.log('Grade is type:', typeof grade);

var firstName = 'Alex';
var lastName = 'Denbaugh';

var fullName = firstName + ' ' + lastName;
console.log('My name is:', fullName);
console.log('fullName is type:', typeof fullName);

var pH = 12;

var isAcidic = pH < 7;
console.log('pH is Acidic:', isAcidic);
console.log('isAcidic is type:', typeof isAcidic);

var headCount = 267;

var isSparta = headCount === 300;
console.log('This is Sparta?!:', isSparta);
console.log('isSparta is type:', typeof isSparta);

var motto = fullName;

motto = fullName + ' is the GOAT';
console.log('Motto is:', motto);
console.log('Motto is type:', typeof motto);
