function ExampleConstructor() {}
console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newObject = new ExampleConstructor();
console.log('value of newObject:', newObject);

var isAnInstance = newObject instanceof ExampleConstructor;
console.log('newObject is an instance of ExampleConstructor?', isAnInstance);
