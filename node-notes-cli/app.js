const jsonObject = require('./data.json');
// console.log(process.argv[2])
if (process.argv[2] === 'read') {
  for (const key in jsonObject.notes) {
    console.log(`${key} : ${jsonObject.notes[key]}`);
  }
} else {
  console.log('Sorry, incorrect command');
}
