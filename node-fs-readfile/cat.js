const fs = require('fs');

// let logArray = []
// for (let i = 2; i < process.argv.length; i++) {
//   logArray.push('')
// }

for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(`./${process.argv[i]}`, 'utf8', (err, data) => {
    // if (err) {
    console.log(err);
    // } else {
    //   logArray[i-2] = data;
    // }
    // if (i === process.argv.length - 1) {
    //   console.log(...logArray)
    // }
  });
}
