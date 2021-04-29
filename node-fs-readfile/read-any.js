const fs = require('fs');
const [, , fileToRead] = process.argv;
fs.readFile(`./${fileToRead}`, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
