const fs = require('fs');
const data = process.argv[2];
fs.writeFile('./note.txt', `${data}\n`, err => {
  if (err) {
    throw err;
  }
});
