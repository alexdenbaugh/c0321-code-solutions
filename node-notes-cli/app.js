const fs = require('fs');
const jsonObject = require('./data.json');
// console.log(process.argv[2])
if (process.argv[2] === 'read') {
  for (const key in jsonObject.notes) {
    console.log(`${key} : ${jsonObject.notes[key]}`);
  }
} else if (process.argv[2] === 'create') {
  jsonObject.notes[`${jsonObject.nextId}`] = process.argv[3];
  jsonObject.nextId++;
  fs.writeFile('./data.json', JSON.stringify(jsonObject, null, 2), err => {
    if (err) {
      throw err;
    }
  });
} else {
  console.log('Sorry, incorrect command. Valid commands: "read", "create", "delete", "update"');
}