const takeAChance = require('./take-a-chance');
const promiseObject = takeAChance('Alex');
promiseObject.then(value => console.log(value)
).catch(error => console.log(error.message));
