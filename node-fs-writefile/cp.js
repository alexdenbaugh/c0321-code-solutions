const fs = require('fs');
const [, , file1, file2] = process.argv;

fs.readFile(`./${file1}`, 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    fs.writeFile(`./${file2}`, `${data}`, err => {
      if (err) throw err;
    });
  }
});
